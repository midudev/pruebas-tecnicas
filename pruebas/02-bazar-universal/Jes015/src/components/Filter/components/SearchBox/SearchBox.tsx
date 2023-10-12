import IconSearch from "@/components/Icons"
import { getFrontRoutes } from "@/config"
import { SearchService } from "@/services"
import { navigate } from "astro:transitions/client"
import { useEffect, useId } from "react"

const inputNames = {
    search: 'search'
}

interface Props {
    label?: string
}
export const SearchBox: React.FC<Props> = ({ label }) => {
    const inputId = useId()

    useEffect(() => {
        if (getFrontRoutes().items !== location.pathname) return
        const query = new URLSearchParams(location.search)
        SearchService.sendMessage(query)
    }, [])

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const inputValue = formData.get(inputNames.search) as string

        if (!inputValue) return

        const newQuery = new URLSearchParams()
        newQuery.append('search', inputValue)

        const queryParsed = newQuery.toString()

        const urlRequest = new URL(location.origin)
        urlRequest.pathname = getFrontRoutes().items
        urlRequest.search = queryParsed

        navigate(urlRequest.toString())
    }

    return (
        <div
            className={ // <-- this should be <search />
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
                        id={inputId}
                        name={inputNames.search}
                        className={
                            [
                                "bg-transparent outline-0 p-2"
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