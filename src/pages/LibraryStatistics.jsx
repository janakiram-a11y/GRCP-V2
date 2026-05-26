// LibraryStatistics.jsx — Route: /academics/library/statistics
// Replicates grcp.ac.in/Statistics.php

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { libraryStatistics } from '../data/academicsData'

const TH = {
  padding: '10px 14px', fontSize: '14px', fontWeight: '600', color: '#fff',
  backgroundColor: '#a41425', border: '1px solid #8c0f1e', textAlign: 'left', whiteSpace: 'nowrap',
}
const TD = {
  padding: '10px 14px', fontSize: '14px', color: '#212529',
  border: '1px solid #dee2e6', verticalAlign: 'middle',
}
const TD_TOTAL = {
  ...TD, fontWeight: '700', backgroundColor: '#fff8f8', color: '#a41425',
}

export default function LibraryStatistics() {
  const { year, programs, nationalJournals } = libraryStatistics
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="LIBRARY STATISTICS" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#a41425', marginBottom: '4px' }}>
              Statistics {year}
            </h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '24px' }} />

            {/* Main stats table */}
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#383838', marginBottom: '14px' }}>
              Number of Library Books / Titles / Journals Available (Programme-wise) for {year}
            </h3>
            <div className="overflow-x-auto" style={{ marginBottom: '28px' }}>
              <table className="w-full bg-white" style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}>
                <thead>
                  <tr>
                    <th style={{ ...TH, width: '60px', textAlign: 'center' }}>S.No.</th>
                    <th style={TH}>Programme</th>
                    <th style={{ ...TH, textAlign: 'center' }}>Volumes</th>
                    <th style={{ ...TH, textAlign: 'center' }}>Titles</th>
                    <th style={{ ...TH, textAlign: 'center' }}>Journals (Print &amp; Online)</th>
                  </tr>
                </thead>
                <tbody>
                  {programs.map((row, i) => {
                    const isTotal = row.name === 'Total'
                    const style = isTotal ? TD_TOTAL : { ...TD, backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }
                    return (
                      <tr key={i}>
                        <td style={{ ...style, textAlign: 'center' }}>{isTotal ? '' : i + 1}</td>
                        <td style={{ ...style, fontWeight: isTotal ? '700' : '600' }}>{row.name}</td>
                        <td style={{ ...style, textAlign: 'center' }}>{row.volumes}</td>
                        <td style={{ ...style, textAlign: 'center' }}>{row.titles}</td>
                        <td style={{ ...style, textAlign: 'center' }}>{row.journals}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* National Print Journals */}
            <div
              style={{
                backgroundColor: '#fff8f8', border: '1px solid #f5c6cb',
                borderLeft: '4px solid #a41425', borderRadius: '4px',
                padding: '16px 20px', display: 'inline-block',
              }}
            >
              <span style={{ fontSize: '16px', fontWeight: '700', color: '#383838' }}>
                National Print Journals:&nbsp;
              </span>
              <span style={{ fontSize: '22px', fontWeight: '700', color: '#a41425' }}>
                {nationalJournals}
              </span>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
