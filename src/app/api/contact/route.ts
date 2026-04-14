import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, problem, message } = body;

    // Validate required fields
    if (!name || !phone || !problem) {
      return NextResponse.json(
        { error: "Name, phone, and problem are required" },
        { status: 400 }
      );
    }

    // Log the contact form submission
    console.log("=== New Contact Form Submission ===");
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Problem:", problem);
    console.log("Message:", message || "No message provided");
    console.log("Time:", new Date().toISOString());
    console.log("===================================");

    // In production, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send WhatsApp notification
    // For now, we just log and return success

    return NextResponse.json({
      success: true,
      message: "Your message has been received. We will contact you soon!",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
