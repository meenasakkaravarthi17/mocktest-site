"use client";

import { useEffect, useState } from "react";

export default function ExamPage({ params }) {
  const [allowed, setAllowed] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      window.location.href = "/login";
      return;
    }

    setAllowed(true);
  }, []);

  useEffect(() => {
    if (!allowed) return;

    async function loadQuestions() {
      try {
        const res = await fetch(`/api/questions/${params.subject}/${params.exam}`);
        const data = await res.json();
        setQuestions(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadQuestions();
  }, [allowed, params.subject, params.exam]);

  if (!allowed) {
    return <p style={{ textAlign: "center", marginTop: "100px" }}>Checking access...</p>;
  }

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "100px" }}>Loading questions...</p>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <h1>
        {params.subject} - Exam {params.exam}
      </h1>

      {questions.length === 0 ? (
        <p>No questions found for this exam.</p>
      ) : (
        questions.map((q, index) => (
          <div
            key={q._id}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              marginBottom: "20px",
            }}
          >
            <h3>
              {index + 1}. {q.questionText}
            </h3>

            <div><input type="radio" name={`q-${q._id}`} /> A. {q.optionA}</div>
            <div><input type="radio" name={`q-${q._id}`} /> B. {q.optionB}</div>
            <div><input type="radio" name={`q-${q._id}`} /> C. {q.optionC}</div>
            <div><input type="radio" name={`q-${q._id}`} /> D. {q.optionD}</div>
          </div>
        ))
      )}
    </div>
  );
}
