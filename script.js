const nombre = document.getElementById("test")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const read = document.getElementById("read")
const hero = document.querySelector(".hero-section")

const library = [];

class Book {
    constructor(nombre, author, pages, read) {
        this.nombre = nombre
        this.author = author
        this.pages = pages
        this.read = read
    }
}


function testFunction() {
    hero.innerHTML = ""
    nombreValue = nombre.value
    authorValue = author.value
    pagesValue = pages.value
    readValue = read.value
    newBook = new Book(nombreValue, authorValue, pagesValue, readValue) 
    library.push(newBook)
    console.log(library)
    library.forEach(book => {
        let titleElm = document.createElement("h2")
        titleElm.innerText = book.nombre
        titleElm.setAttribute(`data-index`, `${library.indexOf(book)}`)
        hero.appendChild(titleElm)
        let authorElm = document.createElement("h4")
        authorElm.innerText = book.author
        authorElm.setAttribute(`data-index`, `${library.indexOf(book)}`)
        hero.appendChild(authorElm)
        let pagesElm = document.createElement("p")
        pagesElm.innerText = `Number of pages: ${book.pages} ` 
        pagesElm.setAttribute(`data-index`, `${library.indexOf(book)}`)
        hero.appendChild(pagesElm)
        let readElm = document.createElement("button") 
        readElm.setAttribute(`data-index`, `${library.indexOf(book)}`)
        readElm.innerText = `${book.read}` 
        readElm.onclick = function() {
            let index = this.getAttribute("data-index")
            library[index].read = "Read"
            this.innerText = "Read"
        }
        hero.appendChild(readElm)
        let deleteButton = document.createElement("button")
        deleteButton.innerText = "delete"
        deleteButton.classList.add("delete-button")
        deleteButton.setAttribute(`data-index`, `${library.indexOf(book)}`)
        deleteButton.onclick = function() {
            let element = deleteButton.dataset.index
            library.splice(element,1)
            deleteButton.remove()
            titleElm.remove()
            authorElm.remove()
            pagesElm.remove()
            readElm.remove()
        }
        hero.appendChild(deleteButton)
    })
    nombre.value = ""
    author.value = ""
    pages.value = ""
    read.value = ""
}
// get read value

