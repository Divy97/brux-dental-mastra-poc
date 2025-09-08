import { NextRequest, NextResponse } from "next/server";

const VALID_EMAIL = "admin@raftlabs.com";
const VALID_PASSWORD = "Admin@123";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check credentials
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      return NextResponse.json(
        { message: "Login successful", success: true },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
