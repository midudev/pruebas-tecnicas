'use client'

import libraryHook from "./hooks/library.hook"
import ForReading from "./pages/forReading.pages"
import Library from "./pages/library.pages"

const Main = () => {

    return(
        <div className="container my-5"><div className="row">
            <div className="col-9"><Library/></div>
            <div className="col-3"><ForReading/></div>
        </div></div>
    )

}

export default Main