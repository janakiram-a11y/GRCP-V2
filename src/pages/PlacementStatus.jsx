// PlacementStatus.jsx — Route: /placements/placement-status
// Replicates grcp.ac.in/Placement_status_2024_25.php (and prior years)

import { useState } from 'react'
import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { placementYears } from '../data/placementsData'

const TH = {
  padding: '10px 14px',
  fontSize: '13px',
  fontWeight: '600',
  color: '#fff',
  backgroundColor: '#a41425',
  border: '1px solid #8c0f1e',
  textAlign: 'left',
  whiteSpace: 'nowrap',
}

const TD = {
  padding: '10px 12px',
  fontSize: '13px',
  color: '#212529',
  border: '1px solid #dee2e6',
  verticalAlign: 'middle',
}

const YEAR_TABS = placementYears.map(y => y.year)
const PROG_TABS = [
  { id: 'bPharm', label: 'B.Pharmacy' },
  { id: 'mPharm', label: 'M.Pharmacy' },
]

function PlacementTable({ rows }) {
  if (!rows || rows.length === 0) {
    return (
      <p style={{ fontSize: '14px', color: '#6c757d', fontStyle: 'italic', padding: '20px 0' }}>
        No placement data available for this programme in this year.
      </p>
    )
  }
  return (
    <div className="overflow-x-auto">
      <table
        className="w-full bg-white"
        style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}
      >
        <thead>
          <tr>
            <th style={{ ...TH, width: '56px', textAlign: 'center' }}>S.No.</th>
            <th style={TH}>Name of the Student</th>
            <th style={TH}>Roll No.</th>
            <th style={{ ...TH, textAlign: 'center' }}>Discipline</th>
            <th style={{ ...TH, textAlign: 'center' }}>Year</th>
            <th style={TH}>Placed in Company</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
              <td style={{ ...TD, textAlign: 'center', fontWeight: '500' }}>{r.sno}</td>
              <td style={{ ...TD, fontWeight: '600', color: '#383838' }}>{r.name}</td>
              <td style={{ ...TD, fontFamily: 'monospace', fontSize: '12px', color: '#555' }}>{r.rollNo}</td>
              <td style={{ ...TD, textAlign: 'center' }}>{r.discipline}</td>
              <td style={{ ...TD, textAlign: 'center' }}>{r.year}</td>
              <td style={TD}>{r.employer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function PlacementStatus() {
  const [activeYear, setActiveYear] = useState(YEAR_TABS[0])
  const [activeProg, setActiveProg] = useState('bPharm')

  const yearData = placementYears.find(y => y.year === activeYear)

  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="PLACEMENT STATUS" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* ── Year Tabs ── */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', borderBottom: '2px solid #a41425', marginBottom: '0' }}>
              {YEAR_TABS.map(yr => (
                <button
                  key={yr}
                  onClick={() => { setActiveYear(yr); setActiveProg('bPharm') }}
                  style={{
                    padding: '9px 20px',
                    fontSize: '13px',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '4px 4px 0 0',
                    outline: 'none',
                    backgroundColor: activeYear === yr ? '#a41425' : '#f8f9fa',
                    color: activeYear === yr ? '#fff' : '#383838',
                  }}
                >
                  {yr}
                </button>
              ))}
            </div>

            <div style={{ border: '1px solid #dee2e6', borderTop: 'none', padding: '24px', backgroundColor: '#fff' }}>

              {/* ── Programme sub-tabs ── */}
              <div style={{ display: 'flex', gap: '4px', borderBottom: '2px solid #dee2e6', marginBottom: '20px' }}>
                {PROG_TABS.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveProg(tab.id)}
                    style={{
                      padding: '7px 20px',
                      fontSize: '13px',
                      fontWeight: '600',
                      border: '1px solid #dee2e6',
                      borderBottom: activeProg === tab.id ? '2px solid #fff' : '1px solid #dee2e6',
                      cursor: 'pointer',
                      borderRadius: '4px 4px 0 0',
                      outline: 'none',
                      marginBottom: activeProg === tab.id ? '-2px' : '0',
                      backgroundColor: activeProg === tab.id ? '#fff' : '#f8f9fa',
                      color: activeProg === tab.id ? '#a41425' : '#383838',
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* ── Count badge ── */}
              {yearData && (
                <p style={{ fontSize: '14px', fontWeight: '600', color: '#383838', marginBottom: '14px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#a41425',
                      color: '#fff',
                      borderRadius: '20px',
                      padding: '2px 12px',
                      fontSize: '13px',
                      fontWeight: '700',
                      marginRight: '8px',
                    }}
                  >
                    {yearData[activeProg].length}
                  </span>
                  {activeProg === 'bPharm' ? 'B.Pharmacy' : 'M.Pharmacy'} students placed — {activeYear}
                </p>
              )}

              {yearData && <PlacementTable rows={yearData[activeProg]} />}

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
