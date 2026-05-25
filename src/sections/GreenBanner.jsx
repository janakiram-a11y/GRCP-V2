// GreenBanner — the thin green scrolling text bar directly below the navbar

import { tickerText } from '../data/homeData'

export default function GreenBanner() {
  return (
    <div
      className="w-full overflow-hidden py-1.5"
      style={{ backgroundColor: '#00883e' }}
    >
      <div className="relative flex overflow-hidden whitespace-nowrap">
        <span className="ticker-animate text-white text-[15px] font-medium px-4">
          {tickerText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {tickerText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {tickerText}
        </span>
      </div>
    </div>
  )
}
