interface Props {
  synopsis: string
}

/**
 * Component with share book sinapsis.
 * @param synopsis La sinopsis del libro que se mostrará.
 * @returns El elemento JSX que muestra la sinopsis del libro.
 */
export default function BookSynopsis({ synopsis }: Props) {
  return (
    <div
      className='absolute opacity-0 bg-[#242424] rounded-md  
     transition-all duration-300 h-[218px] p-3 flex items-center -z-10 text-rose-500 text-lg font-semibold '
    >
      <p>{synopsis}</p>
    </div>
  )
}
