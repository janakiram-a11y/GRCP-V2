// ContactUs — address, phone, email, quick enquiry form, Google Maps embed
// Based on grcp.ac.in/contactus.php

import { useState } from 'react'
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram,
  FaCheckCircle, FaPaperPlane, FaExclamationCircle,
} from 'react-icons/fa'
import TopBar        from '../sections/TopBar'
import HeaderLogo    from '../sections/HeaderLogo'
import Navbar        from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer        from '../components/layout/Footer'

const SECTION_HEAD = {
  fontSize: '20px', fontWeight: '700', color: '#a41425', marginBottom: '4px',
}

const LABEL = { display: 'block', fontSize: '13px', fontWeight: '600', color: '#495057', marginBottom: '5px' }
const INPUT = {
  width: '100%', padding: '9px 12px', fontSize: '14px',
  border: '1px solid #dee2e6', borderRadius: '3px',
  outline: 'none', color: '#212529', boxSizing: 'border-box',
}

// ---------- Contact Info cards ----------
const contactCards = [
  {
    icon: <FaMapMarkerAlt size={22} color="#a41425" />,
    label: 'Address',
    lines: [
      'Survey No. 288, Nizampet,',
      'Bachupally Road, Kukatpally,',
      'Hyderabad – 500 090',
      'Telangana, India',
    ],
    href: 'https://maps.app.goo.gl/8hPmBNPFNBW5LSJQ9',
    linkText: 'Open in Google Maps',
  },
  {
    icon: <FaPhone size={20} color="#a41425" />,
    label: 'Phone',
    lines: ['7095271271'],
    href: 'tel:7095271271',
    linkText: 'Call Now',
  },
  {
    icon: <FaEnvelope size={20} color="#a41425" />,
    label: 'Email',
    lines: ['info@grcp.ac.in'],
    href: 'mailto:info@grcp.ac.in',
    linkText: 'Send Email',
  },
  {
    icon: <FaInstagram size={22} color="#a41425" />,
    label: 'Instagram',
    lines: ['@grcp_offic'],
    href: 'https://www.instagram.com/grcp_offic',
    linkText: 'Follow us',
    external: true,
  },
]

// ---------- Quick Enquiry Form ----------
function EnquiryForm() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', location: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]     = useState('')

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in Name, Email, and Message before submitting.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', gap: '12px', padding: '48px 24px',
        backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0',
        borderRadius: '6px', textAlign: 'center',
      }}>
        <FaCheckCircle size={42} color="#16a34a" />
        <p style={{ fontSize: '16px', fontWeight: '700', color: '#15803d', margin: 0 }}>
          Thank you, {form.name}!
        </p>
        <p style={{ fontSize: '14px', color: '#166534', margin: 0 }}>
          Your enquiry has been received. We will get back to you at <strong>{form.email}</strong> shortly.
        </p>
        <button
          onClick={() => { setForm({ name: '', email: '', phone: '', location: '', message: '' }); setSubmitted(false) }}
          style={{
            marginTop: '8px', backgroundColor: '#a41425', color: '#fff',
            border: 'none', padding: '8px 20px', borderRadius: '3px',
            fontSize: '13px', fontWeight: '600', cursor: 'pointer',
          }}
        >
          Send Another Enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {error && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '10px 14px', backgroundColor: '#fff5f5',
          border: '1px solid #fca5a5', borderRadius: '3px',
          fontSize: '13px', color: '#b91c1c',
        }}>
          <FaExclamationCircle /> {error}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={LABEL}>Name <span style={{ color: '#a41425' }}>*</span></label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" style={INPUT} />
        </div>
        <div>
          <label style={LABEL}>Email <span style={{ color: '#a41425' }}>*</span></label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={INPUT} />
        </div>
        <div>
          <label style={LABEL}>Phone</label>
          <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" style={INPUT} />
        </div>
        <div>
          <label style={LABEL}>Location / City</label>
          <input name="location" value={form.location} onChange={handleChange} placeholder="e.g. Hyderabad" style={INPUT} />
        </div>
      </div>

      <div>
        <label style={LABEL}>Message <span style={{ color: '#a41425' }}>*</span></label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Write your enquiry here…"
          rows={5}
          style={{ ...INPUT, resize: 'vertical', fontFamily: 'inherit' }}
        />
      </div>

      <div>
        <button
          type="submit"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#a41425', color: '#fff',
            border: 'none', padding: '10px 24px',
            borderRadius: '3px', fontSize: '14px', fontWeight: '700',
            cursor: 'pointer',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8c0f1e' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#a41425' }}
        >
          <FaPaperPlane style={{ fontSize: '13px' }} />
          Submit Enquiry
        </button>
      </div>
    </form>
  )
}

