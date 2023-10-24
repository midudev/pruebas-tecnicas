"use client";

import useGetWidth from "@/hooks/useGetWidth";
import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./ModalWrapper.module.scss";
import useManageRedux from "@/hooks/useManageRedux";

export enum ModalWrapperCases {
	FILTERS = "FILTERS",
	LIST = "LIST",
}

interface ModalWrapperProps {
	children: ReactNode;
	caseOfUse: ModalWrapperCases;
}

const ModalWrapper = ({ children, caseOfUse }: ModalWrapperProps) => {
	const modalRef = useRef<HTMLDialogElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [isEffectEnabled, setIsEffectEnabled] = useState(false);
	const { width } = useGetWidth();
	const { reduxListState } = useManageRedux();

	useEffect(() => {
		if (width && width < 860) {
			setIsEffectEnabled(true);
		} else {
			setIsEffectEnabled(false);
		}
	}, [width]);

	useEffect(() => {
		isOpen ? modalRef?.current?.showModal() : modalRef?.current?.close();
	}, [isOpen]);

	return isEffectEnabled ? (
		<>
			<button
				type='button'
				onClick={() => setIsOpen(!isOpen)}
				className={`${
					caseOfUse === ModalWrapperCases.FILTERS
						? styles.modalWrapper_open_button__filters
						: styles.modalWrapper_open_button__list
				} text_primary_button`}
			>
				{caseOfUse === ModalWrapperCases.LIST && `My List `}
				{caseOfUse === ModalWrapperCases.LIST && (
					<span className='text_small_bold'>{reduxListState.length}</span>
				)}
			</button>

			<dialog ref={modalRef} className={`${styles.modalWrapper_content_container} `}>
				<div
					className={`${
						caseOfUse === ModalWrapperCases.FILTERS
							? styles.modalWrapper_content_container__filters
							: styles.modalWrapper_content_container__list
					}`}
				>
					<button
						type='button'
						onClick={() => setIsOpen(!isOpen)}
						className={styles.modalWrapper_content_container_close_button}
					></button>
					{children}
				</div>
			</dialog>
		</>
	) : (
		<>{children}</>
	);
};

export default ModalWrapper;
