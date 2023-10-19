import { FC } from 'react'

type GridProps = {
  children: React.ReactNode
}

const Grid: FC<GridProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(300px, 1fr))`,
        gridGap: 32,
        width: '100%'
      }}
    >
      {children}
    </div>
  )
}

export default Grid
