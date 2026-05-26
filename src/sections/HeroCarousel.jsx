// HeroCarousel — full-width Bootstrap-style image slider
// Auto-advances every 5 s; prev/next arrows; dot indicators

import { useState, useEffect, useCallback } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { carouselSlides } from '../data/homeData'

// Fallback gradient colours for when the live images don't load
const FALLBACK_COLORS = [
  'linear-gradient(135deg,#a41425 0%,#6e0d18 100%)',
  'linear-gradient(135deg,#002a6f 0%,#00174a 100%)',
  'linear-gradient(135deg,#00883e 0%,#005525 100%)',
  'linear-gradient(135deg,#a41425 0%,#002a6f 100%)',
  'linear-gradient(135deg,#333 0%,#555 100%)',
]

export default function HeroCarousel() {
  const [current, setCurrent]     = useState(0)
  const [imgErrors, setImgErrors] = useState({})
  const total = carouselSlides.length

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total])
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total])

  // Auto-play
  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  const handleImgError = (id) => {
    setImgErrors(prev => ({ ...prev, [id]: true }))
  }

  return (
    /* Aspect-ratio wrapper: padding-bottom % sets height proportional to width.
       38% ≈ 1320 × 0.38 = ~500 px at max container width — matches original.
       All children are position:absolute so the padding-bottom drives the height. */
    <div className="relative w-full bg-white overflow-hidden" style={{ paddingBottom: '38%' }}>

      {/* Slides */}
      {carouselSlides.map((slide, idx) => {
        const hasFailed = imgErrors[slide.id]
        return (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: idx === current ? 1 : 0, zIndex: idx === current ? 1 : 0 }}
          >
            {!hasFailed ? (
              <img
                src={slide.src}
                alt={slide.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',      // never crops — full image always visible
                  objectPosition: 'center',
                  display: 'block',
                }}
                onError={() => handleImgError(slide.id)}
              />
            ) : (
              /* Fallback coloured placeholder */
              <div
                className="w-full h-full flex flex-col items-center justify-center text-white"
                style={{ background: FALLBACK_COLORS[idx % FALLBACK_COLORS.length] }}
              >
                <img
                  src="https://grcp.ac.in/images/logo.png"
                  alt="Gokaraju Rangaraju College of Pharmacy"
                  className="h-20 w-auto mb-5 opacity-95 drop-shadow-lg"
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
                <p className="text-base md:text-xl opacity-90 tracking-[0.2em] font-medium">
                  EXCELLENCE &nbsp;·&nbsp; INNOVATION &nbsp;·&nbsp; DEDICATION
                </p>
              </div>
            )}
          </div>
        )
      })}

      {/* Previous arrow */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/60 text-white rounded-sm p-2 transition-colors"
      >
        <FaChevronLeft className="text-lg" />
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-[52px] top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/60 text-white rounded-sm p-2 transition-colors"
      >
        <FaChevronRight className="text-lg" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex flex-wrap justify-center gap-1.5 px-12">
        {carouselSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`rounded-full transition-all ${
              idx === current
                ? 'bg-white w-4 h-2.5'
                : 'bg-white/50 w-2.5 h-2.5 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

    </div>
  )
}
