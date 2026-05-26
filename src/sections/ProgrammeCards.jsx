// ProgrammeCards — B.Pharmacy | M.Pharmacy banners + Google Reviews image

import { programmes } from '../data/homeData'

function GoogleReviewsCard() {
  return (
    <a
      href="https://www.google.com/maps/place/Gokaraju+Rangaraju+College+of+Pharmacy"
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full no-underline"
      style={{ minHeight: 180 }}
    >
      <img
        src="https://grcp.ac.in/images/googleReviews.jpg"
        alt="Google Reviews — Gokaraju Rangaraju College of Pharmacy"
        className="w-full h-full object-cover border border-gray-200 shadow-sm"
        style={{ minHeight: 180, objectPosition: 'top' }}
        onError={e => { e.currentTarget.style.display = 'none' }}
      />
    </a>
  )
}

export default function ProgrammeCards() {
  return (
    <section className="bg-[#f2f4f8] py-5">
      <div className="max-w-[1320px] mx-auto px-4">

        {/* Section heading */}
        <h3 className="text-[28px] font-bold mb-1" style={{ color: '#a41425' }}>
          Programmes
        </h3>
        <hr className="border-gray-300 mb-4" />

        <div className="flex flex-col md:flex-row gap-4 items-stretch">

          {/* B.Pharmacy + M.Pharmacy cards */}
          {programmes.map(prog => (
            <a
              key={prog.id}
              href={prog.href}
              className="programme-card block flex-1 relative overflow-hidden no-underline"
              style={{ minHeight: 180 }}
            >
              {/* Background image */}
              <img
                src={prog.src}
                alt={prog.title}
                className="w-full h-full object-cover absolute inset-0"
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement.style.background =
                    'linear-gradient(135deg,#a41425 0%,#6e0d18 100%)'
                }}
              />
              {/* Angled crimson overlay on the left */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(105deg, rgba(164,20,37,0.92) 0%, rgba(164,20,37,0.88) 42%, rgba(164,20,37,0.0) 70%)',
                }}
              />
              {/* Text */}
              <div className="relative z-10 p-5 pt-8">
                <h3
                  className="text-white font-bold text-[32px] leading-tight drop-shadow"
                  style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.4)' }}
                >
                  {prog.title}
                </h3>
                <p className="text-[#ffd0d5] font-semibold text-[14px] mt-0.5">
                  {prog.subtitle}
                </p>
              </div>
            </a>
          ))}

          {/* Google Reviews widget */}
          <div className="md:w-[240px] shrink-0">
            <GoogleReviewsCard />
          </div>

        </div>
      </div>
    </section>
  )
}
