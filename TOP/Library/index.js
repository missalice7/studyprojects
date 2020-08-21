const BOOK_BTN = document.getElementById('BOOK_BTN');
const LIBRARY_DIV = document.querySelector('.library');
let lastCardDeck = LIBRARY_DIV.lastElementChild;

let library = [];

function Book(title,author,cover){
    this.title = title,
    this.author = author,
    this.cover = cover
}

function addNewBook() {
    let newTitle = document.querySelector('.new-title').value
    let newAuthor = document.querySelector('.new-author').value
    let newCover = document.querySelector('.new-cover').value

    let newBook = new Book (newTitle, newAuthor, newCover)
    library.push(newBook)

    return newBook;    
}

function createCard (newbook){
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    let img = document.createElement('img');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let button = document.createElement('button');
    let button2 = document.createElement('button');

    let cardDiv = lastCardDeck.appendChild(div)
    cardDiv.classList.add('card')

    let imgCover = cardDiv.appendChild(img)
    imgCover.src = newbook.cover
    imgCover.classList.add('card-img-top')
    imgCover.alt = "cover"

    let cardBody = cardDiv.appendChild(div2)
    cardBody.classList.add('card-body')

    let cardTitle = cardBody.appendChild(p)
    let cardAuthor = ardBody.appendChild(p2)
    let readBtn = cardBody.appendChild(button)
    let deleteBtn = cardBody.appendChild(button2)

    cardTitle.classList.add('card-title', 'font-weight-bold')
    cardTitle.innerText = newbook.title

    cardAuthor.classList.add('card-text')
    cardAuthor.innerText = newbook.author

    readBtn.classList.add('btn', 'btn-danger', 'btn-sm')
    readBtn.type = 'button'
    readBtn.innerText = 'Not Read'

    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right')
    deleteBtn.type = 'button'
    deleteBtn.innerText = 'Delete'

    return cardDiv;

}

function addBookToLibrary(){
    addNewBook()
    createCard(newBook)
}

BOOK_BTN.addEventListener("click", addBookToLibrary)