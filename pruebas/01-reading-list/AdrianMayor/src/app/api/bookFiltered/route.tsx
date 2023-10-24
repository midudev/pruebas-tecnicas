import { Book, BookResponse } from "@/models/book.model";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(request: Request) {
	//Since we are working with local data but would like to mock how would work with real endpoint, this block of code is the same as in /api/books
	const jsonDirectory = path.join(process.cwd(), "json");
	const jsonData = await fs.readFile(jsonDirectory + "/data.json", "utf8");
	const { library }: BookResponse = JSON.parse(jsonData);
	let books: Book[] = library.map((item) => item.book);
	books.forEach((item) => (item.availability = true));

	// Extract query params
	const { searchParams } = new URL(request.url);
	const title = searchParams.get("title");
	const author = searchParams.get("author");
	const pages = searchParams.get("pages");
	const genre = searchParams.get("genre");

	const maxPages = pages ? parseInt(pages) : 0;
	const MIN_PAGES = 0;

	// Filter logic
	const filteredBooks = books.filter((book) => {
		const titleMatch = title ? book.title.toLowerCase().includes(title.toLowerCase()) : true;

		const authorMatch = author ? book.author.name.toLowerCase().includes(author.toLowerCase()) : true;

		const genreMatch = genre !== "All" && genre ? book.genre.toLowerCase().includes(genre.toLowerCase()) : true;

		const pagesMatch = book.pages >= MIN_PAGES && book.pages <= maxPages;

		return titleMatch && authorMatch && genreMatch && pagesMatch;
	});

	//Return the content filtered in json format
	return NextResponse.json(filteredBooks);
}
