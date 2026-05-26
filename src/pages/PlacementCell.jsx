// PlacementCell.jsx — Route: /placements/placement-cell
// Replicates grcp.ac.in/Placements.php

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import {
  placementCellFunctions,
  placementCommittee,
} from '../data/placementsData'

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

export default function PlacementCell() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="PLACEMENT CELL @ GRCP" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* ── Intro ── */}
            <h2 style={SECTION_HEAD}>Training &amp; Placements Cell of GRCP</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <p style={{ fontSize: '15px', color: '#383838', lineHeight: '1.75', fontWeight: '500', marginBottom: '8px' }}>
              The Training &amp; Placements Cell at Gokaraju Rangaraju College of Pharmacy is dedicated to bridging
              the gap between academia and industry. It provides students with the skills, exposure, and opportunities
              needed to build successful careers in the pharmaceutical and healthcare sectors.
            </p>
            <ul style={{ paddingLeft: 0, margin: '0 0 36px' }}>
              {placementCellFunctions.map((fn, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontSize: '14px',
                    color: '#383838',
                    padding: '6px 0',
                    borderBottom: i < placementCellFunctions.length - 1 ? '1px solid #f0f0f0' : 'none',
                    fontWeight: '500',
                  }}
                >
                  <span style={{ color: '#a41425', fontWeight: '700', fontSize: '16px', lineHeight: '1.2', flexShrink: 0, marginTop: '1px' }}>›</span>
                  <span>{fn}</span>
                </li>
              ))}
            </ul>

            {/* ── Contact strip ── */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                padding: '14px 20px',
                backgroundColor: '#f8f9fa',
                border: '1px solid #dee2e6',
                borderLeft: '4px solid #a41425',
                borderRadius: '4px',
                marginBottom: '36px',
                fontSize: '14px',
                color: '#383838',
                fontWeight: '500',
              }}
            >
              <span><strong style={{ color: '#a41425' }}>TPO:</strong> Dr. Talat Farheen — 9100179655</span>
              <span style={{ color: '#dee2e6' }}>|</span>
              <span><strong style={{ color: '#a41425' }}>TASK Coordinator:</strong> Dr. A. Phani Kumar — 9010014734</span>
              <span style={{ color: '#dee2e6' }}>|</span>
              <span><strong style={{ color: '#a41425' }}>Email:</strong> placements@grcp.ac.in</span>
            </div>

            {/* ── Committee Table ── */}
            <h2 style={SECTION_HEAD}>Placement Committee (2025-2026)</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <div className="overflow-x-auto" style={{ marginBottom: '36px' }}>
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
                  {placementCommittee.map((m, i) => (
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
                            backgroundColor:
                              m.position === 'Chairperson' ? '#a41425'
                              : m.position === 'Coordinator' ? '#002a6f'
                              : '#e9ecef',
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
