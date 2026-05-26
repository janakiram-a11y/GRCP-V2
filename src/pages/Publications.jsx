// Publications.jsx — Route: /research/publications
// Year tabs → stats summary + faculty breakdown table for 2024-25

import { useState } from 'react'
import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { publicationYears } from '../data/researchData'

const TH = {
  padding: '10px 14px',
  fontSize: '13px',
  fontWeight: '600',
  color: '#fff',
  backgroundColor: '#a41425',
  border: '1px solid #8c0f1e',
  textAlign: 'center',
  whiteSpace: 'nowrap',
}

const TD = {
  padding: '9px 12px',
  fontSize: '13px',
  color: '#212529',
  border: '1px solid #dee2e6',
  verticalAlign: 'middle',
}

function StatPill({ label, value, highlight }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 20px',
        borderRadius: '6px',
        minWidth: '110px',
        flex: '1',
        backgroundColor: highlight ? '#a41425' : '#fff',
        color: highlight ? '#fff' : '#383838',
        border: highlight ? 'none' : '1px solid #dee2e6',
        boxShadow: highlight ? '0 2px 8px rgba(164,20,37,0.25)' : '0 1px 3px rgba(0,0,0,0.06)',
        textAlign: 'center',
      }}
    >
      <span style={{ fontSize: '26px', fontWeight: '700', lineHeight: '1.1' }}>{value ?? '—'}</span>
      <span style={{
        fontSize: '11px',
        fontWeight: '600',
        marginTop: '5px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        opacity: highlight ? 0.9 : 0.7,
      }}>
        {label}
      </span>
    </div>
  )
}

export default function Publications() {
  const [activeYear, setActiveYear] = useState(publicationYears[0].year)
  const yearData = publicationYears.find(y => y.year === activeYear)
  const hasStats = yearData.stats.total !== null
  const hasFaculty = yearData.faculty && yearData.faculty.length > 0

  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="PUBLICATIONS" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* ── Year Tabs ── */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', borderBottom: '2px solid #a41425', marginBottom: '0' }}>
              {publicationYears.map(y => (
                <button
                  key={y.year}
                  onClick={() => setActiveYear(y.year)}
                  style={{
                    padding: '8px 18px',
                    fontSize: '14px',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '4px 4px 0 0',
                    transition: 'background 0.15s',
                    backgroundColor: activeYear === y.year ? '#a41425' : '#f8f9fa',
                    color: activeYear === y.year ? '#fff' : '#383838',
                    outline: 'none',
                  }}
                >
                  {y.year}
                </button>
              ))}
            </div>

            {/* ── Year Content ── */}
            <div style={{ border: '1px solid #dee2e6', borderTop: 'none', padding: '24px', backgroundColor: '#fff', marginBottom: '16px' }}>

              {/* Stats pills */}
              {hasStats && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
                  <StatPill label="Total" value={yearData.stats.total} highlight />
                  <StatPill label="Scopus" value={yearData.stats.scopus} />
                  <StatPill label="Web of Science" value={yearData.stats.wos} />
                  <StatPill label="UGC Approved" value={yearData.stats.ugc} />
                  <StatPill label="Non-Indexed" value={yearData.stats.nonIndexed} />
                </div>
              )}

              {/* Faculty breakdown table */}
              {hasFaculty ? (
                <>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#a41425', marginBottom: '12px' }}>
                    Faculty-wise Publication Summary
                  </h3>
                  <div className="overflow-x-auto">
                    <table
                      className="w-full bg-white"
                      style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}
                    >
                      <thead>
                        <tr>
                          <th style={{ ...TH, width: '60px' }}>S.No.</th>
                          <th style={{ ...TH, textAlign: 'left' }}>Faculty Name</th>
                          <th style={TH}>Scopus</th>
                          <th style={TH}>WoS</th>
                          <th style={TH}>UGC</th>
                          <th style={TH}>Non-Indexed</th>
                          <th style={{ ...TH, backgroundColor: '#8c0f1e' }}>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {yearData.faculty.map((row, i) => (
                          <tr key={row.sno} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                            <td style={{ ...TD, textAlign: 'center', fontWeight: '500' }}>{row.sno}</td>
                            <td style={{ ...TD, fontWeight: '600', color: '#383838' }}>{row.name}</td>
                            <td style={{ ...TD, textAlign: 'center' }}>{row.scopus || '—'}</td>
                            <td style={{ ...TD, textAlign: 'center' }}>{row.wos || '—'}</td>
                            <td style={{ ...TD, textAlign: 'center' }}>{row.ugc || '—'}</td>
                            <td style={{ ...TD, textAlign: 'center' }}>{row.nonIndexed || '—'}</td>
                            <td style={{ ...TD, textAlign: 'center', fontWeight: '700', color: row.total > 0 ? '#a41425' : '#6c757d' }}>
                              {row.total || '—'}
                            </td>
                          </tr>
                        ))}
                        {/* Total row */}
                        {hasStats && (
                          <tr style={{ backgroundColor: '#a41425' }}>
                            <td colSpan={2} style={{ ...TD, fontWeight: '700', color: '#fff', border: '1px solid #8c0f1e', textAlign: 'right' }}>
                              TOTAL
                            </td>
                            <td style={{ ...TD, textAlign: 'center', fontWeight: '700', color: '#fff', border: '1px solid #8c0f1e' }}>{yearData.stats.scopus}</td>
                            <td style={{ ...TD, textAlign: 'center', fontWeight: '700', color: '#fff', border: '1px solid #8c0f1e' }}>{yearData.stats.wos}</td>
                            <td style={{ ...TD, textAlign: 'center', fontWeight: '700', color: '#fff', border: '1px solid #8c0f1e' }}>{yearData.stats.ugc}</td>
                            <td style={{ ...TD, textAlign: 'center', fontWeight: '700', color: '#fff', border: '1px solid #8c0f1e' }}>{yearData.stats.nonIndexed}</td>
                            <td style={{ ...TD, textAlign: 'center', fontWeight: '700', color: '#fff', border: '1px solid #8c0f1e', fontSize: '16px' }}>{yearData.stats.total}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : (
                <div style={{
                  padding: '32px',
                  textAlign: 'center',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '6px',
                  border: '1px dashed #dee2e6',
                }}>
                  <p style={{ fontSize: '15px', color: '#6c757d', fontWeight: '500', margin: 0 }}>
                    Detailed publication records for <strong style={{ color: '#a41425' }}>{activeYear}</strong> will be updated shortly.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
