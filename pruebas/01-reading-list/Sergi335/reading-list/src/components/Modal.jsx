import { useState, useEffect, useRef } from 'react'

export default function Modal ({ list }) {
  const [visible, setVisible] = useState(false)
  const [text, setText] = useState('')

  // Ref para almacenar el valor previo de "list"
  const prevListRef = useRef(null)

  // Este useEffect maneja el cambio en el texto
  useEffect(() => {
    if (prevListRef.current !== null) {
      let newText = ''

      if (prevListRef.current.length > list.length) {
        newText = 'Libro eliminado de tu lista!!'
      } else if (prevListRef.current.length < list.length) {
        newText = 'Libro añadido a tu lista!!'
      }

      setText(newText)
    }

    // Actualizar el valor previo de "list" en el ref
    prevListRef.current = list
  }, [list])

  // Este useEffect maneja la visibilidad del componente Modal
  useEffect(() => {
    if (text !== '') {
      setVisible(true)
      const timeout = setTimeout(() => {
        setVisible(false)
        setText('')
      }, 1500)

      return () => clearTimeout(timeout)
    }
  }, [text])

  return (
      <div className={visible ? 'modal fixed left-[15%] 2xl:left-[45%] bottom-[7%] bg-black text-white py-[25px] px-[50px] rounded-md' : 'modal fixed left-[36%] 2xl:left-[50%] bottom-[7%] bg-black text-white py-[25px] px-[50px] rounded-md hidden'}>
        <p>{text}</p>
      </div>
  )
}
