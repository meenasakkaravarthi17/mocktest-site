export default function Exam({ params }) {

  return (
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h2>Subject: {params.subject}</h2>
      <h3>Exam: {params.exam}</h3>

      <div style={{
        marginTop:"30px",
        padding:"20px",
        border:"1px solid #ccc",
        display:"inline-block"
      }}>
        <p>Sample Question 1</p>

        <div><input type="radio" name="q1"/> Option A</div>
        <div><input type="radio" name="q1"/> Option B</div>
        <div><input type="radio" name="q1"/> Option C</div>
        <div><input type="radio" name="q1"/> Option D</div>
      </div>

    </div>
  );
}
