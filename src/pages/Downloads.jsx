// Downloads — categorised document library
// Source: https://grcp.ac.in/downloads/ directory + Downloads.php page

import { FaFilePdf, FaFileWord, FaFileImage, FaDownload, FaFolder } from 'react-icons/fa'
import TopBar        from '../sections/TopBar'
import HeaderLogo    from '../sections/HeaderLogo'
import Navbar        from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer        from '../components/layout/Footer'

const BASE = 'https://grcp.ac.in/downloads/'

const SECTION_HEAD = {
  fontSize: '20px', fontWeight: '700', color: '#a41425', marginBottom: '4px',
}

const CAT_HEAD = {
  display: 'flex', alignItems: 'center', gap: '8px',
  backgroundColor: '#a41425', color: '#fff',
  padding: '9px 14px', fontSize: '13px', fontWeight: '700',
  letterSpacing: '0.4px', textTransform: 'uppercase',
  borderRadius: '3px 3px 0 0',
}

// ---------- Data ----------
const categories = [
  {
    id: 'forms',
    label: 'Application Forms',
    files: [
      { name: 'GRCP Student ID Card Application Form', file: 'GRCP%20Student%20ID%20Card%20Application%20Form.docx', type: 'word' },
      { name: 'Application Form for Faculty Positions', file: 'APPLICATION%20FORM%20FOR%20FACULTY%20POSITIONS.docx', type: 'word' },
      { name: 'Alumni Registration Form', file: 'Alumni%20Registration.pdf', type: 'pdf' },
      { name: 'M.Pharmacy Application Form 2024-25', file: 'M.%20Pharmacy%20Application%20form-2024-25.pdf', type: 'pdf' },
    ],
  },
  {
    id: 'academic',
    label: 'Academic Materials (Almanacs)',
    files: [
      { name: 'B.Pharmacy Almanac 2023-24', file: 'B%20Pharmacy%20Almanacs_2023_24.pdf', type: 'pdf' },
      { name: 'B.Pharmacy Almanac 2024-25', file: 'B_Pharmacy_almanac_2024-2025.pdf', type: 'pdf' },
      { name: 'B.Pharmacy Almanac 2025-26', file: 'B_Pharmacy_almanac_2025-2026.pdf', type: 'pdf' },
      { name: 'M.Pharmacy Almanac 2024-25', file: 'M_Pharmacy_almanac_2024-2025.pdf', type: 'pdf' },
      { name: 'M.Pharmacy Almanac 2025-26', file: 'M_Pharmacy_almanac_2025-2026.pdf', type: 'pdf' },
      { name: 'M.Pharmacy (Cat-B) Notification 2024-25', file: 'M.%20Pharmacy%20(Cat-B)%20Notification%202024-25.pdf', type: 'pdf' },
    ],
  },
  {
    id: 'accreditation',
    label: 'Accreditation & Approvals',
    files: [
      { name: 'NBA Accreditation', file: 'NBA%20Accreditation.pdf', type: 'pdf' },
      { name: 'Approvals and Recognitions', file: 'Approvals%20and%20Recognitions.pdf', type: 'pdf' },
      { name: 'PCI Decision Letter – Academic Session 2021-22', file: 'Decision%20Letter_PCI_Academic%20Session%202021-2022.pdf', type: 'pdf' },
      { name: 'PCI Decision Letter – 2023', file: 'Decision%20Letter_PCI_2023.pdf', type: 'pdf' },
      { name: 'PCI Decision Letter – 2025-26', file: 'Decision%20Letter_PCI_2025-2026.pdf', type: 'pdf' },
      { name: 'Distinguished Alumni', file: 'Distinguished%20Alumni.pdf', type: 'pdf' },
      { name: 'GRCP College Profile', file: 'Gokaraju%20Rangaraju%20College%20of%20Pharmacy%20profile.pdf', type: 'pdf' },
    ],
  },
  {
    id: 'nirf',
    label: 'NIRF Reports 2025',
    files: [
      { name: 'NIRF – Overall 2025', file: 'NIRF-Overall%202025.pdf', type: 'pdf' },
      { name: 'NIRF – Pharmacy 2025', file: 'NIRF-Pharmacy%202025.pdf', type: 'pdf' },
      { name: 'NIRF – Innovation 2025', file: 'NIRF-Innovation%202025.pdf', type: 'pdf' },
      { name: 'NIRF – SDG Institution 2025', file: 'NIRF-SDG%20institution%202025.pdf', type: 'pdf' },
    ],
  },
  {
    id: 'audit',
    label: 'Audit Reports',
    files: [
      { name: 'GRCP Audit Report 2018-19', file: 'GRCP%20Audit%20Report%202018-19.pdf', type: 'pdf' },
      { name: 'GRCP Audit Report 2019-20', file: 'GRCP%20Audit%20Report%202019-20.pdf', type: 'pdf' },
      { name: 'GRCP Audit Report 2020-21', file: 'GRCP%20Audit%20Report%202020-21.pdf', type: 'pdf' },
      { name: 'GRCP Audit Report 2021-22', file: 'GRCP%20Audit%20Report%202021-22.pdf', type: 'pdf' },
      { name: 'GRCP Audit Report 2022-23', file: 'GRCP%20Audit%20Report%202022-23.pdf', type: 'pdf' },
      { name: 'GRCP Audit Report 2023-24', file: 'GRCP%20Audit%20Report%202023-24.pdf', type: 'pdf' },
      { name: 'GRCP Audit Report 2024-25', file: 'GRCP%20Audit%20Report%202024-25.pdf', type: 'pdf' },
    ],
  },
  {
    id: 'ebulletin',
    label: 'E-Bulletin & Publications',
    files: [
      { name: 'GRCP E-Bulletin – Jan-April 2025', file: 'GRCP%20E-Bulletin%20Jan-April%2025.pdf', type: 'pdf', badge: 'NEW' },
      { name: 'GRCP Insights – Special Edition 2023', file: 'GRCP%20Special%20edition%202023.pdf', type: 'pdf' },
    ],
  },
  {
    id: 'ou',
    label: 'OU Affiliation Documents',
    files: [
      { name: 'OU Affiliation 2020-21', file: 'OU%20Affiliation%202020-21.pdf', type: 'pdf' },
      { name: 'OU Affiliation 2021-22', file: 'OU%20Affiliation%202021-22.pdf', type: 'pdf' },
      { name: 'OU Affiliation 2022-23', file: 'OU%20Affiliation%202022-23.pdf', type: 'pdf' },
      { name: 'OU Affiliation 2023-24', file: 'OU%20Affiliation%202023-24.pdf', type: 'pdf' },
      { name: 'OU Affiliation 2024-25', file: 'OU%20Affiliation%202024-25.pdf', type: 'pdf' },
      { name: 'OU Affiliation 2025-26', file: 'OU%20Affiliation%202025-26.pdf', type: 'pdf' },
    ],
  },
  {
    id: 'committees',
    label: 'Committees & Policies',
    files: [
      { name: 'Anti-Ragging Committee', file: 'Anti-ragging%20committe.pdf', type: 'pdf' },
      { name: 'Student Support and Progression', file: 'Student%20Support%20and%20Progression.pdf', type: 'pdf' },
      { name: 'Teaching Learning Methods', file: 'Teaching%20Learning%20Methods.pdf', type: 'pdf' },
      { name: "Institution's Innovation Council (IIC)", file: 'IIC.pdf', type: 'pdf' },
      { name: 'IPGA Certificate', file: 'IPGA.pdf', type: 'pdf' },
      { name: 'NBA Certificate', file: 'NBA.pdf', type: 'pdf' },
      { name: 'NIPAM', file: 'NIPAM.pdf', type: 'pdf' },
      { name: 'GRCP Balance Sheet – 31 March 2022', file: 'Grcp%20Balance%20Sheet%2031st%20March%202022.pdf', type: 'pdf' },
    ],
  },
]

