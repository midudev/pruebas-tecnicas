export interface Library {
	library: LibraryElement[];
}

export interface LibraryElement {
	book: Book;
}

export interface Book {
	title: string;
	pages: number;
	genre: string;
	cover: string;
	synopsis: string;
	year: number;
	ISBN: string;
	author: Author;
}

export interface Author {
	name: string;
	otherBooks: string[];
}

export interface Detail {
	title: string;
}

export interface CustomEvent {
	isTrusted: boolean;
	detail: Detail;
	type: string;
	target: null;
	currentTarget: null;
	eventPhase: number;
	bubbles: boolean;
	cancelable: boolean;
	defaultPrevented: boolean;
	composed: boolean;
	timeStamp: number;
	srcElement: null;
	returnValue: boolean;
	cancelBubble: boolean;
	NONE: number;
	CAPTURING_PHASE: number;
	AT_TARGET: number;
	BUBBLING_PHASE: number;
}
