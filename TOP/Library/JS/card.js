import {changeReadBtn, deleteBook} from '../index.js';


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

export {createCard};

