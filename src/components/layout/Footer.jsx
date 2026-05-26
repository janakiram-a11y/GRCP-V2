// Footer — pixel-perfect recreation of grcp.ac.in footer
//
// Extracted from live site via computed styles + webstyle.css:
//   bg: #222222 + footer_bg.png (blend: lighten, animated slide 7s)
//   link color:  #adacac  │  link hover: #ce1c28 (red)
//   <p> color:   #cecece  │  h6: white 16px bold, padding-bottom 15px
//   layout: col-md-8 (inner: Committees col-6 + Achievements/Quick Links col-6)
//           + col-md-4 (Contact us)
//   copyright row inside same dark footer
//   Grievance button: white bg, black bold text → hover #a51425 bg white text
//   QR text: #ff0000, 18px, bold  │  QR image: 150×150px
//   Instagram: fixed left-side float

import { committees, achievements, quickLinks } from '../../data/homeData'
import { FaInstagram } from 'react-icons/fa'

// ── Exact values from grcp.ac.in stylesheet ─────────────────────────────────
const LINK   = '#adacac'
const LINK_H = '#ce1c28'   // hover = red (from .footerlinks a:hover)
const P_COL  = '#cecece'   // from .footerlinks p { color: #cecece !important }

// Bootstrap-style flex grid helpers
const ROW  = { display: 'flex', flexWrap: 'wrap', marginLeft: '-15px', marginRight: '-15px' }
const col  = (pct) => ({ flex: `0 0 ${pct}%`, maxWidth: `${pct}%`, paddingLeft: '15px', paddingRight: '15px', boxSizing: 'border-box' })

// ── Sub-components ───────────────────────────────────────────────────────────
function FooterLink({ href, external, children }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{
        display: 'block',
        color: LINK,
        paddingBottom: '5px',
        fontSize: '0.8rem',       // 12.8px — exact from stylesheet
        textDecoration: 'none',
        textAlign: 'left',
        transition: 'color 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.color = LINK_H }}
      onMouseLeave={e => { e.currentTarget.style.color = LINK }}
    >
      {children}
    </a>
  )
}

function FooterHeading({ children }) {
  return (
    <h6 style={{
      color: '#fff',
      fontSize: '16px',
      fontWeight: 700,
      marginTop: 0,
      marginBottom: '8px',
      paddingBottom: '15px',  // from .footerlinks h6 { padding-bottom: 15px }
    }}>
      {children}
    </h6>
  )
}

