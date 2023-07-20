import { useEffect, useRef } from "react";
import styles from "./Dialog.module.css";

export default function Dialog({ data = null, children }): JSX.Element {
	const ref = useRef();

	useEffect(() => {
		if (data !== null) ref.current.showModal();

		return () => ref.current.close();
	}, [data]);

	return (
		<dialog ref={ref} className={styles.dialog}>
			{children}
		</dialog>
	);
}
