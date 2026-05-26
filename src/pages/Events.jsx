import { useState } from 'react'
import { FaCalendarAlt, FaImages, FaChevronRight } from 'react-icons/fa'
import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'

const SECTION_HEAD = { fontSize: '20px', fontWeight: '700', color: '#a41425', marginBottom: '4px' }
const TH = { padding: '10px 14px', fontSize: '13px', fontWeight: '600', color: '#fff', backgroundColor: '#a41425', border: '1px solid #8c0f1e', textAlign: 'left', whiteSpace: 'nowrap' }
const TD = { padding: '9px 12px', fontSize: '13px', color: '#212529', border: '1px solid #dee2e6', verticalAlign: 'top' }

const events2026 = [
  { date: '06 Apr 2026', title: 'Skill Development Program', desc: '"Team Work"', link: 'https://photos.app.goo.gl/2Akwuya6fgNQHTzk7' },
  { date: '09 Mar 2026', title: "International Women's Day 2026", desc: '"Women\'s Health: Awareness, prevention and empowerment with emphasis on cosmetic gynaecology"', link: 'https://photos.app.goo.gl/VowoHM5Jo5UB3qw26' },
  { date: '06 Mar 2026', title: 'National Pharmacy Education Day', desc: '"Pharma planet: The Green Innovation Pitch"', link: 'https://photos.app.goo.gl/5cvQAQGFpcnKrEcHA' },
  { date: '05–06 Feb 2026', title: 'National Seminar — "Empowering Pharmaceutical Innovation Through QbD"', desc: '"Challenges, Solutions and Hands-on-Training in Preformulation and Analytical Method Advancement"', link: 'https://photos.app.goo.gl/pehVW2abhWRw3sJz7' },
]

const events2025 = [
  { date: '11 Dec 2025', title: 'Skill Development Program', desc: '"Presentation Skills"', link: 'https://photos.app.goo.gl/BLciJ6PfgkunWJjA8' },
  { date: '27 Nov 2025', title: 'Plantation — M.Pharmacy Orientation Program', desc: '"M.pharmacy Orientation Program"', link: 'https://photos.app.goo.gl/qhne98KrLXRFgGHd8' },
  { date: '15–17 Nov 2025', title: 'National Library Week Celebrations', desc: '"Book brain challenge competition & Book exhibition"', link: 'https://photos.app.goo.gl/6wwuwiRrvXg28A8g9' },
  { date: '15 Nov 2025', title: 'Karthika Vanabojanalu', desc: '', link: 'https://photos.app.goo.gl/iFkDGx5JKuXfVieT6' },
  { date: '31 Oct – 12 Nov 2025', title: 'B.Pharmacy Student Induction Program', desc: '"2025-2029 Batch"', link: 'https://photos.app.goo.gl/99nsb1ikBhgnrFPe9' },
  { date: '28 Oct 2025', title: 'Motivation Session', desc: '"From Ideas to Income: Mastering the Entrepreneurial Journey"', link: 'https://photos.app.goo.gl/qFcxiSbz5DD5WxZPA' },
  { date: '14 Oct 2025', title: 'Women Development Cell', desc: '"Self Defence Training Program on Eve of International Girls Day 2025"', link: 'https://photos.app.goo.gl/jTKf2fUMrqkQQWjH7' },
  { date: '27 Sep 2025', title: 'Sadhula Bathukamma', desc: '"celebrations"', link: 'https://photos.app.goo.gl/dVvaArsynXxU1neW6' },
  { date: '25 Sep 2025', title: 'World Pharmacist Day', desc: '"Sustainable Pharmacy: Greener Health for Tomorrow"', link: 'https://photos.app.goo.gl/JMA7Zs9BVPBxJhUm8' },
  { date: '17–23 Sep 2025', title: 'National Pharmacovigilance Week', desc: '"Your safety just a click away — Report to PvPI"', link: 'https://photos.app.goo.gl/DyB5nxvDwaTdVBSQ8' },
  { date: '20 Sep 2025', title: 'Pharma Expo Pro 7 & Pack — Industrial Visit', desc: '"Industrial Visit"', link: 'https://photos.app.goo.gl/vhfHGkoq4TSWHNpb6' },
  { date: '01–02 Sep 2025', title: 'Hands on Training', desc: '"Basic Techniques in Laboratory Animal Handling and Experiments"', link: 'https://photos.app.goo.gl/agmcCYQnYccdfgYG6' },
  { date: '12 Aug 2025', title: 'Plantation Drive', desc: '"To plant a tree is to believe in tomorrow"', link: 'https://photos.app.goo.gl/j7tgv3tNiQqegYU76' },
  { date: '06–07 Aug 2025', title: 'TASK-Skill Development Program', desc: '"Aptitude and Reasoning (A&R)"', link: 'https://photos.app.goo.gl/fYtk2Ensyn2Myksz6' },
  { date: '14 Jul 2025', title: 'Career Guidance Awareness', desc: '"Roadmap to success"', link: 'https://photos.app.goo.gl/21e3LS5M6LomdNU96' },
  { date: '30–31 Jul 2025', title: 'Industrial Visit — AKSHAYA PATRA', desc: '"AKSHAYA PATRA"', link: 'https://photos.app.goo.gl/pGBhV2brRDwpEYpo6' },
  { date: '30 Jul 2025', title: 'LV Prasad Eye Institute Incubation Centre', desc: '"Students Visit"', link: 'https://photos.app.goo.gl/xNgbPRnNJikRGk8L7' },
  { date: '19 Jul 2025', title: 'Elocution Competition', desc: '"Equal Rights, Equal Opportunity"', link: 'https://photos.app.goo.gl/EebV1QFRU2st1VVT6' },
  { date: '18 Jul 2025', title: 'GRCP Alumni Lecture Series 2025', desc: '"Inside The Industry: How To Stand Out In Pharma"', link: 'https://photos.app.goo.gl/5EAq7NMJXdXyqDBS7' },
  { date: '19–21 Jun 2025', title: '21st Annual Day 2025 — VIRASAT 2025', desc: '"VIRASAT 2025"', link: 'https://photos.app.goo.gl/PzfugNKF4rvu2jVo9' },
  { date: '15–16 Apr 2025', title: 'Herbopreneur 2025', desc: '"Herbal Research & Innovation, Herbal Cuisine & Beverages, Sustainable Herbal Packaging"', link: 'https://photos.app.goo.gl/v42VEuECUVC5U6WKA' },
  { date: '02 Apr 2025', title: 'Career Awareness Program', desc: '"Pharmacy Career Blueprint: Cracking GPAT & Unlocking Top Institutes"', link: 'https://photos.app.goo.gl/CW5uuXLqxWC7BWmF7' },
  { date: '26–30 Mar 2025', title: 'PRADHAN MANTRI KAUSHAL VIKAS YOJANA (PMKVY 4.0)', desc: '"Upskilling and Certification Program"', link: 'https://photos.app.goo.gl/nJX7zVHMZy3ExMSy6' },
  { date: '02–04 Apr 2025', title: 'TASK-Skill Development Program', desc: '"21st Century Transferable Skills"', link: 'https://photos.app.goo.gl/hz2yUqp1NGY4WsCs5' },
]

