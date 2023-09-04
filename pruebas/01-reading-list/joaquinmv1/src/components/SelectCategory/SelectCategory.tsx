interface SelectProps {
  changeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectCategory = ({ changeCategory }: SelectProps) => {
  return (
    <>
      <div>
        <select onChange={changeCategory}>
          <option value="">Categorias</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
          <option value="Zombies">Zombies</option>
          <option value="Terror">Terror</option>
        </select>
      </div>
    </>
  )
}