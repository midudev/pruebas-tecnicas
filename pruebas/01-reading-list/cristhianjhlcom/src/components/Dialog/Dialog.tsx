import {forwardRef} from 'react';
import styles from './Dialog.module.css';

function Dialog({children}, ref): JSX.Element {
	return (
		<dialog ref={ref} className={styles.dialog}>
			{children}
		</dialog>
	);
}

const ForwaredDialog = forwardRef(Dialog);

export default ForwaredDialog;
