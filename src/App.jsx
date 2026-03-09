import Nav from './components/Nav'
import SiteFooter from './components/SiteFooter'
import Team from './pages/Team'
import About from './pages/About'
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'
import Roi from './pages/Roi'
import Background from './components/Background'

function App() {
  // simple client-side routing based on the path; upgrade to React Router if needed
  const pathname = window.location.pathname
  const isTeamPage = pathname === '/team'
  const isAboutPage = pathname === '/about'
  const isPricingPage = pathname === '/roi'
  const isGetStartedPage = pathname === '/get-started'

  let active = 'home'
  if (isAboutPage) active = 'about'
  else if (isTeamPage) active = 'team'
  else if (isPricingPage) active = 'roi'
  else if (isGetStartedPage) active = 'get-started'

  return (
    <>
      {/* animated background behind everything */}
      <Background />

      <Nav active={active} />

      {isTeamPage ? (
        <Team />
      ) : isAboutPage ? (
        <About />
      ) : isPricingPage ? (
        <Roi />
      ) : isGetStartedPage ? (
        <GetStarted />
      ) : (
        <Home />
      )}

      <SiteFooter />
    </>
  )
}

export default App
