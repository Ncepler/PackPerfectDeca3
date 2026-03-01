"use client";

export default function PackingList() {
  const packingData = {
    businessAttire: [
      "Suit (Jacket & Pants or Skirt) – official DECA attire NOT required",
      "Dress Shirt / Blouse",
      "Tie / Scarf",
      "Dress Shoes",
      "Belt",
      "Socks / Hosiery",
      "Blazer",
      "Accessories (watch, jewelry)",
      "Professional Bag / Portfolio",
      "Notebook & Pens",
    ],
    businessCasual: [
      "Sweater or Cardigan",
      "Chinos / Dress Pants",
      "Button-up Shirt / Blouse",
      "Comfortable Shoes",
      "Light Jacket",
      "Accessories (watch, jewelry)",
      "Casual Bag / Tote",
    ],
    essentials: [
      "Phone & Charger",
      "Wallet / ID",
      "Water Bottle",
      "Snacks",
      "Personal Hygiene Items",
    ],
    extras: [
      "Pajamas / Sleepwear",
      "Toothbrush & Toothpaste",
      "Shampoo / Conditioner",
      "Deodorant",
      "Hairbrush / Comb",
      "Optional Comfort Items (eye mask, earbuds)",
      "Winter Coat",
    ],
    casual: [
      "Sweater or Sweatshirt",
      "Sweatpants / Joggers",
      "Sneakers / Comfortable Shoes",
      "Socks",
      "T-shirt / Casual Shirt",
      "Hat or Beanie",
      "Light Hoodie / Jacket",
    ],
  };

  const sections = [
    { title: "Business Attire(2x)", items: packingData.businessAttire },
    { title: "Business Casual(1x)", items: packingData.businessCasual },
    { title: "Essentials", items: packingData.essentials },
    { title: "Extras", items: packingData.extras },
    { title: "Casual(2x)", items: packingData.casual },
  ];

  return (
    <main style={page}>
      {/* IMAGE ON TOP */}
      <img
        src="https://static.wixstatic.com/media/0d8eeb_bcffaedbf8784a12827fcdaa43d8db1c~mv2.png"
        alt="Packing Hero"
        style={heroImage}
      />

      {/* PACKING LIST GRID */}
      <section style={cardsContainer}>
        {sections.map((section, idx) => (
          <div key={idx} style={card}>
            <h2 style={sectionTitle}>{section.title}</h2>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} style={listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
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

const heroImage: React.CSSProperties = {
  width: "50%", // or 100% for full-width
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "0px",
  marginBottom: "40px",
};

const cardsContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "30px",
  maxWidth: "1000px",
  margin: "0 auto 40px auto",
  padding: "0 20px",
};

const card = {
  backgroundColor: "white",
  padding: "30px 40px",
  borderRadius: "20px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
};

const sectionTitle = {
  color: "#00AEEF",
  fontSize: "1.8rem",
  marginBottom: "20px",
};

const listItem = {
  fontSize: "1.1rem",
  marginBottom: "8px",
  lineHeight: 1.6,
};
