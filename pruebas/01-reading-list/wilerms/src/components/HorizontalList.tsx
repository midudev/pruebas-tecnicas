import cn from 'classnames'
import { ArrowLeftIcon, ArrowRightIcon } from 'icons'
import { useRef } from 'react'

interface Props {
  className?: string
  scrollSize?: number
  children: JSX.Element | JSX.Element[] | string | string[]
}

export const HorizontalList = ({
  scrollSize = 100,
  className,
  children
}: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const scrollRight = () => ref.current?.scroll({
    left: ref.current?.scrollLeft + scrollSize,
    behavior: 'smooth'
  })

  const scrollLeft = () => ref.current?.scroll({
    left: ref.current?.scrollLeft - scrollSize,
    behavior: 'smooth'
  })

  return (
    <div className={cn('group relative flex items-center w-full', className)}>
      <button
        onClick={scrollLeft}
        className='absolute left-0 hidden md:group-hover:block text-2xl border rounded-full p-1 z-20 bg-white transition hover:scale-110 active:scale-95 hover:shadow-lg'
      >
        <ArrowLeftIcon height={24} width={24} />
      </button>

      <div
        ref={ref}
        className='w-full flex overflow-x-auto scrollbar-hide py-2 pl-5 -ml-3'
      >
        {children}
      </div>
      <button
        onClick={scrollRight}
        className='absolute right-0 hidden md:group-hover:block text-2xl border-2 rounded-full p-1 z-20 bg-white transition hover:scale-110 active:scale-95 hover:shadow-lg'
      >
        <ArrowRightIcon height={24} width={24} />
      </button>
    </div>
  )
}
