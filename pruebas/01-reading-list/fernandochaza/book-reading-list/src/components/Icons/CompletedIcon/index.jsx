import { useTheme } from 'styled-components'

const CompletedIcon = () => {
  const theme = useTheme()

  return (
    <svg width='40px' height='40px' viewBox='-2.4 -2.4 28.80 28.80' fill='none'>
      <g id='SVGRepo_bgCarrier' strokeWidth='0'>
        <rect
          x='-2.4'
          y='-2.4'
          width='28.80'
          height='28.80'
          rx='14.4'
          fill={theme.mainBg}
          strokeWidth='0'
        ></rect>
      </g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path
          d='M16.0303 10.0303C16.3232 9.73744 16.3232 9.26256 16.0303 8.96967C15.7374 8.67678 15.2626 8.67678 14.9697 8.96967L10.5 13.4393L9.03033 11.9697C8.73744 11.6768 8.26256 11.6768 7.96967 11.9697C7.67678 12.2626 7.67678 12.7374 7.96967 13.0303L9.96967 15.0303C10.2626 15.3232 10.7374 15.3232 11.0303 15.0303L16.0303 10.0303Z'
          fill={theme.mainTxt}
        ></path>{' '}
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z'
          fill={theme.mainTxt}
        ></path>{' '}
      </g>
    </svg>
  )
}

export default CompletedIcon
