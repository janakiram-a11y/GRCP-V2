// AntiRaggingModal
// Auto-shows on page load. Closes on: × button click, overlay click, or Escape key.
// Pixel-close recreation of the original grcp.ac.in popup.

import { useEffect, useCallback } from 'react'

export default function AntiRaggingModal({ onClose }) {
  const handleKeyDown = useCallback(
    (e) => { if (e.key === 'Escape') onClose() },
    [onClose]
  )
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  return (
    /* ── Overlay ── */
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="anti-ragging-title"
    >
      {/* ── Modal box ── */}
      <div
        className="relative bg-white w-full max-w-[600px] max-h-[90vh] overflow-y-auto"
        style={{
          border: '3px solid #d31329',
          borderRadius: '4px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button — plain × character, top-right */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '10px',
            right: '14px',
            fontSize: '22px',
            fontWeight: '400',
            lineHeight: 1,
            color: '#555',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0',
            zIndex: 10,
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#000'}
          onMouseLeave={e => e.currentTarget.style.color = '#555'}
        >
          &#x00D7;
        </button>

        {/* Content */}
        <div
          style={{
            padding: '24px 28px 28px 28px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#212529',
          }}
        >

          {/* ── Title block ── */}
          <h2
            id="anti-ragging-title"
            style={{
              fontSize: '22px',
              fontWeight: '700',
              color: '#212529',
              marginBottom: '4px',
              paddingRight: '24px',
              lineHeight: '1.3',
            }}
          >
            National Ragging Prevention Programme
          </h2>
          <p style={{ fontSize: '14px', fontWeight: '400', color: '#212529', marginBottom: '16px' }}>
            National Anti-Ragging Helpline
          </p>

          {/* ── Helpline number ── */}
          <p style={{ fontSize: '14px', fontWeight: '400', color: '#212529', marginBottom: '2px' }}>
            24X7 Toll Free
          </p>
          <p style={{ fontSize: '14px', fontWeight: '700', color: '#212529', marginBottom: '20px' }}>
            1800-180-5522
          </p>

          {/* ── UGC Monitoring Agency ── */}
          <h3 style={{ fontSize: '20px', fontWeight: '400', color: '#212529', marginBottom: '4px', lineHeight: '1.3' }}>
            UGC Monitoring Agency
          </h3>
          <p style={{ fontSize: '14px', fontWeight: '400', color: '#212529', marginBottom: '4px' }}>
            Centre for Youth (C4Y)
          </p>
          <p style={{ marginBottom: '20px' }}>
            <a
              href="mailto:antiragging@c4yindia.org"
              style={{ color: '#0d6efd', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
            >
              antiragging@c4yindia.org
            </a>
            {' | '}
            <a
              href="https://www.c4yindia.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0d6efd', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
            >
              www.c4yindia.org
            </a>
          </p>

          {/* ── Nodal officers ── */}
          <p style={{ fontSize: '14px', fontWeight: '700', color: '#212529', marginBottom: '8px', lineHeight: '1.5' }}>
            Contact Details of the Nodal Officers of Anti-Ragging Committee and Squad
          </p>
          <p style={{ marginBottom: '20px' }}>
            <a
              href="#"
              style={{ color: '#0d6efd', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
            >
              Anti-Ragging Committee (ARC)
            </a>
            {' | '}
            <a
              href="#"
              style={{ color: '#0d6efd', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
            >
              Anti-Ragging Squad (ARS)
            </a>
          </p>

          {/* ── Warning ── */}
          <p style={{ fontSize: '14px', fontWeight: '700', color: '#d31329', marginBottom: '16px', lineHeight: '1.5' }}>
            Ragging is a criminal offence and the culprits will attract punitive
            action as mentioned in the UGC Regulations
          </p>

          {/* ── PDF link ── */}
          <a
            href="#"
            style={{ color: '#0d6efd', fontSize: '14px', fontWeight: '400', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
          >
            UGC Regulations PDF
          </a>

        </div>
      </div>
    </div>
  )
}
