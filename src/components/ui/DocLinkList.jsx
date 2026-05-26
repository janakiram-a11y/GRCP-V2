// DocLinkList — reusable PDF download card list.
// Used by: AcademicCalendar, SessionalTimetable, OuTimetables, OuNotifications, ExamResults.
// Each item: { label: string, href: string }
// buttonLabel: text for the action button (default "View / Download")

import { FaFilePdf } from 'react-icons/fa'

export default function DocLinkList({ items, buttonLabel = 'View / Download' }) {
  if (!items || items.length === 0) return null

  return (
    <div>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            backgroundColor: '#fff',
            border: '1px solid #dee2e6',
            borderRadius: '4px',
            marginBottom: '12px',
            gap: '16px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0 }}>
            <div
              style={{
                backgroundColor: '#a41425',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <FaFilePdf style={{ color: '#fff', fontSize: '18px' }} />
            </div>
            <span
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#383838',
                lineHeight: '1.4',
              }}
            >
              {item.label}
            </span>
          </div>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#a41425',
              color: '#fff',
              padding: '8px 20px',
              fontSize: '13px',
              fontWeight: '600',
              textDecoration: 'none',
              borderRadius: '3px',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8c0f1e' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#a41425' }}
          >
            {buttonLabel}
          </a>
        </div>
      ))}
    </div>
  )
}
