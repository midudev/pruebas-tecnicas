const WIDTH = 24
const HEIGHT = 24

export function Bell({ width = WIDTH, height = HEIGHT }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-bell'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      strokeWidth='1.25'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6'></path>
      <path d='M9 17v1a3 3 0 0 0 6 0v-1'></path>
    </svg>
  )
}

export function Heart({ width = WIDTH, height = HEIGHT }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-heart'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      strokeWidth='1.25'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'></path>
    </svg>
  )
}

export function GitHub({ width = WIDTH, height = HEIGHT }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-github'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      strokeWidth='1.25'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
    </svg>
  )
}

export function Search({ width = WIDTH, height = HEIGHT }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-search'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      strokeWidth='1.25'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0'></path>
      <path d='M21 21l-6 -6'></path>
    </svg>
  )
}

export function Eye({ width = WIDTH, height = HEIGHT }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-eye-filled'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      strokeWidth='1.25'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path
        d='M12 4c4.29 0 7.863 2.429 10.665 7.154l.22 .379l.045 .1l.03 .083l.014 .055l.014 .082l.011 .1v.11l-.014 .111a.992 .992 0 0 1 -.026 .11l-.039 .108l-.036 .075l-.016 .03c-2.764 4.836 -6.3 7.38 -10.555 7.499l-.313 .004c-4.396 0 -8.037 -2.549 -10.868 -7.504a1 1 0 0 1 0 -.992c2.831 -4.955 6.472 -7.504 10.868 -7.504zm0 5a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z'
        strokeWidth='0'
        fill='currentColor'></path>
    </svg>
  )
}

export function Dots({ width = WIDTH, height = HEIGHT }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-dots'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      strokeWidth='1.25'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
      <path d='M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
      <path d='M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
    </svg>
  )
}

export function Books({ width = WIDTH, height = HEIGHT }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-books'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      strokeWidth='1.25'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z'></path>
      <path d='M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z'></path>
      <path d='M5 8h4'></path>
      <path d='M9 16h4'></path>
      <path d='M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z'></path>
      <path d='M14 9l4 -1'></path>
      <path d='M16 16l3.923 -.98'></path>
    </svg>
  )
}

export function FilterIcon({ width = WIDTH, height = HEIGHT }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-adjustments-alt'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      strokeWidth={1.25}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M4 8h4v4h-4z'></path>
      <path d='M6 4l0 4'></path>
      <path d='M6 12l0 8'></path>
      <path d='M10 14h4v4h-4z'></path>
      <path d='M12 4l0 10'></path>
      <path d='M12 18l0 2'></path>
      <path d='M16 5h4v4h-4z'></path>
      <path d='M18 4l0 1'></path>
      <path d='M18 9l0 11'></path>
    </svg>
  )
}
