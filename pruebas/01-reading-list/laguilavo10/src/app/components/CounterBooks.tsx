'use client'
interface Props {
  title: string
  length: number
}
export default function CounterBooks({ title = '', length = 0 }: Props) {
  return (
    <header className='flex flex-col items-center'>
      <h2 className='w-full text-center text-2xl font-bold text-white'>
        {title}
      </h2>
      <div className='w-full px-7 text-end tracking-wider text-slate-300' data-test-id={`counter of ${title}`}>
        {length} libro{length !== 1 ? 's' : ''}
      </div>
    </header>
  )
}
