type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

const defaultStyles =
  'w-full px-3 py-2 text-xs text-center text-white transition-colors duration-300 ease-in-out bg-blue-500 rounded-md cursor-pointer 2xl:text-base hover:bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed'

export default function Button({ children, className, ...rest }: Props) {
  return (
    <button className={className ?? defaultStyles} {...rest}>
      {children}
    </button>
  )
}
