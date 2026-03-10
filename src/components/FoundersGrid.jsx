import { useState } from "react";

const founders = [
  {
    initials: "AD",
    role: "Chief Executive Officer",
    name: "Aziz Diop",
    bio: "Aziz Diop est Quant Software Engineer chez Morgan Stanley et CEO de Chronhr. Son parcours combine une expérience en ingénierie quantitative dans un environnement financier exigeant et une forte orientation entrepreneuriale. Avant ChronHR, il a également été cofondateur d’une startup dans le secteur de la santé. Aujourd’hui, il met son expertise technique, analytique et produit au service du développement de Chronhr.",
    photo: "/aziz-diop.jpg",
    linkedin: "#",
  },
  {
    initials: "YO",
    role: "Chief Technology Officer",
    name: "Yanis Ould",
    bio: "Yanis architects the ChronHR platform. From data ingestion pipelines to the analyst-facing interface. He brings deep expertise in distributed systems and data engineering to the compliance space.",
    photo: null,
    linkedin: "#",
  },
];

function MemberCard({ initials, role, name, bio, linkedin, photo }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="founder-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`founder-media ${hovered ? "founder-media-hovered" : ""}`}
        style={photo ? { backgroundImage: `linear-gradient(rgba(15,17,23,0.05), rgba(15,17,23,0.16)), url(${photo})` } : undefined}
      >
        {!photo && <span className="founder-initials">{initials}</span>}
        <div className="founder-photo-line" />
      </div>

      <div className="founder-role">{role}</div>

      <div className="founder-name">{name}</div>

      <div className="founder-bio">{bio}</div>

      <div className="founder-link-wrap">
        <a
          href={linkedin}
          className="founder-link"
          style={{ color: hovered ? "#0F1117" : "#84827D" }}
        >
          LinkedIn →
        </a>
      </div>
    </div>
  );
}

export default function FoundersGrid() {
  return (
    <div className="founders-grid-wrap">
      <div className="founders-label">
        Founders
      </div>

      <div className="founders-grid">
        {founders.map((f, i) => (
          <div
            key={f.initials}
            className={`founders-column ${i % 2 === 0 ? "founders-column-left" : "founders-column-right"}`}
          >
            <MemberCard {...f} />
          </div>
        ))}
      </div>
    </div>
  );
}