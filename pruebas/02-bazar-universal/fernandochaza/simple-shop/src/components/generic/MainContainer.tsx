/**
 * Provides a main container with a custom background color
 */
const MainContainer = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <main
      className={`inset-0 flex flex-col place-content-center bg-slate-50 ${className}`}
    >
      {children}
    </main>
  )
}

export default MainContainer
