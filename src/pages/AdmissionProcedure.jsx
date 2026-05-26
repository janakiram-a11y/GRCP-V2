// AdmissionProcedure.jsx — Route: /admissions/admission-procedure
// Replicates grcp.ac.in/admission_procedure.php

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { bPharmProcedure, mPharmProcedure } from '../data/admissionsData'

// ── Shared style objects ──────────────────────────────────────────────────────

const SECTION_HEADING = {
  fontSize: '22px',
  fontWeight: '700',
  color: '#a41425',
  marginBottom: '4px',
}

const SUB_HEADING = {
  fontSize: '16px',
  fontWeight: '700',
  color: '#383838',
  marginTop: '20px',
  marginBottom: '8px',
}

const BODY_TEXT = {
  fontSize: '15px',
  fontWeight: '500',
  color: '#383838',
  lineHeight: '1.7',
}

// ── Inline sub-components ─────────────────────────────────────────────────────

function IntakeBox({ text }) {
  return (
    <div
      style={{
        borderLeft: '4px solid #a41425',
        backgroundColor: '#f8f9fa',
        padding: '10px 16px',
        marginTop: '16px',
        fontSize: '14px',
        fontWeight: '600',
        color: '#383838',
        lineHeight: '1.6',
      }}
    >
      <span style={{ color: '#a41425', marginRight: '6px' }}>Intake:</span>
      {text}
    </div>
  )
}

function RequirementList({ items }) {
  return (
    <div style={{ paddingLeft: '8px' }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <span style={{ fontWeight: '600', color: '#383838', fontSize: '15px', minWidth: '28px', paddingTop: '1px' }}>
            {item.label}
          </span>
          <p style={{ ...BODY_TEXT, margin: 0, flex: 1 }}>{item.text}</p>
        </div>
      ))}
    </div>
  )
}

function NotesList({ notes }) {
  return (
    <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
      {notes.map((note, i) => (
        <li key={i} style={{ ...BODY_TEXT, marginBottom: '4px' }}>{note}</li>
      ))}
    </ul>
  )
}

function ProgrammeSection({ title, procedure }) {
  return (
    <div style={{ marginBottom: '36px' }}>
      <h3 style={SECTION_HEADING}>{title}</h3>
      <hr style={{ borderColor: '#dee2e6', marginBottom: '16px' }} />

      {/* First Year */}
      <p style={SUB_HEADING}>{procedure.firstYear.heading}</p>
      <RequirementList items={procedure.firstYear.items} />
      {procedure.firstYear.notes && <NotesList notes={procedure.firstYear.notes} />}

      {/* Lateral Entry (B.Pharm only) */}
      {procedure.lateralEntry && (
        <>
          <p style={SUB_HEADING}>{procedure.lateralEntry.heading}</p>
          <RequirementList items={procedure.lateralEntry.items} />
        </>
      )}

      <IntakeBox text={procedure.intake} />
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AdmissionProcedure() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="ADMISSION PROCEDURE" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <ProgrammeSection
              title="Admission Procedure of B. Pharmacy"
              procedure={bPharmProcedure}
            />

            <ProgrammeSection
              title="Admission Procedure of M. Pharmacy"
              procedure={mPharmProcedure}
            />

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
