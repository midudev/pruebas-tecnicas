 

function Star({color}:{color:string}) {
  return (
    <svg viewBox="0 0 282.3 270.1" width={30} xmlns="http://www.w3.org/2000/svg" className="star-favorites"  >
<defs>
<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="338.9" x2="322.8" y1="292.1" y2="203.1">
<stop offset="0" stopColor="#e6d82f"/>
<stop offset="1" stopColor="#faf26f"/>
</linearGradient>
<linearGradient id="b" gradientUnits="userSpaceOnUse" x1="391.9" x2="341.2" y1="310.6" y2="310.6">
<stop offset="0" stopColor="#d2c308"/>
<stop offset="1" stopColor="#e8da34"/>
</linearGradient>
</defs>
<g fillRule="evenodd" transform="translate(-198.9 -145.7)">
<path d="m340.1 292.8l-.4-140.5-32.16 98.6z" fill={color}/>
<path d="m340.2 152.4l31.45 97.64-31.04 42.7z" fill={color}/>
<path d="m341.1 292.4l133.8-42.39-103.6-.01z" fill={color}/>
<path d="m341 293.1l50.85 17.34 83.1-60.32z" fill={color}/>
<path d="m289.1 310.6l50.32-17.12-134.2-43.5z" fill={color}/>
<path d="m339.6 293.8l-82.67 116.1 32.22-99.1z" fill={color}/>
<path d="m341.1 293.6l50.78 16.82 31.72 97.69z" fill={color}/>
<path d="m340.2 348.6l83.08 59.65-82.56-114.4z" fill={color}/>
<path d="m306.9 251.2l33.56 42.72-135.6-43.9z" fill={color}/>
<path d="m340.2 348.6l-82.9 59.3 83.03-114.5z" fill={color}/>
</g>
 </svg>
  )
}

export default Star