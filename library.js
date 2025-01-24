import books from "./books";
const books_json = JSON.parse(books);
const myLibrary = [];
const library_container = document.getElementById('library');




function Book(title, author, page_count, read) {
    this.title = title;
    this.author = author;
    this.page_count = page_count;
    this.read = read;
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.page_count} pages, ${read == true ? 'have read' : 'not read yet'}`);
    };
}


function addBookToLibrary(new_title, new_author, new_pg_count, read_before) {
    const new_book = new Book(new_title, new_author, new_pg_count, read_before);
    console.log(new_book.title);
    myLibrary.push(new_book);
}

function displayLibrary(library) {
    library.forEach((book) => {
        const book_card = document.createElement("div");
        book_card.classList.add("book-card"); 
        book_card.innerHTML = `
            <h2>${book.title}</h2>
            <h3>By ${book.author}</h3>
            <p>Page Count: ${book.pages}</p>
            <p>${read == true ? 'I have read this book before.' : 'I have never read this book before'}</p>
        `;
        library_container.appendChild(book_card);
    });
    


}
books_json.forEach((book) => {
    addBookToLibrary(book.title, book.author, book.pages, book.read);
});
displayLibrary(myLibrary);