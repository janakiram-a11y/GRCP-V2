// NonTeachingStaff.jsx — Route: /academics/non-teaching-staff
// Replicates grcp.ac.in/Non-teaching-staff.php

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { nonTeachingStaff, housekeepingStaff } from '../data/academicsData'

const TH = {
  padding: '10px 14px', fontSize: '14px', fontWeight: '600', color: '#fff',
  backgroundColor: '#a41425', border: '1px solid #8c0f1e', textAlign: 'left', whiteSpace: 'nowrap',
}
const TD = {
  padding: '10px 14px', fontSize: '14px', color: '#212529',
  border: '1px solid #dee2e6', verticalAlign: 'middle',
}

function StaffTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white" style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}>
        <thead>
          <tr>
            <th style={{ ...TH, width: '60px', textAlign: 'center' }}>S.No.</th>
            <th style={TH}>Staff Name</th>
            <th style={TH}>Designation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((m, i) => (
            <tr key={m.sno} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
              <td style={{ ...TD, textAlign: 'center', fontWeight: '500' }}>{m.sno}</td>
              <td style={{ ...TD, fontWeight: '600', color: '#383838' }}>{m.name}</td>
              <td style={TD}>{m.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function NonTeachingStaff() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="NON-TEACHING STAFF" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* ── Administrative & Lab Staff ── */}
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#a41425', marginBottom: '4px' }}>
              Non-Teaching Staff
            </h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '20px' }} />
            <StaffTable data={nonTeachingStaff} />

            {/* ── Housekeeping Staff ── */}
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#a41425', marginTop: '36px', marginBottom: '4px' }}>
              Housekeeping Staff
            </h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '20px' }} />
            <StaffTable data={housekeepingStaff} />

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
