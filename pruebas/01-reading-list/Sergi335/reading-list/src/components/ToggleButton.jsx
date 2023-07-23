import ReadIcon from './ReadIcon'
export default function BookIcon ({ togglePanel, booksInList }) {
  const number = booksInList
  return (
      <button onClick={togglePanel} className="buttonToggle p-0 bg-white outline-none dark:bg-[#331D2C]">
          <span className="absolute top-[13px] bg-sky-600 text-white rounded-3xl py-0 px-2">{number}</span>
          <ReadIcon />
      </button>)
}
