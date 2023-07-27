import { UseFormRegister } from "react-hook-form";
import styles from "./InputRange.module.scss";
import { useEffect, useState } from "react";

interface InputRadioProps {
	name: string;
	onInput: () => void;
	register: UseFormRegister<any>;
	min: number;
	max: number;
	reset: boolean;
	isSubmitting: boolean;
}

const InputRange = ({ name, onInput, register, min, max, reset, isSubmitting }: InputRadioProps) => {
	const [currentValue, setCurrentValue] = useState("1500");

	useEffect(() => {
		setCurrentValue("1500");
	}, [reset]);
	const handleValue = (value: string) => {
		setCurrentValue(value);
	};

	return (
		<fieldset className={styles.inputRange_container}>
			<div className={styles.inputRange_label_container}>
				<div className={styles.inputRange_label_ellipse}></div>
				<label htmlFor={name} className={`text_normal_bold ${styles.inputRange_label}`}>
					{name !== "pages" ? name : "book pages"}
				</label>
			</div>

			<div className={styles.inputRange_input_container}>
				<input
					type='range'
					id={name}
					min={min}
					max={max}
					defaultValue={max}
					onMouseUp={onInput}
					onInput={(event) => {
						handleValue(event.currentTarget.value);
					}}
					{...register(name)}
					className={styles.inputRange_input}
					disabled={isSubmitting}
				/>
				<span className={styles.inputRange_input_range_value}>{currentValue}</span>
			</div>
		</fieldset>
	);
};

export default InputRange;