// ---------- File icon helper ----------
function FileIcon({ type }) {
  if (type === 'word') return <FaFileWord style={{ color: '#2b579a', fontSize: '16px', flexShrink: 0 }} />
  if (type === 'image') return <FaFileImage style={{ color: '#00883e', fontSize: '16px', flexShrink: 0 }} />
  return <FaFilePdf style={{ color: '#a41425', fontSize: '16px', flexShrink: 0 }} />
}

// ---------- File row ----------
function FileRow({ file, idx }) {
  const bg = idx % 2 === 0 ? '#fff' : '#f8f9fa'
  const href = BASE + file.file

  return (
    <tr style={{ backgroundColor: bg }}>
      <td style={{ padding: '10px 14px', fontSize: '13px', color: '#495057', width: '36px', textAlign: 'center', border: '1px solid #dee2e6' }}>
        {idx + 1}
      </td>
      <td style={{ padding: '10px 14px', fontSize: '13px', color: '#212529', border: '1px solid #dee2e6' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <FileIcon type={file.type} />
          <span>{file.name}</span>
          {file.badge && (
            <span style={{
              backgroundColor: '#f59e0b', color: '#fff',
              fontSize: '10px', fontWeight: '700',
              padding: '1px 7px', borderRadius: '2px', letterSpacing: '0.3px',
            }}>
              {file.badge}
            </span>
          )}
        </div>
      </td>
      <td style={{ padding: '10px 14px', textAlign: 'center', width: '120px', border: '1px solid #dee2e6' }}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px',
            backgroundColor: '#a41425', color: '#fff',
            padding: '4px 12px', borderRadius: '3px',
            fontSize: '12px', fontWeight: '600', textDecoration: 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8c0f1e' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#a41425' }}
        >
          <FaDownload style={{ fontSize: '11px' }} />
          Download
        </a>
      </td>
    </tr>
  )
}

