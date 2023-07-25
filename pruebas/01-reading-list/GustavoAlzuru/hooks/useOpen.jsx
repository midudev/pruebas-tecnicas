import { useState } from "react";

function useOpen(){
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return {handleOpen, isOpen}
}
export default useOpen