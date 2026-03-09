import { useState, useRef, useEffect } from "react";

const links = [
  { label: "Home",    href: "/",        key: "home" },
  { label: "About",   href: "/about",   key: "about" },
  {
    label: "Company",
    key: "company",
    dropdown: [
      { label: "Meet the team", href: "/team",    desc: "The people behind ChronHR" },
      { label: "Pricing",       href: "/pricing", desc: "ROI calculator & plans" },
    ],
  },
];

function Nav({ active }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [underline, setUnderline]       = useState({ left: 0, width: 0, opacity: 0 });
  const navLinksRef = useRef(null);
  const closeTimer  = useRef(null);

  function moveUnderline(el) {
    const parent = navLinksRef.current.getBoundingClientRect();
    const rect   = el.getBoundingClientRect();
    setUnderline({ left: rect.left - parent.left, width: rect.width, opacity: 1 });
  }

  useEffect(() => {
    const el = navLinksRef.current?.querySelector(".nav-link-active");
    if (el) moveUnderline(el);
  }, [active]);

  function handleMouseEnter(e, key) {
    clearTimeout(closeTimer.current);
    moveUnderline(e.currentTarget);
    if (links.find(l => l.key === key)?.dropdown) setOpenDropdown(key);
  }

  function handleMouseLeave() {
    const el = navLinksRef.current?.querySelector(".nav-link-active");
    if (el) moveUnderline(el);
    else setUnderline(u => ({ ...u, opacity: 0 }));
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 180);
  }

  function handleDropdownEnter() {
    clearTimeout(closeTimer.current);
  }

  function handleDropdownLeave() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 180);
    const el = navLinksRef.current?.querySelector(".nav-link-active");
    if (el) moveUnderline(el);
    else setUnderline(u => ({ ...u, opacity: 0 }));
  }

  return (
    <nav className="nav">
      <a href="/" className="nav-logo">CHRONHR</a>

      <ul className="nav-links" ref={navLinksRef}>
        <div
          className="nav-underline"
          style={{ left: underline.left, width: underline.width, opacity: underline.opacity }}
        />

        {links.map(link => (
          <li key={link.key} style={{ position: "relative" }}>
            <a
              href={link.href ?? "#"}
              className={`nav-link ${active === link.key ? "nav-link-active" : ""}`}
              onMouseEnter={e => handleMouseEnter(e, link.key)}
              onMouseLeave={handleMouseLeave}
              onClick={link.dropdown ? e => e.preventDefault() : undefined}
            >
              {link.label}
              {link.dropdown && (
                <span
                  className="nav-chevron"
                  style={{ transform: openDropdown === link.key ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  ‹
                </span>
              )}
            </a>

            {link.dropdown && (
              <div
                className={`nav-dropdown ${openDropdown === link.key ? "nav-dropdown-open" : ""}`}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                {link.dropdown.map(item => (
                  <a key={item.href} href={item.href} className="nav-dropdown-item">
                    <span className="nav-dropdown-label">{item.label}</span>
                    <span className="nav-dropdown-desc">{item.desc}</span>
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      <a
        href="/get-started"
        className={`nav-cta ${active === "get-started" ? "nav-cta-active" : ""}`}
      >
        Get started
      </a>
    </nav>
  );
}

export default Nav;