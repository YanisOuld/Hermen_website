import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import SiteFooter from './components/SiteFooter'
import Team from './pages/Team'
import About from './pages/About'
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'
import Roi from './pages/Roi'
import Background from './components/Background'

function App() {
  return (
    <>
      <Background />
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/roi" element={<Roi />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>

      <SiteFooter />
    </>
  )
}

export default App