import { PrismaClient } from "@/lib/generated/prisma-nextjs";
import { notFound } from "next/navigation";
import Link from "next/link";

const prisma = new PrismaClient();

interface TranscriptPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TranscriptPage({ params }: TranscriptPageProps) {
  const { id } = await params;
  const leadId = parseInt(id);
  
  if (isNaN(leadId)) {
    notFound();
  }

  const lead = await prisma.leads.findUnique({
    where: { id: leadId },
  });

  if (!lead) {
    notFound();
  }

  const formatTranscript = (transcript: string | null) => {
    if (!transcript) return (
      <div className="text-center text-gray-500 py-8">
        No transcript available
      </div>
    );
    
    // Split by common conversation markers and format
    const lines = transcript.split(/\n|\r\n/).filter(line => line.trim());
    
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      
      // Check if line starts with common speaker indicators
      if (trimmedLine.match(/^(User|Assistant|Bot|Agent|Customer):/i)) {
        const [speaker, ...messageParts] = trimmedLine.split(':');
        const message = messageParts.join(':').trim();
        
        const isUser = speaker.toLowerCase().includes('user') || speaker.toLowerCase().includes('customer');
        
        // Determine display name based on speaker type
        let displayName = speaker;
        if (isUser) {
          displayName = lead.first_name || 'User';
        } else if (speaker.toLowerCase().includes('bot') || speaker.toLowerCase().includes('assistant') || speaker.toLowerCase().includes('agent')) {
          displayName = 'Bot';
        }
        
        return (
          <div key={index} className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[66%] ${isUser ? 'ml-[33%]' : 'mr-[33%]'}`}>
              <div className={`p-3 rounded-2xl shadow-sm ${
                isUser 
                  ? 'bg-blue-500 text-white rounded-br-md' 
                  : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md'
              }`}>
                <div className={`text-xs mb-1 ${
                  isUser ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {displayName}
                </div>
                <div className="text-sm leading-relaxed">{message}</div>
              </div>
            </div>
          </div>
        );
      }
      
      // Regular message without speaker indicator - treat as system message
      return (
        <div key={index} className="flex justify-center mb-3">
          <div className="max-w-[80%] px-3 py-2 bg-gray-100 text-gray-600 text-xs rounded-full text-center">
            {trimmedLine}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/dashboard" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            ← Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            Transcript for {lead.first_name} {lead.last_name}
          </h1>
          <div className="mt-2 text-sm text-gray-600">
            Lead ID: {lead.id} | Created: {new Date(lead.created_at).toLocaleDateString()}
          </div>
        </div>

        {/* Lead Summary Card */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Lead Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <span className="text-sm font-medium text-gray-500">Name:</span>
              <p className="text-gray-900">{lead.first_name} {lead.last_name}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Email:</span>
              <p className="text-gray-900">{lead.email || 'N/A'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Phone:</span>
              <p className="text-gray-900">{lead.phone || 'N/A'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Postal Code:</span>
              <p className="text-gray-900">{lead.postal_code || 'N/A'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Pain/Discomfort:</span>
              <p className="text-gray-900">{lead.pain_discomfort || 'N/A'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Missing Teeth:</span>
              <p className="text-gray-900">{lead.numberOfMissingTeeth || 'N/A'}</p>
            </div>
          </div>
        </div>

        {/* Details captured by bot */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Details captured by bot</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <span className="text-sm font-medium text-gray-500">Number of Missing Teeth:</span>
              <p className="text-gray-900">{lead.numberOfMissingTeeth ?? '-'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Decayed or Rotten Teeth Present:</span>
              <p className="text-gray-900">
                {lead.isDecayedOrRotTeethPresent === null || lead.isDecayedOrRotTeethPresent === undefined 
                  ? '-' 
                  : lead.isDecayedOrRotTeethPresent ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Applicable for BCBS PPO Insurance:</span>
              <p className="text-gray-900">
                {lead.isUserApplicableForBcbsPpoInsurance === null || lead.isUserApplicableForBcbsPpoInsurance === undefined 
                  ? '-' 
                  : lead.isUserApplicableForBcbsPpoInsurance ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">User Uploading Cards:</span>
              <p className="text-gray-900">
                {lead.isUserUploadingCards === null || lead.isUserUploadingCards === undefined 
                  ? '-' 
                  : lead.isUserUploadingCards ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Manual Consultation Required:</span>
              <p className="text-gray-900">
                {lead.isManualConsultationRequired === null || lead.isManualConsultationRequired === undefined 
                  ? '-' 
                  : lead.isManualConsultationRequired ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Insurance Card Valid:</span>
              <p className="text-gray-900">
                {lead.isInsuranceCardValid === null || lead.isInsuranceCardValid === undefined 
                  ? '-' 
                  : lead.isInsuranceCardValid ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">User Insurance Card:</span>
              <p className="text-gray-900">{lead.userInsuranceCard || '-'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Interested in Cash Options:</span>
              <p className="text-gray-900">
                {lead.isUserInterestedInCashOptions === null || lead.isUserInterestedInCashOptions === undefined 
                  ? '-' 
                  : lead.isUserInterestedInCashOptions ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Okay with Price:</span>
              <p className="text-gray-900">
                {lead.okayWithPrice === null || lead.okayWithPrice === undefined 
                  ? '-' 
                  : lead.okayWithPrice ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Preferred Time:</span>
              <p className="text-gray-900">{lead.preferredTime || '-'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Preferred Day:</span>
              <p className="text-gray-900">{lead.preferredDay || '-'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Human Intervention Needed:</span>
              <p className="text-gray-900">
                {lead.humanInterventionNeeded === null || lead.humanInterventionNeeded === undefined 
                  ? '-' 
                  : lead.humanInterventionNeeded ? 'Yes' : 'No'}
              </p>
            </div>
          </div>
        </div>

        {/* Transcript */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Conversation Transcript</h2>
          </div>
          <div className="bg-gray-50 min-h-[400px] p-4" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}>
            {formatTranscript(lead.transcript)}
          </div>
        </div>
      </div>
    </div>
  );
}
