const Tooltip = ({
  children,
  message = "I am a tooltip"
}: {
  children: React.ReactNode
  message: string
}) => {
  return (
      <div className="group cursor-pointer relative my-auto">
        {children}
        <div className="opacity-0 bg-slate-900 text-slate-50 text-center text-xs rounded-lg p-2 mx-4 absolute inset-x-0 group-hover:opacity-100 bottom-full pointer-events-none">
          {message}
          <svg
            className="absolute text-black h-2 w-full left-0 top-full"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
          >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </div>
      </div>
  )
}

export default Tooltip
