// AcademicCalendar.jsx — Route: /academics/academic-calendar
// Replicates grcp.ac.in/Academic_Calendar.php

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import DocLinkList from '../components/ui/DocLinkList'
import { academicCalendarItems } from '../data/academicsData'

export default function AcademicCalendar() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="ACADEMIC CALENDAR" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#a41425', marginBottom: '4px' }}>
              Academic Calendar
            </h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '28px' }} />

            <DocLinkList items={academicCalendarItems} />

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
