// MandatoryDisclosures.jsx — Route: /mandatory-disclosures

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { FaFilePdf } from 'react-icons/fa'

const TH = { padding:'10px 14px', fontSize:'14px', fontWeight:'600', color:'#fff', backgroundColor:'#a41425', border:'1px solid #8c0f1e', textAlign:'left', whiteSpace:'nowrap' }
const SECTION_HEAD = { fontSize:'20px', fontWeight:'700', color:'#a41425', marginBottom:'4px' }

function PdfLink({ href, label }) {
  return (
    <li style={{ display:'flex', alignItems:'center', gap:'8px', padding:'8px 0', borderBottom:'1px solid #f0f0f0' }}>
      <FaFilePdf style={{ color:'#a41425', fontSize:'14px', flexShrink:0 }} />
      <a href={href} target="_blank" rel="noopener noreferrer"
        style={{ fontSize:'14px', color:'#0d6efd', fontWeight:'500', textDecoration:'none' }}
        onMouseEnter={e=>e.currentTarget.style.textDecoration='underline'}
        onMouseLeave={e=>e.currentTarget.style.textDecoration='none'}>
        {label}
      </a>
    </li>
  )
}

function DisclosureSection({ title, links }) {
  return (
    <div style={{ marginBottom:'32px' }}>
      <h2 style={SECTION_HEAD}>{title}</h2>
      <hr style={{ borderColor:'#dee2e6', marginBottom:'12px' }} />
      <ul style={{ paddingLeft:0, margin:0, listStyle:'none' }}>
        {links.map((l,i) => <PdfLink key={i} href={l.href} label={l.label} />)}
      </ul>
    </div>
  )
}

export default function MandatoryDisclosures() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="MANDATORY DISCLOSURES" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <DisclosureSection
              title="AICTE Disclosures"
              links={[
                { label: 'Approval Process 2021-22', href: 'https://grcp.ac.in/downloads/AICTE%20EOA%202021-22.pdf' },
                { label: 'Approval Process 2022-23', href: 'https://grcp.ac.in/downloads/AICTE%20EOA%202022-23.pdf' },
              ]}
            />

            <DisclosureSection
              title="NBA Disclosures"
              links={[
                { label: 'NBA Accreditation', href: 'https://grcp.ac.in/downloads/NBA%20Accreditation.pdf' },
                { label: 'Certificate 2022', href: 'https://grcp.ac.in/downloads/Certificate%202022.pdf' },
              ]}
            />

            <DisclosureSection
              title="NIRF Disclosures"
              links={[
                { label: 'NIRF Innovation', href: 'https://grcp.ac.in/downloads/NIRF-innovation.pdf' },
                { label: 'Data Submitted by Institution for India Rankings 2024', href: 'https://grcp.ac.in/downloads/Gokaraju%20Rangaraju%20College%20of%20Pharmacy20240127-.pdf' },
                { label: 'Data Submitted by Institution for India Rankings 2023', href: 'https://grcp.ac.in/downloads/NIRF_Data_2023.pdf' },
                { label: 'Data Submitted by Institution for India Rankings 2022', href: 'https://grcp.ac.in/downloads/Data%20Submitted%20by%20Institution%20for%20India%20Rankings2022.pdf' },
              ]}
            />

            <DisclosureSection
              title="OU Disclosures"
              links={[
                { label: 'OU Affiliation 2025-2026', href: 'https://grcp.ac.in/downloads/OU%20Affiliation%202025-2026.pdf' },
                { label: 'OU Affiliation 2024-2025', href: 'https://grcp.ac.in/downloads/OU%20Affiliation%202024-2025.pdf' },
                { label: 'OU Affiliation 2023-2024', href: 'https://grcp.ac.in/downloads/OU%20Affiliation%202023-2024.pdf' },
                { label: 'OU Affiliation 2022-2023', href: 'https://grcp.ac.in/downloads/OU%20Affiliation%202022-2023.pdf' },
                { label: 'OU Affiliation 2021-2022', href: 'https://grcp.ac.in/downloads/OU%20Affiliation%202021-22.pdf' },
                { label: 'OU Affiliation 2020-2021', href: 'https://grcp.ac.in/downloads/OU%20Affiliation%202020-21.pdf' },
              ]}
            />

            <DisclosureSection
              title="PCI Disclosures"
              links={[
                { label: 'Decision Letter — PCI for Academic Session 2025-2026', href: 'https://grcp.ac.in/downloads/Decision%20Letter_PCI_%20for%20Academic%20Session%282025-2026%29.pdf' },
                { label: 'Decision Letter — PCI for Academic Session 2021-2022', href: 'https://grcp.ac.in/downloads/Decision%20Letter_PCI_%20for%20Academic%20Session%282021-2022%29.pdf' },
                { label: 'Final SIF Report 2021-22', href: 'https://grcp.ac.in/downloads/Final%20SIF%20Report%2021-22.pdf' },
              ]}
            />

            <DisclosureSection
              title="Audit Reports"
              links={[
                { label: 'GRCP Audit Report 2024-25', href: 'https://grcp.ac.in/downloads/GRCP%20Audit%20report%202024-25.pdf' },
                { label: 'GRCP Audit Report 2023-24', href: 'https://grcp.ac.in/downloads/GRCP%20Audit%20report%202023-24.pdf' },
                { label: 'GRCP Audit Report 2022-23', href: 'https://grcp.ac.in/downloads/GRCP%20Audit%20Report%202022-2023.pdf' },
                { label: 'GRCP Audit Report 2020-21', href: 'https://grcp.ac.in/downloads/GRCP%20Audit%20Report%202020-21.pdf' },
                { label: 'GRCP Audit Report 2019-20', href: 'https://grcp.ac.in/downloads/GRCP%20Audit%20Report%202019-20.pdf' },
                { label: 'GRCP Audit Report 2018-19', href: 'https://grcp.ac.in/downloads/GRCP%20Audit%20report%202018-19.pdf' },
              ]}
            />

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
