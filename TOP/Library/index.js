const BOOK_BTN = document.getElementById('bookBtn')



function Book(title,author,cover){
    this.title = title
    this.author = author
    this.cover = cover
    
}

function createCard (){
    const div = document.createElement('div');

}


function addBookToLibrary() {
    let newTitle = document.querySelector('.new-title')
    let newAuthor = document.querySelector('.new-author')
    let newCover = document.querySelector('.new-cover')
  }


let library = [
        {
            title: "Harry Potter and the Philosopher's Stone",
            author: "J.K. Rowling",
            cover: "https://images-na.ssl-images-amazon.com/images/I/51mtZy7oJVL.jpg",
            read: true,
        },
        {
            title: "Twenty Thousand Leagues Under the Sea",
            author: "Jules Verne",
            cover: "https://upload.wikimedia.org/wikipedia/commons/1/10/Houghton_FC8_V5946_869ve_-_Verne%2C_frontispiece.jpg",
            read: false,
        }
    ];
