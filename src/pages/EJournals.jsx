// EJournals.jsx — Route: /academics/library/e-journals
// Replicates grcp.ac.in/e_journals.php — lists all 393 e-journals.

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { eJournals } from '../data/academicsData'

export default function EJournals() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="E-JOURNALS LIST" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#a41425' }}>E-Journals List</h2>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#6c757d' }}>
                ({eJournals.length} journals)
              </span>
            </div>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '24px' }} />

            {/* 3-column responsive grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '0',
                border: '1px solid #dee2e6',
                backgroundColor: '#dee2e6',
              }}
            >
              {eJournals.map((journal, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa',
                    padding: '8px 12px',
                    border: '1px solid #dee2e6',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px', fontWeight: '700', color: '#a41425',
                      minWidth: '28px', flexShrink: 0, paddingTop: '1px',
                    }}
                  >
                    {i + 1}.
                  </span>
                  <span style={{ fontSize: '13px', color: '#383838', lineHeight: '1.5', fontWeight: '500' }}>
                    {journal}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
