import SupportedBy from '../components/SupportedBy'
import AdvisoryBoard from '../components/AdvisoryBoard'
import TeamHeader from '../components/TeamHeader'
import FoundersGrid from '../components/FoundersGrid'

export default function Team() {
  return (
    <>
      <TeamHeader />
      <FoundersGrid />

      <div className="supported">
        <div className="supported-inner">
          <SupportedBy />
          <AdvisoryBoard />
        </div>
      </div>
    </>
  )
}
