import React from 'react'

const IconAdd: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={30}
    fill='none'
    stroke='white'
    strokeWidth="1"
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-plus-circle bg-black rounded-full bg-opacity-50'
    viewBox='0 0 24 24'
    {...props}
  >
    <path d='M12 8v8M8 12h8' />
  </svg>
)

export default IconAdd
