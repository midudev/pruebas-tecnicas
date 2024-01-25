"use client"
import { Product } from "../lib/types"
import { useState } from "react"

interface ListImgProps {
  product: Product
}

export default function ListImg({ product }: ListImgProps) {
  // State to track modal visibility and selected image
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")

  const openModal = (image: string) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedImage("")
    setIsModalOpen(false)
  }

  return (
    <ul className="overflow-x-auto overflow-scroll">
      <li className="flex w-full space-x-2">
        {product.images?.map((image, index) => (
          <img
            alt={product.title}
            className="rounded-lg w-[100px] h-[100px] object-cover cursor-pointer"
            src={image}
            key={index}
            onClick={() => {
              openModal(image)
            }}
          />
        ))}
        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
            onClick={closeModal}
          >
            <img
              alt={product.title}
              className="max-w-full max-h-full"
              src={selectedImage}
            />
          </div>
        )}
      </li>
    </ul>
  )
}
