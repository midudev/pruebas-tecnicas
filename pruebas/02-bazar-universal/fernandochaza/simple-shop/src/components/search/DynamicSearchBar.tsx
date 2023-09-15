"use client"

import { ButtonHTMLAttributes, useEffect, useRef, useState } from "react"

import SearchBar from "./SearchBar"
import ToggleSearchIcon from "@/icons/ToggleSearchIcon"
import DownChevronIcon from "@/icons/DownChevronIcon"

import autoAnimate from "@formkit/auto-animate"

const DynamicSearchBar = () => {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const toggleBar = () => setShow(!show)

  return (
    <div ref={parent}>
      {!show ? (
        <ToggleSearchIcon
          onClick={toggleBar}
          className="w-12 fixed right-6 mx-auto bottom-6 bg-slate-50 rounded-full p-2 shadow-[4px_4px_6px_#b0b2b3,-7px_-7px_10px_#eeeeee] active:border active:shadow-none transition-shadow duration-50"
        />
      ) : (
        <div className="fixed flex flex-col inset-x-0 bottom-2">
          <div className="h-16 mb-2">
            <SearchBar />
          </div>
          <DownChevronIcon
            onClick={toggleBar}
            className="w-10 mb-1 mx-auto rounded-full p-2 bg-slate-50 shadow-[3px_3px_3px_#b0b2b3,-3px_-3px_3px_#ffffff] active:border active:shadow-none transition-shadow duration-50"
          />
        </div>
      )}
    </div>
  )
}

export default DynamicSearchBar
