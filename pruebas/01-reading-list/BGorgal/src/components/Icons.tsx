import React from 'react'

const BoookIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='none'
    stroke='white'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    className='feather feather-book'
    viewBox='0 0 24 24'
    {...props}
  >
    <path d='M4 19.5A2.5 2.5 0 0 1 6.5 17H20' />
    <path d='M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z' />
  </svg>
)

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

const IconRemove: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    data-testid='icon-remove'
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={30}
    fill='none'
    stroke='white'
    strokeWidth='1'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-plus-circle rounded-full bg-black bg-opacity-50'
    viewBox='0 0 24 24'
    {...props}
  >
    <path d='M8 12h8' />
  </svg>
)

const IconAdd: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    data-testid='icon-add'
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={30}
    fill='none'
    stroke='white'
    strokeWidth='1'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-plus-circle rounded-full bg-black bg-opacity-50'
    viewBox='0 0 24 24'
    {...props}
  >
    <path d='M12 8v8M8 12h8' />
  </svg>
)
export { IconAdd, BoookIcon, FiltersIcon, IconRemove }