// ---------- Page ----------
export default function ContactUs() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="CONTACT US" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            {/* Contact Info Cards */}
            <h2 style={SECTION_HEAD}>Get in Touch</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '20px' }} />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
                marginBottom: '40px',
              }}
            >
              {contactCards.map((card, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #dee2e6',
                    borderTop: '3px solid #a41425',
                    borderRadius: '4px',
                    padding: '20px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {card.icon}
                    <span style={{ fontSize: '14px', fontWeight: '700', color: '#212529' }}>{card.label}</span>
                  </div>
                  <div style={{ paddingLeft: '2px' }}>
                    {card.lines.map((line, i) => (
                      <p key={i} style={{ margin: 0, fontSize: '13.5px', color: '#383838', lineHeight: '1.6' }}>{line}</p>
                    ))}
                  </div>
                  <a
                    href={card.href}
                    target={card.external ? '_blank' : undefined}
                    rel={card.external ? 'noopener noreferrer' : undefined}
                    style={{
                      fontSize: '12.5px', color: '#a41425', fontWeight: '600',
                      textDecoration: 'underline', alignSelf: 'flex-start',
                    }}
                  >
                    {card.linkText} →
                  </a>
                </div>
              ))}
            </div>

            {/* Map + Form side by side */}
            <h2 style={SECTION_HEAD}>Location & Quick Enquiry</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '20px' }} />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
                gap: '28px',
                marginBottom: '40px',
                alignItems: 'start',
              }}
            >
              {/* Google Maps */}
              <div style={{ borderRadius: '4px', overflow: 'hidden', border: '1px solid #dee2e6', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
                <iframe
                  title="GRCP Location"
                  src="https://maps.google.com/maps?q=Gokaraju+Rangaraju+College+of+Pharmacy+Bachupally+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="380"
                  style={{ border: 'none', display: 'block' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div style={{
                  backgroundColor: '#f8f9fa', padding: '10px 14px',
                  borderTop: '1px solid #dee2e6', fontSize: '12.5px', color: '#6c757d',
                }}>
                  <FaMapMarkerAlt style={{ color: '#a41425', marginRight: '6px' }} />
                  Survey No. 288, Nizampet, Bachupally Road, Kukatpally, Hyderabad – 500 090
                </div>
              </div>

              {/* Quick Enquiry Form */}
              <div style={{
                backgroundColor: '#fff', border: '1px solid #dee2e6',
                borderRadius: '4px', padding: '24px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              }}>
                <h3 style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: '700', color: '#212529' }}>
                  Quick Enquiry
                </h3>
                <EnquiryForm />
              </div>
            </div>

            {/* Grievance redressal note */}
            <h2 style={SECTION_HEAD}>Grievance Redressal</h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />
            <div style={{
              backgroundColor: '#fff8f8', border: '1px solid #f5c6cb',
              borderLeft: '4px solid #a41425', borderRadius: '4px',
              padding: '18px 20px', fontSize: '14px', color: '#383838',
              lineHeight: '1.75', marginBottom: '32px',
            }}>
              <p style={{ margin: '0 0 10px', fontWeight: '700', color: '#a41425' }}>
                Student / Faculty / Parent Grievances
              </p>
              <p style={{ margin: 0 }}>
                GRCP has a dedicated Grievance Redressal Committee for addressing concerns raised by students, faculty,
                and parents. For any academic, administrative, or personal grievance, please email us at{' '}
                <a href="mailto:info@grcp.ac.in" style={{ color: '#a41425', fontWeight: '600', textDecoration: 'underline' }}>
                  info@grcp.ac.in
                </a>{' '}
                or contact the Principal's office directly at{' '}
                <a href="tel:7095271271" style={{ color: '#a41425', fontWeight: '600', textDecoration: 'underline' }}>
                  7095271271
                </a>.
                All grievances will be addressed within 7 working days.
              </p>
            </div>

            {/* Working hours strip */}
            <div style={{
              display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '24px',
              backgroundColor: '#002a6f', borderRadius: '4px', padding: '16px 24px',
              color: '#fff', fontSize: '14px',
            }}>
              <div>
                <span style={{ fontWeight: '700', fontSize: '13px', opacity: 0.75, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Working Hours
                </span>
                <p style={{ margin: '2px 0 0', fontWeight: '600' }}>Mon – Sat &nbsp;|&nbsp; 9:00 AM – 4:00 PM</p>
                <p style={{ margin: '2px 0 0', fontSize: '12px', opacity: 0.75 }}>Second Saturday holiday</p>
              </div>
              <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)', alignSelf: 'stretch' }} />
              <div>
                <span style={{ fontWeight: '700', fontSize: '13px', opacity: 0.75, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  TG EAPCET Code
                </span>
                <p style={{ margin: '2px 0 0', fontWeight: '700', fontSize: '16px', color: '#7fffd4' }}>GRCP</p>
              </div>
              <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)', alignSelf: 'stretch' }} />
              <div>
                <span style={{ fontWeight: '700', fontSize: '13px', opacity: 0.75, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  TG PGECET Code
                </span>
                <p style={{ margin: '2px 0 0', fontWeight: '700', fontSize: '16px', color: '#7fffd4' }}>GRCP1</p>
              </div>
            </div>

          </div>
        </div>
        <br />
      </div>

      <Footer />
    </>
  )
}
