type ButtonProps = {
  children: React.ReactNode
  disable?: boolean
}

export function Button ({ children, disable }: ButtonProps) {
  return (
    <button
      className={`w-full mt-6 p-2 bg-brand-dark text-slate-100 rounded-lg ${disable ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-darker'} }`}
      disabled={disable}
    >
      {children}
    </button>
  )
}
