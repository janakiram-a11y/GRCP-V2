// TopBar — the very top strip:
//   [counselling-code ticker | E-Bulletin  Downloads  Contact Us | Google search]

import { FaSearch } from 'react-icons/fa'

export default function TopBar() {
  return (
    <div className="w-full bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-[1320px] mx-auto px-3 flex flex-wrap items-center justify-between gap-1 py-1 text-[13px]">

        {/* Left – counselling codes ticker */}
        <div className="flex items-center gap-2 overflow-hidden max-w-[260px]">
          <span
            className="bg-[#7fffd4] text-[#333] text-[11px] px-2 py-0.5 rounded-sm whitespace-nowrap font-medium"
          >
            TG PGECET counselling code:&nbsp;
            <strong className="text-[#a41425]">GRCP1</strong>
          </span>
        </div>

        {/* Center – quick nav links */}
        <div className="flex items-center gap-0 text-[14px] font-bold" style={{ color: '#ab070e' }}>
          <a href="#" className="px-[10px] hover:underline" style={{ color: '#ab070e' }}>GRCP E-Bulletin</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="px-[10px] hover:underline" style={{ color: '#ab070e' }}>Downloads</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="px-[10px] hover:underline" style={{ color: '#ab070e' }}>Contact Us</a>
        </div>

        {/* Right – Google search bar */}
        <div className="flex items-center border border-gray-300 rounded bg-white overflow-hidden">
          <span className="px-2 text-gray-500 text-sm">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="enhanced by Google"
            className="text-[12px] text-gray-400 px-1 py-1 w-[170px] outline-none bg-transparent placeholder-gray-400"
            readOnly
          />
        </div>

      </div>
    </div>
  )
}
