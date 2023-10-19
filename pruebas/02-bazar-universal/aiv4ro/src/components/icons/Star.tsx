export function Star ({
  twColor = 'text-gray-300'
}) {
  return (
    <svg className={`w-4 h-4 fill-current ${twColor}`} viewBox='0 0 24 24'>
      <path d='M12 17.27l-5.27 3.18 1.09-6.01L3.5 9.82l6.04-.88L12 3l2.46 5.94 6.04.88-4.32 4.62 1.09 6.01z' />
    </svg>
  )
}
