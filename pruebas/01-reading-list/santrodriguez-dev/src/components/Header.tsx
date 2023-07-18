import { CounterBooks, Filters } from '.'

export const Header = () => {
  return (
    <header className='text-left'>
      <CounterBooks/>
      <Filters/>
    </header>
  )
}
