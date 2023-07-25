import { useState } from 'react'

function useFilterData(data) {
    const [selectedOption, setSelectedOption] = useState('')

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value)
    }

    const filteredData = data.filter((item) => {
        if(selectedOption == 'All' || selectedOption == ''){
            return item
        }else{
            return item.book.genre === selectedOption
        }
    })

    return {
        filteredData,
        handleSelectChange
    }
}

export default useFilterData
