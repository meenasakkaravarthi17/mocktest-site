export const runtime = "nodejs";
export const dynamic = "force-dynamic";
import connectDB from "../../../lib/mongodb";
import User from "../../../models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
