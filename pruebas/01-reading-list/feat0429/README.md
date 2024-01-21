This web application was developed to solve the code test provided by Spanish Twitch streamer Midudev. The test code consists of making a reading list application and is based on a real code test for junior developers.

To get more details about the guidelines, the link is provided: https://github.com/midudev/pruebas-tecnicas/tree/main/pruebas/01-reading-list

<br>
##💻Run the following scripts to run the appplication:

  1-cd ./reading-list
  
  2-npm install (only if it has not been done before)
  
  3-npm run dev
  
  4-Open the link displayed on the terminal (http://localhost:5173/). The port can change so it can be different from 5173. 

<br>
##⚙ Run the following scripts to test the appplication:

  1-cd ./reading-list
  
  2-npm install (only if it has not been done before)
  
  3-npm run test

<br>
##📝 The application requirements are the following:

✔ The application shows a list of available books that the user can check.

✔ The user is able to create a reading list from the available books. It should be clear when a book has been added to the reading list and when it is not. It should be possible to move a book from the reading list to the list of available books.

✔ Users should be able to filter the list of available books by genre. Besides, there should be a counter to display the number of available books, books in the reading list and the available books of the selected genre. 

✔ There should be a synchronization of the global state to display the number of books in the reading list and the available books that are still available. If a book is moved from the available books list to the reading list, both counters should be updated respectively.

✔ Reading list data should be persisted in the browser's localStorage. After reloading the page, the reading list shoud persist.


✔ Reading list data should be persisted in the browser's localStorage. After reloading the page, the reading list should persist.

✔ If the user opens the application in two different browser tabs, the changes made in one tab should be reflected in the other one as well.

<br>
##✨ Additional Features

✔Available books search by title, author or ISBN

✔Filter book by pages

✔Pagination

