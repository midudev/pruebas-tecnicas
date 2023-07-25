
export const Navbar = () => {

    const submit = (e) => {

        e.preventDefault();
        

    }

  return (
    <>
    
        <nav className="navbar navbar-expand-lg py-3 Navbar border-bottom align-items-center justify-content-center">

            <a className="navbar-brand mx-5 navbar__logo border" href="/">WhatA<span className="fw-bold">Book</span></a> {/* navbar__container */}

            <form className="form-inline my-2 my-lg-0 mx-auto navbar__form" onSubmit={(e) => submit(e)}>

                <label htmlFor="SearchBook" className="text-center navbar__label">Busca un libro</label>

                <div className="d-flex">
                    
                    <input className="form-control mr-sm-2 navbar__input" type="search" placeholder="¿Qué buscas hoy?" id="SearchBook"/>
                    <button className="btn mx-2 my-sm-0 btn__submit" type="submit">Buscar</button>

                </div> {/* navbar__label */}

            </form> {/* navbar__form */}

        </nav> {/* Navbar */}

    </>
  )
}
