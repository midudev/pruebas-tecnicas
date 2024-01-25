import clsx from "clsx"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}
export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        `bg-[#bd1e59] text-white mt-4 rounded-md p-3 w-1/2`,
        className
      )}
    >
      {children}
    </button>
  )
}
