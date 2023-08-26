import { StyledSvg } from './styles'

const MessageIcon = () => {
  return (
    <StyledSvg
      xmlns='http://www.w3.org/2000/svg'
      width='60'
      height='60'
      fill={'currentColor' || '#036bfc'}
      viewBox='-6.48 -6.48 36.96 36.96'
    >
      <path
        fill={'currentColor' || '#036bfc'}
        strokeWidth='0'
        d='M14.693-5.718a5.197 5.197 0 0 0-5.386 0l-12.128 7.35a5.197 5.197 0 0 0-2.504 4.445v11.846a5.197 5.197 0 0 0 2.504 4.444l12.128 7.35a5.197 5.197 0 0 0 5.386 0l12.128-7.35a5.197 5.197 0 0 0 2.504-4.444V6.077a5.197 5.197 0 0 0-2.504-4.444l-12.128-7.35z'
      />
      <g
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='.912'
      >
        <path d='M21.004 12a9 9 0 0 1-9 9h-9s1.56-3.744.936-5a9 9 0 1 1 17.064-4Z' />
        <path d='M8.405 13.975c.035-.176.053-.265.085-.347a.997.997 0 0 1 .111-.207c.05-.073.114-.136.242-.264L13 9a1.414 1.414 0 0 1 2 2l-4.157 4.157a2.098 2.098 0 0 1-.264.242.994.994 0 0 1-.207.11c-.082.033-.17.05-.347.086L8 16l.405-2.025Z' />
      </g>
    </StyledSvg>
  )
}

export default MessageIcon
