import { z } from "@builder.io/qwik-city";

/*
 * https://app.quicktype.io/
 */

export const AuthorSchema = z.object({
  "name": z.string(),
  "otherBooks": z.array(z.string()),
});
export type Author = z.infer<typeof AuthorSchema>;

export const BookSchema = z.object({
  "title": z.string(),
  "pages": z.number(),
  "genre": z.string(),
  "cover": z.string().url(),
  "synopsis": z.string(),
  "year": z.number(),
  "ISBN": z.string(),
  "author": AuthorSchema,
});
export type Book = z.infer<typeof BookSchema>;

export const LibrarySchema = z.array(z.object({
  "book": BookSchema,
}));
export type Library = z.infer<typeof LibrarySchema>;

export const AppDataSchema = z.object({
  "library": LibrarySchema,
});
export type AppData = z.infer<typeof AppDataSchema>;