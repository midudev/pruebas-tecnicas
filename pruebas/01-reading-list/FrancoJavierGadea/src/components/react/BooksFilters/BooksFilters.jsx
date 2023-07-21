import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { getAllGenres } from "../../../data/books.js";

import styles from "./BooksFilter.module.css";


function BooksFilters(props) {

    const [pages, setPages] = useState(props.pages || 1000);

    const [genre, setGenre] = useState(props.genre || 'Todos');


    return (<Form className={styles['Books-filters']} method="get" action={props.path} >

        <Form.Group className="me-3">

            <Form.Label>Paginas: {pages}</Form.Label>

            <Form.Range className={styles['custom-form-range']} min={50} max={1000} step={10} value={pages} name="pages" 
            
                onChange={(e) => setPages(Number(e.currentTarget.value))}
            />

        </Form.Group>
  
        <Form.Group className="me-3">

            <Form.Label>Generos</Form.Label>

            <Form.Select value={genre} name="genre"
            
                onChange={(e) => setGenre(e.currentTarget.value)}
            > 

                <option value={'Todos'}>Todos</option>
                {
                    getAllGenres().map(value => {

                        return <option value={value} key={value}>{value}</option>
                    })
                }
            </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">Aplicar</Button>
    </Form>);
}

export default BooksFilters;