// Navbar — sticky dark-crimson bar with dropdown menus + mobile hamburger
// Uses React Router <Link> for internal paths (/about, /...) and <a> for external.

import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaBars, FaTimes, FaChevronRight } from 'react-icons/fa'
import { navItems } from '../../data/navData'

// Render either a React Router Link (internal) or plain <a> (external / #)
function NavLink({ href, className, children, onClick }) {
  if (href && href.startsWith('/')) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href || '#'} className={className} onClick={onClick}>
      {children}
    </a>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMobile, setOpenMobile] = useState(null)

  const navRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false)
        setOpenMobile(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const toggleMobileDropdown = (idx) => {
    setOpenMobile(prev => (prev === idx ? null : idx))
  }

  const closeMobile = () => {
    setMobileOpen(false)
    setOpenMobile(null)
  }

  return (
    <nav
      ref={navRef}
      className="w-full sticky top-0 z-50 shadow-md"
      style={{ backgroundColor: '#a41425' }}
    >
      <div className="max-w-[1320px] mx-auto px-3">

        {/* ── Desktop nav ── */}
        <ul className="hidden lg:flex flex-wrap items-center justify-center">
          {navItems.map((item, idx) => (
            <li key={idx} className="nav-item">
              <NavLink
                href={item.href}
                className="flex items-center gap-1 text-white text-[14.4px] font-semibold px-[10px] py-[10px] hover:bg-[#8c0f1e] transition-colors whitespace-nowrap no-underline uppercase"
              >
                {item.label}
                {item.dropdown && <FaChevronDown className="text-[9px] mt-0.5" />}
              </NavLink>

              {/* Dropdown */}
              {item.dropdown && (
                <ul className="nav-dropdown">
                  {item.dropdown.map((sub, si) => (
                    <li key={si}>
                      <NavLink href={sub.href}>{sub.label}</NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* ── Mobile header ── */}
        <div className="lg:hidden flex items-center justify-between py-2">
          <Link to="/" className="text-white font-bold text-[15px] no-underline">
            GRCP
          </Link>
          <button
            onClick={() => { setMobileOpen(!mobileOpen); setOpenMobile(null) }}
            className="text-white text-xl p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>

      {/* ── Mobile dropdown panel ── */}
      {mobileOpen && (
        <div
          className="lg:hidden w-full"
          style={{ backgroundColor: '#8c0f1e', maxHeight: '80vh', overflowY: 'auto' }}
        >
          {navItems.map((item, idx) => (
            <div key={idx} className="border-b border-[rgba(255,255,255,0.12)]">
              <button
                onClick={() => item.dropdown ? toggleMobileDropdown(idx) : null}
                className="w-full flex items-center justify-between text-white text-[13px] font-semibold px-4 py-3 hover:bg-[#7a0c17] transition-colors"
              >
                <span>{item.label}</span>
                {item.dropdown && (
                  <FaChevronDown
                    className={`text-[10px] transition-transform ${openMobile === idx ? 'rotate-180' : ''}`}
                  />
                )}
              </button>

              {/* Mobile sub-menu */}
              {item.dropdown && openMobile === idx && (
                <ul className="bg-[#6e0b15] pb-1">
                  {item.dropdown.map((sub, si) => (
                    <li key={si}>
                      <NavLink
                        href={sub.href}
                        className="flex items-center gap-2 text-white text-[13px] px-7 py-2 hover:bg-[#5e0910] no-underline border-b border-[rgba(255,255,255,0.08)]"
                        onClick={closeMobile}
                      >
                        <FaChevronRight className="text-[9px] text-[#ffaab0]" />
                        {sub.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}
