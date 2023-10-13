import IconSearch from "@/components/Icons"
import { getFrontRoutes } from "@/config"
import { SearchService } from "@/services"
import { useEffect, useId, useRef, useState, type LegacyRef } from "react"
// import { navigate } from "astro:transitions/client"

const inputNames = {
    search: 'search'
}

interface Props {
    label?: string
}

export const SearchBox: React.FC<Props> = ({ label }) => {
    const inputId = useId()
    const inputRef = useRef<HTMLInputElement>()
    const [query, setQuery] = useState<string>("")

    useEffect(() => {
        if (getFrontRoutes().items !== location.pathname) return

        const newSearchTitle = location.search.split('=')[1].replaceAll('+',' ').replaceAll('%C3%', 'ñ')
        document.title = `${newSearchTitle} - Midu Bazar`

        if (inputRef.current != null) {
            inputRef.current.value = newSearchTitle
        }

        if (query === "") return

        const newQuery = new URLSearchParams(location.search)
        SearchService.sendMessage(newQuery)
    }, [query])


    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const inputValue = formData.get(inputNames.search) as string

        if (!inputValue) return

        const newQuery = new URLSearchParams()
        newQuery.append('search', inputValue)
        const queryParsed = newQuery.toString()

        const newUrl = new URL(location.origin)
        newUrl.pathname = getFrontRoutes().items
        newUrl.search = queryParsed

        if (location.pathname === getFrontRoutes().items) {
            setQuery(inputValue)
            history.pushState(null, '', newUrl)
        } else {
            location.href = newUrl.toString()
            // navigate(urlRequest.toString()) --> astro compilation error
        }
    }

    return (
        <div // <-- this should be <search />
            className={ 
                [
                    "w-full self-center"
                ].join(' ')
            }
        >
            <form onSubmit={handleOnSubmit} className="w-full">
                {
                    label != null &&
                    <header>
                        <label className="drop-shadow-text" htmlFor={inputId}>{label}</label>
                    </header>
                }
                <main className="flex gap-1 w-full pl-1 bg-input drop-shadow-input border border-primary rounded-[0.2em]">
                    <IconSearch
                        className={
                            [
                                "w-7 drop-shadow-text"
                            ].join(' ')
                        }
                    />
                    <input
                        ref={inputRef as LegacyRef<HTMLInputElement>}
                        id={inputId}
                        name={inputNames.search}
                        className={
                            [
                                "bg-transparent outline-0 p-2 w-full"
                            ].join(' ')
                        }
                        type="text"
                    />
                </main>
                <button className="hidden">submit</button>
            </form>
        </div>
    )
}