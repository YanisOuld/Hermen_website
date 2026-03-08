import { useState } from 'react'

export default function GetStarted() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page">
      {/* LEFT */}
      <div className="left">
        <div className="eyebrow">Get started</div>
        <h1>
          Let's talk.
          <br />
          <em>We'll take it<br />from there.</em>
        </h1>
        <p className="left-desc">
          Tell us about your team and your current workflow. We'll reach out within
          24 hours to schedule a demo tailored to your needs.
        </p>

        <div className="expect">
          <div className="expect-item">
            <div className="expect-num">01</div>
            <div className="expect-text">
              <div className="expect-title">We review your request</div>
              <div className="expect-desc">
                Our team reads every submission and prepares a tailored demo.
              </div>
            </div>
          </div>
          <div className="expect-item">
            <div className="expect-num">02</div>
            <div className="expect-text">
              <div className="expect-title">We reach out within 24h</div>
              <div className="expect-desc">
                A member of the ChronHR team will contact you to schedule a call.
              </div>
            </div>
          </div>
          <div className="expect-item">
            <div className="expect-num">03</div>
            <div className="expect-text">
              <div className="expect-title">Live demo, your data</div>
              <div className="expect-desc">
                We show you the platform with a workflow that matches your reality.
              </div>
            </div>
          </div>
        </div>

        <div className="left-contact">
          <div className="left-contact-label">Or reach us directly</div>
          <a href="mailto:hello@chronhr.com" className="left-contact-email">
            hello@chronhr.com
          </a>
        </div>
      </div>

      {/* RIGHT — form */}
      <div className="right">
        {!submitted ? (
          <form onSubmit={handleSubmit} id="form-wrapper">
            <div className="form-title">Tell us about yourself</div>

            <div className="form-grid">
              <div className="form-group">
                <label>First name</label>
                <input type="text" placeholder="Aziz" required />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input type="text" placeholder="Diop" required />
              </div>
              <div className="form-group">
                <label>Work email</label>
                <input type="email" placeholder="you@company.com" required />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" placeholder="Desjardins" required />
              </div>
              <div className="form-group">
                <label>Role</label>
                <select required>
                  <option value="" disabled selected>
                    Select your role
                  </option>
                  <option>AML Analyst</option>
                  <option>Compliance Officer</option>
                  <option>Chief Compliance Officer</option>
                  <option>Risk &amp; Audit</option>
                  <option>IT / Integrations</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Team size</label>
                <select required>
                  <option value="" disabled selected>
                    Select team size
                  </option>
                  <option>1–5 analysts</option>
                  <option>6–20 analysts</option>
                  <option>20–50 analysts</option>
                  <option>50+ analysts</option>
                </select>
              </div>
              <div className="form-group full">
                <label>Tell us about your current workflow</label>
                <textarea placeholder="What tools do you use today? What's the biggest pain point in your AML process?" />
              </div>
            </div>

            <div className="form-submit">
              <p className="submit-note">
                We'll never share your information. You'll hear from us within one
                business day.
              </p>
              <button type="submit" className="btn-submit">
                Send request →
              </button>
            </div>
          </form>
        ) : (
          <div className="success" id="success">
            <div className="success-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#0F1117"
                strokeWidth="1.5"
              >
                <polyline points="2 8 6 12 14 4" />
              </svg>
            </div>
            <div className="success-title">Request received.</div>
            <p className="success-desc">
              Thank you for reaching out. A member of the ChronHR team will get
              back to you within 24 hours to schedule your demo.
            </p>
            <a href="/" className="success-back">
              ← Back to ChronHR
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
