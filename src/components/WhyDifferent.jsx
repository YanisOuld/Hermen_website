function WhyDifferent() {
  const items = [
    {
      num: '01',
      title: 'ELT, not just a dashboard',
      desc: `ChronHR doesn't just display data — it extracts, loads and transforms it into a
structured analysis workspace tailored to each case.`,
    },
    {
      num: '02',
      title: 'Built for analysts, not IT',
      desc: `Every tool and interface is designed around how an AML analyst actually thinks and
works — not around what's easiest to build.`,
    },
    {
      num: '03',
      title: 'Standardized, not rigid',
      desc: `ChronHR standardizes the workflow without replacing analyst judgment. The tools
assist — the analyst decides.`,
    },
  ]

  return (
    <div className="why">
      {items.map((item) => (
        <div key={item.num} className="why-item">
          <div className="why-num">{item.num}</div>
          <div className="why-title">{item.title}</div>
          <div className="why-desc">{item.desc}</div>
        </div>
      ))}
    </div>
  )
}

export default WhyDifferent
