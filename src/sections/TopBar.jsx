// TopBar — two rows:
//   Row 1: Announcement bar  [🔔 ANNOUNCEMENTS | scrolling items with NEW badges]
//   Row 2: [counselling-code ticker | E-Bulletin  Downloads  Contact Us | search]

import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaTimes, FaBell } from 'react-icons/fa'
import { topAnnouncements } from '../data/homeData'

const CSE_CX = '66993f482ec0044f8'

// ─────────────────────────────────────────────────────────────
//  LOI Modal — "Deemed-to-be University – LOI Received"
// ─────────────────────────────────────────────────────────────
function LOIModal({ onClose }) {
  // Close on Escape key; lock body scroll while open
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    /* Overlay */
    <div
      className="modal-overlay-enter"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="loi-modal-title"
      style={{
        position: 'fixed', inset: 0, zIndex: 10002,
        backgroundColor: 'rgba(0,0,0,0.55)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
      }}
    >
      {/* Modal box */}
      <div
        className="modal-box-enter"
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative',
          backgroundColor: '#fff',
          borderRadius: '14px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.32)',
          width: '100%',
          maxWidth: '520px',
          padding: '28px 32px 28px',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        {/* ── × close button — top-right ── */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: '14px', right: '18px',
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '22px', lineHeight: 1, color: '#9ca3af',
            padding: '2px 6px',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#374151' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af' }}
        >
          &#x00D7;
        </button>

        {/* ── Header row: logo + NEW badge ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
          <img
            src="https://grcp.ac.in/images/logo.png"
            alt="GRCP"
            style={{ height: '40px', width: 'auto', objectFit: 'contain', flexShrink: 0 }}
            onError={e => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextSibling.style.display = 'flex'
            }}
          />
          {/* Fallback emblem if image fails */}
          <div style={{
            display: 'none', width: '40px', height: '40px', borderRadius: '50%',
            backgroundColor: '#a41425', color: '#fff',
            alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', fontWeight: '800', flexShrink: 0,
          }}>
            G
          </div>

          <span style={{
            display: 'inline-block',
            backgroundColor: '#f59e0b',
            color: '#fff',
            fontSize: '11px',
            fontWeight: '800',
            letterSpacing: '0.5px',
            padding: '3px 10px',
            borderRadius: '3px',
          }}>
            NEW
          </span>
        </div>

        {/* ── Body paragraphs ── */}
        <p
          id="loi-modal-title"
          style={{
            fontSize: '15px', lineHeight: '1.75',
            color: '#212529', margin: '0 0 18px',
          }}
        >
          We are pleased to inform you that the{' '}
          <strong style={{ color: '#6b1525' }}>Ministry of Education</strong>,
          upon the recommendation of the University Grants Commission (UGC), has
          issued a{' '}
          <strong style={{ color: '#6b1525' }}>Letter of Intent (LoI)</strong>{' '}
          to{' '}
          <strong style={{ color: '#6b1525' }}>GRCP</strong>.
        </p>

        <p style={{
          fontSize: '15px', lineHeight: '1.75',
          color: '#212529', margin: '0 0 28px',
        }}>
          This signifies that GRCP has been invited to fulfil the necessary
          requirements toward being granted{' '}
          <strong style={{ color: '#6b1525' }}>Deemed-to-be University</strong>{' '}
          status.
        </p>

        {/* ── Close button ── */}
        <button
          onClick={onClose}
          style={{
            backgroundColor: '#3d1221',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '10px 28px',
            fontSize: '14px',
            fontWeight: '700',
            cursor: 'pointer',
            letterSpacing: '0.2px',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2a0c17' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#3d1221' }}
        >
          Close
        </button>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
//  Google CSE Search Modal
// ─────────────────────────────────────────────────────────────
function SearchModal({ query: initialQuery, onClose }) {
  const [query, setQuery] = useState(initialQuery)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const searchUrl = `https://cse.google.com/cse?cx=${CSE_CX}&q=${encodeURIComponent(query)}`

  const handleSubmit = e => {
    e.preventDefault()
    setQuery(e.target.elements.q.value.trim() || query)
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 10001,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', paddingTop: '60px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: '860px',
          backgroundColor: '#fff',
          borderRadius: '6px',
          overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
          display: 'flex', flexDirection: 'column',
          maxHeight: 'calc(100vh - 100px)',
        }}
      >
        {/* Modal header / search bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '12px 16px', borderBottom: '1px solid #dee2e6',
          backgroundColor: '#f8f9fa',
        }}>
          <FaSearch style={{ color: '#a41425', flexShrink: 0 }} />
          <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', gap: '8px' }}>
            <input
              ref={inputRef}
              name="q"
              defaultValue={query}
              placeholder="Search GRCP…"
              style={{
                flex: 1, border: '1px solid #dee2e6', borderRadius: '3px',
                padding: '6px 10px', fontSize: '14px', outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: '#a41425', color: '#fff', border: 'none',
                borderRadius: '3px', padding: '6px 14px',
                fontSize: '13px', fontWeight: '600', cursor: 'pointer',
              }}
            >
              Search
            </button>
          </form>
          <span style={{ fontSize: '11px', color: '#999', whiteSpace: 'nowrap' }}>
            enhanced by Google
          </span>
          <button
            onClick={onClose}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#6c757d', fontSize: '18px', lineHeight: 1, padding: '2px',
            }}
            aria-label="Close search"
          >
            <FaTimes />
          </button>
        </div>

        {/* Google CSE results iframe */}
        <iframe
          key={query}
          src={searchUrl}
          title="GRCP Search Results"
          style={{ flex: 1, border: 'none', minHeight: '480px', width: '100%' }}
        />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
//  Single announcement item
// ─────────────────────────────────────────────────────────────
function AnnItem({ item, onModalOpen }) {
  const textStyle = {
    fontSize: '12.5px', color: '#212529',
    textDecoration: 'none', fontWeight: '500',
    background: 'none', border: 'none',
    cursor: item.modal ? 'pointer' : 'default',
    padding: 0, fontFamily: 'inherit',
  }

  const handleMouseEnter = e => { e.currentTarget.style.color = '#a41425' }
  const handleMouseLeave = e => { e.currentTarget.style.color = '#212529' }

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
      {item.modal ? (
        /* Clickable button — opens modal */
        <button
          style={textStyle}
          onClick={() => onModalOpen(item.modal)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {item.text}
        </button>
      ) : (
        /* Regular link */
        <a
          href={item.href}
          style={textStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {item.text}
        </a>
      )}

      {item.isNew && (
        <span style={{
          display: 'inline-block', marginLeft: '6px',
          padding: '1px 6px', backgroundColor: '#f59e0b',
          color: '#fff', fontSize: '10px', fontWeight: '700',
          borderRadius: '2px', letterSpacing: '0.3px',
        }}>
          NEW
        </span>
      )}
      <span style={{ margin: '0 18px', color: '#dee2e6', userSelect: 'none' }}>|</span>
    </span>
  )
}

// ─────────────────────────────────────────────────────────────
//  Announcement bar (row 1 of TopBar)
// ─────────────────────────────────────────────────────────────
function AnnouncementBar() {
  const [activeModal, setActiveModal] = useState(null)  // 'loi' | null

  return (
    <>
      <div
        className="w-full"
        style={{ backgroundColor: '#fff', borderBottom: '1px solid #e5e7eb' }}
      >
        <div
          className="max-w-[1320px] mx-auto"
          style={{ display: 'flex', alignItems: 'stretch', height: '34px', overflow: 'hidden' }}
        >
          {/* Static "ANNOUNCEMENTS" badge */}
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              backgroundColor: '#a41425', color: '#fff',
              padding: '0 16px',
              fontSize: '12px', fontWeight: '700',
              whiteSpace: 'nowrap', flexShrink: 0,
              letterSpacing: '0.5px',
            }}
          >
            <FaBell style={{ fontSize: '13px' }} />
            ANNOUNCEMENTS
          </div>

          {/* Vertical separator */}
          <div style={{ width: '1px', backgroundColor: '#dee2e6', flexShrink: 0 }} />

          {/* Scrolling items */}
          <div style={{ flex: 1, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
            <div className="announce-scroll-track">
              {/* Set 1 */}
              {topAnnouncements.map((item, idx) => (
                <AnnItem key={`a-${idx}`} item={item} onModalOpen={setActiveModal} />
              ))}
              {/* Full-viewport spacer keeps the two sets from being simultaneously visible */}
              <span style={{ display: 'inline-block', width: '100vw', flexShrink: 0 }} />
              {/* Set 2 — seamless loop copy */}
              {topAnnouncements.map((item, idx) => (
                <AnnItem key={`b-${idx}`} item={item} onModalOpen={setActiveModal} />
              ))}
              <span style={{ display: 'inline-block', width: '100vw', flexShrink: 0 }} />
            </div>
          </div>
        </div>
      </div>

      {/* LOI Modal */}
      {activeModal === 'loi' && <LOIModal onClose={() => setActiveModal(null)} />}
    </>
  )
}

// ─────────────────────────────────────────────────────────────
//  TopBar (row 2 — links + search)
// ─────────────────────────────────────────────────────────────
export default function TopBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [modalQuery,  setModalQuery]  = useState(null)

  const openSearch = q => { if (q.trim()) setModalQuery(q.trim()) }
  const handleKeyDown = e => { if (e.key === 'Enter') openSearch(searchQuery) }

  return (
    <>
      <AnnouncementBar />

      <div className="w-full bg-[#f8f9fa] border-b border-gray-200">
        <div className="max-w-[1320px] mx-auto px-3 flex flex-wrap items-center justify-between gap-1 py-1 text-[13px]">

          {/* Left – counselling codes ticker */}
          <div className="flex items-center gap-2 overflow-hidden max-w-[260px]">
            <span className="bg-[#7fffd4] text-[#333] text-[11px] px-2 py-0.5 rounded-sm whitespace-nowrap font-medium">
              TG PGECET counselling code:&nbsp;
              <strong className="text-[#a41425]">GRCP1</strong>
            </span>
          </div>

          {/* Center – quick nav links */}
          <div className="flex items-center gap-0 text-[14px] font-bold" style={{ color: '#ab070e' }}>
            <Link to="/e-bulletin" className="px-[10px] hover:underline" style={{ color: '#ab070e' }}>GRCP E-Bulletin</Link>
            <span className="text-gray-400">|</span>
            <Link to="/downloads"  className="px-[10px] hover:underline" style={{ color: '#ab070e' }}>Downloads</Link>
            <span className="text-gray-400">|</span>
            <Link to="/contact-us" className="px-[10px] hover:underline" style={{ color: '#ab070e' }}>Contact Us</Link>
          </div>

          {/* Right – Google search bar */}
          <div
            className="flex items-center border border-gray-300 rounded bg-white overflow-hidden"
            style={{ cursor: 'text' }}
          >
            <button
              onClick={() => openSearch(searchQuery)}
              className="px-2 text-gray-500 text-sm bg-transparent border-none cursor-pointer"
              aria-label="Search"
            >
              <FaSearch />
            </button>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="enhanced by Google"
              className="text-[12px] px-1 py-1 w-[170px] outline-none bg-transparent placeholder-gray-400 text-gray-700"
            />
          </div>

        </div>
      </div>

      {/* Search results modal */}
      {modalQuery !== null && (
        <SearchModal query={modalQuery} onClose={() => setModalQuery(null)} />
      )}
    </>
  )
}
