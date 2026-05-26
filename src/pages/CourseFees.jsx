// CourseFees.jsx — Route: /admissions/course-fees
// Replicates grcp.ac.in/FEE_Structure.php

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import FeeTable from '../components/ui/FeeTable'
import { bPharmFees, mPharmFees } from '../data/admissionsData'

const SECTION_HEADING = {
  fontSize: '22px',
  fontWeight: '700',
  color: '#a41425',
  marginBottom: '4px',
}

export default function CourseFees() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="COURSE FEES" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* ── B. Pharmacy ── */}
            <h3 style={SECTION_HEADING}>B. Pharmacy Fee Structure</h3>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '20px' }} />
            {bPharmFees.map((table, i) => (
              <FeeTable key={i} title={table.title} headers={table.headers} rows={table.rows} />
            ))}

            {/* ── M. Pharmacy ── */}
            <h3 style={{ ...SECTION_HEADING, marginTop: '16px' }}>M. Pharmacy Fee Structure</h3>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '20px' }} />
            {mPharmFees.map((table, i) => (
              <FeeTable key={i} title={table.title} headers={table.headers} rows={table.rows} />
            ))}

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
