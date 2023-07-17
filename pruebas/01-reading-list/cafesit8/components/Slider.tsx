'use client'
import { useStore } from "@/store/zustand";
import { Slider } from "@material-tailwind/react";
import { useEffect, useState } from "react";
 
export default function Example() {
    const { filterPages } = useStore()
    const [pages, setPages] = useState(627)

    useEffect(() => {
        filterPages(pages)
    }, [])

    const handleChange = (e: any) => {
        setPages(Math.trunc(e.target.value))
        filterPages(Math.trunc(e.target.value))
    }

  return (
      <article>
        <label>Filtrar por páginas</label>
          <div className="w-52">
            <label htmlFor="slider">cantidad de páginas: {pages}</label>
            <Slider id="slider" className="bg-none" onChange={handleChange} min={43} max={1200} />
          </div>            
      </article>
  );
}