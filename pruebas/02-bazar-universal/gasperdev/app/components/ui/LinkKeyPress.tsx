"use client"
import { useEffect } from "react"
import Link from "next/link"

function LinkKeypress({ Links }: { Links: string }) {
  useEffect(() => {
    const keyDownHandler = (e: any) => {
      if (e.key === "Enter") {
        window.location.href = Links
      }
    }
    document.addEventListener("keydown", keyDownHandler)

    // Limpiar al desmontar
    return () => {
      document.removeEventListener("keydown", keyDownHandler)
    }
  }, [Links])

  return (
    <Link
      className="bg-[#bd1e59] text-white rounded-md p-2 w-1/2 text-center"
      href={Links}
    >
      Buscar
    </Link>
  )
}

export default LinkKeypress
