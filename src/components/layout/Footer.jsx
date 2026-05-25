// Footer — dark charcoal section with three columns + copyright bar

import { committees, achievements, quickLinks } from '../../data/homeData'
import { FaInstagram } from 'react-icons/fa'

function FooterHeading({ children }) {
  return (
    <h6 className="text-white font-bold text-[16px] mb-0 pb-[15px]">
      {children}
    </h6>
  )
}

export default function Footer() {
  return (
    <>
      {/* ── Main footer ── */}
      <footer style={{ backgroundColor: '#222222' }} className="text-gray-300 py-8">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Column 1 – Committees */}
            <div>
              <FooterHeading>Committees</FooterHeading>
              <ul className="space-y-1.5">
                {committees.map((c, i) => (
                  <li key={i}>
                    <a
                      href={c.href}
                      className="text-[12.8px] font-medium hover:text-white transition-colors no-underline block pb-[5px]"
                    style={{ color: '#adacac' }}
                    >
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 – Achievements + Quick Links */}
            <div>
              <FooterHeading>Achievements</FooterHeading>
              <ul className="space-y-1.5 mb-6">
                {achievements.map((a, i) => (
                  <li key={i}>
                    <a
                      href={a.href}
                      className="text-[12.8px] font-medium hover:text-white transition-colors no-underline block pb-[5px]"
                    style={{ color: '#adacac' }}
                    >
                      {a.label}
                    </a>
                  </li>
                ))}
              </ul>

              <FooterHeading>Quick Links</FooterHeading>
              <ul className="space-y-1.5">
                {quickLinks.map((q, i) => (
                  <li key={i}>
                    <a
                      href={q.href}
                      className="text-[12.8px] font-medium hover:text-white transition-colors no-underline block pb-[5px]"
                    style={{ color: '#adacac' }}
                    >
                      {q.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 – Contact */}
            <div>
              <FooterHeading>Contact us</FooterHeading>

              <p className="text-[15px] font-bold mb-2" style={{ color: '#cecece' }}>
                Gokaraju Rangaraju College of Pharmacy
              </p>
              <p className="text-[15px] font-medium leading-relaxed" style={{ color: '#adacac' }}>
                Survey No. 288, Nizampet, Bachupally Road,<br />
                Kukatpally<br />
                Hyderabad– 500 090<br />
                Phone: <a href="tel:7095271271" style={{ color: '#adacac' }} className="hover:text-white no-underline">7095271271</a><br />
                Mail: <a href="mailto:info@grcp.ac.in" style={{ color: '#adacac' }} className="hover:text-white no-underline">info@grcp.ac.in</a>
              </p>

              {/* QR code prompt */}
              <p className="text-[#f55] font-bold text-[15px] mt-4 mb-2">
                Scan this QR Code to reach the college
              </p>

              {/* QR code image */}
              <img
                src="https://grcp.ac.in/images/qr.png"
                alt="QR Code – GRCP location"
                className="w-32 h-32 object-contain border border-gray-600 bg-white p-1"
                onError={e => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>

          </div>
        </div>
      </footer>

      {/* ── Anti-ragging modal trigger notice (inline strip) ── */}
      <div
        className="w-full py-2 text-center text-[15px] font-medium"
        style={{ backgroundColor: '#1a1a1a', color: '#383838' }}
      >
        <span className="font-bold text-white">National Anti-Ragging Helpline: </span>
        <span style={{ color: '#ccc' }}>1800-180-5522 (24×7 Toll Free)</span> &nbsp;|&nbsp;
        <span className="font-bold text-white">UGC Monitoring Agency: </span>
        <a href="mailto:antiragging@c4yindia.org" className="hover:text-white no-underline" style={{ color: '#ccc' }}>antiragging@c4yindia.org</a> &nbsp;|&nbsp;
        <a href="#" className="hover:text-white no-underline" style={{ color: '#ccc' }}>UGC Regulations PDF</a>
      </div>

      {/* ── Copyright bar ── */}
      <div className="w-full bg-white border-t border-gray-200">
        <div className="max-w-[1320px] mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-[15px] font-medium" style={{ color: '#383838' }}>
          <span>© Copyright 2012 – 2026 | All Rights Reserved&nbsp;
            <a href="https://grcp.ac.in" className="text-[#a41425] hover:underline">www.grcp.ac.in</a>
          </span>
          <button className="border border-gray-400 text-[15px] font-medium px-3 py-1 hover:bg-gray-100 transition-colors" style={{ color: '#383838' }}>
            Grievance Redressal
          </button>
        </div>
      </div>

      {/* Instagram float */}
      <a
        href="https://www.instagram.com/grcp_pharmacy/"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-float"
        aria-label="GRCP Instagram"
      >
        <div
          className="w-9 h-9 flex items-center justify-center text-white text-lg shadow-md"
          style={{ backgroundColor: '#E1306C' }}
        >
          <FaInstagram />
        </div>
      </a>
    </>
  )
}
