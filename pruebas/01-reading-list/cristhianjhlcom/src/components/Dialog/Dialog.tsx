import {ReactNode, useEffect, useRef} from 'react';
import {Book} from '../../interfaces';
import styles from './Dialog.module.css';

type Props = {
	data: Book | null;
	children: ReactNode;
};

export default function Dialog({data = null, children}: Props): JSX.Element {
	const ref = useRef<HTMLDialogElement>();

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
