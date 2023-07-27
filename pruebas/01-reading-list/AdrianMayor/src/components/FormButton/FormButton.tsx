import styles from "./FormButton.module.scss";

interface FormButton {
	name: string;
	type: "button" | "submit" | "reset" | undefined;
	onClick: () => void;
	isSubmitting: boolean;
}

const FormButton = ({ name, type, onClick, isSubmitting }: FormButton) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`text_primary_button ${styles.formButton_container} ${
				name === "Search" ? styles.formButton_container_search : styles.formButton_container_reset
			}`}
			disabled={isSubmitting}
		>
			{name}
		</button>
	);
};
export default FormButton;
