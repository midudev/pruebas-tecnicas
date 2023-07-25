import { useEffect, useCallback } from "react";
import { EReducerAction } from "../interfaces";
import { useAppDispatch } from "../store";
import { setTheme } from "../reducer/themeSlice";

export const useSyncTab = () => {
    
    const dispatch = useAppDispatch()
    
    const updateLocalStorage = useCallback((e: StorageEvent) => {
        const { key } = e;
        
        switch (key) {
            case EReducerAction.THEME:
                dispatch(setTheme())
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