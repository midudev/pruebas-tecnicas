import useBooks from "../hooks/useBooks"

type Props = {
    filterByGenre: (genre: string) => void,
    filterByText: (text: string) => void,
    filterByPages: (pages: number) => void,
    nPages: number,
    setSortType: (sort: string) => void
}

export default function Form({ filterByGenre, filterByText, filterByPages, nPages, setSortType }: Props) {
    const { genres } = useBooks()

    return (
        <form>
            <div className='flex flex-col md:flex-row justify-between gap-10'>
                <fieldset className='flex flex-col md:flex-row justify-start gap-10'>
                    <legend className='text-lg font-bold'>Filtrar por:</legend>
                    <div className="flex flex-col gap-2">
                        <label htmlFor='genre'>Género</label>
                        <div className="inline-block relative w-full md:w-64 h-full">
                            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='genre' id='genre' onChange={(e) => filterByGenre(e.target.value)}>
                                <option value=''>Todos</option>
                                {genres.map((genre: string, index: number) => (
                                    <option key={index} value={genre}>{genre}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full md:w-auto gap-2'>
                        <label htmlFor='paginas' className='flex'><svg fill="black" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="38"><path d="M248-300q53.566 0 104.283 12.5T452-250v-427q-45-30-97.619-46.5Q301.763-740 248-740q-38 0-74.5 9.5T100-707v434q31-14 70.5-20.5T248-300Zm264 50q50-25 98-37.5T712-300q38 0 78.5 6t69.5 16v-429q-34-17-71.822-25-37.823-8-76.178-8-54 0-104.5 16.5T512-677v427Zm-30 90q-51-38-111-58.5T248-239q-36.537 0-71.768 9Q141-221 106-208q-23.1 11-44.55-3Q40-225 40-251v-463q0-15 7-27.5T68-761q42-20 87.395-29.5Q200.789-800 248-800q63 0 122.5 17T482-731q51-35 109.5-52T712-800q46.868 0 91.934 9.5Q849-781 891-761q14 7 21.5 19.5T920-714v463q0 27.894-22.5 42.447Q875-194 853-208q-34-14-69.232-22.5Q748.537-239 712-239q-63 0-121 21t-109 58ZM276-489Z" /></svg> Máximo de páginas: {nPages ?? ''}</label>
                        <input id="paginas" className="h-full accent-black" type="range" min="100" max="1200" step="100" value={nPages} onChange={(e) => filterByPages(parseInt(e.target.value))} />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor='freesearch'>Búsqueda por título</label>
                        <input id="freesearch" type='text' className='h-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Juego de...' onChange={(e) => filterByText(e.target.value)} />
                    </div>
                </fieldset>
                <fieldset className='flex items-end'>
                    <legend className='text-lg font-bold'>Ordenar por:</legend>
                    <div className="flex flex-col w-full md:w-auto relative">
                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='genre' id='genre' onChange={(e) => setSortType(e.target.value)}>
                            <option value=''>Sin ordenar</option>
                            <option value='title'>Título Alfabetico</option>
                            <option value='author'>Autor Alfabetico</option>
                            <option value='pages'>Número de páginas descendete</option>
                            <option value='year'>Año de publicación descendente</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>

                    </div>
                </fieldset>
            </div>
        </form>
    )
}