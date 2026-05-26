// FeeTable — reusable fee structure table for a single year.
// Props:
//   title   : string  — e.g. "Year of admission 2025-26 (Four Years Duration)"
//   headers : string[] — column headers starting with "Component"
//   rows    : { label: string, values: string[] }[]

export default function FeeTable({ title, headers, rows }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <p style={{ fontWeight: '600', fontSize: '15px', color: '#383838', marginBottom: '8px' }}>
        {title}
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            border: '1px solid #dee2e6',
            backgroundColor: '#fff',
          }}
        >
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th
                  key={i}
                  style={{
                    padding: '10px 14px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#fff',
                    backgroundColor: '#a41425',
                    border: '1px solid #8c0f1e',
                    textAlign: i === 0 ? 'left' : 'center',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                <td
                  style={{
                    padding: '10px 14px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#383838',
                    border: '1px solid #dee2e6',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {row.label}
                </td>
                {row.values.map((v, j) => (
                  <td
                    key={j}
                    style={{
                      padding: '10px 14px',
                      fontSize: '14px',
                      color: '#212529',
                      border: '1px solid #dee2e6',
                      textAlign: 'center',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
