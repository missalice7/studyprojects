import {createCard} from './JS/card.js';

let library = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: 'J.K. Rowling',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51mtZy7oJVL.jpg'
    },
    {
        title: "Twenty Thousand Leagues Under the Sea",
        author: 'Jules Verne',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Houghton_FC8_V5946_869ve_-_Verne%2C_frontispiece.jpg'
    }
]

const BOOK_BTN = document.getElementById('BOOK_BTN');



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



function changeReadBtn(button){

    button.addEventListener('click', () =>{
        if (button.innerText == 'Not Read') {
            button.innerText = "Read"
            button.classList.remove('btn-danger')
            button.classList.add('btn-success')
            return;

        }else{
            button.innerText = "Not Read"
            button.classList.remove('btn-success')
            button.classList.add('btn-danger')
            return;
        }
    })
}

function deleteBook(button){

    button.addEventListener('click', ()=>{
        button.parentNode.parentNode.remove()
    })

}

function addBookToLibrary(){
    let newBook = addNewBook()
    createCard(newBook)
}

BOOK_BTN.addEventListener("click", addBookToLibrary)

export {changeReadBtn, deleteBook}

