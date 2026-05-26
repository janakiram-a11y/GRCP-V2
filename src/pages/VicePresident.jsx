// VicePresident.jsx — Route: /administration/vice-president
import AdminProfile from '../components/ui/AdminProfile'
import { vicePresidentData } from '../data/administrationData'

export default function VicePresident() {
  return <AdminProfile data={vicePresidentData} bannerTitle="VICE PRESIDENT" />
}
