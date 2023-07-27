import { useState, useEffect } from 'react';
export default function useDashboard() {
  const [isMobile, setIsMobile] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [])

  useEffect(() => {
    setIsMobile(width < 640)
  }, [width])

  return {
    isMobile
  }
}
