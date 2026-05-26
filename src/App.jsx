// App.jsx — root of the SPA
// AntiRaggingModal lives here (not in individual pages) so it renders exactly
// once per browser session regardless of how many pages the user visits.
// sessionStorage key "arSeen" is set when the user dismisses or navigates away;
// it persists for the lifetime of the browser tab/session and clears when the
// tab/window is closed — which is the correct "restart" trigger.

import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AntiRaggingModal from './components/ui/AntiRaggingModal'
import Home          from './pages/Home'
import About         from './pages/About'
import Peo           from './pages/Peo'
import Pos           from './pages/Pos'
import AdmissionProcedure from './pages/AdmissionProcedure'
import CourseFees         from './pages/CourseFees'
import Eamcet             from './pages/Eamcet'
import Pgecet             from './pages/Pgecet'
import SyllabusBPharmacy   from './pages/SyllabusBPharmacy'
import SyllabusMPharmacy   from './pages/SyllabusMPharmacy'
import AcademicCalendar    from './pages/AcademicCalendar'
import TimeTables          from './pages/TimeTables'
import LibraryCommittee    from './pages/LibraryCommittee'
import InformationCenter   from './pages/InformationCenter'
import EJournals           from './pages/EJournals'
import DailyNewsPapers     from './pages/DailyNewsPapers'
import LibraryStatistics   from './pages/LibraryStatistics'
import TitleVolumes        from './pages/TitleVolumes'
import FacultyList         from './pages/FacultyList'
import NonTeachingStaff    from './pages/NonTeachingStaff'
import BPharmacy          from './pages/BPharmacy'
import MPharmPharmaceutics from './pages/MPharmPharmaceutics'
import MPharmAnalysis      from './pages/MPharmAnalysis'
import MPharmPharmacology  from './pages/MPharmPharmacology'
import PgProgramCommittee  from './pages/PgProgramCommittee'
import ExaminationBranch  from './pages/ExaminationBranch'
import SessionalTimetable from './pages/SessionalTimetable'
import OuTimetables       from './pages/OuTimetables'
import OuNotifications    from './pages/OuNotifications'
import ExamResults        from './pages/ExamResults'
import QuestionPapers     from './pages/QuestionPapers'
import ResearchAtGRCP  from './pages/ResearchAtGRCP'
import PhdGuideships   from './pages/PhdGuideships'
import Publications    from './pages/Publications'
import Patents         from './pages/Patents'
import Consultancy     from './pages/Consultancy'
import PlacementCell   from './pages/PlacementCell'
import PlacementStatus from './pages/PlacementStatus'
import AlumniRegistration  from './pages/AlumniRegistration'
import AlumniExecMembers  from './pages/AlumniExecMembers'
import AlumniList         from './pages/AlumniList'
import DistinguishedAlumni from './pages/DistinguishedAlumni'
import AlumniContribution from './pages/AlumniContribution'
import Chairman      from './pages/Chairman'
import VicePresident from './pages/VicePresident'
import Principal     from './pages/Principal'
import GoverningBody from './pages/GoverningBody'
import Idmc          from './pages/Idmc'
import OrgChart      from './pages/OrgChart'
import AlumniAssociation   from './pages/AlumniAssociation'
import MandatoryDisclosures from './pages/MandatoryDisclosures'
import Nirf          from './pages/Nirf'
import Events        from './pages/Events'
import EBulletin     from './pages/EBulletin'
import Downloads     from './pages/Downloads'
import ContactUs     from './pages/ContactUs'

const SESSION_KEY = 'arSeen'

