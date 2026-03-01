"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <h2 style={{ color: "white" }}>PackPerfect</h2>
      <div>
        <Link href="/" style={linkStyle}>
          Home
        </Link>
        <Link href="/welcome" style={linkStyle}>
          Welcome
        </Link>
        <Link href="/packing-list" style={linkStyle}>
          Packing List
        </Link>
        <Link href="/about" style={linkStyle}>
          About
        </Link>
      </div>
    </nav>
  );
}

const navStyle = {
  backgroundColor: "#00539B", // DECA blue
  padding: "15px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const linkStyle = {
  color: "white",
  marginLeft: "20px",
  textDecoration: "none",
  fontWeight: "bold",
};
