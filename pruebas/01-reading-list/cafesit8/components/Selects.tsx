'use client'
import { Select, Option } from "@material-tailwind/react";
 
export default function Example() {
    const handleChange = (e: any) => console.log(e) 
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
        <Option value="all">Todos</Option>
        <Option value="fantasy">Fantasía</Option>
        <Option value="fiction">Ciencia ficción</Option>
        <Option value="zombies">Zombies</Option>
        <Option value="terror">Terror</Option>
      </Select>
    </div>
  );
}