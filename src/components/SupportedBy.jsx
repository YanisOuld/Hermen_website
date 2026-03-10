const partners = [
  {
    name: "Propolys",
    desc: "Cybersecurity incubator",
    mark: "PR",
    logo: "/propolys.png",
  },
  {
    name: "NextAI",
    desc: "AI venture program",
    mark: "NA",
    logo: "/nextai.png",
  },
  {
    name: "Polytechnique Montréal",
    desc: "Academic innovation ecosystem",
    mark: "PM",
    logo: "/polytechnique.png",
  },
];

function SupportedBy() {
  const marqueePartners = [...partners, ...partners];

  return (
    <div className="supported-top">
      <div className="supported-claim">Supported by</div>
      <div className="scroll-track">
        <div className="scroll-inner">
          {marqueePartners.map((partner, index) => (
            <div className="partner-group" key={`${partner.name}-${index}`}>
              <div className="partner">
                <div className="partner-logo" aria-hidden="true">
                  {partner.logo ? (
                    <img src={partner.logo} alt={partner.name} className="partner-logo-image" />
                  ) : (
                    <span className="partner-logo-text">{partner.mark}</span>
                  )}
                </div>
                <div>
                  <div className="partner-name">{partner.name}</div>
                  <div className="partner-desc">{partner.desc}</div>
                </div>
              </div>
              <div className="partner-sep">—</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SupportedBy

