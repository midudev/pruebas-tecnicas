export function Button ({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-full mt-6 p-2 bg-brand-dark text-slate-100 rounded-lg hover:bg-brand-darker">
      {children}
    </button>
  )
}
