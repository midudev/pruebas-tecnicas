import fs from 'fs/promises';

export async function getAllBooks() {
    const fileContentBooks = await fs.readFile('books.json', { encoding: 'utf-8' });
    const data = JSON.parse(fileContentBooks);
    const storedBooks = data.library ?? [];
    return storedBooks;
}


