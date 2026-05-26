// AdminProfile — reusable full-page layout for Chairman, Vice President, Principal pages.
// Wraps the standard TopBar → HeaderLogo → Navbar → SubPageBanner → content → Footer shell.
// Pass `data` (from administrationData.js) and `bannerTitle` as props.

import TopBar from '../../sections/TopBar'
import HeaderLogo from '../../sections/HeaderLogo'
import Navbar from '../layout/Navbar'
import SubPageBanner from '../layout/SubPageBanner'
import Footer from '../layout/Footer'

export default function AdminProfile({ data, bannerTitle }) {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title={bannerTitle} />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* ── Profile card: photo + identity ── */}
            <div className="flex flex-wrap mb-6" style={{ gap: '0 28px' }}>

              {/* Photo */}
              <div
                className="mb-4"
                style={{ flexShrink: 0, width: '220px' }}
              >
                <img
                  src={data.img}
                  alt={data.name}
                  style={{
                    width: '220px',
                    height: 'auto',
                    display: 'block',
                    border: '1px solid #dee2e6',
                  }}
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
              </div>

              {/* Identity: name, title, institution, qualifications */}
              <div style={{ flex: 1, minWidth: '220px' }}>
                <h2
                  className="font-bold mb-1"
                  style={{ fontSize: '22px', color: '#a41425', lineHeight: 1.3 }}
                >
                  {data.name}
                </h2>
                <p
                  className="font-semibold mb-0.5"
                  style={{ fontSize: '16px', color: '#383838' }}
                >
                  {data.title}
                </p>
                <p
                  className="mb-4"
                  style={{ fontSize: '14px', color: '#383838' }}
                >
                  {data.institution}
                </p>

                {data.qualifications.length > 0 && (
                  <>
                    <p
                      className="font-bold mb-1"
                      style={{ fontSize: '15px', color: '#383838' }}
                    >
                      Qualifications:
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {data.qualifications.map((q, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: '14px',
                            color: '#383838',
                            paddingBottom: '3px',
                            lineHeight: 1.5,
                          }}
                        >
                          {q}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            {/* ── Divider ── */}
            <hr style={{ borderColor: '#dee2e6', marginBottom: '20px' }} />

            {/* ── Biography ── */}
            {data.bio.map((para, i) => (
              <p
                key={i}
                className="font-medium"
                style={{
                  fontSize: '15px',
                  color: '#383838',
                  lineHeight: '1.7',
                  marginBottom: '16px',
                }}
              >
                {para}
              </p>
            ))}

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
