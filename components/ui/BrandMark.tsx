export function BrandMark({className=''}:{className?:string}){
  return <span className={`brandAperture ${className}`} aria-hidden='true'>
    <svg viewBox='0 0 48 48' role='img' focusable='false'>
      <circle cx='24' cy='24' r='21' fill='none' stroke='currentColor' strokeWidth='1.4' opacity='.72'/>
      <path d='M24 8.5 35.8 15.3 32.2 22H18.6z' fill='currentColor' opacity='.96'/>
      <path d='M38.8 17 38.6 30.6 31.2 30.9 24.4 19.2z' fill='currentColor' opacity='.82'/>
      <path d='M35.5 34.4 23.6 41 19.8 34.6 26.6 22.9z' fill='currentColor' opacity='.68'/>
      <path d='M20.3 40.8 8.7 33.9 12.2 27.4h13.6z' fill='currentColor' opacity='.56'/>
      <path d='M9.2 30.5 9.4 16.9l7.4-.1 6.7 11.7z' fill='currentColor' opacity='.72'/>
      <path d='M12.5 13.6 24.3 7l3.8 6.5-6.8 11.7z' fill='currentColor' opacity='.86'/>
      <circle cx='24' cy='24' r='5.7' fill='var(--brand-center,#f5ede4)'/>
    </svg>
  </span>;
}
