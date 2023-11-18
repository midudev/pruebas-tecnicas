'use client'

import { useContext } from "react"
import ForReading from "./pages/forReading.pages"
import Library from "./pages/library.pages"

import credits from './styles/credits.module.css'
import { mainContext } from "./context/main.context"

const Credits = () => 
    <div className={credits.credits}>
        <p> 01 - Lista de lecturas pendientes <span className={credits.divisor}>|</span> Carlos Manuel Fraile Gómez </p>
    </div>

const Main = () => {

    const { init } = useContext(mainContext);

    return(
        (init)
        ?
        <>
            <div className="container my-5"><div className="row">
                <div className="col-lg-8 col-md-12"><Library/></div>
                <div className="col-lg-4 col-md-12"><ForReading/></div>
            </div>
            <Credits/>
            </div>
        </>
        : <></>
    )

}

export default Main