// About.jsx — Full "About Us" page
// Structure: TopBar → HeaderLogo → Navbar → SubPageBanner → Main Content → Footer
// Matches grcp.ac.in/aboutus.php layout pixel-close

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import {
  aboutPara1,
  aboutPara2,
  aboutPara3,
  adminStaff,
  visionText,
  missionItems,
  qualityPolicyText,
} from '../data/aboutData'

// ── Admin staff card (photo col + info col pair) ─────────────────────────────
function AdminCard({ person }) {
  return (
    <>
      {/* Photo column */}
      <div className="w-full md:w-1/4">
        <img
          src={person.img}
          alt={person.name}
          className="w-full h-auto block"
          onError={e => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>

      {/* Info column */}
      <div className="w-full md:w-1/4 bg-white">
        <div className="p-[10px]">
          <h4 className="font-bold text-[15px] mb-1" style={{ color: '#383838' }}>
            {person.role}
          </h4>
          <p className="text-[15px] mb-1" style={{ color: '#383838' }}>
            <strong style={{ color: '#a41425' }}>{person.name}</strong>
          </p>
          <p className="text-[14px] leading-relaxed" style={{ color: '#383838' }}>
            {person.credentials.map((line, i) => (
              <span key={i}>
                {line}
                {i < person.credentials.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  )
}

// ── Vision / Mission / Quality Policy block ───────────────────────────────────
function VMQBlock({ title, children }) {
  return (
    <div className="w-full">
      <div className="p-[25px]">
        <h4 className="font-bold text-[24px] mb-1" style={{ color: '#383838' }}>
          {title}
        </h4>
        <hr className="border-gray-300 mb-3" />
        {children}
      </div>
    </div>
  )
}

// ── Main About page ───────────────────────────────────────────────────────────
// Anti-Ragging modal is handled globally in App.jsx (shows once per session).
export default function About() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="ABOUT Gokaraju RangaRaju College of Pharmacy" />

      {/* ── Main content area ── */}
      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">

          {/* ── Row 1: About text + Osmania University Administration ── */}
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="p-[25px]">

                {/* About paragraphs */}
                <p className="text-[15px] font-medium mb-4" style={{ color: '#383838' }}>
                  {aboutPara1}
                </p>
                <p className="text-[15px] font-medium mb-4" style={{ color: '#383838' }}>
                  {aboutPara2}
                </p>

                {/* Administration heading */}
                <h4
                  className="font-bold text-[24px] mb-1"
                  style={{ color: '#a41425' }}
                >
                  Osmania University Administration
                </h4>
                <hr className="border-gray-300 mb-4" />

                {/* Admin staff row — 4 columns: [photo | info | photo | info] */}
                <div className="flex flex-wrap">
                  {adminStaff.map((person, i) => (
                    <AdminCard key={i} person={person} />
                  ))}
                </div>

                <br />

                {/* NBA accreditation paragraph */}
                <p className="text-[15px] font-medium mt-2" style={{ color: '#383838' }}>
                  {aboutPara3}
                </p>

              </div>
            </div>
          </div>

          {/* ── Row 2: Vision / Mission / Quality Policy (stacked, bg-light) ── */}
          <div
            className="flex flex-wrap"
            style={{ backgroundColor: '#f8f9fa' }}
          >
            {/* Vision */}
            <VMQBlock title="Vision">
              <p className="text-[15px]" style={{ color: '#383838' }}>
                {visionText}
              </p>
            </VMQBlock>

            {/* Mission */}
            <VMQBlock title="Mission">
              <ul className="list-disc pl-5 space-y-2">
                {missionItems.map((item, i) => (
                  <li key={i} className="text-[15px]" style={{ color: '#383838' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </VMQBlock>

            {/* Quality Policy */}
            <VMQBlock title="Quality Policy">
              <p className="text-[15px]" style={{ color: '#383838' }}>
                {qualityPolicyText}
              </p>
            </VMQBlock>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
