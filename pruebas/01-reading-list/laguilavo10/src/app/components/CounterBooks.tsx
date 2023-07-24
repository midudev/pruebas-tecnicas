'use client'
interface Props {
  title: string
  length: number
}
export default function CounterBooks({ title = '', length = 10 }: Props) {
  return (
    <header className='flex flex-col items-center'>
      <h2 className='w-full text-center text-2xl font-bold text-white'>
        {title}
      </h2>
      <span className='w-full px-7 text-end tracking-wider text-slate-300'>
        {length} libro{length !== 1 ? 's' : ''}
      </span>
    </header>
  )
}
