const FiltersIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    fill='none'
    stroke='white'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    className='mt-1'
    viewBox='0 0 24 24'
    {...props}
  >
    <path d='M3 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6' />
  </svg>
)
export default FiltersIcon
