function Nav({ active }) {
  // `active` can be 'home', 'about', 'team', 'get-started', etc.
  return (
    <nav>
      <a href="/" className="logo">
        CHRONHR
      </a>
      <ul className="nav-links">
        <li>
          <a href="/" className={active === 'home' ? 'active' : ''}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" className={active === 'about' ? 'active' : ''}>
            About
          </a>
        </li>
        <li>
          <a href="/team" className={active === 'team' ? 'active' : ''}>
            Meet the team
          </a>
        </li>
        <li>
          <a href="/pricing" className={active === 'pricing' ? 'active' : ''}>
            Pricing
          </a>
        </li>
      </ul>
      <a
        href="/get-started"
        className={`nav-cta ${active === 'get-started' ? 'active' : ''}`}
      >
        Get started
      </a>
    </nav>
  )
}

export default Nav

