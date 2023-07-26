import { useEffect, useState } from "react";
import { Header, Main } from "../components";
import { useAppSelector } from "../store";
import { useSyncTab } from "../hooks";
import "../css/app.scss";

export const App = () => {
    
    useSyncTab()
    
    const theme = useAppSelector(store => store.themeReducer);
    
    const isMobile = window.matchMedia("(min-width: 30em)").matches;
    
    return(
        <div className={theme}>
            <Header isMobile={isMobile} />
            <Main />
        </div>
    )
}