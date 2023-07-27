import React, { useEffect, useRef, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import styles from "./InputRadio.module.scss";
import useManageRedux from "@/hooks/useManageRedux";
import { genresAvailable } from "@/models/genresAvailable";

interface InputRadioProps {
	title: string;
	name: string;
	onInput: () => void;
	register: UseFormRegister<any>;
	genres: genresAvailable[];
	reset: boolean;
	isSubmitting: boolean;
}

const InputRadio = ({ title, name, onInput, register, genres, reset, isSubmitting }: InputRadioProps) => {
	const { reduxAvailableGenres } = useManageRedux();
	const inputRadioRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		// When reset after look for a genre, checked property is not set to first element although value is set properly

		const inputAll = inputRadioRef.current?.childNodes[0]?.childNodes[0] as HTMLInputElement;
		if (inputAll) inputAll.checked = true;
	}, [reset]);

	return (
		<fieldset className={styles.inputRadio_input_active}>
			<div className={styles.inputRadio_legend_container}>
				<div className={styles.inputRadio_legend_ellipse}></div>
				<legend className={`text_normal_bold ${styles.inputRadio_legend}`}>{title}</legend>
			</div>

			<div className={styles.inputRadio_input_container}>
				<div className={styles.inputRadio_input_arrow_up}></div>
				<div ref={inputRadioRef} className={styles.inputRadio_input_overflow_container}>
					{genres.map((item, index) => (
						<React.Fragment key={item.genre}>
							<div className={styles.inputRadio_label_container}>
								<input
									type='radio'
									id={item.genre}
									value={item.genre}
									onInput={onInput}
									{...register(name)}
									defaultChecked={item.genre === "All"}
									className={`${styles.inputRadio_input_active} ${styles.inputRadio_input_hide}`}
									disabled={isSubmitting}
								/>
								<label htmlFor={item.genre} className={`text_small ${styles.inputRadio_input_label}`}>
									{item.genre}
								</label>
								<div className={styles.inputRadio_state_container}>
									<span className={`text_smaller ${styles.inputRadio_state_container_span}`}>
										{reduxAvailableGenres[index].available}
									</span>
								</div>
							</div>
						</React.Fragment>
					))}
				</div>

				<div className={styles.inputRadio_input_arrow_down}></div>
			</div>
		</fieldset>
	);
};

export default InputRadio;
