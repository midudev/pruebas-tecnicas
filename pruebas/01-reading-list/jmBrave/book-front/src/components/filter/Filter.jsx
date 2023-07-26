import { useRef } from 'react'
const Filter = ({ genres, handleFilterBooksGenreAvailable }) => {
    const selectRef = useRef()

    const handleChange = () =>
        handleFilterBooksGenreAvailable(selectRef.current.value)

    return (
        <div className="text-black">
            <select name="categories" ref={selectRef} onChange={handleChange}>
                {genres.map((category) => {
                    return (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Filter