function App() {
  // Only show if this browser session hasn't seen the modal yet
  const [showModal, setShowModal] = useState(false)
  const [showTour, setShowTour]   = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      const t = setTimeout(() => setShowModal(true), 300)
      return () => clearTimeout(t)
    }
  }, []) // runs once on first mount — never reruns on route changes

  // Close tour modal on Escape key
  useEffect(() => {
    if (!showTour) return
    const onKey = e => { if (e.key === 'Escape') setShowTour(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showTour])

  const handleClose = () => {
    setShowModal(false)
    sessionStorage.setItem(SESSION_KEY, '1')
  }

  return (
    <BrowserRouter>
      {/* Anti-ragging modal */}
      {showModal && <AntiRaggingModal onClose={handleClose} />}

      {/* Virtual Tour tab — fixed to the right edge on every page */}
      <button
        onClick={() => setShowTour(true)}
        style={{
          position: 'fixed',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 9999,
          backgroundColor: '#00883e',
          color: '#fff',
          fontWeight: '700',
          fontSize: '11px',
          letterSpacing: '2px',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          padding: '16px 6px',
          border: 'none',
          cursor: 'pointer',
          userSelect: 'none',
        }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#006e32' }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#00883e' }}
      >
        VIRTUAL TOUR OF GRCP
      </button>

      {/* Virtual Tour video modal */}
      {showTour && (
        <div
          onClick={() => setShowTour(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 10000,
            backgroundColor: 'rgba(0,0,0,0.82)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              backgroundColor: '#000',
              borderRadius: '6px',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.7)',
            }}
          >
            {/* Header bar */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              backgroundColor: '#1a1a1a', padding: '10px 16px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src="https://grcp.ac.in/images/logo.png"
                  alt="GRCP"
                  style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
                <div>
                  <p style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#fff' }}>
                    Virtual Tour of GRCP
                  </p>
                  <p style={{ margin: 0, fontSize: '12px', color: '#aaa' }}>GRCP Events</p>
                </div>
              </div>
              <button
                onClick={() => setShowTour(false)}
                style={{
                  background: 'none', border: 'none', color: '#fff',
                  fontSize: '22px', cursor: 'pointer', lineHeight: 1,
                  padding: '4px 8px', borderRadius: '3px',
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent' }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* 16:9 YouTube embed */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/AmszlV1een0?autoplay=1&rel=0"
                title="Virtual Tour of GRCP"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  border: 'none',
                }}
              />
            </div>
          </div>
        </div>
      )}


      <Routes>
        <Route path="/"      element={<Home />}  />
        <Route path="/about" element={<About />} />
        <Route path="/peo"   element={<Peo />}   />
        <Route path="/pos"   element={<Pos />}   />

        {/* Admissions */}
        <Route path="/admissions/admission-procedure" element={<AdmissionProcedure />} />
        <Route path="/admissions/course-fees"         element={<CourseFees />}         />
        <Route path="/admissions/eamcet"              element={<Eamcet />}             />
        <Route path="/admissions/pgecet"              element={<Pgecet />}             />

        {/* Academics */}
        <Route path="/academics/syllabus-b-pharmacy"            element={<SyllabusBPharmacy />}  />
        <Route path="/academics/syllabus-m-pharmacy"            element={<SyllabusMPharmacy />}  />
        <Route path="/academics/academic-calendar"              element={<AcademicCalendar />}   />
        <Route path="/academics/time-tables"                    element={<TimeTables />}         />
        <Route path="/academics/library"                        element={<LibraryCommittee />}   />
        <Route path="/academics/library/information-center"     element={<InformationCenter />}  />
        <Route path="/academics/library/e-journals"             element={<EJournals />}          />
        <Route path="/academics/library/daily-news-papers"      element={<DailyNewsPapers />}    />
        <Route path="/academics/library/statistics"             element={<LibraryStatistics />}  />
        <Route path="/academics/library/title-volumes"          element={<TitleVolumes />}       />
        <Route path="/academics/faculty"                        element={<FacultyList />}        />
        <Route path="/academics/non-teaching-staff"             element={<NonTeachingStaff />}   />

        {/* Programmes */}
        <Route path="/programmes/b-pharmacy"                          element={<BPharmacy />}          />
        <Route path="/programmes/m-pharmacy/pharmaceutics"            element={<MPharmPharmaceutics />} />
        <Route path="/programmes/m-pharmacy/pharmaceutical-analysis"  element={<MPharmAnalysis />}     />
        <Route path="/programmes/m-pharmacy/pharmacology"             element={<MPharmPharmacology />} />
        <Route path="/programmes/pg-program-committee"                element={<PgProgramCommittee />} />

        {/* Examination */}
        <Route path="/examination/examination-branch"  element={<ExaminationBranch />}  />
        <Route path="/examination/sessional-timetable" element={<SessionalTimetable />} />
        <Route path="/examination/ou-timetables"       element={<OuTimetables />}       />
        <Route path="/examination/ou-notifications"    element={<OuNotifications />}    />
        <Route path="/examination/results"             element={<ExamResults />}        />
        <Route path="/examination/question-papers"     element={<QuestionPapers />}     />

        {/* Research */}
        <Route path="/research/research-at-grcp" element={<ResearchAtGRCP />} />
        <Route path="/research/phd-guideships"   element={<PhdGuideships />}  />
        <Route path="/research/publications"     element={<Publications />}   />
        <Route path="/research/patents"          element={<Patents />}        />
        <Route path="/research/consultancy"      element={<Consultancy />}    />

        {/* Placements */}
        <Route path="/placements/placement-cell"   element={<PlacementCell />}   />
        <Route path="/placements/placement-status" element={<PlacementStatus />} />

        {/* Alumni */}
        <Route path="/alumni/alumni-registration"  element={<AlumniRegistration />}  />
        <Route path="/alumni/executive-members"    element={<AlumniExecMembers />}   />
        <Route path="/alumni/list-of-alumni"       element={<AlumniList />}          />
        <Route path="/alumni/distinguished-alumni" element={<DistinguishedAlumni />} />
        <Route path="/alumni/alumni-contribution"  element={<AlumniContribution />}  />

        {/* Administration */}
        <Route path="/administration/chairman"       element={<Chairman />}      />
        <Route path="/administration/vice-president" element={<VicePresident />} />
        <Route path="/administration/principal"      element={<Principal />}     />
        <Route path="/administration/governing-body" element={<GoverningBody />} />
        <Route path="/administration/idmc"           element={<Idmc />}          />
        <Route path="/administration/org-chart"      element={<OrgChart />}      />

        {/* Secondary nav pages */}
        <Route path="/alumni-association"    element={<AlumniAssociation />}    />
        <Route path="/mandatory-disclosures" element={<MandatoryDisclosures />} />
        <Route path="/nirf"                  element={<Nirf />}                 />
        <Route path="/events"                element={<Events />}               />

        {/* Top-bar quick links */}
        <Route path="/e-bulletin"  element={<EBulletin />}  />
        <Route path="/downloads"   element={<Downloads />}  />
        <Route path="/contact-us"  element={<ContactUs />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App
