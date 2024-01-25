interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SearchIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  )
}

export const TruckIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
      <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
      <circle cx="7" cy="18" r="2" />
      <path d="M15 18H9" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  )
}

export const StarIcon: React.FC<IconProps> = (props) => {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      />
    </svg>
  )
}
export const HalfStarIcon: React.FC<IconProps> = (props) => {
  return (
    <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
      <defs>
        <linearGradient id="halfStarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" style={{ stopColor: "gold", stopOpacity: 1 }} />
          <stop
            offset="50%"
            style={{ stopColor: "transparent", stopOpacity: 0 }}
          />
        </linearGradient>
      </defs>
      <path
        d="M12 2 L14.4 8.8 L22 9.6 L16.8 15.2 L18.4 22 L12 18.4 L5.6 22 L7.2 15.2 L2 9.6 L9.6 8.8 Z"
        fill="url(#halfStarGradient)"
      />
    </svg>
  )
}
export const ArrowRightI: React.FC<IconProps> = (props) => {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}
export const ArrowLeft: React.FC<IconProps> = (props) => {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}
