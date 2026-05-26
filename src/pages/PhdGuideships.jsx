// PhdGuideships.jsx — Route: /research/phd-guideships

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { phdGuides, phdScholars } from '../data/researchData'

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

export default function PhdGuideships() {
  const totalScholars = phdScholars.reduce((sum, r) => sum + (typeof r.total === 'number' ? r.total : 0), 0)

  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="PH.D GUIDESHIPS" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* ── Faculty Guides Table ── */}
            <h2 style={SECTION_HEAD}>Faculty with Ph.D Guideships</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />

            <div className="overflow-x-auto" style={{ marginBottom: '36px' }}>
              <table
                className="w-full bg-white"
                style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}
              >
                <thead>
                  <tr>
                    <th style={{ ...TH, width: '70px', textAlign: 'center' }}>S.No.</th>
                    <th style={TH}>Guide Name</th>
                    <th style={TH}>University Eligibility</th>
                  </tr>
                </thead>
                <tbody>
                  {phdGuides.map((g, i) => (
                    <tr key={g.sno} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                      <td style={{ ...TD, textAlign: 'center', fontWeight: '600' }}>{g.sno}</td>
                      <td style={{ ...TD, fontWeight: '600', color: '#383838' }}>{g.name}</td>
                      <td style={TD}>
                        {g.universities.map((u, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', padding: j > 0 ? '4px 0 0' : '0' }}>
                            <span style={{ color: '#a41425', fontWeight: '700', flexShrink: 0 }}>›</span>
                            <span>{u}</span>
                          </div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Scholars Statistics ── */}
            <h2 style={SECTION_HEAD}>Registered Ph.D Scholars Statistics</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />

            <div className="overflow-x-auto">
              <table
                className="w-full bg-white"
                style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}
              >
                <thead>
                  <tr>
                    <th style={TH}>Guide Name</th>
                    <th style={{ ...TH, textAlign: 'center', width: '100px' }}>Awarded</th>
                    <th style={{ ...TH, textAlign: 'center', width: '110px' }}>Submitted</th>
                    <th style={{ ...TH, textAlign: 'center', width: '100px' }}>Ongoing</th>
                    <th style={{ ...TH, textAlign: 'center', width: '80px' }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {phdScholars.map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                      <td style={{ ...TD, fontWeight: '600', color: '#383838' }}>{row.guide}</td>
                      <td style={{ ...TD, textAlign: 'center' }}>{row.awarded}</td>
                      <td style={{ ...TD, textAlign: 'center' }}>{row.submitted}</td>
                      <td style={{ ...TD, textAlign: 'center' }}>{row.ongoing}</td>
                      <td style={{ ...TD, textAlign: 'center', fontWeight: '700', color: '#a41425' }}>{row.total}</td>
                    </tr>
                  ))}
                  {/* Total Row */}
                  <tr style={{ backgroundColor: '#a41425' }}>
                    <td style={{ ...TD, fontWeight: '700', color: '#fff', border: '1px solid #8c0f1e' }}>Total</td>
                    <td style={{ ...TD, textAlign: 'center', fontWeight: '700', color: '#fff', border: '1px solid #8c0f1e' }}>—</td>
                    <td style={{ ...TD, textAlign: 'center', fontWeight: '700', color: '#fff', border: '1px solid #8c0f1e' }}>—</td>
                    <td style={{ ...TD, textAlign: 'center', fontWeight: '700', color: '#fff', border: '1px solid #8c0f1e' }}>—</td>
                    <td style={{ ...TD, textAlign: 'center', fontWeight: '700', color: '#fff', border: '1px solid #8c0f1e', fontSize: '16px' }}>
                      {totalScholars}
                    </td>
                  </tr>
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
