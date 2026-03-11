import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function GetStartedForm() {
  const [emailSent, setEmailSent] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSending(true)

    const form = e.target
    const formData = new FormData(form)

    const templateParams = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      company: formData.get('company'),
      role: formData.get('role'),
      team_size: formData.get('team_size'),
      workflow: formData.get('workflow'),
    }

    emailjs
      .send(
        'service_tqso6s6',
        'template_4o6bhhe',
        templateParams,
        'PLSIPnltfGzi9O5b1'
      )
      .then(() => {
        form.reset()
        setEmailSent(true)
        setIsSending(false)

        setTimeout(() => {
          setEmailSent(false)
        }, 2200)
      })
      .catch((error) => {
        console.error('EmailJS error:', error)
        setIsSending(false)
      })
  }

  return (
    <div className="form-shell">
      <form
        onSubmit={handleSubmit}
        id="form-wrapper"
        className={emailSent ? 'form-blur' : ''}
      >
        <div className="form-title">Tell us about yourself</div>

        <div className="form-grid">
          <div className="form-group">
            <label>First name</label>
            <input name="first_name" type="text" placeholder="Aziz" required />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input name="last_name" type="text" placeholder="Diop" required />
          </div>

          <div className="form-group">
            <label>Work email</label>
            <input
              name="email"
              type="email"
              placeholder="you@company.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Company</label>
            <input name="company" type="text" placeholder="Desjardins" required />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select name="role" defaultValue="" required>
              <option value="" disabled>
                Select your role
              </option>
              <option>AML Analyst</option>
              <option>Compliance Officer</option>
              <option>Chief Compliance Officer</option>
              <option>Risk & Audit</option>
              <option>IT / Integrations</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Team size</label>
            <select name="team_size" defaultValue="" required>
              <option value="" disabled>
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
            <textarea
              name="workflow"
              placeholder="What tools do you use today? What's the biggest pain point in your AML process?"
            />
          </div>
        </div>

        <div className="form-submit">
          <p className="submit-note">
            We'll never share your information. You'll hear from us within one
            business day.
          </p>

          <button type="submit" className="btn-submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send request →'}
          </button>
        </div>
      </form>

      <div className={`thank-you-overlay ${emailSent ? 'show' : ''}`}>
        <div className="thank-you-card">
          <div className="thank-you-icon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <polyline points="2 8 6 12 14 4" />
            </svg>
          </div>
          <div className="thank-you-title">Thank you!</div>
          <p className="thank-you-text">
            Your request has been sent successfully.
          </p>
        </div>
      </div>
    </div>
  )
}