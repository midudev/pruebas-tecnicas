import styles from "./SectionHeader.module.scss";

interface SectionHeaderProps {
	state: number;
	text: string;
}

const SectionHeader = ({ state, text }: SectionHeaderProps) => {
	return (
		<div className={styles.sectionHeader_header_container}>
			<h2 className={`text_large ${styles.sectionHeader_header_container_title}`}>
				{text}
				<div className={styles.sectionHeader_header_container_state_container}>
					<span className={`text_small_bold ${styles.sectionHeader_header_container_state}`}>{state}</span>
				</div>
			</h2>
		</div>
	);
};

export default SectionHeader;
