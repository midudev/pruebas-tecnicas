import {useFavorite} from '../../utils/hooks';
import styles from './Favorite.module.css';

export default function Favorite() {
	const {favorites, handleRemoveFromFavoritesClick} = useFavorite();

	if (!favorites.length) {
		return (
			<div className={styles.wrapper}>
				<aside className={styles.aside}>
					<h2 className={styles.title}>Agrega un libro a favoritos</h2>
				</aside>
			</div>
		);
	}

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Favoritos ({favorites.length})</h2>
			<aside className={styles.aside}>
				<div className={styles.favoritesList}>
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
									type='button'
									onClick={() => handleRemoveFromFavoritesClick(favorite)}
								>
									Remove
								</button>
							</div>
						</div>
					))}
				</div>
			</aside>
		</div>
	);
}
