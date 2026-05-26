// EBulletin — GRCP E-Bulletin editions page
// Two editions: 2025 (Vol 1, Jan-Apr) and 2023 (Special Edition)

import { FaFilePdf, FaDownload, FaBookOpen } from 'react-icons/fa'
import TopBar        from '../sections/TopBar'
import HeaderLogo    from '../sections/HeaderLogo'
import Navbar        from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer        from '../components/layout/Footer'

const SECTION_HEAD = {
  fontSize: '20px', fontWeight: '700', color: '#a41425', marginBottom: '4px',
}

const editions = [
  {
    id: 1,
    volume: 'Volume 1',
    year: '2025',
    period: 'January – April 2025',
    title: 'GRCP E-Bulletin',
    theme: 'First Light: Igniting Ideas, Inspiring Impact',
    description:
      'The inaugural volume of the GRCP E-Bulletin documents the rich institutional activities, academic milestones, student achievements, research highlights, and faculty accomplishments of the January–April 2025 semester. It captures the vibrant academic life at Gokaraju Rangaraju College of Pharmacy.',
    pdfUrl: 'https://grcp.ac.in/downloads/GRCP%20E-Bulletin%20Jan-April%2025.pdf',
    badge: 'NEW',
    accentColor: '#a41425',
  },
  {
    id: 2,
    volume: 'Special Edition',
    year: '2023',
    period: '2023',
    title: 'GRCP Insights',
    theme: 'Empowering Minds, Inspiring Futures',
    description:
      'The GRCP Insights Special Edition 2023 is a student magazine that celebrates the creative, academic, and extracurricular endeavors of GRCP students and faculty. It showcases articles, research snippets, event coverage, and inspirational stories from the GRCP community.',
    pdfUrl: 'https://grcp.ac.in/downloads/GRCP%20Special%20edition%202023.pdf',
    badge: null,
    accentColor: '#002a6f',
  },
]

function EditionCard({ edition }) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #dee2e6',
        borderRadius: '6px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Cover strip */}
      <div
        style={{
          backgroundColor: edition.accentColor,
          padding: '32px 28px 24px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '8px',
          minHeight: '180px',
        }}
      >
        {/* Background watermark icon */}
        <FaBookOpen
          style={{
            position: 'absolute', right: '20px', bottom: '16px',
            fontSize: '90px', color: 'rgba(255,255,255,0.10)',
          }}
        />

        {/* Volume / Year badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            backgroundColor: 'rgba(255,255,255,0.18)',
            color: '#fff',
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '1px',
            padding: '3px 10px',
            borderRadius: '2px',
            textTransform: 'uppercase',
          }}>
            {edition.volume}
          </span>
          {edition.badge && (
            <span style={{
              backgroundColor: '#f59e0b',
              color: '#fff',
              fontSize: '10px',
              fontWeight: '700',
              padding: '2px 8px',
              borderRadius: '2px',
              letterSpacing: '0.5px',
            }}>
              {edition.badge}
            </span>
          )}
        </div>

        <h3 style={{ margin: 0, fontSize: '26px', fontWeight: '800', color: '#fff', lineHeight: 1.1 }}>
          {edition.title}
        </h3>
        <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', lineHeight: 1.4 }}>
          "{edition.theme}"
        </p>
        <p style={{ margin: 0, fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontWeight: '600', marginTop: '4px' }}>
          {edition.period}
        </p>
      </div>

      {/* Body */}
      <div style={{ padding: '22px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#383838', lineHeight: '1.75' }}>
          {edition.description}
        </p>

        <a
          href={edition.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: edition.accentColor,
            color: '#fff',
            padding: '9px 20px',
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: '700',
            textDecoration: 'none',
            alignSelf: 'flex-start',
            marginTop: 'auto',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.88' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
        >
          <FaFilePdf style={{ fontSize: '14px' }} />
          Download PDF
          <FaDownload style={{ fontSize: '11px' }} />
        </a>
      </div>
    </div>
  )
}

export default function EBulletin() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="GRCP E-BULLETIN" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* Intro */}
            <h2 style={SECTION_HEAD}>About the E-Bulletin</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <p style={{ fontSize: '14px', color: '#383838', lineHeight: '1.75', marginBottom: '32px' }}>
              The GRCP E-Bulletin is an official institutional publication of Gokaraju Rangaraju College of Pharmacy,
              Hyderabad. It documents academic achievements, research activities, student accomplishments, faculty
              contributions, events, and other highlights from the college community. The E-Bulletin serves as a
              platform to communicate the vibrant intellectual and extracurricular life at GRCP to students, alumni,
              parents, and stakeholders.
            </p>

            {/* Editions grid */}
            <h2 style={SECTION_HEAD}>Editions</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '24px' }} />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '28px',
                marginBottom: '40px',
              }}
            >
              {editions.map(ed => <EditionCard key={ed.id} edition={ed} />)}
            </div>

            {/* Info box */}
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: '12px',
              backgroundColor: '#f8f9fa', border: '1px solid #dee2e6',
              borderLeft: '4px solid #a41425', borderRadius: '4px',
              padding: '16px 20px', fontSize: '14px', color: '#383838',
            }}>
              <FaBookOpen color="#a41425" style={{ marginTop: '2px', flexShrink: 0 }} />
              <span>
                For editorial queries or to contribute to the next edition of the GRCP E-Bulletin, contact us at{' '}
                <a href="mailto:info@grcp.ac.in" style={{ color: '#a41425', fontWeight: '600', textDecoration: 'underline' }}>
                  info@grcp.ac.in
                </a>
              </span>
            </div>

          </div>
        </div>
        <br />
      </div>

      <Footer />
    </>
  )
}
