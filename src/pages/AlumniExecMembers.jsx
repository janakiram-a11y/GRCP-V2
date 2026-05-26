// AlumniExecMembers.jsx — Route: /alumni/executive-members
// Replicates grcp.ac.in/executive_members.php

import { FaEnvelope } from 'react-icons/fa'
import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { alumniExecCommittee, alumniContactEmail } from '../data/alumniData'

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

export default function AlumniExecMembers() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="EXECUTIVE MEMBERS" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#a41425', marginBottom: '4px' }}>
              Alumni Association — Executive Committee 2025-26
            </h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '20px' }} />

            <div className="overflow-x-auto" style={{ marginBottom: '28px' }}>
              <table
                className="w-full bg-white"
                style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}
              >
                <thead>
                  <tr>
                    <th style={{ ...TH, width: '56px', textAlign: 'center' }}>S.No.</th>
                    <th style={TH}>Name</th>
                    <th style={TH}>Designation</th>
                    <th style={TH}>Position</th>
                    <th style={TH}>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {alumniExecCommittee.map((m, i) => (
                    <tr key={m.sno} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                      <td style={{ ...TD, textAlign: 'center', fontWeight: '500' }}>{m.sno}</td>
                      <td style={{ ...TD, fontWeight: '600', color: '#383838' }}>{m.name}</td>
                      <td style={TD}>{m.designation}</td>
                      <td style={{ ...TD, color: '#a41425', fontWeight: '600' }}>{m.position}</td>
                      <td style={TD}>
                        <a
                          href={`mailto:${m.email}`}
                          style={{ color: '#0d6efd', textDecoration: 'none', fontSize: '13px' }}
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

            {/* Contact strip */}
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                backgroundColor: '#f8f9fa', border: '1px solid #dee2e6',
                borderLeft: '4px solid #a41425', borderRadius: '4px',
                padding: '14px 20px',
              }}
            >
              <FaEnvelope style={{ color: '#a41425', fontSize: '16px', flexShrink: 0 }} />
              <span style={{ fontSize: '14px', color: '#383838', fontWeight: '500' }}>
                For alumni-related queries, write to us at:&nbsp;
                <a
                  href={`mailto:${alumniContactEmail}`}
                  style={{ color: '#0d6efd', fontWeight: '600', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
                  onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
                >
                  {alumniContactEmail}
                </a>
              </span>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
