import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ReadingList from '../ReadingList/ReadingList';

import styles from "./CustomOffcanvas.module.css";

function CustomOffcanvas() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);


    return (<>
    
        <Offcanvas show={show} onHide={handleClose} placement="end" scroll={true} backdrop={false}
        
           className={styles["Custom-offcanvas"]} style={{zIndex: 3100}} 
        >

            <Offcanvas.Header closeButton />

            <Offcanvas.Body className="py-0">

                <ReadingList />

            </Offcanvas.Body>
        </Offcanvas>
    
        <Button className="bg-transparent border-0 p-0 fs-1" variant="primary" onClick={handleShow}
        
            title="Lista de lectura"
        >
            <i className="bi bi-list" />
        </Button>
    </>);
}

export default CustomOffcanvas;