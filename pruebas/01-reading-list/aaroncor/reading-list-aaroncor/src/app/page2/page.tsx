'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useSearchParams } from 'next/navigation';

export default function Home() {
	const searchParams = useSearchParams();
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>
					Get started by editing2;
					<code className={styles.code}>
						Parámetro: {searchParams.get('query')}
					</code>
				</p>
			</div>
		</main>
	);
}
