import { BookIconOnly } from './icons'
export default function BookIcon (booksInList) {
  const number = booksInList.booksInList
  const handleClick = () => {
    const panel = document.querySelector('.readingList')
    panel.classList.toggle('translate-x-full')
    // document.body.classList.toggle('overflow-y-hidden')
  }
  return (
      <button onClick={handleClick} className="buttonToggle p-0 bg-white outline-none">
          <span className="absolute top-[13px] bg-sky-600 text-white rounded-3xl py-0 px-2">{number}</span>
          <BookIconOnly />
      </button>)
}
