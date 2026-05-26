import { Link } from 'react-router-dom'
import { FaExternalLinkAlt, FaFilePdf, FaUsers, FaEnvelope } from 'react-icons/fa'
import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'

const SECTION_HEAD = { fontSize: '20px', fontWeight: '700', color: '#a41425', marginBottom: '4px' }
const TH = { padding: '10px 14px', fontSize: '13px', fontWeight: '600', color: '#fff', backgroundColor: '#a41425', border: '1px solid #8c0f1e', textAlign: 'left', whiteSpace: 'nowrap' }
const TD = { padding: '9px 12px', fontSize: '13px', color: '#212529', border: '1px solid #dee2e6', verticalAlign: 'top' }

const alumniLinks = [
  { label: 'Alumni Registration', desc: 'Download the registration form (PDF)', href: 'https://grcp.ac.in/downloads/Alumni%20Registration.pdf', icon: 'pdf', external: true },
  { label: 'Executive Members', desc: 'View the Alumni Association Executive Committee', href: '/alumni/executive-members', icon: 'internal' },
  { label: 'Alumni Enrollment', desc: 'Enroll via Google Form', href: 'https://forms.gle/haTVpnDni9DB2gyU8', icon: 'external', external: true },
  { label: 'List of Alumni', desc: 'Browse the full list of 272+ registered alumni', href: '/alumni/list-of-alumni', icon: 'internal' },
  { label: 'Distinguished Alumni', desc: 'View distinguished alumni (PDF)', href: 'https://grcp.ac.in/downloads/Distinguished%20Alumni.pdf', icon: 'pdf', external: true },
  { label: 'Alumni Contribution', desc: 'Alumni lecture series and contributions', href: '/alumni/alumni-contribution', icon: 'internal' },
]

const committee = [
  { sno: 1, name: 'Dr. M. Ganga Raju', designation: 'Professor & Principal', position: 'President', email: 'ganga8000@grcp.ac.in' },
  { sno: 2, name: 'Mrs. B. Karuna Devi', designation: 'Assistant Professor', position: 'Coordinator', email: 'karuna8062@grcp.ac.in' },
  { sno: 3, name: 'Dr. N V L Suvarchala Reddy V', designation: 'Professor', position: 'Member', email: 'suvarchala8018@grcp.ac.in' },
  { sno: 4, name: 'Dr. A. D. Pani Kumar', designation: 'Associate Professor', position: 'Member', email: 'durga8017@grcp.ac.in' },
  { sno: 5, name: 'Dr. Monika Nijhawan', designation: 'Professor', position: 'Member', email: 'monika8009@grcp.ac.in' },
  { sno: 6, name: 'Mrs. M. Mamatha', designation: 'Assistant Professor', position: 'Member', email: 'mamatha8069@grcp.ac.in' },
  { sno: 7, name: 'Mrs. B. Prathyusha', designation: 'Assistant Professor', position: 'Member', email: 'prathyusha8083@grcp.ac.in' },
  { sno: 8, name: 'Mrs. Shabnam Kumari Thakur', designation: 'Assistant Professor', position: 'Member', email: 'shabnam8079@grcp.ac.in' },
  { sno: 9, name: 'P. Nikhitha', designation: 'Student', position: 'Member', email: '' },
  { sno: 10, name: 'Nimitha. M', designation: 'Student', position: 'Member', email: '' },
]

function getPositionBadge(position) {
  let bg, color
  if (position === 'President') { bg = '#a41425'; color = '#fff' }
  else if (position === 'Coordinator') { bg = '#002a6f'; color = '#fff' }
  else { bg = '#e9ecef'; color = '#383838' }
  return (
    <span style={{ display: 'inline-block', padding: '2px 10px', borderRadius: '3px', fontSize: '12px', fontWeight: '600', backgroundColor: bg, color }}>
      {position}
    </span>
  )
}

function getLinkIcon(icon) {
  if (icon === 'pdf') return <FaFilePdf color="#a41425" style={{ flexShrink: 0 }} />
  if (icon === 'external') return <FaExternalLinkAlt color="#a41425" style={{ flexShrink: 0 }} />
  return <FaUsers color="#a41425" style={{ flexShrink: 0 }} />
}

export default function AlumniAssociation() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="ALUMNI ASSOCIATION" />
      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* Section 1: Overview */}
            <h2 style={SECTION_HEAD}>About GRCP Alumni Association</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <p style={{ fontSize: '14px', color: '#383838', lineHeight: '1.75', marginBottom: '12px' }}>
              Gokaraju Rangaraju College of Pharmacy Alumni Association was established in the year 2007. The Alumni Association of GRCP maintains a healthy relationship between the institute and its alumni, students, and other stakeholders. The association organizes annual alumni meets every year during the month of February at the Nizampet campus.
            </p>
            <p style={{ fontSize: '14px', color: '#383838', lineHeight: '1.75', marginBottom: '32px' }}>
              The association aims to strengthen the bond between alumni, current students, and the institution while providing a platform for career guidance, networking, and knowledge sharing with the pharmaceutical community.
            </p>

            {/* Section 2: Quick Links */}
            <h2 style={SECTION_HEAD}>Alumni Links</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }}>
              {alumniLinks.map((item, idx) => (
                <div key={idx} style={{ backgroundColor: '#fff', border: '1px solid #dee2e6', padding: '16px', borderLeft: '4px solid #a41425', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {getLinkIcon(item.icon)}
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#212529' }}>{item.label}</span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#6c757d', margin: 0 }}>{item.desc}</p>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', color: '#a41425', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      Open <FaExternalLinkAlt size={10} />
                    </a>
                  ) : (
                    <Link to={item.href} style={{ fontSize: '13px', color: '#a41425', textDecoration: 'underline' }}>
                      View
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Section 3: Executive Committee */}
            <h2 style={SECTION_HEAD}>Executive Committee 2025-26</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                <thead>
                  <tr>
                    <th style={TH}>S.No.</th>
                    <th style={TH}>Name</th>
                    <th style={TH}>Designation</th>
                    <th style={TH}>Position</th>
                    <th style={TH}>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {committee.map((row, idx) => {
                    const bg = idx % 2 === 0 ? '#fff' : '#f8f9fa'
                    return (
                      <tr key={row.sno} style={{ backgroundColor: bg }}>
                        <td style={TD}>{row.sno}</td>
                        <td style={TD}>{row.name}</td>
                        <td style={TD}>{row.designation}</td>
                        <td style={TD}>{getPositionBadge(row.position)}</td>
                        <td style={TD}>
                          {row.email ? (
                            <a href={`mailto:${row.email}`} style={{ color: '#0d6efd', textDecoration: 'none' }}>{row.email}</a>
                          ) : '—'}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* Section 4: Contact Strip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 20px', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', borderLeft: '4px solid #a41425', borderRadius: '4px', marginTop: '32px', fontSize: '14px', color: '#383838' }}>
              <FaEnvelope color="#a41425" />
              <span>
                For alumni related queries, contact us at{' '}
                <a href="mailto:alumni@grcp.ac.in" style={{ color: '#a41425', fontWeight: '600', textDecoration: 'underline' }}>alumni@grcp.ac.in</a>
              </span>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
