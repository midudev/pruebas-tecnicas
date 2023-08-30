import React, { useState } from "react";
import Image from "next/image";

// Importamos el componente SkeletonImg para mostrar mientras la imagen se está cargando
import SkeletonImg from "../utils/SkeletonImg";

// Definimos el componente ImageBooks
export default function ImageBooks({ url, alt }) {
  // Declaramos el estado para la URL de la imagen y su función de actualización
  const [image, setImage] = useState(url);

  // Declaramos el estado para el estado de carga de la imagen y su función de actualización
  const [isLoading, setIsLoading] = useState(true);

  // Definimos la función que se ejecutará cuando la imagen haya terminado de cargar
  const handleImageLoad = () => {
    // Cambiamos el estado de carga a false
    setIsLoading(false);
    // Actualizamos la URL de la imagen
    setImage(url);
  };

  // Renderizamos el componente
  return (
    <div className="relative w-full h-full">
      {/* Si la imagen está cargando, mostramos el componente SkeletonImg */}
      {isLoading && <SkeletonImg />}
      {/* Renderizamos la imagen con Next.js Image */}
      <Image
        className="object-cover w-full h-full aspect-auto rounded-xl"
        width={120}
        height={96}
        src={image}
        alt={alt}
        loading="lazy"
        // Cuando la imagen haya terminado de cargar, ejecutamos handleImageLoad
        onLoadingComplete={handleImageLoad}
      />
    </div>
  );
}
