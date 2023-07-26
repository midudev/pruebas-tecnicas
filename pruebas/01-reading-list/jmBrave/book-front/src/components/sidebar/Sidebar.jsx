import { useState } from 'react'
import Filter from '../filter/Filter'

const Sidebar = ({ genresAvailable, handleFilterBooksGenreAvailable }) => {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <>
            {showSidebar ? (
                <button
                    className="flex text-xl md:text-4xl text-white items-center cursor-pointer fixed right-10 top-11 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
            ) : (
                <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="fixed z-30 flex items-center cursor-pointer right-10 top-11"
                    fill="#DAAA63"
                    viewBox="0 0 100 80"
                    width="40"
                    height="40"
                >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            )}

            <div
                className={`top-10 flex justify-center items-center right-0 bg-[#DAAA63]/[.75] p-2 pl-2 md:p-10 md:pl-10 rounded-lg text-white fixed z-40 ease-in-out duration-300 ${
                    showSidebar ? 'translate-x-0 ' : 'translate-x-full'
                }`}
            >
                <div className="flex items-center justify-center mt-10">
                    <p className="text-sm md:text-xl font-semibold text-white pr-5">
                        Genero
                    </p>
                    <Filter
                        genres={genresAvailable}
                        handleFilterBooksGenreAvailable={
                            handleFilterBooksGenreAvailable
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default Sidebar
