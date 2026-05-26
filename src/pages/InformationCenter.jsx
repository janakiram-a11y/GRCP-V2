// InformationCenter.jsx — Route: /academics/library/information-center
// Replicates grcp.ac.in/information_center.php

import { FaPhone, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'
import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { infoCenter } from '../data/academicsData'

const SECTION_H = { fontSize: '20px', fontWeight: '700', color: '#a41425', marginBottom: '4px' }

function ResourceList({ items }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {items.map((res, i) => (
        <div
          key={i}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '10px 16px', backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa',
            border: '1px solid #dee2e6', borderRadius: '3px', gap: '12px',
          }}
        >
          <span style={{ fontSize: '14px', fontWeight: '500', color: '#383838' }}>{res.name}</span>
          <ExternalLink href={res.url}>Visit</ExternalLink>
        </div>
      ))}
    </div>
  )
}

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '5px',
        color: '#0d6efd', fontSize: '14px', textDecoration: 'none', fontWeight: '500',
      }}
      onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
      onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
    >
      {children}
      <FaExternalLinkAlt style={{ fontSize: '11px' }} />
    </a>
  )
}

export default function InformationCenter() {
  const { librarian, opacUrl, subscriptions, openResources, thesisResources } = infoCenter
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="INFORMATION CENTER @ GRCP" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* ── Librarian Contact ── */}
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#a41425', marginBottom: '4px' }}>
              GRCP Library and Information Center
            </h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '20px' }} />

            <div
              style={{
                backgroundColor: '#fff', border: '1px solid #dee2e6',
                borderRadius: '4px', padding: '20px 24px',
                marginBottom: '28px', borderLeft: '4px solid #a41425',
              }}
            >
              <p style={{ fontSize: '16px', fontWeight: '700', color: '#383838', marginBottom: '12px' }}>
                For any clarifications, contact the Librarian:
              </p>
              <p style={{ fontSize: '15px', fontWeight: '600', color: '#a41425', marginBottom: '8px' }}>
                {librarian.name}
              </p>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <FaPhone style={{ color: '#a41425', fontSize: '13px' }} />
                  <span style={{ fontSize: '14px', color: '#383838', fontWeight: '500' }}>{librarian.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <FaEnvelope style={{ color: '#a41425', fontSize: '13px' }} />
                  <a href={`mailto:${librarian.email}`} style={{ fontSize: '14px', color: '#0d6efd', fontWeight: '500', textDecoration: 'none' }}
                    onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
                    onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}>
                    {librarian.email}
                  </a>
                </div>
              </div>
            </div>

            {/* ── OPAC ── */}
            <h2 style={SECTION_H}>Online Public Access Catalogue (OPAC)</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '14px' }} />
            <p style={{ fontSize: '14px', color: '#383838', fontWeight: '500', marginBottom: '20px' }}>
              Search the library catalogue to find available titles and volumes:&nbsp;
              <ExternalLink href={opacUrl}>{opacUrl.replace('http://', '')}</ExternalLink>
            </p>

            {/* ── Subscriptions ── */}
            <h2 style={{ ...SECTION_H, marginTop: '28px' }}>Online e-Books and e-Journals</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '14px' }} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
              {subscriptions.map((sub, i) => (
                <a
                  key={i}
                  href={sub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '7px',
                    backgroundColor: '#a41425', color: '#fff',
                    padding: '10px 20px', borderRadius: '3px',
                    fontSize: '14px', fontWeight: '600', textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8c0f1e' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#a41425' }}
                >
                  <FaExternalLinkAlt style={{ fontSize: '11px' }} />
                  {sub.name}
                </a>
              ))}
            </div>

            {/* ── Open Resources ── */}
            <h2 style={{ ...SECTION_H, marginTop: '28px' }}>Links for Open e-Resources</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '14px' }} />
            <ResourceList items={openResources} />

            {/* ── Thesis Search ── */}
            <h2 style={{ ...SECTION_H, marginTop: '28px' }}>Thesis search</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '14px' }} />
            <ResourceList items={thesisResources} />

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
