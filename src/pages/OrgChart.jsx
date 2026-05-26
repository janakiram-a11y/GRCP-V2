// OrgChart.jsx — Route: /administration/org-chart
// Displays the institutional organisational chart image.

import TopBar from '../sections/TopBar'
import HeaderLogo from '../sections/HeaderLogo'
import Navbar from '../components/layout/Navbar'
import SubPageBanner from '../components/layout/SubPageBanner'
import Footer from '../components/layout/Footer'

export default function OrgChart() {
  return (
    <>
      <TopBar />
      <HeaderLogo />
      <Navbar />
      <SubPageBanner title="ORGANIZATIONAL CHART" />

      <div className="w-full">
        <br />
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="p-[25px]">

            <div className="overflow-x-auto">
              <img
                src="https://grcp.ac.in/images/Organizational_Chart.png?v=0.1"
                alt="Organizational Chart – Gokaraju Rangaraju College of Pharmacy"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
                  border: '1px solid #dee2e6',
                }}
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  const msg = document.createElement('p')
                  msg.textContent = 'Organizational chart image could not be loaded.'
                  msg.style.cssText = 'color:#383838;font-size:15px;text-align:center;padding:40px 0;'
                  e.currentTarget.parentNode.appendChild(msg)
                }}
              />
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
