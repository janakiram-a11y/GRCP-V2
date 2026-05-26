// GoverningBody.jsx — Route: /administration/governing-body
// Bordered, striped table of Governing Body members with photo column.

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { governingBodyMembers } from '../data/administrationData'

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

export default function GoverningBody() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="GOVERNING BODY" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <div className="overflow-x-auto">
              <table
                className="w-full bg-white"
                style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}
              >
                <thead>
                  <tr>
                    <th style={{ ...TH_STYLE, width: '60px', textAlign: 'center' }}>S.No.</th>
                    <th style={{ ...TH_STYLE, width: '90px', textAlign: 'center' }}>Photo</th>
                    <th style={TH_STYLE}>Name</th>
                    <th style={TH_STYLE}>Designation</th>
                    <th style={TH_STYLE}>Category</th>
                  </tr>
                </thead>
                <tbody>
                  {governingBodyMembers.map((m, i) => (
                    <tr key={m.sno} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                      <td style={{ ...TD_STYLE, textAlign: 'center', fontWeight: '500' }}>{m.sno}</td>
                      <td style={{ ...TD_STYLE, textAlign: 'center', padding: '8px' }}>
                        <img
                          src={m.photo}
                          alt={m.name}
                          onError={(e) => { e.currentTarget.style.display = 'none' }}
                          style={{
                            width: '70px',
                            height: '80px',
                            objectFit: 'cover',
                            display: 'block',
                            margin: '0 auto',
                            border: '1px solid #dee2e6',
                          }}
                        />
                      </td>
                      <td style={{ ...TD_STYLE, fontWeight: '600', color: '#383838' }}>
                        {m.name}
                        {m.org && (
                          <div style={{ fontWeight: '400', fontSize: '13px', color: '#6c757d', marginTop: '3px', whiteSpace: 'pre-line' }}>
                            {m.org}
                          </div>
                        )}
                      </td>
                      <td style={TD_STYLE}>{m.designation}</td>
                      <td style={TD_STYLE}>{m.category}</td>
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
