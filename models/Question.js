
import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    examNumber: {
      type: Number,
      required: true,
    },
    questionText: {
      type: String,
      required: true,
    },
    optionA: {
      type: String,
      required: true,
    },
    optionB: {
      type: String,
      required: true,
    },
    optionC: {
      type: String,
      required: true,
    },
    optionD: {
      type: String,
      required: true,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Question ||
  mongoose.model("Question", QuestionSchema);
