// Chairman.jsx — Route: /administration/chairman
import AdminProfile from '../components/ui/AdminProfile'
import { chairmanData } from '../data/administrationData'

export default function Chairman() {
  return <AdminProfile data={chairmanData} bannerTitle="CHAIRMAN" />
}
