interface Props {
  children: React.ReactNode
}

export default function Modal({ children }: Props) {
  return (
    <div className='fixed inset-0 z-20 grid px-4 bg-black/50 place-content-center'>
      {children}
    </div>
  )
}
