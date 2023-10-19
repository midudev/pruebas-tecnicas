# Technical test: Reading list

This project is a simple reading list app. This project:

- was created with Angular 16
- uses the last features of Angular, like standalone components and signals.
- uses TailwindCSS for styling, and DaisyUI for components
- uses Jest for unit testing

Features:

- Add a book to the reading list
- Remove a book from the reading list
- Filter the book list by genre
- Filter the book list by max number of pages
- Search for a book by title
- Show the total number of available books in the book list
- Show the total number of books in the reading list
- There is persistence of data (local storage) when refreshing the page
- There is synchronization between tabs (local storage) when adding/removing books from the reading list
- Show a book detail page when clicking on a book in the book list

## Installation

Run `pnpm install` to install the dependencies. If you don't have `pnpm` installed, you can use `npm` or `yarn` instead.

## Development server

Run `pnpm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

You can un `pnpm run test` and `pnpm run test:watch` to execute the unit tests [Jest](https://jestjs.io/).

## Build

Run `pnpm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Link to deployed version

https://my-reading-list-app.netlify.app/
