import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma-nextjs";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const leads = await prisma.leads.findMany({
      orderBy: {
        created_at: "desc",
      },
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Create new lead with the provided data
    const newLead = await prisma.leads.create({
      data: {
        ...body,
        // Set default values for boolean fields if not provided
        isDecayedOrRotTeethPresent: body.isDecayedOrRotTeethPresent ?? false,
        isUserApplicableForBcbsPpoInsurance: body.isUserApplicableForBcbsPpoInsurance ?? false,
        isUserUploadingCards: body.isUserUploadingCards ?? false,
        isManualConsultationRequired: body.isManualConsultationRequired ?? false,
        isInsuranceCardValid: body.isInsuranceCardValid ?? false,
        isUserInterestedInCashOptions: body.isUserInterestedInCashOptions ?? false,
        okayWithPrice: body.okayWithPrice ?? false,
        humanInterventionNeeded: body.humanInterventionNeeded ?? false,
        numberOfMissingTeeth: body.numberOfMissingTeeth ?? 0,
        isAiTagOn: body.isAiTagOn ?? true,
      },
    });

    return NextResponse.json(newLead);
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { error: "Failed to create lead" },
      { status: 500 }
    );
  }
}
