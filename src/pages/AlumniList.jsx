// AlumniList.jsx — Route: /alumni/list-of-alumni
// Replicates grcp.ac.in/List_of_Alumni.php
// Searchable, filterable table of 272 registered alumni.

import { useState, useMemo } from 'react'
import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'
import { alumniList } from '../data/alumniData'

const TH = {
  padding: '10px 14px',
  fontSize: '13px',
  fontWeight: '600',
  color: '#fff',
  backgroundColor: '#a41425',
  border: '1px solid #8c0f1e',
  textAlign: 'left',
  whiteSpace: 'nowrap',
}

const TD = {
  padding: '9px 12px',
  fontSize: '13px',
  color: '#212529',
  border: '1px solid #dee2e6',
  verticalAlign: 'middle',
}

const INPUT_STYLE = {
  padding: '8px 12px',
  fontSize: '13px',
  border: '1px solid #dee2e6',
  borderRadius: '3px',
  outline: 'none',
  color: '#383838',
  backgroundColor: '#fff',
  width: '100%',
  maxWidth: '340px',
}

// Derive unique courses for the filter dropdown
const COURSE_OPTIONS = ['All Courses', ...Array.from(new Set(alumniList.map(a => a.course))).sort()]

export default function AlumniList() {
  const [query, setQuery]   = useState('')
  const [course, setCourse] = useState('All Courses')

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return alumniList.filter(a => {
      const matchesCourse = course === 'All Courses' || a.course === course
      const matchesQuery  = !q || [a.name, a.batch, a.email, a.workingDetails]
        .some(field => field && field.toLowerCase().includes(q))
      return matchesCourse && matchesQuery
    })
  }, [query, course])

  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="LIST OF ALUMNI" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#a41425', marginBottom: '4px' }}>
              List of Alumni
            </h2>
            <hr style={{ borderColor: '#dee2e6', marginBottom: '20px' }} />

            {/* ── Filters ── */}
            <div
              style={{
                display: 'flex', flexWrap: 'wrap', gap: '12px',
                alignItems: 'center', marginBottom: '20px',
              }}
            >
              <input
                type="text"
                placeholder="Search by name, batch, employer…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                style={INPUT_STYLE}
              />

              <select
                value={course}
                onChange={e => setCourse(e.target.value)}
                style={{
                  ...INPUT_STYLE,
                  maxWidth: '260px',
                  cursor: 'pointer',
                }}
              >
                {COURSE_OPTIONS.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              {(query || course !== 'All Courses') && (
                <button
                  onClick={() => { setQuery(''); setCourse('All Courses') }}
                  style={{
                    padding: '8px 16px', fontSize: '13px', fontWeight: '600',
                    border: '1px solid #dee2e6', borderRadius: '3px', cursor: 'pointer',
                    backgroundColor: '#f8f9fa', color: '#383838',
                  }}
                >
                  Clear
                </button>
              )}

              <span style={{ fontSize: '13px', color: '#6c757d', marginLeft: 'auto' }}>
                Showing <strong>{filtered.length}</strong> of {alumniList.length} alumni
              </span>
            </div>

            {/* ── Table ── */}
            <div className="overflow-x-auto">
              <table
                className="w-full bg-white"
                style={{ borderCollapse: 'collapse', border: '1px solid #dee2e6' }}
              >
                <thead>
                  <tr>
                    <th style={{ ...TH, width: '52px', textAlign: 'center' }}>S.No.</th>
                    <th style={TH}>Name</th>
                    <th style={TH}>Course</th>
                    <th style={TH}>Batch</th>
                    <th style={TH}>Email</th>
                    <th style={TH}>Working Details</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        style={{ ...TD, textAlign: 'center', color: '#6c757d', fontStyle: 'italic', padding: '24px' }}
                      >
                        No alumni found matching your search.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((a, i) => (
                      <tr key={a.sno} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                        <td style={{ ...TD, textAlign: 'center', fontWeight: '500' }}>{a.sno}</td>
                        <td style={{ ...TD, fontWeight: '600', color: '#383838' }}>{a.name}</td>
                        <td style={{ ...TD, fontSize: '12px' }}>{a.course}</td>
                        <td style={{ ...TD, whiteSpace: 'nowrap' }}>{a.batch}</td>
                        <td style={TD}>
                          {a.email ? (
                            <a
                              href={`mailto:${a.email}`}
                              style={{ color: '#0d6efd', textDecoration: 'none', fontSize: '12px' }}
                              onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
                              onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
                            >
                              {a.email}
                            </a>
                          ) : '—'}
                        </td>
                        <td style={{ ...TD, color: '#555' }}>{a.workingDetails || '—'}</td>
                      </tr>
                    ))
                  )}
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
