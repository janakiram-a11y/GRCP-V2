// ExaminationBranch.jsx — Route: /examination/examination-branch

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import {
  examBranchFunctions,
  ugSessionalCommittee,
  pgSessionalCommittee,
  ouExamCell,
} from '../data/examinationData'

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

function CommitteeTable({ members }) {
  return (
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
          {members.map((m, i) => (
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
                      : m.position.startsWith('Co-ordinator') ? '#002a6f'
                      : '#e9ecef',
                    color:
                      m.position === 'Member' ? '#383838' : '#fff',
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
  )
}

export default function ExaminationBranch() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="EXAMINATION BRANCH @ GRCP" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* ── Intro ── */}
            <h2 style={SECTION_HEAD}>About Examination Branch</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <p style={{ fontSize: '15px', color: '#383838', lineHeight: '1.75', fontWeight: '500', marginBottom: '8px' }}>
              The Examination Branch at Gokaraju Rangaraju College of Pharmacy manages all examination-related activities
              for the B.Pharmacy and M.Pharmacy programmes under Osmania University. The branch ensures timely and
              transparent conduct of both sessional and end-semester examinations.
            </p>
            <ul style={{ paddingLeft: 0, margin: '0 0 36px' }}>
              {examBranchFunctions.map((fn, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontSize: '14px',
                    color: '#383838',
                    padding: '6px 0',
                    borderBottom: i < examBranchFunctions.length - 1 ? '1px solid #f0f0f0' : 'none',
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
              <span><strong style={{ color: '#a41425' }}>Email:</strong> exambranch@grcp.ac.in</span>
              <span style={{ color: '#dee2e6' }}>|</span>
              <span><strong style={{ color: '#a41425' }}>Phone:</strong> 7095271271</span>
              <span style={{ color: '#dee2e6' }}>|</span>
              <span><strong style={{ color: '#a41425' }}>UG Coordinators:</strong> Mrs. Ch. Soujanya, Mrs. K. Lalitha</span>
              <span style={{ color: '#dee2e6' }}>|</span>
              <span><strong style={{ color: '#a41425' }}>PG Coordinator:</strong> Dr. M. Lakshmi Madhuri</span>
            </div>

            {/* ── UG Committee ── */}
            <h2 style={SECTION_HEAD}>UG – Sessional Exam Committee (2025-2026)</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <CommitteeTable members={ugSessionalCommittee} />

            {/* ── PG Committee ── */}
            <h2 style={SECTION_HEAD}>PG – Sessional Exam Committee (2025-2026)</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <CommitteeTable members={pgSessionalCommittee} />

            {/* ── OU Exam Cell ── */}
            <h2 style={SECTION_HEAD}>Osmania University Examination Cell (2025-2026)</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <CommitteeTable members={ouExamCell} />

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
