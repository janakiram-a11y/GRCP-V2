// Pos.jsx — Programme Outcomes (POs) page
// Route: /pos  ·  Original: grcp.ac.in/pos.php
// Layout: SubPageBanner → numbered list (bold title + description) → Footer

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { posItems } from '../data/posData'

// Anti-Ragging modal is handled globally in App.jsx (shows once per session).
export default function Pos() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="PROGRAMME OUTCOMES (POS)" />

      {/* ── Main content ── */}
      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* Decimal ordered list — matches original `ol` with padding-left 40px */}
            <ol
              className="list-decimal"
              style={{ paddingLeft: '40px' }}
            >
              {posItems.map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '15px',
                    fontWeight: '500',
                    lineHeight: '22.5px',
                    marginBottom: '10px',
                    color: '#383838',
                  }}
                >
                  <strong style={{ fontWeight: '700', color: '#383838' }}>
                    {item.title}
                  </strong>
                  {' '}
                  {item.desc}
                </li>
              ))}
            </ol>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
