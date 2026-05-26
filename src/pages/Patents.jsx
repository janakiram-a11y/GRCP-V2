// Patents.jsx — Route: /research/patents
// Two sections: 2024 patents (23) and 2021-2023 patents (15)

import { FaFilePdf, FaImage } from 'react-icons/fa'
import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { patents2024, patents2021_2023 } from '../data/researchData'

const TH = {
  padding: '10px 12px',
  fontSize: '13px',
  fontWeight: '600',
  color: '#fff',
  backgroundColor: '#a41425',
  border: '1px solid #8c0f1e',
  textAlign: 'left',
  whiteSpace: 'nowrap',
}

const TD = {
  padding: '9px 12px',
  fontSize: '13px',
  color: '#212529',
  border: '1px solid #dee2e6',
  verticalAlign: 'top',
}

const SECTION_HEAD = {
  fontSize: '20px',
  fontWeight: '700',
  color: '#a41425',
  marginBottom: '4px',
}

function StatusBadge({ status }) {
  const isGranted = status === 'Granted'
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 10px',
        borderRadius: '3px',
        fontSize: '12px',
        fontWeight: '600',
        backgroundColor: isGranted ? '#00883e' : '#002a6f',
        color: '#fff',
        whiteSpace: 'nowrap',
      }}
    >
      {status}
    </span>
  )
}

function ProofLink({ url }) {
  if (!url) return <span style={{ color: '#999', fontSize: '12px' }}>—</span>
  const isPdf = url.toLowerCase().endsWith('.pdf')
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={isPdf ? 'View Patent PDF' : 'View Patent Image'}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '5px',
        backgroundColor: isPdf ? '#a41425' : '#005a8e',
        color: '#fff', padding: '4px 10px', borderRadius: '3px',
        fontSize: '11px', fontWeight: '600', textDecoration: 'none',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
      onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
    >
      {isPdf
        ? <FaFilePdf style={{ fontSize: '12px' }} />
        : <FaImage style={{ fontSize: '12px' }} />}
      {isPdf ? 'PDF' : 'Image'}
    </a>
  )
}

function PatentsTable({ data }) {
  return (
    <div className="overflow-x-auto" style={{ marginBottom: '36px' }}>
      <table
        className="w-full bg-white"
        style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}
      >
        <thead>
          <tr>
            <th style={{ ...TH, width: '50px', textAlign: 'center' }}>S.No.</th>
            <th style={{ ...TH, minWidth: '140px' }}>App / Patent No.</th>
            <th style={{ ...TH, minWidth: '280px' }}>Title</th>
            <th style={{ ...TH, minWidth: '220px' }}>Inventor(s)</th>
            <th style={{ ...TH, width: '105px' }}>Filed</th>
            <th style={{ ...TH, width: '120px' }}>Published / Granted</th>
            <th style={{ ...TH, width: '90px', textAlign: 'center' }}>Status</th>
            <th style={{ ...TH, width: '80px', textAlign: 'center' }}>Proof</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p, i) => (
            <tr key={p.sno} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
              <td style={{ ...TD, textAlign: 'center', fontWeight: '600' }}>{p.sno}</td>
              <td style={{ ...TD, fontWeight: '600', color: '#383838', whiteSpace: 'nowrap' }}>{p.appNo}</td>
              <td style={{ ...TD, lineHeight: '1.5' }}>{p.title}</td>
              <td style={{ ...TD, fontSize: '12px', lineHeight: '1.6', color: '#555' }}>{p.inventors}</td>
              <td style={{ ...TD, whiteSpace: 'nowrap' }}>{p.filed}</td>
              <td style={{ ...TD, whiteSpace: 'nowrap' }}>{p.date}</td>
              <td style={{ ...TD, textAlign: 'center' }}>
                <StatusBadge status={p.status} />
              </td>
              <td style={{ ...TD, textAlign: 'center' }}>
                <ProofLink url={p.proof} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Patents() {
  const granted2024   = patents2024.filter(p => p.status === 'Granted').length
  const published2024 = patents2024.filter(p => p.status === 'Published').length
  const granted2021   = patents2021_2023.filter(p => p.status === 'Granted').length
  const published2021 = patents2021_2023.filter(p => p.status === 'Published').length

  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="PATENTS" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* ── 2024 Patents ── */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap' }}>
              <h2 style={SECTION_HEAD}>2024 Patents</h2>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', padding: '2px 10px', borderRadius: '3px', backgroundColor: '#00883e', color: '#fff' }}>
                  {granted2024} Granted
                </span>
                <span style={{ fontSize: '13px', fontWeight: '600', padding: '2px 10px', borderRadius: '3px', backgroundColor: '#002a6f', color: '#fff' }}>
                  {published2024} Published
                </span>
              </div>
            </div>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <PatentsTable data={patents2024} />

            {/* ── 2021-2023 Patents ── */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap' }}>
              <h2 style={SECTION_HEAD}>2021-2023 Patents</h2>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', padding: '2px 10px', borderRadius: '3px', backgroundColor: '#00883e', color: '#fff' }}>
                  {granted2021} Granted
                </span>
                <span style={{ fontSize: '13px', fontWeight: '600', padding: '2px 10px', borderRadius: '3px', backgroundColor: '#002a6f', color: '#fff' }}>
                  {published2021} Published
                </span>
              </div>
            </div>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <PatentsTable data={patents2021_2023} />

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
