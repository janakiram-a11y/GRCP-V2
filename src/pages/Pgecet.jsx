// Pgecet.jsx — Route: /admissions/pgecet
// Replicates grcp.ac.in/PGCET.php — M.Pharmacy TGPGECET last rank tables.

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { pgecetRanks } from '../data/admissionsData'

// ── Shared cell styles ────────────────────────────────────────────────────────

const TH = {
  padding: '10px 14px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#fff',
  backgroundColor: '#a41425',
  border: '1px solid #8c0f1e',
  textAlign: 'left',
  whiteSpace: 'nowrap',
}

const TD = {
  padding: '10px 14px',
  fontSize: '14px',
  color: '#212529',
  border: '1px solid #dee2e6',
  verticalAlign: 'middle',
}

// ── Year block for a single specialisation ────────────────────────────────────

function YearBlock({ year, entries }) {
  return (
    <div style={{ marginBottom: '24px' }}>
      <p
        style={{
          fontWeight: '600',
          fontSize: '15px',
          color: '#383838',
          marginBottom: '8px',
        }}
      >
        {year}
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            border: '1px solid #dee2e6',
            backgroundColor: '#fff',
          }}
        >
          <thead>
            <tr>
              <th style={{ ...TH, width: '50px', textAlign: 'center' }}>S.No.</th>
              <th style={TH}>Gender</th>
              <th style={TH}>Category</th>
              <th style={TH}>Last Rank</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                <td style={{ ...TD, textAlign: 'center', fontWeight: '500' }}>{i + 1}</td>
                <td style={{ ...TD, fontWeight: '600', color: '#383838' }}>{entry.gender}</td>
                <td style={TD}>{entry.category}</td>
                <td style={{ ...TD, fontWeight: '500' }}>{entry.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Specialisation section ────────────────────────────────────────────────────

function SpecialisationSection({ title, data }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h3
        style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#a41425',
          marginBottom: '4px',
        }}
      >
        {title}
      </h3>
      <hr style={{ borderColor: '#dee2e6', marginBottom: '20px' }} />
      {data.map((yearData) => (
        <YearBlock key={yearData.year} year={yearData.year} entries={yearData.entries} />
      ))}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Pgecet() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="PGECET LAST RANKS" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <h2
              style={{
                fontSize: '22px',
                fontWeight: '700',
                color: '#a41425',
                marginBottom: '4px',
              }}
            >
              M. Pharmacy – TGPGECET Last Ranks
            </h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '28px' }} />

            <SpecialisationSection
              title="M. Pharmacy – Pharmaceutics"
              data={pgecetRanks.pharmaceutics}
            />

            <SpecialisationSection
              title="M. Pharmacy – Pharmaceutical Analysis"
              data={pgecetRanks.pharmaceuticalAnalysis}
            />

            <SpecialisationSection
              title="M. Pharmacy – Pharmacology"
              data={pgecetRanks.pharmacology}
            />

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
