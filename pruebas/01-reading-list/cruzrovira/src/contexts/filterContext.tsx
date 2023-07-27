import React, { createContext, useState } from "react"

export const filterContext = createContext<{
  filter: {
    pages: number
    genres: string
    title: string
  }
  setFilter: React.Dispatch<
    React.SetStateAction<{
      pages: number
      genres: string
      title: string
    }>
  >
}>({
  filter: { pages: 0, genres: "all", title: "" },
  setFilter: () => {},
})

export const FilterContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [filter, setFilter] = useState<{
    pages: number
    genres: string
    title: string
  }>({
    pages: 0,
    genres: "all",
    title: "",
  })

  return (
    <filterContext.Provider value={{ filter: filter, setFilter: setFilter }}>
      {children}
    </filterContext.Provider>
  )
}
