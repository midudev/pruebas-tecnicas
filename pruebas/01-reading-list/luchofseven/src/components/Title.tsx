export default function Title ({ title }: { title: string }): JSX.Element {
  return (
    <header className="header-section">
      <h3>
        {title}
      </h3>
    </header>
  )
}
