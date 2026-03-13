import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const brandLogo = "/transparent_logo.png";

const links = [
  { label: "Home", to: "/", key: "home" },
  { label: "About", to: "/about", key: "about" },
  {
    label: "Company",
    key: "company",
    dropdown: [
      { label: "Meet the team", to: "/team", desc: "The people behind Chronhr" },
      { label: "ROI", to: "/roi", desc: "ROI calculator & plans" },
    ],
  },
];

function Nav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [underline, setUnderline] = useState({ left: 0, width: 0, opacity: 0 });
  const navLinksRef = useRef<HTMLUListElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  function moveUnderline(el: HTMLElement) {
    if (!navLinksRef.current) return;
    const parent = navLinksRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setUnderline({
      left: rect.left - parent.left,
      width: rect.width,
      opacity: 1,
    });
  }

  useEffect(() => {
    const el = navLinksRef.current?.querySelector(".nav-link-active") as HTMLElement | null;
    if (el) moveUnderline(el);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  function handleMouseEnter(
    e: React.MouseEvent<HTMLElement>,
    key: string,
  ) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    moveUnderline(e.currentTarget);
    if (links.find((l) => l.key === key)?.dropdown) {
      setOpenDropdown(key);
    }
  }

  function handleMouseLeave() {
    const el = navLinksRef.current?.querySelector(".nav-link-active") as HTMLElement | null;
    if (el) moveUnderline(el);
    else setUnderline((u) => ({ ...u, opacity: 0 }));

    closeTimer.current = setTimeout(() => setOpenDropdown(null), 180);
  }

  function handleDropdownEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  function handleDropdownLeave() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 180);

    const el = navLinksRef.current?.querySelector(".nav-link-active") as HTMLElement | null;
    if (el) moveUnderline(el);
    else setUnderline((u) => ({ ...u, opacity: 0 }));
  }

  const isCompanyActive =
    location.pathname === "/team" || location.pathname === "/roi";

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo" aria-label="Chronhr home">
        <img src={brandLogo} alt="Chronhr" className="nav-logo-image" />
        <span className="nav-logo-text">CHRONHR</span>
      </Link>

      <ul className="nav-links" ref={navLinksRef}>
        <div
          className="nav-underline"
          style={{
            left: underline.left,
            width: underline.width,
            opacity: underline.opacity,
          }}
        />

        {links.map((link) => (
          <li key={link.key} style={{ position: "relative" }}>
            {link.dropdown ? (
              <>
                <button
                  type="button"
                  className={`nav-link ${isCompanyActive ? "nav-link-active" : ""}`}
                  onMouseEnter={(e) => handleMouseEnter(e, link.key)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() =>
                    setOpenDropdown((prev) => (prev === link.key ? null : link.key))
                  }
                >
                  {link.label}
                  <span
                    className="nav-chevron"
                    style={{
                      transform:
                        openDropdown === link.key ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ‹
                  </span>
                </button>

                <div
                  className={`nav-dropdown ${openDropdown === link.key ? "nav-dropdown-open" : ""}`}
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  {link.dropdown.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className="nav-dropdown-item"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <span className="nav-dropdown-label">{item.label}</span>
                      <span className="nav-dropdown-desc">{item.desc}</span>
                    </NavLink>
                  ))}
                </div>
              </>
            ) : (
              <NavLink
                to={link.to!}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
                onMouseEnter={(e) => handleMouseEnter(e, link.key)}
                onMouseLeave={handleMouseLeave}
              >
                {link.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>

      <NavLink
        to="/get-started"
        className={({ isActive }) =>
          `nav-cta ${isActive ? "nav-cta-active" : ""}`
        }
      >
        Book a demo
      </NavLink>
    </nav>
  );
}

export default Nav;