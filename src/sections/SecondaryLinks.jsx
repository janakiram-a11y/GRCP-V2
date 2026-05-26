// SecondaryLinks — dark-navy bar below the carousel
//   ALUMNI ASSOCIATION | MANDATORY DISCLOSURES | NIRF | EVENTS

import { Link } from 'react-router-dom'
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
              <Link
                to={link.href}
                className="secondary-nav-link flex items-center justify-center text-[14.4px] font-semibold py-[5px] px-4 text-center uppercase"
                style={{ textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
