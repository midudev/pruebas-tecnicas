export interface Book {
      cover: string;
      title: string;
      synopsis: string;
      author: {
            name: string;
            otherBooks: string[];
      };
      year: string;
      genre: string;
      pages: number;
}