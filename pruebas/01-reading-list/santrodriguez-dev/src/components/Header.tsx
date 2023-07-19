import { CounterBooks, Filters } from '.'

export const Header = () => {
  return (
    <header className='text-left py-5'>
      <CounterBooks/>
      <Filters/>
    </header>
  )
}
