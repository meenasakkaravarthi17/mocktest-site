export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import connectDB from "../../../lib/mongodb";
import Question from "../../../models/Question";
import Attempt from "../../../models/Attempt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const { userEmail, subject, examNumber, answers } = await req.json();

    const questions = await Question.find({
      subject,
      examNumber: Number(examNumber),
    });

    let score = 0;

    questions.forEach((q) => {
      const userAnswer = answers[q._id];
      if (userAnswer === q.correctAnswer) {
        score++;
      }
    });

    const attempt = await Attempt.create({
      userEmail,
      subject,
      examNumber: Number(examNumber),
      answers,
      score,
      totalQuestions: questions.length,
    });

    return NextResponse.json(
      {
        message: "Exam submitted successfully",
        score,
        totalQuestions: questions.length,
        attemptId: attempt._id,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Server error" },
      { status: 500 }
    );
  }
}
