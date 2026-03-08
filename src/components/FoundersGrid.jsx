import MemberCard from './MemberCard'

function FoundersGrid() {
  const founders = [
    {
      initials: 'AD',
      role: 'Chief Executive Officer',
      name: 'Aziz Diop',
      bio: `Aziz leads ChronHR's vision, strategy and growth. With a background in financial services
and enterprise software, he identified the gap between the complexity of AML work and the
tools available to analysts.`,
    },
    {
      initials: 'YO',
      role: 'Chief Technology Officer',
      name: 'Yanis Ould',
      bio: `Yanis architects the ChronHR platform — from data ingestion pipelines to the analyst-facing
interface. He brings deep expertise in distributed systems and data engineering to the
compliance space.`,
    },
  ]

  return (
    <div className="team">
      <div className="section-label">Founders</div>
      <div className="team-grid">
        {founders.map((f) => (
          <MemberCard
            key={f.initials}
            initials={f.initials}
            role={f.role}
            name={f.name}
            bio={f.bio}
          />
        ))}
      </div>
    </div>
  )
}

export default FoundersGrid
