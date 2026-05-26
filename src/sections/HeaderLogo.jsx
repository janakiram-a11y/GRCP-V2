// HeaderLogo — college logo (left) + scrolling affiliation logos (right)
//
// logo.png at grcp.ac.in is a WIDE 491×88 image (emblem + text combined).
// Affiliation logos are shown as styled text badges since exact filenames
// on the remote server are not known; images are attempted first.

import { useState } from 'react'

const affiliationLogos = [
  { name: 'CII',                            src: 'https://grcp.ac.in/images/affiliation/img1.jpg'      },
  { name: "Institution's Innovation Council", src: 'https://grcp.ac.in/images/affiliation/img2.jpg?v=0.1' },
  { name: 'NSS',                            src: 'https://grcp.ac.in/images/affiliation/img4.jpg'      },
  { name: 'LSSDC',                          src: 'https://grcp.ac.in/images/affiliation/img5.jpg'      },
  { name: 'GRES',                           src: 'https://grcp.ac.in/images/affiliation/img6.jpg'      },
  { name: '22 Years of Excellence',         src: 'https://grcp.ac.in/images/affiliation/img7.jpg'      },
  { name: 'PCI',                            src: 'https://grcp.ac.in/images/affiliation/img8.jpg'      },
  { name: 'Osmania University',             src: 'https://grcp.ac.in/images/affiliation/img9.jpg'      },
  { name: 'NBA – B.Pharmacy',              src: 'https://grcp.ac.in/images/affiliation/img10.jpg'     },
  { name: 'TASK',                           src: 'https://grcp.ac.in/images/affiliation/img11.jpg'     },
  { name: 'Unnat Bharat Abhiyan',           src: 'https://grcp.ac.in/images/affiliation/img12.jpg'     },
]

// Duplicate so the marquee scrolls seamlessly
const doubled = [...affiliationLogos, ...affiliationLogos]

function AffiliationLogo({ logo }) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className="shrink-0 mx-1 flex items-center justify-center border border-gray-200 bg-white text-center"
      style={{ width: 100, height: 72, padding: '6px' }}
    >
      {!failed ? (
        <img
          src={logo.src}
          alt={logo.name}
          title={logo.name}
          className="max-h-[58px] max-w-[88px] object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          className="text-[10px] text-gray-600 font-semibold leading-tight whitespace-pre-line"
          title={logo.name}
        >
          {logo.name}
        </span>
      )}
    </div>
  )
}

export default function HeaderLogo() {
  const [logoFailed, setLogoFailed] = useState(false)

  return (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1320px] mx-auto px-3 flex items-center gap-4 py-2">

        {/* College logo — 491×88 wide image (emblem + text baked in) */}
        <a href="#" className="flex items-center shrink-0 no-underline">
          {!logoFailed ? (
            <img
              src="https://grcp.ac.in/images/logo.png"
              alt="Gokaraju Rangaraju College of Pharmacy"
              className="h-[72px] w-auto object-contain"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <div className="leading-tight">
              <div
                className="text-[20px] font-bold leading-tight"
                style={{ color: '#a41425', fontFamily: '"Times New Roman", serif' }}
              >
                Gokaraju Rangaraju
              </div>
              <div
                className="text-[15px] font-semibold"
                style={{ color: '#00883e', fontFamily: '"Times New Roman", serif' }}
              >
                College of Pharmacy
              </div>
            </div>
          )}
        </a>

        {/* Affiliation logos – continuous auto-scroll marquee */}
        <div className="flex-1 overflow-hidden relative min-w-0">
          <div className="logo-scroll-track">
            {doubled.map((logo, idx) => (
              <AffiliationLogo key={idx} logo={logo} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
