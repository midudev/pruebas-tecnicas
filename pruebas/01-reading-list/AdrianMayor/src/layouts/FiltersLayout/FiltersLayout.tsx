"use client";

import getDataFiltered from "@/api/getFilteredData";
import FormButton from "@/components/FormButton/FormButton";
import InputRadio from "@/components/InputRadio/InputRadio";
import InputRange from "@/components/InputRange/InputRange";
import InputText from "@/components/InputText/InputText";
import { Book } from "@/models/book.model";
import { genresAvailable } from "@/models/genresAvailable";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";

export interface filtersValues {
	title?: string;
	author?: string;
	genre?: string;
	pages?: string;
}

interface DisplaySectionLayoutProps {
	genres: genresAvailable[];
	setFilteredBooks: Dispatch<SetStateAction<Book[]>>;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const FiltersLayout = ({ genres, setFilteredBooks, setIsLoading }: DisplaySectionLayoutProps) => {
	const [resetValues, setResetValues] = useState(false);

	// React hook form to manage filter form
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = useForm<filtersValues>();

	const onSubmit = async (filters: filtersValues) => {
		// When filtering by genre, then reset form and then filter by book pages, genres is set as 'null'
		if (filters.genre === null) filters.genre = "All";
		setIsLoading(true);
		const booksFiltered: Book[] | undefined = await getDataFiltered(filters);
		console.log(booksFiltered);
		booksFiltered && booksFiltered?.length > 0 && setFilteredBooks(booksFiltered);
	};

	!isSubmitting && setIsLoading(false);

	return (
		<>
			<InputText name='title' register={register} reset={resetValues} isSubmitting={isSubmitting} />

			<InputText name='author' register={register} reset={resetValues} isSubmitting={isSubmitting} />

			<InputRadio
				title='genres'
				genres={genres}
				name='genre'
				onInput={handleSubmit(onSubmit)}
				register={register}
				reset={resetValues}
				isSubmitting={isSubmitting}
			/>

			<InputRange
				name='pages'
				onInput={handleSubmit(onSubmit)}
				register={register}
				min={1}
				max={1500}
				reset={resetValues}
				isSubmitting={isSubmitting}
			/>

			<FormButton
				name='Reset'
				type='button'
				onClick={() => {
					reset({
						title: "",
						author: "",
						genre: "All",
						pages: "1500",
					});
					onSubmit({
						title: "",
						author: "",
						genre: "All",
						pages: "1500",
					});
					setResetValues(!resetValues);
				}}
				isSubmitting={isSubmitting}
			/>

			<FormButton name='Search' type='submit' onClick={handleSubmit(onSubmit)} isSubmitting={isSubmitting} />
		</>
	);
};

export default FiltersLayout;
