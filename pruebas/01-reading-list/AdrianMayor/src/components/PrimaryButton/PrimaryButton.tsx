import arrowIcon from "../../../public/assets/Arrow 1.svg";
import Image from "next/image";
import styles from "./PrimaryButton.module.scss";
import Link from "next/link";

export enum Cases {
	HOME = "HOME",
	NOT_FOUND = "NOT_FOUND",
	ERROR = "ERROR",
}

interface PrimaryButtonProps {
	primaryButtonCases: Cases;
}

const PrimaryButton = ({ primaryButtonCases }: PrimaryButtonProps) => {
	const handleOnCLick = () => {
		switch (primaryButtonCases) {
			case Cases.HOME:
				return "/books";
			default:
				return "/";
		}
	};
	return (
		<Link href={handleOnCLick()}>
			<button className={`text_primary_button ${styles.primaryButton_container}`}>
				{primaryButtonCases === "HOME"
					? "Discover titles"
					: primaryButtonCases === "NOT_FOUND"
					? "Return to Home Page"
					: "Try again"}
				{primaryButtonCases === "HOME" && <Image src={arrowIcon} alt='Arrow Icon' />}
			</button>
		</Link>
	);
};

export default PrimaryButton;
