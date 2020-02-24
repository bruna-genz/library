function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status == "yes" ? "already read" : "not read yet"
    this.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`
} 

myBook = new Book('Harry Potter', 'J.K. Rowling', 320, "yes")
console.log(myBook.info())