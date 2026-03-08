function AboutHeader() {
  return (
    <div className="page-header">
      <div className="header-left">
        <div className="page-eyebrow">About ChronHR</div>

        <h1>
          One platform.
          <br />
          <em>Every step of AML analysis.</em>
        </h1>

        <p className="header-subtitle">
          ChronHR helps analysts move faster from raw data to structured
          investigation — without losing context.
        </p>
      </div>

      <div className="page-mission">
        <p className="mission-intro">
          AML analysts deserve better tools. ChronHR is built around one idea —
          <strong> less preparation, more investigation.</strong>
        </p>

        <ul className="mission-list">
          <li>Centralize all investigation data in one workspace</li>
          <li>Automatically generate analysis tools for every case</li>
          <li>Collaborate, annotate and track investigation decisions</li>
          <li>Draft SAR reports without starting from scratch</li>
        </ul>

        <p className="integration-note">
          ChronHR integrates with existing compliance workflows and financial
          systems — allowing teams to deploy quickly without replacing their
          current infrastructure.
        </p>
      </div>
    </div>
  )
}

export default AboutHeader