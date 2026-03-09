import { useState } from "react";

const founders = [
  {
    initials: "AD",
    role: "Chief Executive Officer",
    name: "Aziz Diop",
    bio: "Aziz leads ChronHR's vision, strategy and growth. With a background in financial services and enterprise software, he identified the gap between the complexity of AML work and the tools available to analysts.",
    linkedin: "#",
  },
  {
    initials: "YO",
    role: "Chief Technology Officer",
    name: "Yanis Ould",
    bio: "Yanis architects the ChronHR platform. From data ingestion pipelines to the analyst-facing interface. He brings deep expertise in distributed systems and data engineering to the compliance space.",
    linkedin: "#",
  },
];

function MemberCard({ initials, role, name, bio, linkedin }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", flex: 1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo placeholder */}
      <div style={{
        width: "100%",
        aspectRatio: "4 / 3",
        background: hovered ? "#E8E6DF" : "#E2E0D9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 28,
        transition: "background 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}>
        <span style={{
          fontSize: "3.2rem",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          color: "#84827D",
          opacity: hovered ? 0.5 : 0.25,
          transition: "opacity 0.3s ease",
          fontFamily: "'IBM Plex Sans', sans-serif",
        }}>
          {initials}
        </span>
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: 1,
          background: "#E2E0D9",
        }} />
      </div>

      {/* Role */}
      <div style={{
        fontSize: "0.65rem",
        fontWeight: 600,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "#84827D",
        marginBottom: 8,
        fontFamily: "'IBM Plex Sans', sans-serif",
      }}>
        {role}
      </div>

      {/* Name */}
      <div style={{
        fontSize: "1.5rem",
        fontWeight: 700,
        letterSpacing: "-0.03em",
        lineHeight: 1.1,
        color: "#0F1117",
        marginBottom: 16,
        fontFamily: "'IBM Plex Sans', sans-serif",
      }}>
        {name}
      </div>

      {/* Bio — flex: 1 keeps both cards equal height */}
      <div style={{
        fontSize: "0.875rem",
        lineHeight: 1.7,
        color: "#84827D",
        fontFamily: "'IBM Plex Sans', sans-serif",
        flex: 1,
      }}>
        {bio}
      </div>

      {/* LinkedIn — pinned to bottom */}
      <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid #E2E0D9" }}>
        <a href={linkedin} style={{
          fontSize: "0.78rem",
          fontWeight: 500,
          color: hovered ? "#0F1117" : "#84827D",
          textDecoration: "none",
          letterSpacing: "0.02em",
          transition: "color 0.2s ease",
          fontFamily: "'IBM Plex Sans', sans-serif",
        }}>
          LinkedIn →
        </a>
      </div>
    </div>
  );
}

export default function FoundersGrid() {
  return (
    <div style={{
      maxWidth: 1080,
      margin: "0 auto",
      padding: "80px 52px",
      fontFamily: "'IBM Plex Sans', sans-serif",
    }}>

      {/* Section label */}
      <div style={{
        fontSize: "0.68rem",
        fontWeight: 600,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#84827D",
        marginBottom: 48,
      }}>
        Founders
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
        {founders.map((f, i) => (
          <div
            key={f.initials}
            style={{
              paddingRight: i % 2 === 0 ? 64 : 0,
              paddingLeft: i % 2 !== 0 ? 64 : 0,
              borderRight: i % 2 === 0 ? "1px solid #E2E0D9" : "none",
              display: "flex",
            }}
          >
            <MemberCard {...f} />
          </div>
        ))}
      </div>

    </div>
  );
}