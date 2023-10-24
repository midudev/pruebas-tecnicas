import { z } from "zod";

export const booksSchema = z.object({
  library: z.array(
    z.object({
      book: z.object({
        title: z.string(),
        pages: z.number(),
        genre: z.string(),
        cover: z.string(),
        synopsis: z.string(),
        year: z.number(),
        stars: z.number().default(0),
        ISBN: z.string(),
        author: z.object({
          name: z.string(),
          otherBooks: z.array(z.string()).default([]),
        }),
      }),
    })
  ),
});

export type IBooksList = z.infer<typeof booksSchema>["library"];

export type IBook = IBooksList[number]["book"];
