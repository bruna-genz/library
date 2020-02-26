const myLibrary = (JSON.parse(localStorage.getItem('savedLibrary')) == null) ? [] : JSON.parse(localStorage.getItem('savedLibrary'));
const list = document.getElementById('book-list');

function displayForm() {
  const form = document.getElementById('book-form');
  form.classList.toggle('hidden');
}

document.querySelector('.display-form').addEventListener('click', () => {
  displayForm();
});

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status === 'on' ? 'Already read' : 'Not read yet';
  this.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
}

const booksContainer = document.getElementById('book-list');
function createCard(myLibrary) {
  booksContainer.innerHTML = '';
  myLibrary.forEach((book) => {
    const index = myLibrary.indexOf(book);
    const li = document.createElement('li');
    const bookText = `<div class="card">
                        <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="https://images.unsplash.com/photo-1517770413964-df8ca61194a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Placeholder image">
                        </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="assets/book.svg" alt="Placeholder image">
                                </figure>
                                </div>
                                <div class="media-content">
                                <p class="title is-4">${book.title}</p>
                                <p class="subtitle is-6">${book.author}</p>
                                </div>
                            </div>

                            <div class="content">
                                Number of pages: ${book.pages}</br>
                            </div>

                            <button class="button is-success status-btn" data-index="${index}" onClick ="changeStatus(this)">${book.status}</button>
                            <button class="button is-danger delete-book" data-index="${index}" onClick ="deleteBook(this)">Delete</button>
                        </div>
                        </div>`;
    li.insertAdjacentHTML('beforeend', bookText);
    list.appendChild(li);
  });
}

function clearInputs() {
  document.querySelector('[name="bookTitle"]').value = '';
  document.querySelector('[name="bookAuthor"]').value = '';
  document.querySelector('[name="bookPages"]').value = '';
  document.querySelector('[name="bookStatus"]').value = '';
}

function saveInfo() {
  localStorage.setItem('savedLibrary', JSON.stringify(myLibrary));
}

function addBookToLibrary() {
  const title = document.querySelector('[name="bookTitle"]').value;
  const author = document.querySelector('[name="bookAuthor"]').value;
  const pages = document.querySelector('[name="bookPages"]').value;
  const status = document.querySelector('[name="bookStatus"]').value;
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
  createCard(myLibrary);
  clearInputs();
  saveInfo();
}

const btn = document.getElementById('submit-button');
btn.addEventListener('click', () => {
  displayForm();
  addBookToLibrary();
});

function changeStatus(atr) {
  const book = myLibrary[atr.dataset.index];
  if (book.status === 'Already read') {
    book.status = 'Not read yet';
    atr.style.backgroundColor = 'red';
  } else {
    book.status = 'Already read';
    atr.style.backgroundColor = '#3EC46D';
  }
  atr.innerHTML = book.status;
}

function deleteBook(atr) {
  const { index } = atr.dataset;
  myLibrary.splice(index, 1);
  createCard(myLibrary);
}

createCard(myLibrary);
