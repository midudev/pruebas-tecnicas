export function ButtonApp (
  { text, className }:
  { text: string, className?: string }
) {
  return (
    <button
      className={`bg-colorAppPink rounded-full py-1 px-8 outline-none font-medium shadow-button focus:outline-none ${className}`}
      type='submit'
    >
      {text}
    </button>
  )
}
