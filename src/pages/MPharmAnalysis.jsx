// MPharmAnalysis.jsx — Route: /programmes/m-pharmacy/pharmaceutical-analysis
// Replicates grcp.ac.in/m_pharmacy_Pharmaceutical_Analysis.php

import MPharmDeptPage from '../components/ui/MPharmDeptPage'
import { mPharmAnalysisData } from '../data/programmesData'

export default function MPharmAnalysis() {
  return (
    <MPharmDeptPage
      bannerTitle="M.PHARMACY – PHARMACEUTICAL ANALYSIS"
      data={mPharmAnalysisData}
    />
  )
}
