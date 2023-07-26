

const Filter = ({ setGenre }) => {

    function handleChange(e) {
        console.log(setGenre);
        setGenre(e.target.value);
    }

    return (
        <div className="filter-container">
            <select onChange={handleChange}>
                <option id="genre-option" value="">--Please choose an genre--</option>
                <option value="Fantasía">Fantasía</option>
                <option value="Ciencia ficción">Ciencia ficción</option>
                <option value="Zombies">Zombies</option>
                <option value="Terror">Terror</option>
            </select >
        </div >
    )
}

export default Filter