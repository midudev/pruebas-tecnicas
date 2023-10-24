import PrimaryButton, { Cases } from "@/components/PrimaryButton/PrimaryButton";
import Image from "next/image";
import homeImage from "../../../public/images/unsplash_CXYPfveiuis.svg";
import styles from "./HomeLayout.module.scss";

// In this component is used img tag because the intention in future upgrades is make this image be dynamic

const HomePageLayout = () => {
	return (
		<main className={styles.main_homePage_container}>
			<section className={styles.homePage_container_section}>
				<h1 className={`text_main_large`}>
					Best Place To Find Your <span className={styles.homePage_underline}>Favorite</span> Books.
				</h1>
				<p className={`text_normal_light ${styles.homePage_container_section_text}`}>
					Dive into our extensive book genres, covering a wide range of genres and topics. Whether you are a
					fan of romance, science fiction, history, self-help, or any other genre, you will find a treasure
					trove of books to satisfy your literary cravings.
				</p>

				<PrimaryButton primaryButtonCases={Cases.HOME} />
			</section>
			<div className={styles.homePage_container_image}>
				<Image src={homeImage} fill objectFit='cover' alt='Book Home Page Image'></Image>
			</div>
		</main>
	);
};

export default HomePageLayout;
