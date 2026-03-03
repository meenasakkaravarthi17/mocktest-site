export default function Payment({ params }) {

  return (
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h2>Payment Page</h2>
      <p>Subject: {params.subject}</p>
      <p>Exam: {params.exam}</p>

      <button
        onClick={() => window.location.href=`/exam/${params.subject}/${params.exam}`}
        style={{
          padding:"10px 20px",
          background:"green",
          color:"white",
          border:"none",
          borderRadius:"5px",
          marginTop:"20px"
        }}
      >
        Pay ₹99 (Demo)
      </button>
    </div>
  );
}
