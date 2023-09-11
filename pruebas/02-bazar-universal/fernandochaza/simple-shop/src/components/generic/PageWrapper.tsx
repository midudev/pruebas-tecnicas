"use client"

import React from "react"
import { motion } from "framer-motion"

/**
 * Wraps a page to provide page transition animations.
 */
const PageWrapper = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default PageWrapper
