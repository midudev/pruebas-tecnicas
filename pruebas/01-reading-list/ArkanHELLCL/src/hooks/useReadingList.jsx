import { useContext } from "react";
import { ReadingListContext } from "../context/readingList.jsx";

export const useReadingList = () => {
    const context = useContext(ReadingListContext);
    
    if(context === undefined) {
        throw new Error('useReadingList must be used within a ReadingListProvider')
    }

    return context;
}