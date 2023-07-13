// import React from 'react';
import './Home.css';
import Book from '../../data'
import Lateral from "../../components/LateralBar/LateralBar";
import Card from '../../components/Card/Card';

export default function Home(){
    return (
        <section className="home">
            {/* <h1>Home</h1> */}
            {/* <Lateral /> */}
            <div className="content">
                {Book.list().map((book, index) => {
                    return <Card cover={book.book.cover} key={index} />
                })}
            </div>
        </section>
    )
}