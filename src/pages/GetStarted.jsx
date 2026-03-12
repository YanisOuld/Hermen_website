import ExpectItem from '../components/ExpectItem'
import ContactBlock from '../components/ContactBlock'
import GetStartedForm from '../components/GetStartedForm'

export default function GetStarted() {
  return (
    <div className="page">
      {/* LEFT */}
      <div className="left">
        <div className="eyebrow">Get started</div>
        <h1>
          Let's talk.
          <br />
          <em>We'll work<br />from there.</em>
        </h1> 
        <p className="left-desc">
          Tell us about your team and your current workflow. We'll reach out within
          24 hours to schedule a demo tailored to your needs.
        </p>

        <div className="expect">
          <ExpectItem
            number="01"
            title="We review your request"
            desc="Our team reads every submission and prepares a tailored demo."
          />
          <ExpectItem
            number="02"
            title="We reach out within 24h"
            desc="A member of the Chronhr team will contact you to schedule a call."
          />
          <ExpectItem
            number="03"
            title="Live demo, your data"
            desc="We show you the platform with a workflow that matches your reality."
          />
        </div>

        <ContactBlock />
      </div>

      {/* RIGHT — form */}
      <div className="right">
        <GetStartedForm />
      </div>
    </div>
  )
}
