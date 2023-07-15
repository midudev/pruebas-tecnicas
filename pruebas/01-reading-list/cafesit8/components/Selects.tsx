'use client'
import { useStore } from "@/store/zustand";
import { Select, Option } from "@material-tailwind/react";
 
export default function Example() {
    const { filterGenre } = useStore()
    const handleChange = (e: any) => filterGenre(e) 
  return (
    <div className="w-72">
      <Select
        onChange={handleChange}
        label="Seleccione Género"
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <Option value="todos">Todos</Option>
        <Option value="Fantasía">Fantasía</Option>
        <Option value="Ciencia ficción">Ciencia ficción</Option>
        <Option value="Zombies">Zombies</Option>
        <Option value="Terror">Terror</Option>
      </Select>
    </div>
  );
}