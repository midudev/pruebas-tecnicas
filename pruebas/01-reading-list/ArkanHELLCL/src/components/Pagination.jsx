import { useFilters } from '../hooks/useFilters.jsx'

export function Pagination(){
    const { filters, setFilters } = useFilters()    

    const itemsTotal = filters.totalFilterd
    
    const totalPages = Math.ceil(itemsTotal / filters.pageSize)
    const isFirstPage = filters.page === 1
    const isLastPage = filters.page === totalPages

    const nextPage = filters.page +1
    const prevPage = filters.page -1

    

    const handelNextPage = () => () => {
        setFilters(prevState => ({
            ...prevState,
            page: nextPage
        }))
    }

    const handelPrevPage = () => () => {
        setFilters(prevState => ({
            ...prevState,
            page: prevPage
        }))
    }  
    return (
        <section className='pb-20'>
            <div className="flex flex-col items-center pt-12">    
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Mostrando <span className="font-semibold text-gray-900 dark:text-white">{isFirstPage ? 1 :  (parseInt(filters.pageSize) * parseInt(filters.page)  + 1) - filters.pageSize}</span> al <span className="font-semibold text-gray-900 dark:text-white">{isLastPage ? itemsTotal : filters.page*filters.pageSize}</span> de <span className="font-semibold text-gray-900 dark:text-white">{itemsTotal}</span> Items - Página {filters.page} de {totalPages}
                </span>
                <div className="inline-flex mt-2 xs:mt-0">                
                    <button disabled={isFirstPage} className={`${isFirstPage ? 'pointer-events-none opacity-50' : ''} flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`} onClick={handelPrevPage()}>
                        <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        Anterior
                    </button>
                    <button disabled={isLastPage} className={`${isLastPage ? 'pointer-events-none opacity-50' : ''} flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`} onClick={handelNextPage()}>
                        Siguiente
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}