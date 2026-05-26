// MPharmPharmaceutics.jsx — Route: /programmes/m-pharmacy/pharmaceutics
// Replicates grcp.ac.in/m_pharmacy_Pharmaceutics.php

import MPharmDeptPage from '../components/ui/MPharmDeptPage'
import { mPharmPharmaceuticsData } from '../data/programmesData'

export default function MPharmPharmaceutics() {
  return (
    <MPharmDeptPage
      bannerTitle="M.PHARMACY – PHARMACEUTICS"
      data={mPharmPharmaceuticsData}
    />
  )
}
