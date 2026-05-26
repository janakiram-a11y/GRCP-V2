// Principal.jsx — Route: /administration/principal
import AdminProfile from '../components/ui/AdminProfile'
import { principalData } from '../data/administrationData'

export default function Principal() {
  return <AdminProfile data={principalData} bannerTitle="PRINCIPAL" />
}
