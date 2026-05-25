// Peo.jsx — Programme Educational Objectives (PEOs) page
// Route: /peo  ·  Original: grcp.ac.in/PEOs.php
// Layout: SubPageBanner → bordered table (label | description) → Footer

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { peoItems } from '../data/peoData'

// Anti-Ragging modal is handled globally in App.jsx (shows once per session).
export default function Peo() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="PROGRAMME EDUCATIONAL OBJECTIVES (PEOS)" />

      {/* ── Main content ── */}
      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* Bordered table — Bootstrap `table table-bordered bg-white` equivalent */}
            <div className="overflow-x-auto">
              <table
                className="w-full bg-white text-[15px]"
                style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}
              >
                <tbody>
                  {peoItems.map((item, i) => (
                    <tr key={i}>
                      {/* Label cell — narrow, bold label */}
                      <td
                        className="align-top font-semibold whitespace-nowrap"
                        style={{
                          padding: '12px',
                          border: '1px solid #dee2e6',
                          color: '#212529',
                          fontWeight: '600',
                          fontSize: '15px',
                          verticalAlign: 'top',
                        }}
                      >
                        {item.label}
                      </td>

                      {/* Description cell */}
                      <td
                        className="align-top"
                        style={{
                          padding: '12px',
                          border: '1px solid #dee2e6',
                          color: '#212529',
                          fontWeight: '500',
                          fontSize: '15px',
                          verticalAlign: 'top',
                          lineHeight: '1.5',
                        }}
                      >
                        {item.text}
                      </td>
                    </tr>
                  ))}
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
