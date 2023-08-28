import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline'

interface Props {
  length: number
  children: React.ReactNode
  text?: string
}
export default function EmptyState({
  length,
  children,
  text = 'No Hay Libros'
}: Props) {
  return (
    <>
      {length === 0 ? (
        <article className='flex h-full w-full flex-col items-center justify-center'>
          <ArchiveBoxXMarkIcon className='m-0 h-24 w-24 stroke-slate-300' />
          <span className='text-2xl font-semibold text-slate-300'>
            {text}
          </span>
        </article>
      ) : (
        children
      )}
    </>
  )
}
