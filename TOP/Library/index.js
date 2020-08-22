//import {createCard} from './JS/card.js';

const BOOK_BTN = document.getElementById('BOOK_BTN');
let newTitle = document.querySelector('.new-title').value
let newAuthor = document.querySelector('.new-author').value
let newCover = document.querySelector('.new-cover').value

let library = []

function Book(title,author,cover){
    this.title = title,
    this.author = author,
    this.cover = cover
}

function checkLocalStorage(){
    if (localStorage.length == 0){

        let HPBook = new Book ("Harry Potter and the Philosopher's Stone", 'J.K. Rowling', 'https://images-na.ssl-images-amazon.com/images/I/51mtZy7oJVL.jpg')
        let JVBook = new Book ("Twenty Thousand Leagues Under the Sea", 'Jules Verne', 'https://upload.wikimedia.org/wikipedia/commons/1/10/Houghton_FC8_V5946_869ve_-_Verne%2C_frontispiece.jpg')
        library.push(HPBook)
        library.push(JVBook)

        localStorage.setItem("library", JSON.stringify(library));
        return;

    }else{

        library = JSON.parse(localStorage.getItem('library'));

        library.forEach(e =>{
            createCard (e)
        })
    }
}
checkLocalStorage()



function addNewBook() {
    

    let newBook = new Book (newTitle, newAuthor, newCover)
    library.push(newBook)

    return newBook; 
}

function createCard (book){
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let button = document.createElement('button');
    let button2 = document.createElement('button');

    let column = document.querySelector('.card-columns')
    let cardDiv = column.appendChild(div)
    cardDiv.classList.add('card')
    
    if (!book.cover == ""){
        let img = document.createElement('img');
        let imgCover = cardDiv.appendChild(img)
        imgCover.src = book.cover
        imgCover.classList.add('card-img-top')
        imgCover.alt = book.title
    }

    let cardBody = cardDiv.appendChild(div2)
    cardBody.classList.add('card-body')

    let cardTitle = cardBody.appendChild(p)
    let cardAuthor = cardBody.appendChild(p2)
    let readBtn = cardBody.appendChild(button)
    let deleteBtn = cardBody.appendChild(button2)

    cardTitle.classList.add('card-title', 'font-weight-bold')
    cardTitle.innerText = book.title

    cardAuthor.classList.add('card-text')
    cardAuthor.innerText = book.author
        
    readBtn.classList.add('read-btn', 'btn', 'btn-sm')
    readBtn.type = 'button'
    
    let readCheckbox = document.getElementById('READ-CHECK')
    if (readCheckbox.checked !== true){
        readBtn.innerText = 'Not Read'
        readBtn.classList.add('btn-danger')
    }
    if(readCheckbox.checked === true){
        readBtn.innerText = 'Read'
        readBtn.classList.add('btn-success')
    }
    changeReadBtn(readBtn,book)
    

    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right','delete-btn')
    deleteBtn.type = 'button'
    deleteBtn.innerText = 'Delete'
    deleteBook(deleteBtn)

    return cardDiv;
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
        library = JSON.parse(localStorage.getItem("library"));
        for (var i =0; i< items.length; i++) {
            var items = JSON.parse(items[i]);
            if (items.itemId == 3) {
                items.splice(i, 1);
            }
        }
    })

}

function addBookToLibrary(){
    let newBook = addNewBook()
    createCard(newBook)
    localStorage.setItem("library", JSON.stringify(library));
}

BOOK_BTN.addEventListener("click", addBookToLibrary)

//export {changeReadBtn, deleteBook}

