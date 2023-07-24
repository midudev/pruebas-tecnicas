import { createPortal } from 'react-dom'

type ToastProps = {
  message: string
}

export function Toast({ message }: ToastProps) {
  return createPortal(<p>{message}</p>, document.getElementById('toast') as HTMLDivElement)
}
