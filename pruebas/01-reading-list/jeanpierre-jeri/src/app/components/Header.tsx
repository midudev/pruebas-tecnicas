const title = 'All Books'

export function Header() {
  return (
    <header className="flex justify-center gap-6 p-3 text-5xl uppercase text-amber-400 bg-amber-300 [&_span]:select-none [&_span]:flex-shrink-0 overflow-hidden">
      <span>{title}</span>
      <span>{title}</span>
      <span>{title}</span>
      <span>{title}</span>
      <h1 className="flex-shrink-0 text-zinc-800">{title}</h1>
      <span>{title}</span>
      <span>{title}</span>
      <span>{title}</span>
      <span>{title}</span>
    </header>
  )
}
