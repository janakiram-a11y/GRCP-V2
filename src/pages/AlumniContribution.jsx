// AlumniContribution.jsx — Route: /alumni/alumni-contribution
// Replicates grcp.ac.in/Alumni_contribution.php
// Displays the Alumni Lecture Series grouped by academic year.

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { alumniLectures } from '../data/alumniData'

const TH = {
  padding: '10px 14px',
  fontSize: '13px',
  fontWeight: '600',
  color: '#fff',
  backgroundColor: '#a41425',
  border: '1px solid #8c0f1e',
  textAlign: 'left',
  whiteSpace: 'nowrap',
}

const TD = {
  padding: '10px 12px',
  fontSize: '13px',
  color: '#212529',
  border: '1px solid #dee2e6',
  verticalAlign: 'middle',
}

function LectureTable({ lectures }) {
  return (
    <div className="overflow-x-auto" style={{ marginBottom: '32px' }}>
      <table
        className="w-full bg-white"
        style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}
      >
        <thead>
          <tr>
            <th style={{ ...TH, width: '52px', textAlign: 'center' }}>S.No.</th>
            <th style={TH}>Name of the Alumni</th>
            <th style={TH}>Current Role / Organisation</th>
            <th style={{ ...TH, width: '150px' }}>Date of Lecture</th>
          </tr>
        </thead>
        <tbody>
          {lectures.map((lec, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
              <td style={{ ...TD, textAlign: 'center', fontWeight: '500' }}>{i + 1}</td>
              <td style={{ ...TD, fontWeight: '600', color: '#383838' }}>{lec.name}</td>
              <td style={TD}>{lec.qualification || '—'}</td>
              <td style={TD}>{lec.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function AlumniContribution() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="ALUMNI CONTRIBUTION" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#a41425', marginBottom: '4px' }}>
              Alumni Lecture Series
            </h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '20px' }} />

            <p style={{ fontSize: '14px', color: '#383838', lineHeight: '1.7', marginBottom: '28px' }}>
              As part of its Alumni Contribution initiative, Gokaraju Rangaraju College of Pharmacy
              organises an Alumni Lecture Series. Distinguished alumni share their professional
              experiences, industry insights, and career guidance with current students.
            </p>

            {alumniLectures.map(group => (
              <div key={group.year}>
                <h3
                  style={{
                    fontSize: '16px', fontWeight: '700', color: '#fff',
                    backgroundColor: '#a41425', padding: '8px 16px',
                    borderRadius: '3px', marginBottom: '12px',
                    display: 'inline-block',
                  }}
                >
                  Academic Year {group.year}
                </h3>
                <LectureTable lectures={group.lectures} />
              </div>
            ))}

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
