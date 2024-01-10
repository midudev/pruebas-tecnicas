import React from 'react';

function NotItems() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-[25vh]'>
      <article className=' text-left '>
        <h3 className='text-lg font-semibold mb-2'>
          No hay productos que coincidan con tu búsqueda.
        </h3>
        <ul className='list-disc ml-3.5'>
          <li>
            <span className='font-bold'>Revisa la ortografía</span> de la
            palabra.
          </li>
          <li>
            Utiliza <span className='font-bold'>palabras más genéricas</span> o
            menos palabras.
          </li>
          <li>Navega para encontrar un producto similar</li>
        </ul>
      </article>
    </div>
  );
}

export default NotItems;
