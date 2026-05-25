// SubPageBanner — crimson gradient overlay + background image + bold H1 heading
// Reusable for all sub-pages. Pass `title` prop as the page heading text.

export default function SubPageBanner({ title }) {
  return (
    <div
      className="w-full flex items-center justify-center"
      style={{
        background:
          'linear-gradient(90deg, rgba(77, 38, 51, 0.8) 0%, rgba(206, 28, 40, 0.8) 100%), url("https://grcp.ac.in/images/bgsubpage2.png") center / cover no-repeat',
        minHeight: '110px',
      }}
    >
      <div className="max-w-[1320px] w-full px-4">
        <h1
          className="m-0 font-bold uppercase"
          style={{ fontSize: '25px', color: '#ffffff', fontFamily: 'Montserrat, sans-serif' }}
        >
          {title}
        </h1>
      </div>
    </div>
  )
}
