// TitleVolumes.jsx — Route: /academics/library/title-volumes
// Replicates grcp.ac.in/Title-Volumes.php

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { titleVolumes } from '../data/academicsData'

const TH = {
  padding: '10px 14px', fontSize: '14px', fontWeight: '600', color: '#fff',
  backgroundColor: '#a41425', border: '1px solid #8c0f1e', textAlign: 'left', whiteSpace: 'nowrap',
}
const TD = {
  padding: '10px 14px', fontSize: '14px', color: '#212529',
  border: '1px solid #dee2e6', verticalAlign: 'middle',
}

export default function TitleVolumes() {
  const { year, total, subjects } = titleVolumes
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="TITLES & VOLUMES" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#a41425', marginBottom: '4px' }}>
              Gokaraju Rangaraju College of Pharmacy – Library Books
            </h2>
            <p style={{ fontSize: '15px', fontWeight: '600', color: '#6c757d', marginBottom: '24px' }}>
              Titles &amp; Volumes for {year}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white" style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}>
                <thead>
                  <tr>
                    <th style={{ ...TH, width: '60px', textAlign: 'center' }}>S.No.</th>
                    <th style={TH}>Subject Area</th>
                    <th style={{ ...TH, textAlign: 'center' }}>Number of Copies</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                      <td style={{ ...TD, textAlign: 'center', fontWeight: '500' }}>{i + 1}</td>
                      <td style={{ ...TD, fontWeight: '600' }}>{row.name}</td>
                      <td style={{ ...TD, textAlign: 'center', fontWeight: '500' }}>{row.copies}</td>
                    </tr>
                  ))}
                  {/* Total row */}
                  <tr style={{ backgroundColor: '#fff8f8' }}>
                    <td style={{ ...TD, textAlign: 'center', fontWeight: '700', color: '#a41425' }} colSpan={2}>
                      Total
                    </td>
                    <td style={{ ...TD, textAlign: 'center', fontWeight: '700', color: '#a41425' }}>{total}</td>
                  </tr>
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
