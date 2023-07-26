import styles from './Search.module.css';

type Props = {
	value: string;
	onChange: (ev) => void;
};

export default function Search({value, onChange}: Props) {
	return (
		<input
			className={styles.search}
			placeholder='Busca por nombre del libro...'
			type='search'
			name='search'
			value={value}
			onChange={onChange}
			autoComplete='off'
		/>
	);
}
