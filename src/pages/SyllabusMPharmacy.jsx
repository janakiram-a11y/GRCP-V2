// SyllabusMPharmacy.jsx — Route: /academics/syllabus-m-pharmacy
// Replicates grcp.ac.in/Syllabus-M-Pharmacy.php

import { FaFilePdf } from 'react-icons/fa'
import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { mPharmSyllabus } from '../data/academicsData'

function DownloadRow({ label, href }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 14px',
        backgroundColor: '#fff',
        border: '1px solid #dee2e6',
        borderRadius: '3px',
        marginBottom: '6px',
        gap: '12px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaFilePdf style={{ color: '#dc3545', fontSize: '18px', flexShrink: 0 }} />
        <span style={{ fontSize: '13px', fontWeight: '600', color: '#383838' }}>{label}</span>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#a41425',
          color: '#fff',
          padding: '5px 14px',
          fontSize: '12px',
          fontWeight: '600',
          textDecoration: 'none',
          borderRadius: '3px',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8c0f1e' }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#a41425' }}
      >
        View / Download
      </a>
    </div>
  )
}

export default function SyllabusMPharmacy() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="M.PHARMACY SYLLABUS" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#a41425', marginBottom: '4px' }}>
              {mPharmSyllabus.heading}
            </h2>
            <p style={{ fontSize: '14px', fontWeight: '600', color: '#6c757d', marginBottom: '28px' }}>
              {mPharmSyllabus.subheading}
            </p>

            {mPharmSyllabus.specialisations.map((spec, si) => (
              <div key={si} style={{ marginBottom: '28px' }}>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#383838',
                    backgroundColor: '#f8f9fa',
                    padding: '10px 14px',
                    borderLeft: '4px solid #a41425',
                    marginBottom: '10px',
                  }}
                >
                  {spec.name}
                </h3>
                {spec.semesters.map((sem, i) => (
                  <DownloadRow key={i} label={sem.label} href={sem.href} />
                ))}
              </div>
            ))}

            <h3
              style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#383838',
                backgroundColor: '#f8f9fa',
                padding: '10px 14px',
                borderLeft: '4px solid #a41425',
                marginBottom: '10px',
              }}
            >
              Rules &amp; Regulations
            </h3>
            <DownloadRow label="M.Pharm PCI Rules &amp; Regulations" href={mPharmSyllabus.rulesHref} />

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
