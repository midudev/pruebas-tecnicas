# Book-Lovers

It is a simple Next.js 13 application with TypeScript created to solve [the technical test #1](https://github.com/midudev/pruebas-tecnicas) of the page [https://pruebastecnicas.com/](https://pruebastecnicas.com/)

Note:
- The environment variable used is in the .env.example file, and you only need to rename the file to .env.local

- In a more serious project, this variable should not be in the repository.

## Deploy

[Book-Lovers](https://book-lovers.vercel.app/)

## Steps to run the app locally and more.

1- Cloning the repository: ```git clone ...```

2- Install dependencies: ```yarn install```

3- Run the development server: ```yarn dev``` and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4- Static tests with ESlint: ```yarn lint``` and ESlint fix: ```yarn lint:fix``` for the rules with automatic fixing.

5- Run all tests and generate coverage: ```yarn test:ci```

6- Build the application: ```yarn build``` and run it locally with: ```yarn start```, then you can open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Future tasks.

[ ] Using Tailwind instead of CSS.

[ ] Test the entire application.

[x] Allow reorganization of books in the reading list by priority.

[x] Create a page to view book details.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Licencia :unlock:

Copyright © 2023 [Christian Boffill](https://github.com/ChristBM)

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed
