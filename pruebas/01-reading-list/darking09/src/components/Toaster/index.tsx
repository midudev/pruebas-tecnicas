'use client'
import dynamic from "next/dynamic"

const Toaster = dynamic(async () => {
  const { Toaster } = await import("react-hot-toast")
  return Toaster
}, {
  ssr: false,
})

export default Toaster
