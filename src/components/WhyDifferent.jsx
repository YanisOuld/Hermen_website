function WhyDifferent() {
  const items = [
    {
      num: '01',
      title: 'ELT, not just a dashboard',
      desc: `Chronhr doesn't just display data. It extracts, loads and transforms it into a
structured analysis workspace tailored to each case.`,
    },
    {
      num: '02',
      title: 'Built for analysts, not IT',
      desc: `Every tool and interface is designed around how an AML analyst actually thinks and
works and not around what's easiest to build.`,
    },
    {
      num: '03',
      title: 'Standardized, not rigid',
      desc: `Chronhr standardizes the workflow without replacing analyst judgment. The tools
assist and the analyst decides.`,
    },
  ]

  return (
    <div className="why-section">

      <div className="why-header">
        <div className="why-eyebrow">Why Chronhr</div>
        <h2 className="why-title-main">
          Built different.<br />
          <em>By design.</em>
        </h2>
      </div>

      <div className="why">
        {items.map((item) => (
          <div key={item.num} className="why-item">
            <div className="why-title">{item.title}</div>
            <div className="why-desc">{item.desc}</div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default WhyDifferent
