import { useEffect, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import styles from "./InputText.module.scss";

interface InputTextProps {
	name: string;
	register: UseFormRegister<any>;
	reset: boolean;
	isSubmitting: boolean;
}

const InputText = ({ name, register, reset, isSubmitting }: InputTextProps) => {
	const [hidePlaceholderIcon, setHidePlaceholderIcon] = useState(false);

	const handleInputChange = (value: string) => {
		value?.length > 0 ? setHidePlaceholderIcon(true) : setHidePlaceholderIcon(false);
	};

	useEffect(() => {
		setHidePlaceholderIcon(false);
	}, [reset]);

	return (
		<fieldset className={styles.inputText_container}>
			<div className={styles.inputText_label_container}>
				<div className={styles.inputText_label_ellipse}></div>
				<label htmlFor={name} className={`text_normal_bold ${styles.inputText_label}`}>
					{name}
				</label>
			</div>

			<div className={`${styles.inputText_input_container} ${hidePlaceholderIcon && styles.hide}`}>
				<input
					type='text'
					id={name}
					placeholder='SEARCH'
					onInput={(event) => handleInputChange(event.currentTarget.value)}
					{...register(name)}
					className={`text_smaller ${styles.inputText_input}`}
					disabled={isSubmitting}
				/>
			</div>
		</fieldset>
	);
};
export default InputText;
