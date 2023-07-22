import Link from 'next/link'
import { BookIcon, GitHubIcon } from '../assets/icons'
interface Props {
  isShowingReadList: boolean
  setIsShowingReadList: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Header({
  isShowingReadList,
  setIsShowingReadList
}: Props) {
  return (
    <header className='fixed top-0 z-30 flex  h-16 w-screen items-center bg-[#596886] bg-brandImage bg-contain bg-no-repeat px-10 sm:bg-center'>
      <Link
        href='https://github.com/Laguilavo10/'
        target='_blank'
        className='flex items-center gap-2 transition-transform duration-100 ease-linear hover:scale-110'
      >
        <GitHubIcon className='h-8 w-8 ' />
        <span className='hidden font-bold text-white md:block'>
          / Laguilavo10
        </span>
      </Link>
      <button
        onClick={() => setIsShowingReadList((prev) => !prev)}
        className={`flex gap-3 justify-self-end rounded-lg border-2 border-slate-800 bg-white p-2 text-black  ${
          isShowingReadList ? 'bg-opacity-100' : 'bg-opacity-60'
        } absolute right-14 transition-colors duration-300 ease-linear`}
      >
        <BookIcon />
        <span className='hidden font-bold sm:block'>Reading List</span>
      </button>
    </header>
  )
}
