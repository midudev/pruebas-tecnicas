async function getData() {
  try {
    //get data from json
    const res = await fetch("/books.json")
    const data = await res.json()
    const library = data.library
    const ul = document.getElementById("library")

    //put the data in the list
    library.map((each) => {
      const li = document.createElement("li")
      ul.appendChild(li)
      li.classList.add("w-64")

      li.innerHTML = `
   <div  class="relative group block w-[15.9rem] mb-16  h-96">
          <img
          class=" w-full h-full  object-cover "
          src="${each.book.cover}"
          alt="${each.book.title}"
          />
          <div class="hover-bg bg-gray-950 absolute top-0 h-full w-full bg-opacity-0 invisible z-30 group-hover:bg-opacity-40 group-hover:visible text-white flex justify-center items-center flex-col gap-4 text-center">

          <a href="/404" class=" w-28 h-6 rounded-md bg-primary  ">Read</a>
          <button  class="w-28 h-6 rounded-md bg-primary addBtn">Add to List</button>
          <button  class="w-28 h-6 rounded-md bg-primary  infoBtn">Information</button>
          <button  class="w-28 h-6 rounded-md bg-primary hidden  removeBtn">Remove</button>
          <article class="bg-black absolute  h-full w-full invisible info flex flex-col items-start overflow-hidden">

             <div class="w-full flex justify-end p-4">
                <i class="fa-solid fa-x cursor-pointer closeIcon "></i>
             </div>
                <h3 class="m-auto text-3xl font-semibold mb-7">${each.book.title}</h3>
                
                <h4 class="ml-2 font-semibold text-lg mb-3">Synopsis</h4>
                <p class="text-gray-200 text-start ml-5">${each.book.synopsis}</p>
                
             <div class="flex  flex-1 justify-end items-start flex-col  mb-1 ml-2">
                <h4>Genre: <span class="text-primary font-semibold text-start">${each.book.genre}</span></h4>
                <h4>Year: <span class="text-primary font-semibold text-start">${each.book.year}</span></h4>
                <h4>author: <span class="text-primary font-semibold">${each.book.author.name}</</span></h4>
             </div>
          </article>
       </div>
       <h3 class="text-center font-semibold  mt-4 text-xl mb-5 group-hover:text-primary">${each.book.title}</h3>
       </div>
     `
    })

    const infoBtn = document.querySelectorAll(".infoBtn")
    const info = document.querySelectorAll(".info")
    const closeIcon = document.querySelectorAll(".closeIcon")

    //toggle the information
    infoBtn.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        info[index].style.visibility = "visible"
      })
    })

    closeIcon.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        info[index].style.visibility = "hidden"
      })
    })

    //add to read list
    const ReadList = document.querySelector(".ReadList")
    const addBtn = document.querySelectorAll(".addBtn")
    const booksInread = document.querySelector("#booksInread")
    const booksToRead = []

    booksInread.textContent = booksToRead.length

    addBtn.forEach((btn) => {
      btn.addEventListener("click", () => {

         btn.style.display = 'none'
        const parent = btn.parentNode.parentNode.parentNode

        console.log(parent);

        const clone = parent.cloneNode(true)
        clone.className = "clone"

        booksToRead.push(clone)
        ReadList.append(clone)
      })
    })

  } catch (error) {
    console.error(`valiste, ya tienes otro error🤦${error}`)
  }
}

getData()


// toggle list
const bookIcon = document.getElementById("bookIcon")
const ReadList = document.getElementById("readbooks")

bookIcon.addEventListener("click", () => {
  ReadList.classList.toggle("right-0")
  ReadList.classList.toggle("-right-56")
})
