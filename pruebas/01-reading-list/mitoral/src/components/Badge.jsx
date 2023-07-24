export function Badge ({ className = '', children }) {
  return (
    <span className={`px-3 pb-1 pt-0.5 rounded-full text-sm font-normal bg-[#0099FF] text-white line-clamp-1 ${className}`}>
      {children}
    </span>
  )
}
