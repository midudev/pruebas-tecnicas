import styles from './Header.module.css';

type Props = {
	children: JSX.Element | JSX.Element[]
};

export default function Header({ children }: Props) {
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>{children}</div>
		</header>
	);
}
