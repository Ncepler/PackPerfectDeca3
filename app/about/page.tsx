"use client";

export default function About() {
  const teamMembers = [
    "Alana Borkon – Founder & Developer",
    "Noah Cepler – Founder & Developer",
    "Hannah Friedmann – Founder & Developer",
    "Jude Rock – Founder & Developer",
    "Ben Zarkin – Founder & Developer",
  ];

  return (
    <main style={page}>
      <h1 style={title}>About PackPerfect</h1>

      <p style={paragraph}>
        PackPerfect is a smart packing assistant designed to help students stay
        organized, confident, and competition-ready.
      </p>

      <h2 style={subtitle}>Meet the Team</h2>
      <div style={teamGrid}>
        {teamMembers.map((member, idx) => (
          <div key={idx} style={teamCard}>
            {member}
          </div>
        ))}
      </div>

      <div style={extraCard}>DECA State Competitors & Design/Strategy Team</div>
    </main>
  );
}

// --------------------- STYLES ---------------------

const page = {
  maxWidth: "900px",
  margin: "60px auto",
  padding: "0 20px",
  textAlign: "center" as const,
};

const title = {
  fontSize: "2.8rem",
  color: "#00AEEF",
  marginBottom: "20px",
};

const subtitle = {
  fontSize: "2rem",
  color: "#0073b1",
  margin: "40px 0 20px 0",
};

const paragraph = {
  fontSize: "1.2rem",
  lineHeight: 1.6,
};

const teamGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "25px",
  justifyItems: "center",
  marginBottom: "30px",
};

const teamCard = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  minWidth: "200px",
  fontSize: "1.1rem",
};

const extraCard = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  fontSize: "1.1rem",
  maxWidth: "400px",
  margin: "0 auto",
};
