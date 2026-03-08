export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import connectDB from "../../../../lib/mongodb";
import Question from "../../../../models/Question";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const {
      subject,
      examNumber,
      questionText,
      optionA,
      optionB,
      optionC,
      optionD,
      correctAnswer,
    } = await req.json();

    if (
      !subject ||
      !examNumber ||
      !questionText ||
      !optionA ||
      !optionB ||
      !optionC ||
      !optionD ||
      !correctAnswer
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await Question.create({
      subject,
      examNumber: Number(examNumber),
      questionText,
      optionA,
      optionB,
      optionC,
      optionD,
      correctAnswer,
    });

    return NextResponse.json(
      { message: "Question added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Server error" },
      { status: 500 }
    );
  }
}
