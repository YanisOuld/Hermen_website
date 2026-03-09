function AboutHeader() {
  return (
    <div className="page-header">
      <div className="header-left">
        <div className="page-eyebrow">About ChronHR</div>

        <h1>
          One platform.
          <br />
          <em>for smarter AML work.</em>
        </h1>

        <p className="header-subtitle">
          Designed by analysts, ChronHR unites data, tools and reports in a
          single workspace so you can focus on decisions instead of prep.
        </p>
      </div>

      <div className="page-mission">
        <p className="mission-intro">
          Built for the analyst’s day‑to‑day: fewer clicks, fewer systems, more
          insights.
        </p>

        <ul className="mission-list">
          <li>One workspace for data, case notes and reports</li>
          <li>Tools generated automatically as you work</li>
          <li>Share findings and keep the audit trail intact</li>
        </ul>

        <p className="integration-note">
          Plug in to your current compliance stack and start using ChronHR in
          days, not months.
        </p>
      </div>
    </div>
  )
}

export default AboutHeader