"use client";

import { useEffect, useState } from "react";

export default function ExamPage({ params }) {
  const [allowed, setAllowed] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("userEmail");

    if (!token || !email) {
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

  const handleOptionChange = (questionId, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleSubmit = async () => {
    const userEmail = localStorage.getItem("userEmail");

    const res = await fetch("/api/submit-exam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail,
        subject: params.subject,
        examNumber: params.exam,
        answers,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      window.location.href = `/result/${data.attemptId}`;
    } else {
      alert(data.message);
    }
  };

  if (!allowed) {
    return <p style={{ textAlign: "center", marginTop: "100px" }}>Checking access...</p>;
  }

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "100px" }}>Loading questions...</p>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <h1>{params.subject} - Exam {params.exam}</h1>

      {questions.length === 0 ? (
        <p>No questions found for this exam.</p>
      ) : (
        <>
          {questions.map((q, index) => (
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
              <h3>{index + 1}. {q.questionText}</h3>

              <div>
                <input
                  type="radio"
                  name={`q-${q._id}`}
                  checked={answers[q._id] === "A"}
                  onChange={() => handleOptionChange(q._id, "A")}
                />{" "}
                A. {q.optionA}
              </div>

              <div>
                <input
                  type="radio"
                  name={`q-${q._id}`}
                  checked={answers[q._id] === "B"}
                  onChange={() => handleOptionChange(q._id, "B")}
                />{" "}
                B. {q.optionB}
              </div>

              <div>
                <input
                  type="radio"
                  name={`q-${q._id}`}
                  checked={answers[q._id] === "C"}
                  onChange={() => handleOptionChange(q._id, "C")}
                />{" "}
                C. {q.optionC}
              </div>

              <div>
                <input
                  type="radio"
                  name={`q-${q._id}`}
                  checked={answers[q._id] === "D"}
                  onChange={() => handleOptionChange(q._id, "D")}
                />{" "}
                D. {q.optionD}
              </div>
            </div>
          ))}

          <button
            onClick={handleSubmit}
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "14px 24px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Submit Exam
          </button>
        </>
      )}
    </div>
  );
}
