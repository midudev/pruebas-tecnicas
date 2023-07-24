import styles from './Select.module.css';

type Props = {
	options: string[];
	onChange: (ev) => void;
	value: string;
};

export default function Select({options, onChange, value}: Props) {
	console.log({value});
	return (
		<div className={styles.wrapper}>
			<select className={styles.select} onChange={onChange} value={value}>
				{Array.from(options).map((option) => {
					return (
						<option key={option} value={option}>
							{option}
						</option>
					);
				})}
			</select>
		</div>
	);
}
