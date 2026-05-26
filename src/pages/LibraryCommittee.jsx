// LibraryCommittee.jsx — Route: /academics/library
// Replicates grcp.ac.in/Library_Committee.php

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import {
  libraryDescription,
  libraryStats,
  libraryRules,
  libraryObjectives,
  libraryCommittee,
} from '../data/academicsData'

const TH = {
  padding: '10px 14px', fontSize: '14px', fontWeight: '600', color: '#fff',
  backgroundColor: '#a41425', border: '1px solid #8c0f1e', textAlign: 'left', whiteSpace: 'nowrap',
}
const TD = {
  padding: '10px 14px', fontSize: '14px', color: '#212529',
  border: '1px solid #dee2e6', verticalAlign: 'middle',
}

const SECTION_H = { fontSize: '20px', fontWeight: '700', color: '#a41425', marginBottom: '4px', marginTop: '32px' }

export default function LibraryCommittee() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="ABOUT GRCP LIBRARY" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* ── Stats pills ── */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
              {libraryStats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#a41425', color: '#fff',
                    borderRadius: '4px', padding: '12px 22px',
                    textAlign: 'center', minWidth: '130px',
                  }}
                >
                  <div style={{ fontSize: '22px', fontWeight: '700' }}>{s.value}</div>
                  <div style={{ fontSize: '11px', fontWeight: '600', opacity: 0.9, marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* ── Description ── */}
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#a41425', marginBottom: '4px' }}>About GRCP Library</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '14px' }} />
            <p style={{ fontSize: '15px', color: '#383838', lineHeight: '1.75', fontWeight: '500' }}>
              {libraryDescription}
            </p>

            {/* ── Library Rules ── */}
            <h2 style={SECTION_H}>Library Rules</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '14px' }} />
            <ol style={{ paddingLeft: '20px', margin: 0 }}>
              {libraryRules.map((rule, i) => (
                <li key={i} style={{ fontSize: '14px', color: '#383838', lineHeight: '1.65', fontWeight: '500', marginBottom: '8px' }}>
                  {rule}
                </li>
              ))}
            </ol>

            {/* ── Library Objectives ── */}
            <h2 style={SECTION_H}>Library Objectives</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '14px' }} />
            <ol style={{ paddingLeft: '20px', margin: 0 }}>
              {libraryObjectives.map((obj, i) => (
                <li key={i} style={{ fontSize: '14px', color: '#383838', lineHeight: '1.65', fontWeight: '500', marginBottom: '8px' }}>
                  {obj}
                </li>
              ))}
            </ol>

            {/* ── Committee Table ── */}
            <h2 style={SECTION_H}>Composition of Library Committee (2025-26)</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '20px' }} />
            <div className="overflow-x-auto">
              <table className="w-full bg-white" style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}>
                <thead>
                  <tr>
                    <th style={{ ...TH, width: '60px', textAlign: 'center' }}>Sl. No.</th>
                    <th style={TH}>Name</th>
                    <th style={TH}>Designation</th>
                    <th style={TH}>Position</th>
                    <th style={TH}>E-mail ID</th>
                  </tr>
                </thead>
                <tbody>
                  {libraryCommittee.map((m, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                      <td style={{ ...TD, textAlign: 'center', fontWeight: '500' }}>{i + 1}</td>
                      <td style={{ ...TD, fontWeight: '600', color: '#383838' }}>{m.name}</td>
                      <td style={TD}>{m.designation}</td>
                      <td style={TD}>{m.position}</td>
                      <td style={TD}>
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
