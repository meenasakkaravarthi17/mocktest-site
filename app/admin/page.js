"use client";

import { useState } from "react";

export default function AdminPage() {
  const [form, setForm] = useState({
    subject: "",
    examNumber: "",
    questionText: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/admin/add-question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message);

    if (res.ok) {
      setForm({
        subject: "",
        examNumber: "",
        questionText: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: "",
      });
    }
  };

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", padding: "20px" }}>
      <h1>Add Question</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <input
          type="text"
          name="subject"
          placeholder="Subject (example: Maths)"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="examNumber"
          placeholder="Exam Number (example: 1)"
          value={form.examNumber}
          onChange={handleChange}
          required
        />

        <textarea
          name="questionText"
          placeholder="Question"
          value={form.questionText}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="optionA"
          placeholder="Option A"
          value={form.optionA}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="optionB"
          placeholder="Option B"
          value={form.optionB}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="optionC"
          placeholder="Option C"
          value={form.optionC}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="optionD"
          placeholder="Option D"
          value={form.optionD}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="correctAnswer"
          placeholder="Correct Answer (A / B / C / D)"
          value={form.correctAnswer}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Save Question
        </button>
      </form>
    </div>
  );
}
