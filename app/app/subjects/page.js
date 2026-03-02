export default function Subjects() {

  const subjects = [
    { id: 1, name: "Maths" },
    { id: 2, name: "Science" },
    { id: 3, name: "English" },
    { id: 4, name: "Reasoning" },
    { id: 5, name: "GK" }
  ];

  return (
    <div style={{textAlign:"center",marginTop:"80px"}}>
      <h2>Subjects</h2>

      {subjects.map((sub) => (
        <div key={sub.id} style={{margin:"15px"}}>
          <a href={`/subjects/${sub.id}`} style={{
            padding:"10px 20px",
            background:"#0070f3",
            color:"white",
            textDecoration:"none",
            borderRadius:"5px"
          }}>
            {sub.name}
          </a>
        </div>
      ))}

    </div>
  );
}
