export function Pages ({ pages }) {
  // get the color of the tag base on the amount of pages(green: <300, yellow: > 300 y < 600, red)
  const tagColor = pages < 300 ? '#4F9D69' : pages > 300 && pages < 600 ? '#F99C39' : '#D84654'
  return (
      <li className="flex gap-1">
        <h3 className="font-bold">Pages:</h3>
        <p className='rounded px-1' style={{ backgroundColor: tagColor }}>{pages}</p>
      </li>
  )
}

export function Genre ({ genre }) {
  return (
      <li className="flex gap-1">
        <h3 className="font-bold">Genero:</h3>
        <p>{genre}</p>
      </li>
  )
}

export function Author ({ author }) {
  return (
      <li className="flex gap-1">
        <h3 className="font-bold">Autor:</h3>
        <p>{author}</p>
      </li>
  )
}
