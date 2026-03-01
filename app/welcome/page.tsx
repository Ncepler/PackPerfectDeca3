"use client";

import { useEffect, useState } from "react";

export default function Welcome() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main style={page}>
      {/* HERO IMAGE WITH TEXT */}
      <section
        style={{
          ...hero,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div style={overlay} />
        <div style={heroContent}>
          <h1 style={headline}>Welcome to PackPerfect</h1>
          <p style={subheadline}>
            Built by competitors. Designed for performance. Walk into DECA
            states fully prepared.
          </p>
        </div>
      </section>

      {/* INFO SECTION */}
      <section style={section}>
        <div style={card}>
          <h2 style={sectionTitle}>Why This Exists</h2>
          <p style={text}>
            PackPerfect was created to give DECA competitors a smarter, simpler
            way to stay organized and prepared. Built by students who’ve been in
            your shoes, it combines practical packing strategies with thoughtful
            planning so nothing gets forgotten. Inspired by the problem-solving
            and innovation focus of incubators, PackPerfect streamlines
            preparation, reduces stress, and helps you walk into competitions
            confident and competition-ready.
          </p>
        </div>
      </section>
    </main>
  );
}

// --------------------- STYLES ---------------------

const page = {
  minHeight: "100vh",
  backgroundColor: "#f4f8fc",
  paddingBottom: "60px",
};

const hero = {
  position: "relative" as const,
  height: "40vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center" as const,
  backgroundImage:
    "url('https://www.bethpagenewsgram.com/wp-content/gallery/deca-excels-at-ny-state-competition/1-deca0322.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const overlay = {
  position: "absolute" as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 83, 155, 0.75)",
};

const heroContent = {
  position: "relative" as const,
  color: "#FFFFFF",
  maxWidth: "800px",
  padding: "0 20px",
  textShadow: "0 3px 8px rgba(0,0,0,0.7)",
};

const headline = {
  fontSize: "3rem",
  fontWeight: "700",
  marginBottom: "20px",
};

const subheadline = {
  fontSize: "1.2rem",
  lineHeight: "1.6",
  marginTop: "0",
  textShadow: "0 2px 6px rgba(0,0,0,0.6)",
};

const section = {
  display: "flex",
  justifyContent: "center",
  padding: "80px 20px",
};

const card = {
  maxWidth: "800px",
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
};

const sectionTitle = {
  color: "#00AEEF",
  marginBottom: "20px",
  fontSize: "1.8rem",
};

const text = {
  marginBottom: "16px",
  lineHeight: "1.6",
};
