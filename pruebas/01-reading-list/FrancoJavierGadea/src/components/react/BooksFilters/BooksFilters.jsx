import { useState } from "react";
import { Form, Button, Accordion } from "react-bootstrap";
import { getAllGenres } from "../../../data/books.js";

import "./BooksFilter.css";


function BooksFilters(props) {

    const [pages, setPages] = useState(props.pages || 1000);

    const [genre, setGenre] = useState(props.genre || 'Todos');


    return (<Accordion id="Accordion-filters">

        <Accordion.Item eventKey="0">
            <Accordion.Header className="pt-3 pb-2 border-bottom">
                <h3> <i className="bi bi-funnel-fill" /> Filtros</h3>
            </Accordion.Header>

            <Accordion.Body>

                <Form className="Books-filters" method="get" action={props.path} >

                    <Form.Group className="flex-grow-1 flex-md-grow-0">

                        <Form.Label>Paginas: {pages}</Form.Label>

                        <Form.Range className="custom-form-range" min={50} max={1000} step={10} value={pages} name="pages"

                            onChange={(e) => setPages(Number(e.currentTarget.value))}
                        />

                    </Form.Group>

                    <Form.Group className="flex-grow-1 flex-md-grow-0">

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

                    <Button className="flex-grow-1 flex-md-grow-0" variant="primary" type="submit">Aplicar</Button>
                </Form>

            </Accordion.Body>
        </Accordion.Item>
    </Accordion>);
}

export default BooksFilters;