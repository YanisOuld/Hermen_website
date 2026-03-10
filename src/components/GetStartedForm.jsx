import { useState } from 'react'

export default function GetStartedForm({ onSubmit }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    if (onSubmit) onSubmit()
  }

  if (submitted) {
    return (
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
          Thank you for reaching out. A member of the Chronhr team will get
          back to you within 24 hours to schedule your demo.
        </p>
        <a href="/" className="success-back">
          ← Back to Chronhr
        </a>
      </div>
    )
  }

  return (
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
  )
}