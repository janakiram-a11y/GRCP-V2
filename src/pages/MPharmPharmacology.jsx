// MPharmPharmacology.jsx — Route: /programmes/m-pharmacy/pharmacology
// Replicates grcp.ac.in/m_pharmacy_Pharmacology.php

import MPharmDeptPage from '../components/ui/MPharmDeptPage'
import { mPharmPharmacologyData } from '../data/programmesData'

export default function MPharmPharmacology() {
  return (
    <MPharmDeptPage
      bannerTitle="M.PHARMACY – PHARMACOLOGY"
      data={mPharmPharmacologyData}
    />
  )
}
