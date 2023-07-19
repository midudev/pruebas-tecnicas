async function getData() {
    try {
    //get data from json
        const res = await fetch('/books.json')
        const data = await res.json()
        const library = data.library
        const ul = document.getElementById('library')
        const avaiableBooks = document.getElementById('avaiableBooks')
    

        let booktitle
        let totalBooks = []

        library.map((each) => {
            //put the data in the list
            const li = document.createElement('li')
            ul.appendChild(li)
            li.className = 'bg-white shadow rounded-lg '

            booktitle = each.book.title

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
                const typeOfbooks = document.getElementById('typeOfbooks')
                typeOfbooks.addEventListener('change', () => {
                    const genre = typeOfbooks.value
            
                    // Use the filter method to update the totalBooks array based on the selected genre
                    totalBooks = library.filter((each) => genre === 'ALL' || each.book.genre === genre)
            
                    // Loop through all list elements (li) and set their visibility based on the filter
                    library.forEach((each, index) => {
                        const li = totalBooks.includes(each) ? ul.children[index] : null
                        if (li) {
                            li.classList.remove('hidden')
                        } else {
                            ul.children[index].classList.add('hidden')
                        }
                    })
            
                    // Update the count of available books
                    avaiableBooks.innerHTML = totalBooks.length
                })
            }
            
            filter()
        })

        avaiableBooks.innerHTML = totalBooks.length

        // notification
        /* ================Problem ====================== */
        const addedNotification = () => {
            const notification = document.querySelector('.notification')
            const div = document.createElement('div')

            div.className =
        'absolute -top-12 w-fit p-4 bg-[#333] text-white  flex items-center gap-3 rounded-xl'
            div.innerHTML = `
                        <i class="fa-solid fa-check p-1 rounded-full bg-emerald-400 "></i>
                        <h2 class="max-w-xs whitespace-nowrap">${booktitle} added </h2>
                    `

            notification.append(div)

            div.classList.replace('-top-12', '-top-0')
            div.className += ' opacity-100 visible'

            setTimeout(() => {
                div.classList.replace('-top-0', '-top-12')
                div.className += ' opacity-0 invisible'
            }, 1000)
        }

        //add to read list
        const AddReadList = () => {
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

                    addedNotification()
                })
            })
        }
        AddReadList()
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
