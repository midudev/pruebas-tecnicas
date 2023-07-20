export const getAllGenres = (books = []) => {

    const genresSet = new Set();
    const genres = [];

    books.forEach(({book}) => {

        const { genre } = book;
        genresSet.add(genre);

    });

    for(const genre of genresSet) {

        genres.push(genre);

    }

    return genres;

}