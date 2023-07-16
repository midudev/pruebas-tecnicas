import styles from './Card.module.css'

// TODO: Scoring:https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6

export default function Card() {
    return (
        <div className={styles.card}>
            <div>
                <img
                    className={styles.cover}
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg"
                    alt="cover"
                />
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.score}>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                    </div>
                    <div>
                        <p>El Señor de los Anillos</p>
                    </div>
                    <div>
                        <p>J.R.R. Tolkien</p>
                    </div>
                </div>
                <div className={styles.addList}>
                    <button>Añadir a la lista</button>
                </div>
            </div>
        </div>
    )
}
