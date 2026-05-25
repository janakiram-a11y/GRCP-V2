// AboutSection — two-column layout:
//   Left  (col ~65%) : college heading + paragraphs + "Read more" + Attention box
//   Right (col ~35%) : Announcements panel

import { useState } from 'react'
import { aboutText, announcements } from '../data/homeData'

function AnnouncementsPanel() {
  return (
    <div className="border border-gray-200 bg-white shadow-sm h-full">
      {/* Header tab */}
      <div className="announce-tab">ANNOUNCEMENTS</div>

      {/* List */}
      <ul className="divide-y divide-gray-100">
        {announcements.map(a => (
          <li
            key={a.id}
            className="announce-item px-[15px] py-[10px] flex items-start gap-2 cursor-pointer"
          >
            {a.isNew && (
              <span className="shrink-0 mt-0.5 bg-[#d31329] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm">
                NEW
              </span>
            )}
            <a
              href={a.href}
              className="text-[12px] text-black font-normal leading-snug hover:text-[#a41425] no-underline"
            >
              {a.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function AttentionBox() {
  const [logoFailed, setLogoFailed] = useState(false)

  return (
    <div className="mt-5 border border-gray-200 bg-white shadow-sm p-5 text-center max-w-[580px]">
      {/* Logo — wide 491×88 px image that already includes college name text */}
      <div className="flex justify-center mb-3">
        {!logoFailed ? (
          <img
            src="https://grcp.ac.in/images/logo.png"
            alt="Gokaraju Rangaraju College of Pharmacy"
            className="h-12 w-auto object-contain"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <div className="leading-tight">
            <div className="text-[13px] font-bold" style={{ color: '#a41425' }}>
              Gokaraju Rangaraju College of Pharmacy
            </div>
            <div className="text-[11px]" style={{ color: '#00883e' }}>
              {/* Telugu script fallback */}
              College of Pharmacy – GRCP
            </div>
          </div>
        )}
      </div>

      <h4 className="text-[15px] font-black text-gray-900 mb-2">ATTENTION</h4>

      <p className="text-[15px] font-medium leading-relaxed text-justify" style={{ color: '#383838' }}>
        GRCP does not engage any agents or consultants for admissions to Category-B and NRI seats.
        We strictly follow the Telangana State Council of Higher Education guidelines. If any
        inconvenience in this regard, please contact{' '}
        <strong>7095271271</strong>.
      </p>
      <p className="text-[15px] font-bold mt-3" style={{ color: '#383838' }}>PRINCIPAL-GRCP</p>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section className="bg-white py-6">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* ── Left column ── */}
          <div className="lg:w-[65%]">
            <h2
              className="text-[32px] font-bold mb-1"
              style={{ color: '#a41425' }}
            >
              Gokaraju Rangaraju College of Pharmacy
            </h2>
            {/* Red underline accent */}
            <div className="w-16 h-1 mb-4" style={{ backgroundColor: '#a41425' }} />

            {aboutText.map((para, i) => (
              <p
                key={i}
                className="text-[15px] font-medium leading-relaxed mb-3 text-justify"
              style={{ color: '#383838' }}
              >
                {para}
              </p>
            ))}

            <a href="#" className="btn-brand inline-block mt-1 no-underline">
              Read more
            </a>

            {/* Attention notice */}
            <AttentionBox />
          </div>

          {/* ── Right column – Announcements ── */}
          <div className="lg:w-[35%]">
            <AnnouncementsPanel />
          </div>

        </div>
      </div>
    </section>
  )
}