// ---------- Category block ----------
function Category({ cat }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <div style={CAT_HEAD}>
        <FaFolder style={{ fontSize: '13px' }} />
        {cat.label}
      </div>
      <div style={{ border: '1px solid #dee2e6', borderTop: 'none', borderRadius: '0 0 3px 3px', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {cat.files.map((file, idx) => (
              <FileRow key={idx} file={file} idx={idx} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ---------- Page ----------
export default function Downloads() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="DOWNLOADS" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* Intro */}
            <h2 style={SECTION_HEAD}>Document Repository</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <p style={{ fontSize: '14px', color: '#383838', lineHeight: '1.75', marginBottom: '32px' }}>
              Download official documents, application forms, academic materials, accreditation reports, NIRF submissions,
              audit reports, affiliation letters, and institutional policies from Gokaraju Rangaraju College of Pharmacy.
              Click the <strong>Download</strong> button next to any file to open or save it.
            </p>

            {/* Categories */}
            {categories.map(cat => <Category key={cat.id} cat={cat} />)}

            {/* Subdirectory note */}
            <div style={{
              display: 'flex', gap: '12px', flexWrap: 'wrap',
              marginTop: '8px', marginBottom: '16px',
            }}>
              {[
                { label: 'NIRF Detailed Data', href: 'https://grcp.ac.in/downloads/nirf/' },
                { label: 'Patents', href: 'https://grcp.ac.in/downloads/patents/' },
                { label: 'Question Papers', href: 'https://grcp.ac.in/downloads/question-papers/' },
                { label: 'Syllabus', href: 'https://grcp.ac.in/downloads/syllabus/' },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    backgroundColor: '#002a6f', color: '#fff',
                    padding: '7px 16px', borderRadius: '3px',
                    fontSize: '13px', fontWeight: '600', textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#001a4d' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#002a6f' }}
                >
                  <FaFolder style={{ fontSize: '12px' }} />
                  {link.label}
                </a>
              ))}
            </div>

          </div>
        </div>
        <br />
      </div>

      <Footer />
    </>
  )
}
