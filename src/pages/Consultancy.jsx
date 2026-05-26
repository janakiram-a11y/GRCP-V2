// Consultancy.jsx — Route: /research/consultancy
// Year-wise sponsored projects / consultancy table

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { consultancyYears } from '../data/researchData'

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

export default function Consultancy() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="SPONSORED PROJECTS / CONSULTANCY" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {consultancyYears.map(section => (
              <div key={section.year} style={{ marginBottom: '36px' }}>
                {/* Year heading */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                  <h2
                    style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#fff',
                      backgroundColor: '#a41425',
                      padding: '5px 16px',
                      borderRadius: '3px',
                      margin: 0,
                      display: 'inline-block',
                    }}
                  >
                    {section.year}
                  </h2>
                </div>
                <hr style={{ borderColor: '#dee2e6', marginBottom: '14px' }} />

                <div className="overflow-x-auto">
                  <table
                    className="w-full bg-white"
                    style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}
                  >
                    <thead>
                      <tr>
                        <th style={TH}>Project / Consultancy Title</th>
                        <th style={TH}>Principal Investigator</th>
                        <th style={TH}>Duration</th>
                        <th style={TH}>Funding Agency</th>
                        <th style={{ ...TH, textAlign: 'right' }}>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.projects.map((p, i) => (
                        <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                          <td style={{ ...TD, fontWeight: '600', color: '#383838' }}>{p.title}</td>
                          <td style={TD}>{p.pi}</td>
                          <td style={{ ...TD, whiteSpace: 'nowrap' }}>{p.duration}</td>
                          <td style={TD}>{p.fundingAgency}</td>
                          <td style={{ ...TD, textAlign: 'right', fontWeight: '600', color: '#00883e', whiteSpace: 'nowrap' }}>
                            {p.amount}
                          </td>
                        </tr>
                      ))}
                      {/* Grand total row if present */}
                      {section.grandTotal && (
                        <tr style={{ backgroundColor: '#f8f9fa' }}>
                          <td colSpan={4} style={{ ...TD, fontWeight: '700', textAlign: 'right', color: '#383838' }}>
                            Grand Total
                          </td>
                          <td style={{ ...TD, textAlign: 'right', fontWeight: '700', color: '#a41425', fontSize: '15px', whiteSpace: 'nowrap' }}>
                            {section.grandTotal}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
