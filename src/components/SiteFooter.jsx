function SiteFooter() {
  return (
    <footer>
      <div className="footer-inner">

        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-brand-name">CHRONHR</div>
            <div className="footer-brand-desc">
              AML intelligence platform.<br />Ingest, analyze, report.
            </div>
          </div>

          {/* Pages */}
          <div>
            <div className="footer-col-title">Pages</div>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/team">Meet the team</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/get-started">Get started</a></li>
            </ul>
          </div>

          {/* Partners & contact */}
          <div>
            <div className="footer-col-title">Partners</div>
            <ul className="footer-links">
              <li><a href="https://www.linkedin.com/company/chronhr/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              {/*<li><a href="https://www.nextai.com" target="_blank" rel="noopener noreferrer">NextAI</a></li>*/}
              <li><a href="https://propolys.com" target="_blank" rel="noopener noreferrer">Propolys</a></li>
              <li><a href="mailto:contact@chronhr.com">contact@chronhr.com</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <div>© 2025 ChronHR Inc. · Montréal, Québec</div>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default SiteFooter