import { useState } from 'react'

export default function useModal () {
  const [selectedBook, setSelectedBook] = useState()
  const [showModal, setShowModal] = useState(false)

  const handleOpen = (book) => {
    setSelectedBook(book)
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }
  return {
    handleOpen,
    handleClose,
    selectedBook,
    showModal
  }
};
