import { Button, Popover } from 'antd'

export const MoreInfo = ({ synopsis, year }) => {
  const content = (
    <div>
      <p>
        <span style={{ fontWeight: '600' }}>Año: </span>
        {year}
      </p>
      <p>
        <span style={{ fontWeight: '600' }}>Sinopsis: </span>
        {synopsis}
      </p>
    </div>
  )
  return (
    <Popover title='Más información' content={content}>
      <Button>Más info...</Button>
    </Popover>
  )
}
