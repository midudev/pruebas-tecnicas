import { useContext } from "react";
import { BookTypes } from "../../enums";
import { BookContext } from "../../utils/context";
import styles from "./Favorite.module.css";

export default function Favorite() {
	const { favorites, dispatch } = useContext(BookContext);

	if (!favorites.length) {
		return (
			<aside className={styles.aside}>
				<h2 className={styles.title}>Agrega un libro a favoritos</h2>
			</aside>
		);
	}

	return (
		<aside className={styles.aside}>
			<h2 className={styles.title}>Favoritos ({favorites.length})</h2>
			{favorites.map((favorite) => (
				<div className={styles.card} key={favorite.ISBN}>
					<img
						className={styles.cover}
						src={favorite.cover}
						alt={favorite.title}
					/>
					<div className={styles.content}>
						<h4 className={styles.bookTitle}>{favorite.title}</h4>
						<p className={styles.genre}>{favorite.genre}</p>
						<p className={styles.author}>{favorite.author.name}</p>
						<button
							className={styles.button}
							type="button"
							onClick={() => {
								dispatch({
									type: BookTypes.REMOVE_FROM_FAVORITES,
									payload: { book: favorite },
								});
							}}
						>
							Remove
						</button>
					</div>
				</div>
			))}
		</aside>
	);
}
