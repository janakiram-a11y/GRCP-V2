// QuestionPapers.jsx — Route: /examination/question-papers

import { useState } from 'react'
import { FaFilePdf } from 'react-icons/fa'
import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { bPharmQP, mPharmQP } from '../data/examinationData'

const TABS = [
  { id: 'bPharm', label: 'B.Pharmacy' },
  { id: 'mPharm', label: 'M.Pharmacy' },
]

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
  padding: '10px 12px',
  fontSize: '13px',
  color: '#212529',
  border: '1px solid #dee2e6',
  verticalAlign: 'middle',
  textAlign: 'center',
}

function PdfBtn({ href }) {
  if (!href) return <span style={{ color: '#adb5bd', fontSize: '12px' }}>—</span>
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        backgroundColor: '#a41425',
        color: '#fff',
        padding: '5px 12px',
        fontSize: '12px',
        fontWeight: '600',
        borderRadius: '3px',
        textDecoration: 'none',
      }}
      onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8c0f1e' }}
      onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#a41425' }}
    >
      <FaFilePdf style={{ fontSize: '11px' }} />
      View
    </a>
  )
}

const SECTION_HEAD = {
  fontSize: '18px',
  fontWeight: '700',
  color: '#fff',
  backgroundColor: '#a41425',
  padding: '5px 16px',
  borderRadius: '3px',
  display: 'inline-block',
  margin: '0',
}

export default function QuestionPapers() {
  const [active, setActive] = useState('bPharm')

  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="QUESTION PAPERS" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* ── Programme Tabs ── */}
            <div style={{ display: 'flex', gap: '4px', borderBottom: '2px solid #a41425', marginBottom: '0' }}>
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  style={{
                    padding: '9px 24px',
                    fontSize: '14px',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '4px 4px 0 0',
                    outline: 'none',
                    backgroundColor: active === tab.id ? '#a41425' : '#f8f9fa',
                    color: active === tab.id ? '#fff' : '#383838',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div style={{ border: '1px solid #dee2e6', borderTop: 'none', padding: '24px', backgroundColor: '#fff' }}>

              {/* ── B.Pharmacy table ── */}
              {active === 'bPharm' && (
                <>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#a41425', marginBottom: '14px' }}>
                    B.Pharmacy (PCI) Question Papers — Osmania University
                  </h3>
                  <div className="overflow-x-auto">
                    <table
                      className="w-full bg-white"
                      style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}
                    >
                      <thead>
                        <tr>
                          <th style={{ ...TH, textAlign: 'left', minWidth: '120px' }}>Semester</th>
                          {bPharmQP.years.map(yr => (
                            <th key={yr} style={TH}>{yr}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {bPharmQP.semesters.map((row, i) => (
                          <tr key={row.sem} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                            <td style={{ ...TD, textAlign: 'left', fontWeight: '600', color: '#383838' }}>
                              {row.sem}
                            </td>
                            {row.links.map((link, j) => (
                              <td key={j} style={TD}>
                                <PdfBtn href={link.href} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {/* ── M.Pharmacy grouped by specialisation ── */}
              {active === 'mPharm' && (
                <>
                  {mPharmQP.map(spec => (
                    <div key={spec.specialisation} style={{ marginBottom: '32px' }}>
                      <h2 style={SECTION_HEAD}>{spec.specialisation}</h2>
                      <hr style={{ borderColor: '#dee2e6', margin: '12px 0 14px' }} />
                      <div className="overflow-x-auto">
                        <table
                          className="w-full bg-white"
                          style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6', maxWidth: '500px' }}
                        >
                          <thead>
                            <tr>
                              <th style={{ ...TH, textAlign: 'left', minWidth: '140px' }}>Semester</th>
                              <th style={TH}>Question Paper</th>
                            </tr>
                          </thead>
                          <tbody>
                            {spec.semesters.map((s, i) => (
                              <tr key={s.sem} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                                <td style={{ ...TD, textAlign: 'left', fontWeight: '600', color: '#383838' }}>
                                  {s.sem}
                                </td>
                                <td style={TD}>
                                  <PdfBtn href={s.href} />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </>
              )}

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
