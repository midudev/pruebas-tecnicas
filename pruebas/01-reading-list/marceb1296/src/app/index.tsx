import { useEffect, useState } from "react";
import { Header, Main } from "../components";
import { useAppSelector } from "../store";
import { useSyncTab } from "../hooks";
import "../css/app.scss";

export const App = () => {
    
    useSyncTab()
    
    const theme = useAppSelector(store => store.themeReducer);
    
    return(
        <div aria-label="main-book" className={theme}>
            <Header />
            <Main />
        </div>
    )
}