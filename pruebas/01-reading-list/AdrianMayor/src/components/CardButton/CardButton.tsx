import styles from "./CardButton.module.scss";

interface CardButtonProps {
	availability: boolean;
	handleAdd: () => void;
	handleRemove: () => void;
}

const CardButton = ({ availability, handleAdd, handleRemove }: CardButtonProps) => {
	return (
		<>
			{availability && (
				<button className={`${styles.cardButton} ${"text_bookEvent_Button"} `} onClick={() => handleAdd()}>
					ADD TO MY LIST
				</button>
			)}

			{!availability && (
				<button
					className={`
                    ${styles.cardButton} 
                    ${styles.cardButton_remove} 
                    ${"text_bookEvent_Button"} 
                    ${"text_bookEvent_Button--remove"}`}
					onClick={() => {
						handleRemove();
					}}
				>
					REMOVE FROM MY LIST
				</button>
			)}
		</>
	);
};

export default CardButton;
