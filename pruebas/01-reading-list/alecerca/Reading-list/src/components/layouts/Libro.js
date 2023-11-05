import React, { useContext, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles';
import LibrosContext from '../../context/librosContext';

function getModalStyle()
{
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
}));

const Libro = ({libro}) => {

    const librosContext = useContext(LibrosContext);
    const {obtenerLeer} = librosContext;

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState('');

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const capturarLibro = libro => {
        setId(libro);
    } 



    return ( 
        <div className='col-md-4 mb-3'>
            <div className='card'>
                <h2 className='card-header'>{libro.book.title}</h2>

                <img className='card-img-top' src={libro.book.cover} alt={`Imagen de ${libro.book.cover}`}/>

                <div className='card-body'>
                    <button
                        type='button'
                        className='btn btn-block btn-primary'
                        onClick={() => {
                            capturarLibro(libro.book.ISBN)
                            handleOpen();
                        }}
                    >Ver Libro</button>
                    <button
                        type='button'
                        className='btn btn-block btn-primary'
                        onClick={() => {
                            obtenerLeer(libro)
                        }}
                    >Leer</button>


                    <Modal
                        open={open}
                        onClose={() => {
                            capturarLibro('');
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{libro.book.title}</h2>
                            <h3 className='mt-4'>Sinopsis</h3>
                            <p>
                                {libro.book.synopsis}
                            </p>
                            <img className='img-fluid my-4' src={libro.book.cover}/>

                            <h3>Paginas y generos</h3>
                            <ul>
                                {libro.book.pages}
                            </ul>
                            <ul>
                                {libro.book.genre}
                            </ul>

                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
 
export default Libro;