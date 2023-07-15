import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export const FilterComponent = ({
    pageRange,
    setPageRange,
    filter,
    setFilter,
    filteredBooksCount,
    fantasiaCount,
    cienciaFiccionCount,
    zombiesCount,
    terrorCount,
    maxPageCount,
}) => {
    return (
        <div className="filter">
            <h1 className="title">Explorar todos los libros</h1>

            <div className="filterButtonContainer">
                <div className="sidebarContainer">
                    <span className="sidebarTitle">Páginas</span>
                    <div className="sidebar">
                        <div className="sidebarMin">{pageRange.min}</div>
                        <Slider
                            min={0}
                            max={maxPageCount}
                            value={[pageRange.min, pageRange.max]}
                            onChange={(values) => setPageRange({ min: values[0], max: values[1] })}
                            range
                        />
                        <div className="sidebarMax">{pageRange.max}</div>
                    </div>
                </div>

                <select name="filter" id="filterSelect" className="filterSelect" value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="Todos">Todos ({filteredBooksCount})</option>
                    <option value="Fantasía">Fantasía ({fantasiaCount})</option>
                    <option value="Ciencia ficción">Ciencia Ficción ({cienciaFiccionCount})</option>
                    <option value="Zombies">Zombies ({zombiesCount})</option>
                    <option value="Terror">Terror ({terrorCount})</option>
                </select>
            </div>
        </div>
    );
};
