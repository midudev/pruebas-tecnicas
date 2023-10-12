async function getData() {
  try {
    //get data from json
    const res = await fetch("/books.json"),
      data = await res.json(),
      library = data.library

    const ul = document.getElementById("library"),
      avaiableBooks = document.getElementById("avaiableBooks"),
      readList = document.getElementById("readList"),
      booksInReadList = document.querySelector("#booksInread")


    const BookList = readList.children

    let booktitle,
      totalBooks = []

    library.map((each) => {
      //put the data in the list
      const li = document.createElement("li")
      ul.appendChild(li)
      li.className = "bg-white shadow rounded-lg "

      booktitle = each.book.title

      li.innerHTML = `
                <div class="p-4 flex flex-col justify-between h-full w-full div">

                        <picture class="h-full w-full group relative">
                        <img  class="h-full w-full object-fill" src="${each.book.cover}">
                        <div class="synopsis text-white bg-black bg-opacity-60  invisible 
                            group-hover:visible flex justify-center items-center flex-col absolute w-full h-full z-10 top-0">
                            <h2 class="mb-2 text-3xl font-semibold">Synopsis</h2>
                            <p class="text-center w-4/5 text-zinc-200">${each.book.synopsis}</p>
                        </div>
                    </picture>
                    <article class="max-h-24">
                        <h3 class="text-xl font-semibold mt-3 truncate">${booktitle}</h3>
                        <p class="text-gray-600 text-sm ">Author: <span class="text-primary">${each.book.author.name}</span></p>
                        <p class="text-gray-600 text-sm ">Genre: <span class="text-primary">${each.book.genre}</span></p>
                    </article>
                    <div class="flex justify-end gap-2 mt-2">
                        <a href="/src/404.html" class="w-20 h-8 flex justify-center items-center bg-primary rounded-md text-white">Read</a>
                        <button class="w-20 h-8 bg-primary rounded-md text-white addBtn">Read List</button>
                        <button class="w-20 h-8 bg-primary rounded-md text-white hidden removeBtn ">Remove</button>
                    </div>
                
                </div>
                `

      //numbers of books avaiable
      totalBooks.push(li)

      //filter the books by genre
      const filter = () => {
        const typeOfbooks = document.getElementById("typeOfbooks")
        typeOfbooks.addEventListener("change", () => {
          const genre = typeOfbooks.value

          // Use the filter method to update the totalBooks array based on the selected genre
          totalBooks = library.filter(
            (each) => genre === "ALL" || each.book.genre === genre
          )

          // Loop through all list elements (li) and set their visibility based on the filter
          library.forEach((each, index) => {
            const li = totalBooks.includes(each) ? ul.children[index] : null
            if (li) {
              li.classList.remove("hidden")
            } else {
              ul.children[index].classList.add("hidden")
            }
          })

          // Update the count of available books
          avaiableBooks.innerHTML = totalBooks.length
        })
      }

      filter()
    })
    avaiableBooks.innerHTML = totalBooks.length

    //add the book to the read list
    const AddReadList = () => {
      const addBtns = document.querySelectorAll(".addBtn")

      addBtns.forEach((btn) => {
        //Create a clone and pushed to the reading list
        btn.addEventListener("click", () => {
          const parent = btn.parentNode.parentNode.parentNode,
            clone = parent.cloneNode(true),
            cloneTittle = clone.querySelector(".truncate")

          btn.disabled = true
          btn.textContent = "Added!"

          //storage

          clone.classList.add("clone")


          const removeBtn = clone.querySelector(".removeBtn")
          removeBtn.addEventListener("click", () => {
            readList.removeChild(clone)
            booksInReadList.textContent = BookList.length
            btn.textContent = "Read List"
            btn.disabled = false
          })

          //Create a notification when a book is added to the read list
          const addedNotification = () => {
            const notification = document.querySelector(".notification")
            const div = document.createElement("div")

            div.className =
              "absolute -top-12 w-fit p-4 bg-[#333] text-white  flex items-center gap-3 rounded-xl"
            div.innerHTML = `
                                    <i class="fa-solid fa-check p-1 rounded-full bg-emerald-400 "></i>
                                    <h2 class="max-w-xs whitespace-nowrap">${cloneTittle.textContent} added </h2>
                                `

            notification.append(div)

            div.classList.replace("-top-12", "-top-0")
            div.className += " opacity-100 visible"

            setTimeout(() => {
              div.classList.replace("-top-0", "-top-12")
              div.className += " opacity-0 invisible"
            }, 1000)
          }
          addedNotification()

          booksInReadList.textContent = BookList.length
        })
      })
    }
    AddReadList()

    //remove the book from the read list
  } catch (error) {
    console.error(`valiste, ya tienes otro error🤦${error}`)
  }
}

getData()

// toggle list
const toggleList = document.querySelectorAll(".toggleList")
const ReadList = document.getElementById("readbooks")

toggleList.forEach((btn) => {
  btn.addEventListener("click", () => {
    ReadList.classList.toggle("top-0")
  })
})

localStorage.removeItem("allBooks")