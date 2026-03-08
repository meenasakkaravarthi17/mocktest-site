export default function Exams({ params }) {
  const exams = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Exams for Subject {params.id}</h2>

      {exams.map((exam) => (
        <div key={exam} style={{ margin: "10px" }}>
          <a href={`/payment/${params.id}/${exam}`}>Exam {exam}</a>
        </div>
      ))}
    </div>
  );
}
