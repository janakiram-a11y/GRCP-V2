// GreenBanner — the thin green scrolling text bar directly below the navbar
// Two copies of the text with generous spacing; animates at -50% for a seamless loop.

import { tickerText } from '../data/homeData'

const SEP = '        —        '

export default function GreenBanner() {
  return (
    <div
      className="w-full overflow-hidden py-1.5"
      style={{ backgroundColor: '#00883e' }}
    >
      <div className="flex overflow-hidden">
        <div className="ticker-animate text-white text-[15px] font-medium">
          <span className="px-20">{tickerText}</span>
          <span style={{ opacity: 0.35, margin: '0 24px' }}>✦</span>
          <span className="px-20">{tickerText}</span>
          <span style={{ opacity: 0.35, margin: '0 24px' }}>✦</span>
          <span className="px-20">{tickerText}</span>
          <span style={{ opacity: 0.35, margin: '0 24px' }}>✦</span>
          <span className="px-20">{tickerText}</span>
          <span style={{ opacity: 0.35, margin: '0 24px' }}>✦</span>
          <span className="px-20">{tickerText}</span>
          <span style={{ opacity: 0.35, margin: '0 24px' }}>✦</span>
          <span className="px-20">{tickerText}</span>
          <span style={{ opacity: 0.35, margin: '0 24px' }}>✦</span>
        </div>
      </div>
    </div>
  )
}
