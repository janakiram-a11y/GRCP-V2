// SecondaryLinks — dark-navy bar below the carousel
//   ALUMNI ASSOCIATION | MANDATORY DISCLOSURES | NIRF | EVENTS

import { secondaryLinks } from '../data/homeData'

export default function SecondaryLinks() {
  return (
    <div className="w-full" style={{ backgroundColor: '#002a6f' }}>
      <div className="max-w-[1320px] mx-auto">
        <ul className="flex flex-wrap">
          {secondaryLinks.map((link, idx) => (
            <li
              key={idx}
              className="secondary-link-item flex-1 min-w-[120px]"
            >
              <a
                href={link.href}
                className="flex items-center justify-center text-white text-[14.4px] font-semibold py-[5px] px-4 no-underline hover:bg-white/10 transition-colors text-center uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
