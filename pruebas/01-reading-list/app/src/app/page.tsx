'use client'

import ForReading from "./pages/forReading.pages"
import Library from "./pages/library.pages"

import credits from './styles/credits.module.css'

const Credits = () => 
    <div className={credits.credits}>
        <p> 01 - Lista de lecturas pendientes <span className={credits.divisor}>|</span> Carlos Manuel Fraile Gómez </p>
    </div>

const Main = () => {

    return(
        <div className="container my-5"><div className="row">
            <div className="col-8"><Library/></div>
            <div className="col-4"><ForReading/></div>
        </div>
        <Credits/>
        </div>
    )

}

export default Main