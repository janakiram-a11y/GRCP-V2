// Navbar — sticky crimson bar with dropdown menus + nested sub-dropdown + mobile hamburger.
// Desktop behaviour matches grcp.ac.in (stellarnav):
//   • Top-level hover  → #f2d2a6 bg + #a41425 text
//   • First dropdown   → #a41425 bg, white text, » prefix on each item
//   • Sub-dropdown     → #fae2c1 cream bg (fly-out right), dark text
// Mobile: accordion — top-level → first-level → second-level (three tiers).

import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaChevronRight,
  FaAngleDoubleRight,
} from 'react-icons/fa'
import { navItems } from '../../data/navData'

// Render React Router Link for internal paths, plain <a> for external / #
// External links (http/https) open in a new tab automatically.
// Extra props (onMouseEnter, onMouseLeave, etc.) are forwarded via rest spread.
function NavLink({ href, className, style, children, onClick, ...rest }) {
  if (href && href.startsWith('/')) {
    return (
      <Link to={href} className={className} style={style} onClick={onClick} {...rest}>
        {children}
      </Link>
    )
  }
  const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'))
  return (
    <a
      href={href || '#'}
      className={className}
      style={style}
      onClick={onClick}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  )
}

// ── Inline styles for top-level nav links ──────────────────────────────────────
const TOP_LINK_BASE = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  color: '#fff',
  fontSize: '14px',
  fontWeight: '600',
  padding: '10px 10px',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  transition: 'background 0.2s, color 0.2s',
  borderRight: '1px solid rgba(175,50,50,0.6)',
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [openMobile, setOpenMobile]     = useState(null)   // top-level open index
  const [openMobileSub, setOpenMobileSub] = useState(null) // "topIdx-subIdx" key

  const navRef = useRef(null)

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false)
        setOpenMobile(null)
        setOpenMobileSub(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const toggleMobileDropdown = (idx) => {
    setOpenMobile(prev => (prev === idx ? null : idx))
    setOpenMobileSub(null)
  }

  const toggleMobileSub = (key) => {
    setOpenMobileSub(prev => (prev === key ? null : key))
  }

  const closeMobile = () => {
    setMobileOpen(false)
    setOpenMobile(null)
    setOpenMobileSub(null)
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

              {/* Top-level link */}
              <NavLink
                href={item.href}
                style={TOP_LINK_BASE}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#f2d2a6'
                  e.currentTarget.style.color = '#a41425'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = ''
                  e.currentTarget.style.color = '#fff'
                }}
              >
                {item.label}
                {item.dropdown && (
                  <FaChevronDown style={{ fontSize: '9px', marginTop: '1px' }} />
                )}
              </NavLink>

              {/* ── First-level dropdown ── */}
              {item.dropdown && (
                <ul className="nav-dropdown">
                  {item.dropdown.map((sub, si) => (
                    <li key={si}>
                      <NavLink href={sub.href}>
                        {/* » prefix icon */}
                        <FaAngleDoubleRight style={{ fontSize: '9px', flexShrink: 0 }} />
                        {/* Label — grows to push ► to far right */}
                        <span style={{ flex: 1 }}>{sub.label}</span>
                        {/* ► indicator when this item has a sub-dropdown */}
                        {sub.submenu && (
                          <FaChevronRight style={{ fontSize: '8px', marginLeft: '8px', flexShrink: 0 }} />
                        )}
                      </NavLink>

                      {/* ── Second-level sub-dropdown (fly-out right) ── */}
                      {sub.submenu && (
                        <ul className="nav-subdropdown">
                          {sub.submenu.map((ssub, ssi) => (
                            <li key={ssi}>
                              <NavLink href={ssub.href}>
                                <FaAngleDoubleRight style={{ fontSize: '9px', flexShrink: 0 }} />
                                {ssub.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
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
            onClick={() => { setMobileOpen(!mobileOpen); setOpenMobile(null); setOpenMobileSub(null) }}
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
            <div key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>

              {/* Top-level row */}
              <button
                onClick={() => item.dropdown ? toggleMobileDropdown(idx) : closeMobile()}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: '#fff',
                  fontSize: '13px',
                  fontWeight: '600',
                  padding: '12px 16px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
              >
                <span>{item.label}</span>
                {item.dropdown && (
                  <FaChevronDown
                    style={{
                      fontSize: '10px',
                      transition: 'transform 0.25s',
                      transform: openMobile === idx ? 'rotate(180deg)' : 'none',
                    }}
                  />
                )}
              </button>

              {/* First-level mobile sub-menu */}
              {item.dropdown && openMobile === idx && (
                <div style={{ backgroundColor: '#7a0c17' }}>
                  {item.dropdown.map((sub, si) => {
                    const subKey = `${idx}-${si}`
                    return (
                      <div key={si}>
                        {/* Sub-item row */}
                        {sub.submenu ? (
                          <button
                            onClick={() => toggleMobileSub(subKey)}
                            style={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              color: '#fff',
                              fontSize: '13px',
                              fontWeight: '500',
                              padding: '9px 28px',
                              background: 'transparent',
                              border: 'none',
                              borderBottom: '1px solid rgba(255,255,255,0.07)',
                              cursor: 'pointer',
                              textTransform: 'uppercase',
                              textAlign: 'left',
                            }}
                          >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                              <FaAngleDoubleRight style={{ fontSize: '9px', color: '#ffaab0' }} />
                              {sub.label}
                            </span>
                            <FaChevronDown
                              style={{
                                fontSize: '9px',
                                transition: 'transform 0.25s',
                                transform: openMobileSub === subKey ? 'rotate(180deg)' : 'none',
                              }}
                            />
                          </button>
                        ) : (
                          <NavLink
                            href={sub.href}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '7px',
                              color: '#fff',
                              fontSize: '13px',
                              padding: '9px 28px',
                              borderBottom: '1px solid rgba(255,255,255,0.07)',
                              textDecoration: 'none',
                              textTransform: 'uppercase',
                            }}
                            onClick={closeMobile}
                          >
                            <FaAngleDoubleRight style={{ fontSize: '9px', color: '#ffaab0' }} />
                            {sub.label}
                          </NavLink>
                        )}

                        {/* Second-level mobile sub-submenu */}
                        {sub.submenu && openMobileSub === subKey && (
                          <div style={{ backgroundColor: '#6e0b15' }}>
                            {sub.submenu.map((ssub, ssi) => (
                              <NavLink
                                key={ssi}
                                href={ssub.href}
                                style={{
                                  display: 'block',
                                  color: '#fae2c1',
                                  fontSize: '12px',
                                  padding: '8px 40px',
                                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                                  textDecoration: 'none',
                                  textTransform: 'uppercase',
                                }}
                                onClick={closeMobile}
                              >
                                {ssub.label}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}

            </div>
          ))}
        </div>
      )}
    </nav>
  )
}
