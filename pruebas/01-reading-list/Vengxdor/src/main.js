async function getData() {
    try {
    //get data from json
        const res = await fetch('/books.json')
        const data = await res.json()
        const library = data.library
        const ul = document.getElementById('library')
        const avaiableBooks = document.getElementById('avaiableBooks')
        
        let totalBooks = []

        
        //put the data in the list
        library.map((each) => {
            const li = document.createElement('li')
            ul.appendChild(li)
            li.className = 'bg-white shadow rounded-lg '

            totalBooks.push(each)
            avaiableBooks.innerHTML = totalBooks.length


            li.innerHTML = `
          <div class="p-4 flex flex-col justify-between h-full w-full div">

                <picture class="h-full w-full group relative">
                  <img class="h-full w-full object-fill " src="${each.book.cover}">
                  <div class="text-white bg-black bg-opacity-60  invisible 
                    group-hover:visible flex justify-center items-center flex-col absolute w-full h-full z-10 top-0">
                    <h2 class="mb-2 text-3xl font-semibold">Synopsis</h2>
                    <p class="text-center w-4/5 text-zinc-200">${each.book.synopsis}</p>
                  </div>
              </picture>
              <article class="max-h-24">
                <h3 class="text-xl font-semibold mt-3 truncate">${each.book.title}</h3>
                <p class="text-gray-600 text-sm ">Author: <span class="text-primary">${each.book.author.name}</span></p>
                <p class="text-gray-600 text-sm ">Genre: <span class="text-primary">${each.book.genre}</span></p>
              </article>
            <div class="flex justify-end gap-2 mt-2">
              <a href="/src/404.html" class="w-20 h-8 flex justify-center items-center bg-primary rounded-md text-white">Read</a>
              <button class="w-20 h-8 bg-primary rounded-md text-white addBtn">Add to list</button>
            </div>
           

          </div>
        `

            const typeOfbooks = document.getElementById('typeOfbooks')

            typeOfbooks.addEventListener('change', () => {
                const genre = typeOfbooks.value
                avaiableBooks.innerHTML = totalBooks.length
                
                if ( each.book.genre !== genre) {
                    li.classList.add('hidden')
                }

                if(each.book.genre === genre){
                    li.classList.remove('hidden')
                }
                  
                if(genre === 'ALL'){
                    li.classList.remove('hidden')
                }

            })
        })

        //filter the books by genre

        

        //add to read list
        const readList = document.getElementById('readList')
        const addBtn = document.querySelectorAll('.addBtn')
        const booksInread = document.querySelector('#booksInread')
        const booksToRead = []

        addBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.textContent = 'Added!'
                btn.disabled = true
                const parent = btn.parentNode.parentNode.parentNode
                booksInread.textContent = booksToRead.length + 1
                const clone = parent.cloneNode(true)
                clone.classList.add('clone')
                

                booksToRead.push(clone)
                readList.append(clone)
            })
        })
    } catch (error) {
        console.error(`valiste, ya tienes otro error🤦${error}`)
    }
}

getData()

// toggle list
const toggleList = document.querySelectorAll('.toggleList')
const ReadList = document.getElementById('readbooks')

toggleList.forEach((btn) => {
    btn.addEventListener('click', () => {
        ReadList.classList.toggle('top-0')
    })
})
