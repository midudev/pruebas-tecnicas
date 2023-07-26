import { useState } from "react";
import { Form, Button, Accordion } from "react-bootstrap";
import { getAllGenres } from "../../../data/books.js";

import "./BooksFilter.css";


function BooksFilters(props) {

    const [pages, setPages] = useState(props.pages || 1000);

    const [genre, setGenre] = useState(props.genre || 'Todos');


    return (<Accordion id="Accordion-filters">

        <Accordion.Item eventKey="0">
            <Accordion.Header className="d-flex align-items-baseline pt-3 pb-2">

                <h3 className="title m-0"> <i className="bi bi-funnel-fill" /> Filtros</h3>

                <h5 className="Reading-list-total  m-0 ms-auto">
                    <span>Libros disponibles: </span>
                    <strong>{props.total || 0}</strong>
                </h5>
            </Accordion.Header>

            <Accordion.Body>

                <Form className="Books-filters" method="get" action={props.path} >

                    <Form.Group className="form-pages flex-grow-1 flex-md-grow-0">

                        <Form.Label>Paginas: <strong>{pages}</strong></Form.Label>

                        <Form.Range min={50} max={1000} step={10} value={pages} name="pages"

                            onChange={(e) => setPages(Number(e.currentTarget.value))}
                        />

                    </Form.Group>

                    <Form.Group className="form-genre flex-grow-1 flex-md-grow-0">

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

                    {
                        props.queryParams && Object.entries(props.queryParams).map(([key, value]) => {

                            return <input type="hidden" name={key} value={value} key={key}/>
                        })
                    }

                    <Button className="flex-grow-1 flex-md-grow-0" variant="primary" type="submit">Aplicar</Button>
                </Form>

            </Accordion.Body>
        </Accordion.Item>
    </Accordion>);
}

export default BooksFilters;