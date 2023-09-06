"use client"

import React, { useEffect, useRef } from "react"
import autoAnimate from "@formkit/auto-animate"

const ItemsSection = ({ children, className }: { children: React.ReactNode, className: string }) => {
  const parent = useRef(null)
  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <section
      ref={parent}
      className={className}
    >
      {children}
    </section>
  )
}

export default ItemsSection
