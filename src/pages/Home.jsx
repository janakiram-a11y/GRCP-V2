// Home — assembles all sections in the exact order seen on grcp.ac.in
// Anti-Ragging modal is handled globally in App.jsx (shows once per session).

import TopBar           from '../sections/TopBar'
import HeaderLogo       from '../sections/HeaderLogo'
import Navbar           from '../components/layout/Navbar'
import GreenBanner      from '../sections/GreenBanner'
import HeroCarousel     from '../sections/HeroCarousel'
import SecondaryLinks   from '../sections/SecondaryLinks'
import AboutSection     from '../sections/AboutSection'
import ProgrammeCards   from '../sections/ProgrammeCards'
import Footer           from '../components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f2f4f8' }}>

      {/* 1. Very top bar */}
      <TopBar />

      {/* 2. College logo + scrolling affiliation logos */}
      <HeaderLogo />

      {/* 3. Sticky crimson navigation bar */}
      <Navbar />

      {/* 4. Green welcome ticker */}
      <GreenBanner />

      {/* 5. Full-width hero carousel */}
      <HeroCarousel />

      {/* 6. Navy secondary links bar */}
      <SecondaryLinks />

      {/* 7. About college (two-column) */}
      <AboutSection />

      {/* 8. Programme cards + Google Reviews */}
      <ProgrammeCards />

      {/* 9. Footer */}
      <Footer />

    </div>
  )
}
