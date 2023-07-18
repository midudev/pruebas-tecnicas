# Reading List App 📚

Reading List app for pruebastecnicas.com by Midudev. This is my first time developing an application using the following stack. I was learning the next stack while working on this project.

## Tech Stack 🕺

- Vite
- Vitest
- React
- Tailwind
- Zustand
- Wouter

## Installation - Scripts 💻

Install the project with npm

```bash
  npm install reading-list-app
  cd reading-list-app
```

The following scripts are available in the project:

- **dev**: Runs the development server using Vite.

```bash
 npm run dev
```

- **build**: Builds the production-ready bundle of the application.

```bash
 npm run build
```

- **test**: Runs the test suite using the vitest testing framework.

```bash
 npm run test
```

## Folder Structure 📂

The project follows the following folder structure:

- **/src**: Contains the source code files for the application.

  - **/assets**: Includes any assets used in the application, such as images or JSON files.
  - **/components**: Contains reusable React components used throughout the app.
  - **/helpers**: Includes helper functions used in the application.
  - **/pages**: Contains the individual page components of the application.
  - **/state**: Includes the state management files for the application.

- **App.jsx**: The main entry point component for the application.

- **index.css**: The CSS file that provides global styles for the application.

- **main.jsx**: The main entry point for the React application.

## Tests 🧪

This is my first time writing tests, so I'm not sure if they are the best tests. 😭
The project includes a set of tests for the `bookStore` states managements module to ensure its functionality. These tests are written using the `vitest` testing framework.

### Test Descriptions

- **should add book to the reading list**: This test verifies that a book can be successfully added to the reading list. It initializes the `readingList` with some initial books, adds a new book using the `addBook` method, and checks if the updated reading list contains the new book along with the initial books.

- **should remove a book from the reading list**: This test validates the ability to remove a book from the reading list. It sets up an initial `readingList` with multiple books, selects a book to remove, uses the `removeBook` method to remove it, and verifies that the book is no longer present in the updated reading list.

- **should set the selected genre**: This test ensures that the selected genre can be correctly set using the `setSelectedGenre` method. It sets the selected genre to "Fiction" and checks if the `selectedGenre` state matches the expected value.

### Running the Tests

To run the tests, you can execute the following command:

```shell
npm run test

```
