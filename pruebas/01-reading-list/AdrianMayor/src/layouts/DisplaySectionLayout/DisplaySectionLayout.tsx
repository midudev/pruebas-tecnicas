"use client";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import useManageRedux from "@/hooks/useManageRedux";
import { Book } from "@/models/book.model";
import { useEffect, useState } from "react";
import BookGridLayout from "../BookGrid/BookGridLayout";
import LoadingComponent from "@/components/LoadingComponent/LoadingComponent";

interface DisplaySectionLayoutProps {
	books: Book[];
	isLoading: boolean;
}

const DisplaySectionLayout = ({ books, isLoading }: DisplaySectionLayoutProps) => {
	const [availableInSearch, setAvailableInSearch] = useState(0);
	const { reduxListState } = useManageRedux();

	useEffect(() => {
		const totalAvailable = books.reduce((acc, book) => {
			const checkAvailable = !reduxListState.some((item) => book.ISBN === item.ISBN);
			if (checkAvailable) return (acc += 1);
			return acc;
		}, 0);
		setAvailableInSearch(totalAvailable);
	}, [books, reduxListState]);
	return (
		<>
			<SectionHeader state={availableInSearch} text={"Available books"} />
			{isLoading ? <LoadingComponent /> : <BookGridLayout books={books} type='books' />}
		</>
	);
};

export default DisplaySectionLayout;
