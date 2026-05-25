// ProgrammeCards — B.Pharmacy | M.Pharmacy banners + Google Reviews widget

import { programmes, googleReviews } from '../data/homeData'
import { FaStar, FaStarHalfAlt, FaRegStar, FaMapMarkerAlt, FaPencilAlt } from 'react-icons/fa'

function StarRating({ rating }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} className="text-[#fbbc04]" />)
    } else if (i === Math.ceil(rating) && rating % 1 >= 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-[#fbbc04]" />)
    } else {
      stars.push(<FaRegStar key={i} className="text-[#fbbc04]" />)
    }
  }
  return <span className="flex gap-0.5">{stars}</span>
}

function GoogleReviewsCard() {
  const g = googleReviews
  const bars = [
    { stars: 5, pct: 72 },
    { stars: 4, pct: 14 },
    { stars: 3, pct: 5 },
    { stars: 2, pct: 2 },
    { stars: 1, pct: 7 },
  ]

  return (
    <div className="border border-gray-200 bg-white shadow-sm p-3 text-[12px] h-full flex flex-col justify-between">
      {/* Name */}
      <p className="font-semibold text-[13px] text-gray-800 leading-snug mb-0.5">
        {g.name}
      </p>
      <p className="text-gray-500 text-[11px] mb-2">
        గోకరాజు రంగరాజు కాలేజ్ ఆఫ్ ఫార్మసీ
      </p>

      {/* Rating row */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[28px] font-light text-gray-800 leading-none">{g.rating}</span>
        <div>
          <StarRating rating={g.rating} />
          <p className="text-gray-500 text-[11px]">{g.total} reviews</p>
        </div>
      </div>

      {/* Bar chart */}
      <div className="space-y-0.5 mb-3">
        {bars.map(b => (
          <div key={b.stars} className="flex items-center gap-1.5">
            <span className="text-[11px] text-gray-600 w-1">{b.stars}</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${b.pct}%`, backgroundColor: '#fbbc04' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Write review */}
      <a
        href={g.reviewHref}
        className="flex items-center justify-center gap-1.5 border border-gray-300 rounded py-1.5 text-[12px] text-gray-700 hover:bg-gray-50 no-underline mb-2"
      >
        <FaPencilAlt className="text-[10px]" />
        Write a review
      </a>

      {/* Address */}
      <div className="flex items-start gap-1.5 text-gray-600">
        <FaMapMarkerAlt className="text-[#a41425] shrink-0 mt-0.5" />
        <p className="text-[11px] leading-snug">{g.address}</p>
      </div>

      <p className="text-[10px] text-gray-400 mt-1">
        Located in: Gokaraju Rangaraju Institute of Engineering &amp; Technology
      </p>
    </div>
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
