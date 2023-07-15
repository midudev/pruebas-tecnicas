import './Home.css';
import {useSelector} from 'react-redux'
import Lateral from "../../components/LateralBar/LateralBar";
import Card from '../../components/Card/Card';

export default function Home() {

    const books = useSelector(state => state.books?.render);

    return (
        <section className="home">
            {/* <h1>Home</h1> */}
            <Lateral />
            <div className="content">
                {books.map((book, index) => {
                    return <Card cover={book.book.cover} title={book.book.title} isbn={book.book.ISBN} key={index} />
                })}
            </div>
        </section>
    )
}