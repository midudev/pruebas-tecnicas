export function Star ({ className = '', fill }: { className?: string, fill?: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" fill={fill ? 'currentColor' : undefined} />
    </svg>
  )
}
