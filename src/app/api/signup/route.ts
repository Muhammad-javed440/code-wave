import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(request: Request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return new NextResponse("Missing name, email, or password", {
        status: 400,
      });
    }

    const exist = await User.findOne({ email });

    if (exist) {
      return new NextResponse("User already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const { password: _, ...userWithoutPassword } = user.toObject();

    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error("SIGNUP_ERROR", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
} 