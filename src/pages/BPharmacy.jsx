// BPharmacy.jsx — Route: /programmes/b-pharmacy
// Replicates grcp.ac.in/b_pharmacy.php

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import {
  bPharmOverview,
  bPharmApprovals,
  bPharmCareerOptions,
  ugCommittee,
} from '../data/programmesData'

// ── Shared table styles ───────────────────────────────────────────────────────

const TH_STYLE = {
  padding: '10px 14px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#fff',
  backgroundColor: '#a41425',
  border: '1px solid #8c0f1e',
  textAlign: 'left',
  whiteSpace: 'nowrap',
}

const TD_STYLE = {
  padding: '10px 14px',
  fontSize: '14px',
  color: '#212529',
  border: '1px solid #dee2e6',
  verticalAlign: 'middle',
}

// ── Inline styles ─────────────────────────────────────────────────────────────

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

// ── Bullet list ───────────────────────────────────────────────────────────────

function BulletList({ items, ordered }) {
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
          <span style={{ color: '#a41425', fontWeight: '700', fontSize: '16px', lineHeight: '1.2', flexShrink: 0, minWidth: ordered ? '22px' : 'auto' }}>
            {ordered ? `${i + 1}.` : '›'}
          </span>
          <span style={{ fontWeight: '500' }}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BPharmacy() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="B.PHARMACY" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* ── Overview ── */}
            <h2 style={SECTION_HEADING}>B. Pharmacy Programme</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            {bPharmOverview.map((para, i) => (
              <p key={i} style={PARA}>{para}</p>
            ))}

            {/* ── Approvals ── */}
            <h2 style={{ ...SECTION_HEADING, marginTop: '28px' }}>Approvals &amp; Recognitions</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <BulletList items={bPharmApprovals} />

            {/* ── Career Scope ── */}
            <h2 style={{ ...SECTION_HEADING, marginTop: '28px' }}>Scope &amp; Career Opportunities</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <p style={{ ...PARA, marginBottom: '12px' }}>
              Pharmacists can pursue a wide range of roles in the pharmaceutical, healthcare, and research sectors.
              Registered pharmacists also have international career opportunities.
            </p>
            <BulletList items={bPharmCareerOptions} ordered />

            {/* ── UG Program Committee ── */}
            <h2 style={{ ...SECTION_HEADING, marginTop: '36px' }}>UG Program Committee (2025-26)</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '20px' }} />

            <div className="overflow-x-auto">
              <table
                className="w-full bg-white"
                style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}
              >
                <thead>
                  <tr>
                    <th style={{ ...TH_STYLE, width: '60px', textAlign: 'center' }}>S.No.</th>
                    <th style={TH_STYLE}>Name</th>
                    <th style={TH_STYLE}>Designation</th>
                    <th style={TH_STYLE}>Position</th>
                    <th style={TH_STYLE}>E-mail ID</th>
                  </tr>
                </thead>
                <tbody>
                  {ugCommittee.map((m, i) => (
                    <tr key={m.sno} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                      <td style={{ ...TD_STYLE, textAlign: 'center', fontWeight: '500' }}>{m.sno}</td>
                      <td style={{ ...TD_STYLE, fontWeight: '600', color: '#383838' }}>{m.name}</td>
                      <td style={TD_STYLE}>{m.designation}</td>
                      <td style={TD_STYLE}>{m.position}</td>
                      <td style={TD_STYLE}>
                        <a
                          href={`mailto:${m.email}`}
                          style={{ color: '#0d6efd', textDecoration: 'none' }}
                          onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
                          onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
                        >
                          {m.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
