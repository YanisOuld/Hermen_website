function AdvisoryBoard() {
  return (
    <div className="advisory">
      <div className="advisory-label">Advisory board</div>
      <div className="advisory-members">
        <div className="member" >
          <a href="https://www.linkedin.com/in/david-vijan/">
          <div className="member-name">David Vijan</div>
          <div className="member-role">
            CEO of a regulatory compliance firm.
            <br />
            Outlier Compliance Group
          </div>
          </a>
        </div>
        <div className="member">
          <a href="https://www.linkedin.com/in/boubacar-leye-48687ab/"></a>
            <div className="member-name">Boubacar Leye</div>
            <div className="member-role">
              Senior Compliance Manager,
              <br />
              HSBC
            </div>
          <a/>
        </div>
      </div>
    </div>
  )
}

export default AdvisoryBoard

