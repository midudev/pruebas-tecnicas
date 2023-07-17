export type BookProps = {
	book: {
		isbn: string;
		title: string;
		pages: number;
		genre: string;
		cover: string;
		synopsis: string;
		year: number;
		author: { name: string; otherBooks: Array<string> };
	};
	isSelected: boolean;
};
