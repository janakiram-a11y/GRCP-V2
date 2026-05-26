// OuTimetables.jsx — Route: /examination/ou-timetables

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import DocLinkList from '../components/ui/DocLinkList'
import { ouTimetableSections } from '../data/examinationData'

const SECTION_HEAD = {
  fontSize: '18px',
  fontWeight: '700',
  color: '#fff',
  backgroundColor: '#a41425',
  padding: '5px 16px',
  borderRadius: '3px',
  display: 'inline-block',
  margin: '0',
}

export default function OuTimetables() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="OU TIME TABLES" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {ouTimetableSections.map(section => (
              <div key={section.heading} style={{ marginBottom: '36px' }}>
                <h2 style={SECTION_HEAD}>{section.heading}</h2>
                <hr style={{ borderColor: '#dee2e6', margin: '12px 0 16px' }} />
                <DocLinkList items={section.items} />
              </div>
            ))}

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
