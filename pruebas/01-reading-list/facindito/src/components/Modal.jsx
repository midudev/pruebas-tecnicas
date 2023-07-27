import ReactDOM from 'react-dom'

function Modal ({ children, onClose }) {
  return (
    <div
      className='bg-rhino-900 bg-opacity-80 backdrop-blur-sm fixed inset-0 flex justify-center items-center'
    >
      <div className='bg-rhino-950 w-screen h-screen md:h-fit md:max-w-2xl rounded-md flex flex-col gap-2 p-4 overflow-y-auto'>
        <div className='flex justify-end w-full'>
          <button onClick={onClose}>
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default function ModalPortal ({ children, onClose }) {
  return ReactDOM.createPortal(<Modal onClose={onClose}>{children}</Modal>, document.getElementById('modal-root'))
}
