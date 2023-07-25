import libraryHook from "./hooks/library.hook"

const Main = () => {

    libraryHook()

    return(
        <div className="container"><div className="row">
            <div className="col-9">Lorem, ipsum dolor.</div>
            <div className="col-3">Lorem, ipsum dolor.</div>
        </div></div>
    )

}

export default Main