import Link from './icons/Link'

export default function OpenTag () {
  return (
    <a href='https://dano-reading-list.netlify.app' target='_blank' rel='noopener noreferrer' className='text-blue-600 font-semibold bg-slate-700 border border-blue-600 absolute left-5 top-5 sm:top-6 p-3 rounded flex items-center justify-center transition hover:scale-105' aria-label='open-new-tag'><Link /></a>
  )
}
