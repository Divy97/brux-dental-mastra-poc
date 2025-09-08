"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface Lead {
  id: number;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  phone: string | null;
  postal_code: string | null;
  pain_discomfort: string | null;
  numberOfMissingTeeth: number | null;
  created_at: string;
  transcript: string | null;
  humanInterventionNeeded: boolean | null;
  isManualConsultationRequired: boolean | null;
  isAiTagOn: boolean | null;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

export default function ChatDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchLeads = async () => {
    try {
      const response = await fetch(`/api/leads`);
      if (!response.ok) {
        throw new Error("Failed to fetch leads");
      }
      const data = await response.json();
      setLeads(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleLeadSelect = (lead: Lead) => {
    setSelectedLead(lead);
    // Parse existing transcript if available
    if (lead.transcript) {
      try {
        const parsedMessages = parseTranscript(lead.transcript);
        setMessages(parsedMessages);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        // If parsing fails, treat as single message
        setMessages([
          {
            id: '1',
            text: lead.transcript,
            sender: 'user',
            timestamp: new Date(lead.created_at)
          }
        ]);
      }
    } else {
      setMessages([]);
    }
  };

  const parseTranscript = (transcript: string): Message[] => {
    // Parse transcript based on "bot:" and "user:" prefixes
    const lines = transcript.split('\n').filter(line => line.trim());
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      let sender: 'user' | 'agent' = 'user';
      let text = trimmedLine;
      
      if (trimmedLine.toLowerCase().startsWith('bot:')) {
        sender = 'agent';
        text = trimmedLine.substring(4).trim(); // Remove "bot:" prefix
      } else if (trimmedLine.toLowerCase().startsWith('user:')) {
        sender = 'user';
        text = trimmedLine.substring(5).trim(); // Remove "user:" prefix
      }
      
      return {
        id: (index + 1).toString(),
        text: text,
        sender: sender,
        timestamp: new Date()
      };
    });
  };

  const handleToggleAI = async (leadId: number, currentState: boolean) => {
    try {
      const response = await fetch(`/api/leads/${leadId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isAiTagOn: !currentState
        }),
      });

      if (response.ok) {
        // Update the leads state
        setLeads(prev => prev.map(lead => 
          lead.id === leadId 
            ? { ...lead, isAiTagOn: !currentState }
            : lead
        ));
        
        // Update selected lead if it's the current one
        if (selectedLead?.id === leadId) {
          setSelectedLead(prev => prev ? { ...prev, isAiTagOn: !currentState } : null);
        }
      }
    } catch (error) {
      console.error('Error toggling AI:', error);
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedLead) return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'agent',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, message]);
    
    // Call webhook API when AI tag is disabled
    if (!selectedLead.isAiTagOn) {
      try {
        await fetch(`/api/webhooks/admin/message`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            msg: newMessage,
            leadId: selectedLead.id
          }),
        });
      } catch (error) {
        console.error('Error calling webhook:', error);
        // You might want to show a user-friendly error message here
      }
    }
    
    setNewMessage("");
    
    // Here you would typically save the message to the database
    // For now, we'll just update the local state
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getLeadInitials = (lead: Lead) => {
    return (lead.first_name?.[0] || '') + (lead.last_name?.[0] || '');
  };

  const getLeadName = (lead: Lead) => {
    return `${lead.first_name || ''} ${lead.last_name || ''}`.trim() || 'Unknown User';
  };

  const getStatusColor = (lead: Lead) => {
    if (lead.humanInterventionNeeded) return 'bg-red-500';
    if (lead.isManualConsultationRequired) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Left Sidebar - Leads List */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900">Leads Chat</h1>
            <button
              onClick={() => router.push('/dashboard')}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {leads.length} leads available
          </p>
        </div>

        {/* Leads List */}
        <div className="flex-1 overflow-y-auto">
          {leads.map((lead) => (
            <div
              key={lead.id}
              onClick={() => handleLeadSelect(lead)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedLead?.id === lead.id ? 'bg-blue-50 border-blue-200' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-white">
                      {getLeadInitials(lead)}
                    </span>
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(lead)}`}></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {getLeadName(lead)}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {lead.email || lead.phone || 'No contact info'}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedLead ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-white border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-white">
                      {getLeadInitials(selectedLead)}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {getLeadName(selectedLead)}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {selectedLead.email || selectedLead.phone || 'No contact info'}
                    </p>
                  </div>
                </div>
                
                {/* AI Toggle */}
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">AI</span>
                    <button
                      onClick={() => handleToggleAI(selectedLead.id, selectedLead.isAiTagOn ?? true)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                        selectedLead.isAiTagOn ?? true ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          selectedLead.isAiTagOn ?? true ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                    <span className={`text-xs ${selectedLead.isAiTagOn ?? true ? 'text-blue-600' : 'text-gray-500'}`}>
                      {selectedLead.isAiTagOn ?? true ? 'ON' : 'OFF'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500 mt-8">
                  <p>No messages yet. Start a conversation!</p>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'agent' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'agent'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'agent' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              {selectedLead.isAiTagOn ?? true ? (
                <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-2 text-blue-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">
                      AI is handling this conversation. Turn off AI to send manual messages.
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Send
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select a lead to start chatting</h3>
              <p className="text-gray-500">Choose a lead from the sidebar to view and continue the conversation.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
