export function HalfStar () {
  return (
    <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
      <defs>
        <linearGradient id='grad'>
          <stop offset='50%' stopColor='rgb(234 179 8)' />
          <stop offset='50%' stopColor='rgb(209 213 219)' />
        </linearGradient>
      </defs>
      <path
        fill='url(#grad)' d='M12 17.27l-5.27 3.18 1.09-6.01L3.5 9.82l6.04-.88L12 3l2.46 5.94 6.04.88-4.32 4.62 1.09 6.01z'
      />
    </svg>
  )
}
