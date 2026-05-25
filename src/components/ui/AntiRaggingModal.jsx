// AntiRaggingModal
// Auto-shows on page load. Closes on: × button click, overlay click, or Escape key.
// Pixel-close recreation of the original grcp.ac.in popup.

import { useEffect, useCallback } from 'react'
import { FaTimes } from 'react-icons/fa'

export default function AntiRaggingModal({ onClose }) {
  // Close on Escape key
  const handleKeyDown = useCallback(
    (e) => { if (e.key === 'Escape') onClose() },
    [onClose]
  )
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    // Prevent body scroll while modal is open
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
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={onClose}               /* click outside → close */
      role="dialog"
      aria-modal="true"
      aria-labelledby="anti-ragging-title"
    >
      {/* ── Modal box ── */}
      <div
        className="relative bg-white w-full max-w-[600px] max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl"
        style={{ border: '1px solid #ccc' }}
        onClick={(e) => e.stopPropagation()}   /* prevent overlay close on inner click */
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 z-10 text-gray-700 hover:text-black text-xl leading-none font-bold w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
        >
          <FaTimes className="text-[16px]" />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8 pr-10 text-[15px] leading-relaxed" style={{ color: '#383838' }}>

          {/* ── Title block ── */}
          <h2
            id="anti-ragging-title"
            className="text-[24px] font-bold mb-1 pr-4"
            style={{ color: '#383838' }}
          >
            National Ragging Prevention Programme
          </h2>
          <p className="text-[15px] font-medium mb-4" style={{ color: '#383838' }}>National Anti-Ragging Helpline</p>

          {/* ── Helpline number ── */}
          <p className="text-[15px] font-medium mb-0.5" style={{ color: '#383838' }}>24X7 Toll Free</p>
          <p className="font-bold text-[15px] mb-5" style={{ color: '#383838' }}>1800-180-5522</p>

          {/* ── UGC Monitoring Agency ── */}
          <h3 className="text-[24px] font-medium mb-1" style={{ color: '#383838' }}>
            UGC Monitoring Agency
          </h3>
          <p className="text-[15px] font-medium mb-1" style={{ color: '#383838' }}>Centre for Youth (C4Y)</p>
          <p className="mb-5">
            <a
              href="mailto:antiragging@c4yindia.org"
              className="text-blue-600 hover:underline"
            >
              antiragging@c4yindia.org
            </a>
            {' | '}
            <a
              href="https://www.c4yindia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.c4yindia.org
            </a>
          </p>

          {/* ── Nodal officers ── */}
          <p className="text-[15px] font-bold mb-3" style={{ color: '#383838' }}>
            Contact Details of the Nodal Officers of Anti-Ragging Committee
            and Squad
          </p>
          <p className="mb-5">
            <a href="#" className="text-blue-600 hover:underline">
              Anti-Ragging Committee (ARC)
            </a>
            {' | '}
            <a href="#" className="text-blue-600 hover:underline">
              Anti-Ragging Squad (ARS)
            </a>
          </p>

          {/* ── Warning ── */}
          <p
            className="text-[15px] font-bold mb-4 leading-snug"
            style={{ color: '#a41425' }}
          >
            Ragging is a criminal offence and the culprits will attract
            punitive action as mentioned in the UGC Regulations
          </p>

          {/* ── PDF link ── */}
          <a href="#" className="text-blue-600 hover:underline text-[15px] font-medium">
            UGC Regulations PDF
          </a>

        </div>
      </div>
    </div>
  )
}
