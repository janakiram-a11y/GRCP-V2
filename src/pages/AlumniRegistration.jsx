// AlumniRegistration.jsx — Route: /alumni/alumni-registration
// Replicates grcp.ac.in/Alumni_Registration.php

import { FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa'
import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'

const PDF_URL = 'https://grcp.ac.in/downloads/Alumni Registration.pdf'
const ENROLLMENT_URL = 'https://forms.gle/haTVpnDni9DB2gyU8'

export default function AlumniRegistration() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="ALUMNI REGISTRATION" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#a41425', marginBottom: '4px' }}>
              Alumni Registration
            </h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '20px' }} />

            <p style={{ fontSize: '14px', color: '#383838', lineHeight: '1.7', marginBottom: '20px' }}>
              Gokaraju Rangaraju College of Pharmacy warmly invites all alumni to register with the
              Alumni Association. Your registration helps us stay connected, share opportunities, and
              build a stronger network of pharmacy professionals.
            </p>

            <p style={{ fontSize: '14px', color: '#383838', lineHeight: '1.7', marginBottom: '28px' }}>
              Download the Alumni Registration form below, fill in your details, and submit it to
              the Alumni Cell. You may also enroll online using the Google Form link provided.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              {/* PDF download */}
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
                Download Registration Form (PDF)
              </a>

              {/* Online enrollment */}
              <a
                href={ENROLLMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  backgroundColor: '#fff', color: '#a41425',
                  padding: '11px 22px', borderRadius: '3px',
                  fontSize: '14px', fontWeight: '600', textDecoration: 'none',
                  border: '2px solid #a41425',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#a41425'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#fff'
                  e.currentTarget.style.color = '#a41425'
                }}
              >
                <FaExternalLinkAlt style={{ fontSize: '13px' }} />
                Alumni Enrollment (Online Form)
              </a>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
