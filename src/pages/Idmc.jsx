// Idmc.jsx — Route: /administration/idmc
// IDMC intro paragraph + bordered, striped members table.

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { idmcIntro, idmcMembers } from '../data/administrationData'

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

export default function Idmc() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="IDMC" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* Intro */}
            <p
              className="font-medium mb-6"
              style={{ fontSize: '15px', color: '#383838', lineHeight: '1.7' }}
            >
              {idmcIntro}
            </p>

            {/* Members table */}
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
                  {idmcMembers.map((m, i) => (
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
