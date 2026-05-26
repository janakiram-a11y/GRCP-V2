// MPharmDeptPage — shared layout for all three M.Pharmacy specialisation pages.
// Accepts: bannerTitle (string), data (mPharmPharmaceuticsData / Analysis / Pharmacology shape)

import TopBar from '../../sections/TopBar'
import HeaderLogo from '../../sections/HeaderLogo'
import Navbar from '../layout/Navbar'
import SubPageBanner from '../layout/SubPageBanner'
import Footer from '../layout/Footer'

// ── Shared styles ─────────────────────────────────────────────────────────────

const SECTION_HEADING = {
  fontSize: '20px',
  fontWeight: '700',
  color: '#a41425',
  marginBottom: '4px',
}

const PARA = {
  fontSize: '15px',
  color: '#383838',
  lineHeight: '1.75',
  fontWeight: '500',
  marginBottom: '12px',
}

// ── Stat pill ─────────────────────────────────────────────────────────────────

function StatPill({ label, value }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#a41425',
        color: '#fff',
        borderRadius: '4px',
        padding: '12px 24px',
        minWidth: '140px',
        textAlign: 'center',
        marginRight: '12px',
        marginBottom: '12px',
      }}
    >
      <span style={{ fontSize: '20px', fontWeight: '700' }}>{value}</span>
      <span style={{ fontSize: '11px', fontWeight: '600', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.5px', opacity: 0.9 }}>
        {label}
      </span>
    </div>
  )
}

// ── Bullet list ───────────────────────────────────────────────────────────────

function BulletList({ items }) {
  return (
    <ul style={{ paddingLeft: '0', margin: '0' }}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px',
            fontSize: '14px',
            color: '#383838',
            padding: '5px 0',
            borderBottom: i < items.length - 1 ? '1px solid #f0f0f0' : 'none',
          }}
        >
          <span style={{ color: '#a41425', fontWeight: '700', fontSize: '16px', lineHeight: '1.2', flexShrink: 0 }}>›</span>
          <span style={{ fontWeight: '500' }}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function MPharmDeptPage({ bannerTitle, data }) {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title={bannerTitle} />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* ── Stats row ── */}
            <div style={{ marginBottom: '28px' }}>
              <StatPill label="Established" value={data.established} />
              <StatPill label="Annual Intake" value={data.intake} />
              <StatPill label="Duration" value={data.duration} />
            </div>

            {/* ── Overview ── */}
            <h2 style={SECTION_HEADING}>Department Overview</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            {data.overview.map((para, i) => (
              <p key={i} style={PARA}>{para}</p>
            ))}

            {/* ── Research Areas ── */}
            <h2 style={{ ...SECTION_HEADING, marginTop: '28px' }}>Research Focus Areas</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <BulletList items={data.researchAreas} />

            {/* ── Career Options ── */}
            <h2 style={{ ...SECTION_HEADING, marginTop: '28px' }}>Career Options</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <BulletList items={data.careerOptions} />

            {/* ── AICTE Grants (Pharmaceutics only) ── */}
            {data.aicteGrants && (
              <>
                <h2 style={{ ...SECTION_HEADING, marginTop: '28px' }}>AICTE Grants</h2>
                <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
                <p style={PARA}>{data.aicteGrants}</p>
              </>
            )}

            {/* ── Achievements (Pharmacology only) ── */}
            {data.achievements && (
              <>
                <h2 style={{ ...SECTION_HEADING, marginTop: '28px' }}>Notable Achievements</h2>
                <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
                <BulletList items={data.achievements} />
              </>
            )}

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
