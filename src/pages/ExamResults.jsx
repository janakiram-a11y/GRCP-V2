// ExamResults.jsx — Route: /examination/results

import { useState } from 'react'
import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import DocLinkList from '../components/ui/DocLinkList'
import { examResults } from '../data/examinationData'

const TABS = [
  { id: 'bPharm', label: 'B.Pharmacy' },
  { id: 'mPharm', label: 'M.Pharmacy' },
]

export default function ExamResults() {
  const [active, setActive] = useState('bPharm')

  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="RESULTS" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* ── Tabs ── */}
            <div style={{ display: 'flex', gap: '4px', borderBottom: '2px solid #a41425', marginBottom: '0' }}>
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  style={{
                    padding: '9px 24px',
                    fontSize: '14px',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '4px 4px 0 0',
                    outline: 'none',
                    backgroundColor: active === tab.id ? '#a41425' : '#f8f9fa',
                    color: active === tab.id ? '#fff' : '#383838',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* ── Results list ── */}
            <div style={{ border: '1px solid #dee2e6', borderTop: 'none', padding: '24px', backgroundColor: '#fff' }}>
              <DocLinkList items={examResults[active]} buttonLabel="View / Download" />
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
