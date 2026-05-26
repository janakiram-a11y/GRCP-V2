// ResearchAtGRCP.jsx — Route: /research/research-at-grcp
// Tabbed department sections + Academic Research Committee table

import { useState } from 'react'
import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { researchDepts, academicResearchCommittee } from '../data/researchData'

const TH = {
  padding: '10px 14px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#fff',
  backgroundColor: '#a41425',
  border: '1px solid #8c0f1e',
  textAlign: 'left',
  whiteSpace: 'nowrap',
}

const TD = {
  padding: '10px 14px',
  fontSize: '14px',
  color: '#212529',
  border: '1px solid #dee2e6',
  verticalAlign: 'middle',
}

const SECTION_HEAD = {
  fontSize: '20px',
  fontWeight: '700',
  color: '#a41425',
  marginBottom: '4px',
}

export default function ResearchAtGRCP() {
  const [activeTab, setActiveTab] = useState(researchDepts[0].id)

  const activeDept = researchDepts.find(d => d.id === activeTab)

  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="RESEARCH @ GRCP" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* ── Department Tabs ── */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '0', borderBottom: '2px solid #a41425' }}>
              {researchDepts.map(dept => (
                <button
                  key={dept.id}
                  onClick={() => setActiveTab(dept.id)}
                  style={{
                    padding: '9px 20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '4px 4px 0 0',
                    transition: 'background 0.15s',
                    backgroundColor: activeTab === dept.id ? '#a41425' : '#f8f9fa',
                    color: activeTab === dept.id ? '#fff' : '#383838',
                    outline: 'none',
                  }}
                >
                  {dept.label}
                </button>
              ))}
            </div>

            {/* ── Active Tab Content ── */}
            <div style={{ border: '1px solid #dee2e6', borderTop: 'none', padding: '24px', backgroundColor: '#fff', marginBottom: '36px' }}>
              <p style={{ fontSize: '15px', color: '#383838', lineHeight: '1.75', fontWeight: '500', marginBottom: '20px' }}>
                {activeDept.intro}
              </p>

              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                {/* Research Areas */}
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#a41425', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                    Key Research Areas
                  </h3>
                  <ul style={{ paddingLeft: 0, margin: 0 }}>
                    {activeDept.researchAreas.map((area, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          fontSize: '14px',
                          color: '#383838',
                          padding: '6px 0',
                          borderBottom: i < activeDept.researchAreas.length - 1 ? '1px solid #f0f0f0' : 'none',
                          fontWeight: '500',
                        }}
                      >
                        <span style={{ color: '#a41425', fontWeight: '700', fontSize: '16px', lineHeight: '1.2', flexShrink: 0, marginTop: '1px' }}>›</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Research Images */}
                <div style={{ marginTop: '0' }} className="mt-6 lg:mt-0">
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#a41425', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                    Research Facilities
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '10px' }}>
                    {activeDept.images.map((src, i) => (
                      <div
                        key={i}
                        style={{
                          overflow: 'hidden',
                          borderRadius: '4px',
                          border: '1px solid #dee2e6',
                          backgroundColor: '#f8f9fa',
                          aspectRatio: '4/3',
                        }}
                      >
                        <img
                          src={src}
                          alt={`${activeDept.label} research ${i + 1}`}
                          onError={e => { e.currentTarget.parentElement.style.display = 'none' }}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Academic Research Committee ── */}
            <h2 style={SECTION_HEAD}>Academic Research Committee (2025-2026)</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />

            <div className="overflow-x-auto">
              <table
                className="w-full bg-white"
                style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}
              >
                <thead>
                  <tr>
                    <th style={{ ...TH, width: '60px', textAlign: 'center' }}>S.No.</th>
                    <th style={TH}>Name</th>
                    <th style={TH}>Designation</th>
                    <th style={TH}>Position</th>
                    <th style={TH}>E-mail ID</th>
                  </tr>
                </thead>
                <tbody>
                  {academicResearchCommittee.map((m, i) => (
                    <tr key={m.sno} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                      <td style={{ ...TD, textAlign: 'center', fontWeight: '500' }}>{m.sno}</td>
                      <td style={{ ...TD, fontWeight: '600', color: '#383838' }}>{m.name}</td>
                      <td style={TD}>{m.designation}</td>
                      <td style={TD}>
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '2px 10px',
                            borderRadius: '3px',
                            fontSize: '12px',
                            fontWeight: '600',
                            backgroundColor: m.position === 'Chairman' ? '#a41425' : m.position === 'Coordinator' ? '#002a6f' : '#e9ecef',
                            color: m.position === 'Member' ? '#383838' : '#fff',
                          }}
                        >
                          {m.position}
                        </span>
                      </td>
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
