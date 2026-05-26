// PgProgramCommittee.jsx — Route: /programmes/pg-program-committee
// Replicates grcp.ac.in/PG-Program-Committee.php

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { pgCommittee } from '../data/programmesData'

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

export default function PgProgramCommittee() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="PG PROGRAM COMMITTEE" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <h2
              style={{
                fontSize: '22px',
                fontWeight: '700',
                color: '#a41425',
                marginBottom: '4px',
              }}
            >
              PG Program Committee (2025-2026)
            </h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '24px' }} />

            <div className="overflow-x-auto">
              <table
                className="w-full bg-white"
                style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}
              >
                <thead>
                  <tr>
                    <th style={{ ...TH_STYLE, width: '60px', textAlign: 'center' }}>Sl. No.</th>
                    <th style={TH_STYLE}>Name</th>
                    <th style={TH_STYLE}>Designation</th>
                    <th style={TH_STYLE}>Position</th>
                    <th style={TH_STYLE}>E-mail ID</th>
                  </tr>
                </thead>
                <tbody>
                  {pgCommittee.map((m, i) => (
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
