// FacultyCard — displays a single faculty member's profile card.
// Used in FacultyList.jsx. Photo URL spaces are encoded before use.

import { FaEnvelope, FaFilePdf } from 'react-icons/fa'

const FALLBACK = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="140" viewBox="0 0 120 140"><rect width="120" height="140" fill="%23f2f4f8"/><circle cx="60" cy="52" r="28" fill="%23dee2e6"/><ellipse cx="60" cy="110" rx="42" ry="28" fill="%23dee2e6"/></svg>'

function photoUrl(path) {
  if (!path) return FALLBACK
  // Encode spaces in the filename
  return 'https://grcp.ac.in/' + path.replace(/ /g, '%20')
}

function cvUrl(path) {
  if (!path) return null
  return 'https://grcp.ac.in/' + path.replace(/ /g, '%20')
}

export default function FacultyCard({ member }) {
  const { sno, name, qualification, department, designation, experience, email, photo, cv } = member

  return (
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #dee2e6',
        borderRadius: '4px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(164,20,37,0.15)' }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)' }}
    >
      {/* Photo */}
      <div style={{ backgroundColor: '#f2f4f8', textAlign: 'center', padding: '20px 0 12px' }}>
        <img
          src={photoUrl(photo)}
          alt={name}
          onError={e => { e.currentTarget.src = FALLBACK }}
          style={{
            width: '110px',
            height: '130px',
            objectFit: 'cover',
            objectPosition: 'top',
            border: '2px solid #dee2e6',
            borderRadius: '2px',
          }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: '14px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {/* S.No badge + Name */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', marginBottom: '2px' }}>
          <span style={{
            backgroundColor: '#a41425', color: '#fff',
            fontSize: '11px', fontWeight: '700',
            padding: '2px 6px', borderRadius: '2px', flexShrink: 0,
          }}>{sno}</span>
          <p style={{ fontSize: '14px', fontWeight: '700', color: '#a41425', margin: 0, lineHeight: '1.3' }}>
            {name}
          </p>
        </div>

        <p style={{ fontSize: '12px', fontWeight: '600', color: '#383838', margin: 0 }}>
          {designation}
        </p>

        <p style={{ fontSize: '12px', color: '#6c757d', margin: 0, fontWeight: '500' }}>
          {department}
        </p>

        <div style={{ borderTop: '1px solid #f0f0f0', marginTop: '8px', paddingTop: '8px' }}>
          <InfoRow label="Qualification" value={qualification} />
          <InfoRow label="Experience"   value={experience}    />
          {email && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '6px' }}>
              <FaEnvelope style={{ color: '#a41425', fontSize: '11px', flexShrink: 0 }} />
              <a
                href={`mailto:${email}`}
                style={{ fontSize: '11px', color: '#0d6efd', textDecoration: 'none', wordBreak: 'break-all' }}
                onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
                onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
              >
                {email}
              </a>
            </div>
          )}
          {cvUrl(cv) && (
            <div style={{ marginTop: '10px' }}>
              <a
                href={cvUrl(cv)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  backgroundColor: '#a41425', color: '#fff',
                  padding: '4px 12px', borderRadius: '3px',
                  fontSize: '11px', fontWeight: '600', textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8c0f1e' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#a41425' }}
              >
                <FaFilePdf style={{ fontSize: '11px' }} />
                Download CV
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function InfoRow({ label, value }) {
  if (!value || value === '—') return null
  return (
    <div style={{ display: 'flex', gap: '4px', marginBottom: '3px' }}>
      <span style={{ fontSize: '11px', fontWeight: '700', color: '#6c757d', flexShrink: 0, minWidth: '76px' }}>
        {label}:
      </span>
      <span style={{ fontSize: '11px', color: '#383838', fontWeight: '500' }}>{value}</span>
    </div>
  )
}
