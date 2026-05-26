// DailyNewsPapers.jsx — Route: /academics/library/daily-news-papers
// Replicates grcp.ac.in/Daily_News_Papers.php

import { FaNewspaper, FaExternalLinkAlt } from 'react-icons/fa'
import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { dailyNewsPapers } from '../data/academicsData'

export default function DailyNewsPapers() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="DAILY NEWS PAPERS" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#a41425', marginBottom: '4px' }}>
              Daily News Papers
            </h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '28px' }} />

            <p style={{ fontSize: '15px', color: '#383838', fontWeight: '500', marginBottom: '24px', lineHeight: '1.7' }}>
              The GRCP Library provides access to major national and regional publications for student and faculty reference.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '14px' }}>
              {dailyNewsPapers.map((paper, i) => (
                <a
                  key={i}
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px 18px',
                    backgroundColor: '#fff',
                    border: '1px solid #dee2e6',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    transition: 'box-shadow 0.2s, border-color 0.2s',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(164,20,37,0.15)'
                    e.currentTarget.style.borderColor = '#a41425'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)'
                    e.currentTarget.style.borderColor = '#dee2e6'
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#a41425', borderRadius: '50%',
                      width: '42px', height: '42px', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <FaNewspaper style={{ color: '#fff', fontSize: '18px' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#383838', display: 'block' }}>
                      {paper.name}
                    </span>
                    <span style={{ fontSize: '12px', color: '#6c757d' }}>Click to read online</span>
                  </div>
                  <FaExternalLinkAlt style={{ color: '#a41425', fontSize: '13px', flexShrink: 0 }} />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
