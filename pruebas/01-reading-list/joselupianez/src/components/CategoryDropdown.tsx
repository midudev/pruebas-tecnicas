import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"

interface ChildProps{
    categories: string[];
    currentCategory: string;
    setCategory: (category: string) => void;
}

const CategoryDropdown = ({currentCategory, categories, setCategory}: ChildProps) => {
    const { t } = useTranslation()
    const [open, setOpen] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)
        
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if(!ref.current?.contains(e.target as Node)){
                setOpen(false)
            }
        }
        document.body.addEventListener('click', handleOutsideClick)
        
        return () => {
            document.body.removeEventListener('click', handleOutsideClick)
        }
    }, [])

    return (
        <section className="w-full font-semibold" ref={ref}>
            <h6 className='font-bold text-sm pb-2'>{t('filterByGenre')}</h6>
            <div className="relative text-left">
                <div>
                    <button type="button" onClick={() => setOpen(val => !val)} className="flex w-full justify-between rounded-md bg-neutral-800 border border-neutral-700 px-3 py-2 text-sm font-semibold text-white">
                    {currentCategory}
                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                    </button>
                </div>
                <div onClick={() => setOpen(val => !val)} className={`${!open ? 'hidden' : ''} absolute right-0 z-10 mt-2 w-full rounded-md bg-neutral-800 border border-neutral-700 text-white`}>
                    {categories.map((category:string) => (
                        <a href="#" onClick={() => setCategory(category)} key={category} className={`block px-4 py-2 text-sm hover:bg-neutral-700 ${currentCategory === category ? 'text-neutral-500 bg-neutral-700' : ''}`}>{category}</a>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default CategoryDropdown
