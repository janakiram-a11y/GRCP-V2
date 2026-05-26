// Eamcet.jsx — Route: /admissions/eamcet
// Replicates grcp.ac.in/EAMCET.php — B.Pharmacy EAMCET/EAPCET last rank tables.

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { eamcetYears } from '../data/admissionsData'

// Table columns (original order): Stream | OC | BC-A | BC-B | BC-C | BC-D | BC-E | SC | ST

// ── Shared cell styles ────────────────────────────────────────────────────────

const TH = {
  padding: '9px 12px',
  fontSize: '13px',
  fontWeight: '600',
  color: '#fff',
  backgroundColor: '#a41425',
  border: '1px solid #8c0f1e',
  textAlign: 'center',
  whiteSpace: 'nowrap',
}

const TH_STREAM = { ...TH, textAlign: 'left', minWidth: '130px' }

const TD = {
  padding: '9px 12px',
  fontSize: '13px',
  color: '#212529',
  border: '1px solid #dee2e6',
  textAlign: 'center',
  whiteSpace: 'nowrap',
}

const TD_STREAM = {
  ...TD,
  textAlign: 'left',
  fontWeight: '600',
  color: '#383838',
}

// ── Year block ────────────────────────────────────────────────────────────────

function YearTable({ year, rows }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <p
        style={{
          fontWeight: '700',
          fontSize: '15px',
          color: '#383838',
          marginBottom: '8px',
        }}
      >
        {year} – B.Pharmacy EAMCET / EAPCET Last Ranks
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
              <th style={TH_STREAM}>Stream</th>
              <th style={TH}>OC</th>
              <th style={TH}>BC-A</th>
              <th style={TH}>BC-B</th>
              <th style={TH}>BC-C</th>
              <th style={TH}>BC-D</th>
              <th style={TH}>BC-E</th>
              <th style={TH}>SC</th>
              <th style={TH}>ST</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                <td style={TD_STREAM}>{row.stream}</td>
                <td style={TD}>{row.OC}</td>
                <td style={TD}>{row.BCA}</td>
                <td style={TD}>{row.BCB}</td>
                <td style={TD}>{row.BCC}</td>
                <td style={TD}>{row.BCD}</td>
                <td style={TD}>{row.BCE}</td>
                <td style={TD}>{row.SC}</td>
                <td style={TD}>{row.ST}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Eamcet() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="EAMCET LAST RANKS" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <h3
              style={{
                fontSize: '22px',
                fontWeight: '700',
                color: '#a41425',
                marginBottom: '4px',
              }}
            >
              B. Pharmacy – EAMCET / EAPCET Last Ranks
            </h3>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '24px' }} />

            {eamcetYears.map((y) => (
              <YearTable key={y.year} year={y.year} rows={y.rows} />
            ))}

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
