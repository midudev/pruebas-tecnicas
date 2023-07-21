import styles from "./Header.module.css";

export default function Header({ children }) {
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>{children}</div>
		</header>
	);
}
