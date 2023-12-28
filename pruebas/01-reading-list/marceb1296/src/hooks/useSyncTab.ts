import { useEffect, useCallback } from "react";
import { EReducerAction } from "../interfaces";
import { useAppDispatch } from "../store";
import { setTheme } from "../reducer/themeSlice";
import { setBookList } from "../reducer/bookListSlice";


export const useSyncTab = () => {
    
    const dispatch = useAppDispatch()
    
    const updateLocalStorage = useCallback((e: StorageEvent) => {
        const { key, newValue } = e;
        
        switch (key) {
            case EReducerAction.THEME:
                dispatch(setTheme())
                break
            case EReducerAction.BOOK_LIST:
                dispatch(setBookList(newValue))
                break
            default:
                break 
        }
        
    }, [])
    
    useEffect(() => {
        window.addEventListener("storage", updateLocalStorage);
        return () => window.removeEventListener("storage", updateLocalStorage);
    }, [])
    
}