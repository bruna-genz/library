let myLibrary = [];
const list = document.getElementById("book-list")

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

secondBook = new Book('babababa', 'Basna', 452, "no")
addBookToLibrary(secondBook)

myLibrary.forEach((book) => {
  const li = document.createElement('li')
  const bookText = `<div class="card">
                  <div class="card-image">
                  <figure class="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                  </figure>
                  </div>
                  <div class="card-content">
                      <div class="media">
                          <div class="media-left">
                          <figure class="image is-48x48">
                              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                          </figure>
                          </div>
                          <div class="media-content">
                          <p class="title is-4">${book.title}</p>
                          <p class="subtitle is-6">${book.author}</p>
                          </div>
                      </div>

                      <div class="content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                          <a href="#">#css</a> <a href="#">#responsive</a>
                          <br>
                          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                      </div>
                  </div>
                </div>`
  li.insertAdjacentHTML( 'beforeend', bookText );
  list.appendChild(li)
})


