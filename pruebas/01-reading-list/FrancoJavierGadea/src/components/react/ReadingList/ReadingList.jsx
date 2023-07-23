import { useEffect, useMemo, useRef, useState } from "react";
import { useSavedBooks } from "../../../data/Store";
import SavedBookCard from "../SavedBookCard/SavedBookCard";

import "./ReadingList.css";
import SortList from "../DragAndSort/SortList";


function ReadingList() {

    const savedBooks = useSavedBooks();

    useEffect(() => {
        
        console.log('reading books', savedBooks);

    }, []);

    const numberOfBooks = useMemo(() => {

        return Object.keys(savedBooks).length;

    }, [savedBooks]);

    const aux = {
        "978-8418450570": {
            "ISBN": "978-8418450570",
            "title": "5. Somos Quintillizas",
            "cover": "https://contentv2.tap-commerce.com/cover/large/9788418450570_1.jpg?id_com=1113"
        },
        "978-8419451910": {
            "ISBN": "978-8419451910",
            "title": "3. Mieruko - Chan",
            "cover": "https://contentv2.tap-commerce.com/cover/large/9788419451910_1.jpg?id_com=1113"
        },
        "978-8419010384": {
            "ISBN": "978-8419010384",
            "title": "4. Konosuba !",
            "cover": "https://contentv2.tap-commerce.com/cover/large/9788419010384_1.jpg?id_com=1113"
        },
        "978-8418271489": {
            "ISBN": "978-8418271489",
            "title": "4. Somos Quintillizas",
            "cover": "https://contentv2.tap-commerce.com/cover/large/9788418271489_1.jpg?id_com=1113"
        },
        "978-8418963513": {
            "ISBN": "978-8418963513",
            "title": "2. Komi-San no puede comunicarse",
            "cover": "https://contentv2.tap-commerce.com/cover/large/9788418963513_1.jpg?id_com=1113"
        },

        "978-0553103540": {
            "title": "Juego de Tronos",
            "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg",
            "ISBN": "978-0553103540",
        },
        "978-9877247985": {
            "title": "Superman : Arriba , En El Cielo",
            "cover": "https://contentv2.tap-commerce.com/cover/large/9789877247985_1.jpg?id_com=1113",
            "ISBN": "978-9877247985",
        },
        "978-9878190099": {
            "title": "Batman : El Detective",
            "cover": "https://contentv2.tap-commerce.com/cover/large/9789878190099_1.jpg?id_com=1113",
            "ISBN": "978-9878190099",
        },
        "978-9875040472": {
            "title": "Caidos del mapa 7",
            "cover": "https://contentv2.tap-commerce.com/cover/large/9789875040472_1.jpg?id_com=1113",
            "ISBN": "978-9875040472",
        },
        "978-9875040250": {
            "title": "Caidos del mapa 8",
            "cover": "https://contentv2.tap-commerce.com/cover/large/9789875040250_1.jpg?id_com=1113",
            "ISBN": "978-9875040250",
        }

    }


    return (<div className="Reading-list">

        <header className="pt-3 pb-2 mb-4 border-bottom d-flex align-items-baseline">

            <h3> <i className="bi bi-book-half"/> Lista de lectura</h3>

            <h5 className="ms-auto">
                <span>Total: </span>
                <strong>{numberOfBooks}</strong>
            </h5>

        </header>

        <div className="Reading-list-content d-flex flex-column">

            <SortList books={savedBooks} />
        </div>
    </div>);
}

export default ReadingList;