// ── Main export ──────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <>
      {/* ────────────────────────────────────────────────────────────────────
          MAIN FOOTER
          background: #222222 blended with footer_bg.png (lighten mode)
          animated via .footer-main keyframe in index.css
          ──────────────────────────────────────────────────────────────────── */}
      <div
        className="footer-main"
        style={{
          backgroundColor: '#222222',
          backgroundImage: 'url(https://grcp.ac.in/images/footer_bg.png)',
          backgroundSize: 'cover',
          backgroundBlendMode: 'lighten',
        }}
      >
        {/* Centred container — 1400px wide, matching original Bootstrap .container */}
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '25px 15px 0' }}>

          {/* ── Row 1: col-md-8 + col-md-4 ── */}
          <div style={ROW}>

            {/* ── col-md-8: Committees | Achievements + Quick Links ── */}
            <div style={{ ...col(66.666), marginBottom: '20px' }}>
              <div style={ROW}>

                {/* Committees — col-md-6 col-6 (50% even on mobile per original) */}
                <div style={{ ...col(50), marginBottom: '20px' }}>
                  <FooterHeading>Committees</FooterHeading>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {committees.map((c, i) => (
                      <li key={i}>
                        <FooterLink href={c.href}>{c.label}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements + Quick Links — col-md-6 */}
                <div style={{ ...col(50), marginBottom: '20px' }}>
                  <FooterHeading>Achievements</FooterHeading>
                  <ul style={{ listStyle: 'none', margin: '0 0 22px', padding: 0 }}>
                    {achievements.map((a, i) => (
                      <li key={i}>
                        <FooterLink href={a.href}>{a.label}</FooterLink>
                      </li>
                    ))}
                  </ul>

                  <FooterHeading>Quick Links</FooterHeading>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {quickLinks.map((q, i) => (
                      <li key={i}>
                        <FooterLink
                          href={q.href}
                          external={q.href.startsWith('http')}
                        >
                          {q.label}
                        </FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* ── col-md-4: Contact us ── */}
            <div style={{ ...col(33.333), marginBottom: '20px' }}>
              <FooterHeading>Contact us</FooterHeading>

              {/* College name — .footerlinks p + font-weight-bold */}
              <p style={{ color: P_COL, fontSize: '15px', fontWeight: 700, margin: '0 0 6px' }}>
                Gokaraju Rangaraju College of Pharmacy
              </p>

              {/* Address block — .footerlinks p */}
              <p style={{ color: P_COL, fontSize: '15px', fontWeight: 500, margin: '0 0 16px', lineHeight: '1.75' }}>
                Survey No. 288, Nizampet, Bachupally Road, Kukatpally<br />
                Hyderabad– 500 090<br />
                Phone:{' '}
                <a
                  href="tel:7095271271"
                  style={{ color: P_COL, textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.color = P_COL }}
                >
                  7095271271
                </a>
                <br />
                Mail:{' '}
                <a
                  href="mailto:info@grcp.ac.in"
                  style={{ color: P_COL, textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.color = P_COL }}
                >
                  info@grcp.ac.in
                </a>
              </p>

              {/* QR prompt — extracted: color #ff0000, font-size 18px, bold */}
              <p style={{ color: '#ff0000', fontSize: '18px', fontWeight: 700, margin: '0 0 10px', lineHeight: '1.4' }}>
                Scan this QR Code to reach the college
              </p>

              {/* QR image — 150×150px from live site measurement */}
              <img
                src="https://grcp.ac.in/images/qr1666778877694.png?v=0.1"
                alt="Scan QR to reach GRCP"
                width={150}
                height={150}
                style={{ objectFit: 'contain', backgroundColor: '#fff', padding: '4px', display: 'block' }}
                onError={e => { e.currentTarget.style.display = 'none' }}
              />
            </div>

          </div>

          {/* ── Row 2: Copyright | Grievance Redressal ── */}
          {/* Inside the dark footer, bordered on top, same as original */}
          <div style={{
            ...ROW,
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: '10px',
            paddingBottom: '10px',
            marginTop: '10px',
            alignItems: 'center',
          }}>
            {/* Copyright text — col-md-6 */}
            <div style={{ ...col(50), marginBottom: '4px' }}>
              <span style={{ color: '#adacac', fontSize: '13px' }}>
                © Copyright 2012 – 2026 | All Rights Reserved{' '}
                <a
                  href="https://grcp.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#adacac', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#adacac' }}
                >
                  www.grcp.ac.in
                </a>
              </span>
            </div>

            {/* Grievance button — col-md-6, right-aligned */}
            {/* .webbutton2: white bg, black bold text; hover → #a51425 bg, white text */}
            <div style={{ ...col(50), textAlign: 'right', marginBottom: '4px' }}>
              <a
                href="#"
                style={{
                  color: '#000',
                  fontWeight: 700,
                  padding: '5px 12px',
                  backgroundColor: '#fff',
                  borderRadius: '2px',
                  display: 'inline-block',
                  fontSize: '12.8px',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#a51425'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#fff'
                  e.currentTarget.style.color = '#000'
                }}
              >
                Grievance Redressal
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────
          INSTAGRAM FLOAT — fixed to left edge, vertically centred
          ──────────────────────────────────────────────────────────────────── */}
      <a
        href="https://www.instagram.com/grcp_offic"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-float"
        aria-label="GRCP on Instagram"
        style={{ textDecoration: 'none' }}
      >
        <div
          style={{
            width: '36px', height: '36px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: '#E1306C',
            color: '#fff',
            fontSize: '18px',
            boxShadow: '2px 2px 6px rgba(0,0,0,0.3)',
          }}
        >
          <FaInstagram />
        </div>
      </a>
    </>
  )
}
