"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main style={page}>
      {/* HERO SECTION */}
      <section style={hero}>
        <h1 style={headline}>Pack smarter for DECA.</h1>

        <p style={subheadline}>
          PackPerfect helps competitors stay organized, confident, and fully
          prepared for every conference and competition.
        </p>

        <div style={ctaContainer}>
          <Link href="/packing-list">
            <button style={primaryButton}>View Packing List</button>
          </Link>

          <Link href="/about">
            <button style={secondaryButton}>Meet the Team</button>
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={featuresSection}>
        <div style={featureCard}>
          <h3 style={featureTitle}>Organized Categories</h3>
          <p>
            Business attire, essentials, tech, travel — everything structured so
            you don’t forget what matters.
          </p>
        </div>

        <div style={featureCard}>
          <h3 style={featureTitle}>Competition Ready</h3>
          <p>
            Designed specifically for DECA states and conferences. Built by
            competitors.
          </p>
        </div>

        <div style={featureCard}>
          <h3 style={featureTitle}>Simple & Clean</h3>
          <p>
            No clutter. No confusion. Just a clean interface focused on
            preparation.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        © {new Date().getFullYear()} PackPerfect • Built for DECA Competitors
      </footer>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "linear-gradient(to bottom, #ffffff, #f4f8fc)",
};

const hero = {
  textAlign: "center" as const,
  padding: "140px 20px 100px 20px",
  maxWidth: "900px",
  margin: "0 auto",
};

const headline = {
  fontSize: "3rem",
  fontWeight: "700",
  color: "#00539B",
  marginBottom: "20px",
};

const subheadline = {
  fontSize: "1.2rem",
  color: "#333",
  marginBottom: "40px",
  lineHeight: "1.6",
};

const ctaContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap" as const,
};

const primaryButton = {
  backgroundColor: "#00539B",
  color: "white",
  padding: "14px 28px",
  border: "none",
  borderRadius: "10px",
  fontSize: "16px",
  cursor: "pointer",
};

const secondaryButton = {
  backgroundColor: "#00AEEF",
  color: "white",
  padding: "14px 28px",
  border: "none",
  borderRadius: "10px",
  fontSize: "16px",
  cursor: "pointer",
};

const featuresSection = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "40px",
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "60px 20px 100px 20px",
};

const featureCard = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const featureTitle = {
  color: "#00AEEF",
  marginBottom: "12px",
};

const footer = {
  textAlign: "center" as const,
  padding: "30px",
  backgroundColor: "#00539B",
  color: "white",
};
