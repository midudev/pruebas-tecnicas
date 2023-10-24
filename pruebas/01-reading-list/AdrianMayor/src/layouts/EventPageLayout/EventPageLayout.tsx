import Image from "next/image";
import notFoundImage from "../../../public/images/pana.svg";
import PrimaryButton, { Cases } from "@/components/PrimaryButton/PrimaryButton";
import styles from "./EventPageLayout.module.scss";
import errorImage from "../../../public/images/panaError.svg";
interface EventPageLayoutProps {
	type: Cases;
}

const EventPageLayout = ({ type }: EventPageLayoutProps) => {
	return (
		<main className={styles.eventPageLayout_container}>
			<Image
				src={type === Cases.NOT_FOUND ? notFoundImage : errorImage}
				alt='NotFoundImage'
				width={620}
				height={620}
			/>
			<div className={styles.eventPageLayout_container_text_container}>
				<p className='text_large_event'>
					{Cases.NOT_FOUND === Cases.NOT_FOUND
						? "The page you're looking for doesn't exist."
						: "We've had a problem loading this content"}
				</p>
				<div>
					<PrimaryButton primaryButtonCases={type}></PrimaryButton>
				</div>
			</div>
		</main>
	);
};

export default EventPageLayout;
