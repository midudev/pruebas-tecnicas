# Deployment In Vercel

[Link to the website displayed in Vercel](https://javascript-publishers.vercel.app/)

## Installation

To install this project, simply clone the repository and install the dependencies using npm:

```
$ git clone https://github.com/10delin/book-list.git
$ cd book-list
$ npm install
```

## Interest

The application has an automated commitlint with Husky. Here is an example syntax for more details:

```
$ git commit -m "feat(app): explain commitlint in readme"
```

The syntax must be the same as the example, even with spaces. Only the content of "feat" , "app" scope and explication code should be changed.

## Usage

To run the development server, use the following command:

```
$ npm run dev
```

To build the production version of the project, use:

```
$ npm run build
```

To preview the production build, use:

```
$ npm run preview
```

To run cypress tests:

```
$ npm run cy:run
```

To open the cypress GUI:

```
$ npm run cy:open
```

In addition there are 2 commands to configure Husky's automation.

```
$ npm run prepare
```

```
$ npm run husky
```

## Pages

#### Home

The Home page shows all the books from book.json, these can be filtered and interacted with themselves.

## Dependencies

- "rc-slider": "^10.2.1",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "styled-components": "^6.0.5"

## Dev Dependencies

- "@commitlint/cli": "^17.6.7",
- "@commitlint/config-conventional": "^17.6.7",
- "@types/react": "^18.2.14",
- "@types/react-dom": "^18.2.6",
- "@vitejs/plugin-react": "^4.0.1",
- "cypress": "^12.17.2",
- "eslint": "^8.44.0",
- "eslint-plugin-cypress": "^2.13.3",
- "eslint-plugin-react": "^7.32.2",
- "eslint-plugin-react-hooks": "^4.6.0",
- "eslint-plugin-react-refresh": "^0.4.1",
- "husky": "^8.0.3",
- "i18next": "^23.2.11",
- "react-i18next": "^13.0.2",
- "vite": "^4.4.0"
  }

## Credits

This project was created by Antonio Delage Cruzado.
