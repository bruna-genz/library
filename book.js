let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status == "yes" ? "already read" : "not read yet"
    this.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`
}

function addBookToLibrary(book) {
    myLibrary.push(book)
  }

myBook = new Book('Harry Potter', 'J.K. Rowling', 320, "yes")
addBookToLibrary(myBook)
console.log(myBook.info(), myLibrary)

const element = <h1>Hello, world</h1>;
render(element, document.getElementById('root'));
