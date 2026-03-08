import Nav from './components/Nav'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Roles from './components/Roles'
import SiteFooter from './components/SiteFooter'
import Team from './pages/Team'
import About from './pages/About'
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'
import Pricing from './pages/Pricing'
import Background from './components/Background'

function App() {
  // simple client-side routing based on the path; upgrade to React Router if needed
  const pathname = window.location.pathname
  const isTeamPage = pathname === '/team'
  const isAboutPage = pathname === '/about'
  const isPricingPage = pathname === '/pricing'
  const isGetStartedPage = pathname === '/get-started'

  let active = 'home'
  if (isAboutPage) active = 'about'
  else if (isTeamPage) active = 'team'
  else if (isPricingPage) active = 'pricing'
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
        <Pricing />
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
