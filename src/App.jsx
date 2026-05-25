// App.jsx — root of the SPA
// AntiRaggingModal lives here (not in individual pages) so it renders exactly
// once per browser session regardless of how many pages the user visits.
// sessionStorage key "arSeen" is set when the user dismisses or navigates away;
// it persists for the lifetime of the browser tab/session and clears when the
// tab/window is closed — which is the correct "restart" trigger.

import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AntiRaggingModal from './components/ui/AntiRaggingModal'
import Home  from './pages/Home'
import About from './pages/About'
import Peo   from './pages/Peo'
import Pos   from './pages/Pos'

const SESSION_KEY = 'arSeen'

function App() {
  // Only show if this browser session hasn't seen the modal yet
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      const t = setTimeout(() => setShowModal(true), 300)
      return () => clearTimeout(t)
    }
  }, []) // runs once on first mount — never reruns on route changes

  const handleClose = () => {
    setShowModal(false)
    sessionStorage.setItem(SESSION_KEY, '1')
  }

  return (
    <BrowserRouter>
      {/* Modal is outside <Routes> so it is never unmounted by navigation */}
      {showModal && <AntiRaggingModal onClose={handleClose} />}

      <Routes>
        <Route path="/"      element={<Home />}  />
        <Route path="/about" element={<About />} />
        <Route path="/peo"   element={<Peo />}   />
        <Route path="/pos"   element={<Pos />}   />
      </Routes>
    </BrowserRouter>
  )
}

export default App
