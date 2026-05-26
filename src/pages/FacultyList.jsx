// FacultyList.jsx — Route: /academics/faculty
// Replicates grcp.ac.in/faculty.php — 40 faculty members in a responsive card grid.

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import FacultyCard from '../components/ui/FacultyCard'
import { facultyList } from '../data/academicsData'

export default function FacultyList() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="FACULTY LIST" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#a41425' }}>Faculty</h2>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#6c757d' }}>
                ({facultyList.length} members)
              </span>
            </div>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '28px' }} />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '20px',
              }}
            >
              {facultyList.map(member => (
                <FacultyCard key={member.sno} member={member} />
              ))}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