function EventCard({ event }) {
  return (
    <div style={{ backgroundColor: '#fff', border: '1px solid #dee2e6', borderLeft: '4px solid #a41425', borderRadius: '4px', padding: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', backgroundColor: '#002a6f', color: '#fff', padding: '3px 8px', borderRadius: '3px', fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>
        <FaCalendarAlt size={10} />
        {event.date}
      </div>
      <div style={{ fontSize: '15px', fontWeight: '700', color: '#a41425', marginBottom: event.desc ? '4px' : '8px' }}>{event.title}</div>
      {event.desc && (
        <div style={{ fontSize: '13px', color: '#383838', fontStyle: 'italic', marginBottom: '8px' }}>{event.desc}</div>
      )}
      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', backgroundColor: '#00883e', color: '#fff', padding: '4px 10px', borderRadius: '3px', fontSize: '11px', fontWeight: '600', textDecoration: 'none' }}
      >
        <FaImages size={11} />
        View Photos
      </a>
    </div>
  )
}

export default function Events() {
  const [activeYear, setActiveYear] = useState('2026')

  const currentEvents = activeYear === '2026' ? events2026 : events2025

  const tabStyle = (year) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 18px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    border: '1px solid #002a6f',
    borderRadius: '3px',
    backgroundColor: activeYear === year ? '#002a6f' : '#fff',
    color: activeYear === year ? '#fff' : '#002a6f',
    transition: 'background-color 0.15s, color 0.15s',
  })

  const badgeStyle = (year) => ({
    display: 'inline-block',
    padding: '1px 7px',
    borderRadius: '10px',
    fontSize: '11px',
    fontWeight: '700',
    backgroundColor: activeYear === year ? 'rgba(255,255,255,0.25)' : '#002a6f',
    color: '#fff',
  })

  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="EVENTS" />
      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <h2 style={SECTION_HEAD}>College Events</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '20px' }} />

            {/* Year Tabs */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
              {['2026', '2025'].map((year) => (
                <button key={year} style={tabStyle(year)} onClick={() => setActiveYear(year)}>
                  {year}
                  <span style={badgeStyle(year)}>
                    {year === '2026' ? events2026.length : events2025.length}
                  </span>
                </button>
              ))}
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ marginBottom: '32px' }}>
              {currentEvents.map((event, idx) => (
                <EventCard key={idx} event={event} />
              ))}
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
