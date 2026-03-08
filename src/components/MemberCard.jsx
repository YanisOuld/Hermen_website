function MemberCard({ initials, role, name, bio }) {
  return (
    <div className="member-card">
      <div className="member-photo">
        <div className="member-initials">{initials}</div>
        <div className="member-photo-line" />
      </div>
      <div className="member-role">{role}</div>
      <div className="member-name">{name}</div>
      <p className="member-bio">{bio}</p>
    </div>
  )
}

export default MemberCard
