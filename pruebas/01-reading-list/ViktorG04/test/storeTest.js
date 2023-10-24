import configureMockStore from "redux-mock-store";

//configure store
const mockStore = configureMockStore([]);

const store = mockStore({
  theme: { theme: true },
  books: {
    favoriteBooks: [
      {
        title: "El resplandor",
        pages: 688,
        genre: "Terror",
        cover:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641398308i/60038757.jpg",
        synopsis:
          "Una familia se muda a un hotel aislado para el invierno donde una presencia siniestra influye en el padre hacia la violencia.",
        year: 1977,
        ISBN: "978-0307743657",
        author: { name: "Stephen King", otherBooks: ["Carrie", "It"] },
      },
    ],
    inLibrary: 13,
    available: 12,
    inList: 1,
  },
});

export default store;
