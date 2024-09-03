import { useEffect, useState } from "react"
import { MyBooks } from "./MyBooks"
import { GeneralList } from "./GeneralList"
import { useAppDispatch } from "@/hooks/useStore"
import { fetchGetBooks } from "@/store/books/slice"

enum PageSections {
    GENERALLIST = 'generalList',
    MYBOOKS = 'MyBooks'
}

export const MainSectionChoise = () => {
    const [isEnabled, setIsEnabled] = useState<PageSections>(PageSections.GENERALLIST)
    const dispatch = useAppDispatch()

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        dispatch(fetchGetBooks())
      }, [])
    

    const SwapToGeneral = () => {
        if(isEnabled === PageSections.GENERALLIST) return
        setIsEnabled(PageSections.GENERALLIST)
    }

    const SwapToMyBooks = () => {
        if(isEnabled === PageSections.MYBOOKS) return
        setIsEnabled(PageSections.MYBOOKS)
    }

    const generalListSelected = () => {
        return isEnabled === PageSections.GENERALLIST ? 'bg-green-500 text-gray-50' : 'bg-blue-200 hover:bg-blue-300'
    }
    const mylListSelected = () => {
        return isEnabled === PageSections.MYBOOKS ? 'bg-green-500 text-gray-50' : 'bg-blue-200 hover:bg-blue-300'
    }

    return (
        <main id="main" className="bg-gray-200 min-h-screen min-w-screen pb-6" >
            <div className="container flex gap-3 justify-center">
                <button 
                    onClick={SwapToGeneral}
                    className ={`
                        p-2
                        rounded-t-sm
                        transition-colors
                        ease-in-out
                        duration-400
                        ${generalListSelected()}`}>General Books</button>

                <button
                    onClick={SwapToMyBooks}
                    className ={`
                        p-2
                        rounded-t-sm
                        transition-colors
                        ease-in-out
                        duration-400
                        ${mylListSelected()}`}>My Books</button>

            </div>

            <div className="main_wrapper container min-h-full "> {/* border-t-green-500 border-4 rounded-2xl */}
                <div className="bg-gradient-to-b from-green-500  to-transparent to-[100px] px-2 pt-2 rounded-xl  min-h-full">
                    <div className="bg-slate-200 h-full ">
                        {
                            isEnabled === PageSections.GENERALLIST && <GeneralList />
                        }
                        {
                            isEnabled === PageSections.MYBOOKS && <MyBooks />
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}