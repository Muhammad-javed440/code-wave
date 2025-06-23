import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(request: Request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return new NextResponse("Missing email or password", { status: 400 });
    }

    // Explicitly select the password field, which is hidden by default
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return new NextResponse("Invalid credentials", { status: 401 });
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (!passwordsMatch) {
      return new NextResponse("Invalid credentials", { status: 401 });
    }

    // Here you would typically create a session or JWT.
    // For now, we'll return the user object without the password.
    const { password: _, ...userWithoutPassword } = user.toObject();

    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error('LOGIN_ERROR', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 