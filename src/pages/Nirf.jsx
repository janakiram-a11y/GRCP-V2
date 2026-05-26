// Nirf.jsx — Route: /nirf

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

export default function Nirf() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="NIRF" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <p style={{ fontSize:'15px', color:'#383838', lineHeight:'1.75', fontWeight:'500', marginBottom:'28px' }}>
              The National Institutional Ranking Framework (NIRF) was approved by the MHRD (now Ministry of Education) and launched in September 2015. The methodology draws from the overall recommendations broad understanding arrived at by a Core Committee set up by MHRD.
            </p>

            <DisclosureSection
              title="NIRF 2026"
              links={[
                { label: 'NIRF — SDG Institution', href: 'https://grcp.ac.in/downloads/nirf/NIRF-Overall.pdf' },
                { label: 'NIRF — Pharmacy', href: 'https://grcp.ac.in/downloads/nirf/NIRF-Pharmacy.pdf' },
                { label: 'NIRF — Innovation', href: 'https://grcp.ac.in/downloads/nirf/NIRF-Innovation.pdf' },
                { label: 'NIRF — Overall', href: 'https://grcp.ac.in/downloads/nirf/NIRF-Overall.pdf' },
              ]}
            />

            <DisclosureSection
              title="NIRF 2025"
              links={[
                { label: 'NIRF — SDG Institution', href: 'https://grcp.ac.in/downloads/NIRF-SDG%20institution%202025.pdf' },
                { label: 'NIRF — Pharmacy', href: 'https://grcp.ac.in/downloads/NIRF-Pharmacy%202025.pdf' },
                { label: 'NIRF — Innovation', href: 'https://grcp.ac.in/downloads/NIRF-Innovation%202025.pdf' },
                { label: 'NIRF — Overall', href: 'https://grcp.ac.in/downloads/NIRF-Overall%202025.pdf' },
              ]}
            />

            <DisclosureSection
              title="Historical NIRF Submissions"
              links={[
                { label: 'Certificate 2022', href: 'https://grcp.ac.in/downloads/Certificate%202022.pdf' },
                { label: 'NIRF Innovation', href: 'https://grcp.ac.in/downloads/NIRF-innovation.pdf' },
                { label: 'Data Submitted by Institution for India Rankings 2024', href: 'https://grcp.ac.in/downloads/Gokaraju%20Rangaraju%20College%20of%20Pharmacy20240127-.pdf' },
                { label: 'Data Submitted by Institution for India Rankings 2023', href: 'https://grcp.ac.in/downloads/NIRF_Data_2023.pdf' },
                { label: 'Data Submitted by Institution for India Rankings 2022', href: 'https://grcp.ac.in/downloads/Data%20Submitted%20by%20Institution%20for%20India%20Rankings2022.pdf' },
              ]}
            />

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
