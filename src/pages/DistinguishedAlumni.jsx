// DistinguishedAlumni.jsx — Route: /alumni/distinguished-alumni
// Replicates grcp.ac.in/Distinguished_Alumni.php

import { FaFilePdf } from 'react-icons/fa'
import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'

const PDF_URL = 'https://grcp.ac.in/downloads/Distinguished Alumni.pdf'

export default function DistinguishedAlumni() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="DISTINGUISHED ALUMNI" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#a41425', marginBottom: '4px' }}>
              Distinguished Alumni
            </h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '20px' }} />

            <p style={{ fontSize: '14px', color: '#383838', lineHeight: '1.7', marginBottom: '20px' }}>
              Gokaraju Rangaraju College of Pharmacy is proud to recognise the remarkable
              achievements of its alumni who have made significant contributions to the field of
              pharmacy and allied health sciences. The Distinguished Alumni award celebrates
              excellence in professional accomplishment, leadership, and service.
            </p>

            <p style={{ fontSize: '14px', color: '#383838', lineHeight: '1.7', marginBottom: '28px' }}>
              Click the button below to view the list of Distinguished Alumni.
            </p>

            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#a41425', color: '#fff',
                padding: '11px 22px', borderRadius: '3px',
                fontSize: '14px', fontWeight: '600', textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8c0f1e' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#a41425' }}
            >
              <FaFilePdf style={{ fontSize: '15px' }} />
              View Distinguished Alumni (PDF)
            </a>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
