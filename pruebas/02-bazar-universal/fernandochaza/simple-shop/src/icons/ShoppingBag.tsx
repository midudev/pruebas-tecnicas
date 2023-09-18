const ShoppingBag = ({ className, ...props }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="-2.5 0 32 32"
      className={className}
      {...props}
    >
      <path
        fill="url(#a)"
        d="M23.273 0H2.909c-.803 0-1.454.651-1.454 1.455v26.181c0 .804.65 1.455 1.454 1.455h20.364c.803 0 1.454-.651 1.454-1.455V1.455C24.727.65 24.077 0 23.273 0Z"
      />
      <path
        fill="url(#b)"
        d="M24.727 2.91H1.455C.65 2.91 0 3.56 0 4.363v26.181C0 31.35.651 32 1.455 32h23.272c.804 0 1.455-.651 1.455-1.455V4.364c0-.804-.651-1.455-1.455-1.455Z"
      />
      <g filter="url(#c)">
        <path
          fill="#000"
          fillOpacity=".2"
          d="M20.363 10.182c0 2.008-.71 3.722-2.13 5.142-1.42 1.42-3.134 2.13-5.142 2.13-2.009 0-3.723-.71-5.143-2.13s-2.13-3.134-2.13-5.142h2.909c0 1.205.426 2.233 1.278 3.085.852.852 1.88 1.279 3.086 1.279 1.205 0 2.233-.427 3.085-1.279.852-.852 1.278-1.88 1.278-3.085h2.91Zm0 0a1.454 1.454 0 1 1-2.908 0 1.454 1.454 0 0 1 2.908 0Zm-11.636 0a1.451 1.451 0 0 1-1.17 1.426 1.446 1.446 0 0 1-1.093-.217 1.455 1.455 0 1 1 2.263-1.21Z"
        />
      </g>
      <path
        fill="#fff"
        d="M8.727 8.727c0 1.205.426 2.234 1.278 3.086.852.852 1.88 1.278 3.086 1.278 1.205 0 2.233-.426 3.085-1.278.852-.852 1.278-1.88 1.278-3.086h2.91c0 2.009-.71 3.723-2.13 5.143S15.098 16 13.09 16c-2.009 0-3.723-.71-5.143-2.13s-2.13-3.134-2.13-5.143h2.909Zm0 0a1.45 1.45 0 0 1-.898 1.344 1.452 1.452 0 0 1-1.766-.536 1.451 1.451 0 0 1 .18-1.836 1.45 1.45 0 0 1 1.586-.316 1.451 1.451 0 0 1 .898 1.344Zm11.636 0a1.453 1.453 0 1 1-2.907.001 1.453 1.453 0 0 1 2.907 0Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="13.091"
          x2="13.091"
          y1="24.182"
          y2="-20.546"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopColor="#7a7c7f" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="13.223"
          x2="13.06"
          y1="1.767"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7a7c7f" />
          <stop offset="1" stopColor="#15191e" />
        </linearGradient>
        <filter
          id="c"
          width="16.545"
          height="10.727"
          x="4.818"
          y="7.727"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_103_1420"
            stdDeviation=".5"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default ShoppingBag
