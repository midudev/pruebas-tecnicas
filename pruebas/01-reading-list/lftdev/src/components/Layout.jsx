export default function Layout (props) {
  const { className, children, title } = props
  return (
    <div className={className}>
      <h1 className='text-6xl font-bold text-white'>
        {title}
      </h1>
      {children}
    </div>
  )
}
