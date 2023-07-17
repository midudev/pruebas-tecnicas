import { useEffect, useState } from "react";

export default function useGetColor(imgRef: HTMLImageElement) {
  const [color, setColor] = useState<string | undefined>(undefined)

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;

    const ctx = canvas.getContext('2d');
    if (!ctx || !imgRef) return;

    imgRef.crossOrigin = 'Anonymous'

    imgRef.onload = () => {
      ctx.drawImage(imgRef, 0, 0, 1, 1)
      const pixelData = ctx.getImageData(0, 0, 1, 1).data

      setColor(`${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]}`)
    }
  }, [imgRef])

  return [color]
}