import Dexie from "dexie";

export const db = new Dexie("myReadings");
db.version(1).stores({
  watchlist: "&ISBN, title, author, cover, pages, genre",
});
