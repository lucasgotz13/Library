const nombre = document.getElementById("test")
const author = document.getElementById("author")
const pages = document.getElementById("pages")
const read = document.getElementById("read")

const library = [new Book("The Hobbit", "J.R.R. Tolkien", 295, true)];
window.onload(updateLibrary());

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function updateLibrary() {
    const librarySection = document.querySelector(".library-section");
    librarySection.innerHTML = "";
    library.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>Pages: ${book.pages}</p>
        `;
        const readButton = document.createElement("button");
        book.read ? readButton.innerText = "Read" : readButton.innerText = "Not Read";
        readButton.classList.add("read-button");
        readButton.addEventListener("click", () => {  
            book.read = !book.read 
            updateLibrary();
        });
        bookDiv.appendChild(readButton);
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => {
            library.splice(library.indexOf(book), 1);
            updateLibrary();
        });
        bookDiv.appendChild(deleteButton); 
        librarySection.appendChild(bookDiv);
        
    });
}

function addBookToLibrary() {
    const book = new Book(nombre.value, author.value, pages.value, read.checked);
    library.push(book);
    updateLibrary()
}





