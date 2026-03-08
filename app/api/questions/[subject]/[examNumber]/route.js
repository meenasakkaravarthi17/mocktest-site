export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import connectDB from "../../../../../lib/mongodb";
import Question from "../../../../../models/Question";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { subject, examNumber } = params;

    const questions = await Question.find({
      subject: subject,
      examNumber: Number(examNumber),
    });

    return NextResponse.json(questions, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Server error" },
      { status: 500 }
    );
  }
}
