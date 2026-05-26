// TimeTables.jsx — Route: /academics/time-tables
// Replicates grcp.ac.in/timetable.php

import { FaFilePdf } from 'react-icons/fa'
import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { bPharmTimetables, mPharmTimetables } from '../data/academicsData'

const TH = {
  padding: '10px 14px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#fff',
  backgroundColor: '#a41425',
  border: '1px solid #8c0f1e',
  textAlign: 'left',
  whiteSpace: 'nowrap',
}
const TD = {
  padding: '10px 14px',
  fontSize: '14px',
  color: '#212529',
  border: '1px solid #dee2e6',
  verticalAlign: 'middle',
}

function PdfLink({ href }) {
  if (!href) return <span style={{ color: '#6c757d', fontSize: '13px' }}>—</span>
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        backgroundColor: '#a41425',
        color: '#fff',
        padding: '5px 12px',
        fontSize: '12px',
        fontWeight: '600',
        borderRadius: '3px',
        textDecoration: 'none',
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8c0f1e' }}
      onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#a41425' }}
    >
      <FaFilePdf style={{ fontSize: '13px' }} />
      View
    </a>
  )
}

function SectionHeading({ children }) {
  return (
    <h3
      style={{
        fontSize: '18px',
        fontWeight: '700',
        color: '#a41425',
        margin: '32px 0 16px',
        paddingBottom: '8px',
        borderBottom: '2px solid #dee2e6',
      }}
    >
      {children}
    </h3>
  )
}

export default function TimeTables() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="TIME TABLES" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* ── B.Pharmacy ── */}
            <SectionHeading>B.Pharmacy Timetables ({bPharmTimetables.year})</SectionHeading>
            <div className="overflow-x-auto">
              <table className="w-full bg-white" style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}>
                <thead>
                  <tr>
                    <th style={{ ...TH, width: '60px', textAlign: 'center' }}>S.No.</th>
                    <th style={TH}>Semester</th>
                    <th style={TH}>Section</th>
                    <th style={TH}>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {bPharmTimetables.rows.map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                      <td style={{ ...TD, textAlign: 'center', fontWeight: '500' }}>{i + 1}</td>
                      <td style={{ ...TD, fontWeight: '600' }}>{row.sem}</td>
                      <td style={TD}>Section {row.section}</td>
                      <td style={TD}><PdfLink href={row.href} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── M.Pharmacy ── */}
            <SectionHeading>M.Pharmacy Timetables ({mPharmTimetables.year})</SectionHeading>
            <div className="overflow-x-auto">
              <table className="w-full bg-white" style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}>
                <thead>
                  <tr>
                    <th style={{ ...TH, width: '60px', textAlign: 'center' }}>S.No.</th>
                    <th style={TH}>Specialisation</th>
                    <th style={TH}>Semester</th>
                    <th style={TH}>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {mPharmTimetables.rows.map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                      <td style={{ ...TD, textAlign: 'center', fontWeight: '500' }}>{i + 1}</td>
                      <td style={{ ...TD, fontWeight: '600' }}>{row.specialisation}</td>
                      <td style={TD}>{row.sem}</td>
                      <td style={TD}><PdfLink href={row.href} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
