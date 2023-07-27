import Link from "next/link";
import styles from "./AboutPageLayout.module.scss";

const AboutPageLayout = () => {
	return (
		<main className={styles.aboutPageLayout_container}>
			<section className={styles.aboutPageLayout_container_section}>
				<h2 className='text_main_large'>Links to my socials</h2>
				<ul className={styles.social_link}>
					<li className={styles.gitHub_icon}>
						<Link href='https://github.com/AdrianMayor' target='_blank'></Link>
					</li>
					<li className={styles.linkedin_icon}>
						<Link href='https://www.linkedin.com/in/adrian-mayor-dev/' target='_blank'></Link>
					</li>
				</ul>
			</section>
		</main>
	);
};

export default AboutPageLayout;
