import NavBar from "@/components/NavBar/NavBar";
import Link from "next/link";
import styles from "./DefaultLayout.module.scss";

// I use in this component an input checkbox to trigger mobile menu to not introduce states and JS logic to keep this component SSR
const DefaultHeaderLayout = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			<header className={styles.header_container}>
				<Link href={"/"}>
					<h1 className='text_large'>eBooks Lib.</h1>
				</Link>

				<input
					type='checkbox'
					id='toggle_mobile_menu'
					className={styles.header_container_mobile_button}
				></input>

				<label htmlFor='toggle_mobile_menu'></label>
				<nav className={styles.header_nav_container}>
					<NavBar />
				</nav>
			</header>
			{children}
		</>
	);
};

export default DefaultHeaderLayout;
