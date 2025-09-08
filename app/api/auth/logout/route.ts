import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(_request: NextRequest) {
  try {
    // Create response with logout success message
    const response = NextResponse.json(
      { message: "Logout successful", success: true },
      { status: 200 }
    );

    // Clear any authentication cookies if they exist
    // Since the current implementation doesn't use cookies, we'll prepare for future enhancement
    // response.cookies.set("auth-token", "", {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    //   maxAge: 0, // This expires the cookie immediately
    //   path: "/",
    // });

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
