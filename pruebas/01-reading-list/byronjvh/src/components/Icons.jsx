export function AddToList () {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none">
        <path style={{ stroke: 'currentcolor' }} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6M8 3v9l3-3 3 3V3M8 3h6m0 0h4a2 2 0 0 1 2 2v7m-1 4v3m0 3v-3m0 0h3m-3 0h-3"/>
      </svg>
  )
}

export function DeleteFromList () {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none"><path style={{ stroke: 'currentcolor' }} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6M8 3v9l3-3 3 3V3M8 3h6m0 0h4a2 2 0 0 1 2 2v7m2 7h-6"/></svg>
  )
}

export function List () {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none">
        <path style={{ stroke: 'currentcolor' }} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4M8 3v9l3-3 3 3V3M8 3h6"/>
      </svg>
  )
}

export function Arrow ({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" style={{ fill: 'currentcolor' }} width="1em" height="1em" viewBox="0 0 24 24">
      <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/>
    </svg>
  )
}

export function SearchIcon ({ className }) {
  return (
    <svg className={className} style={{ fill: 'currentcolor' }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5C12.082 19.5 14.0076 18.8302 15.5731 17.6944L20.2929 22.4142C20.6834 22.8047 21.3166 22.8047 21.7071 22.4142L22.4142 21.7071C22.8047 21.3166 22.8047 20.6834 22.4142 20.2929L17.6944 15.5731C18.8302 14.0076 19.5 12.082 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5ZM3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10Z"
      />
    </svg>
  )
}

export function CrossIcon ({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 -0.5 25 25" style={{ fill: 'currentcolor' }}>
      <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="inherit"/>
    </svg>
  )
}
