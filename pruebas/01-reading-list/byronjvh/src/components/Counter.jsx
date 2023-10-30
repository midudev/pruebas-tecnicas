export function Counter ({ text, list }) {
  return (
    <p className="flex">{text}: <span className="rounded-full px-1 flex items-center justify-center bg-sky-200">{list.length}</span></p>
  )
}
