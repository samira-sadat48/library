//DOM Elements
const form = document.getElementById("book-form");
const openFormTrigger = document.querySelector(".trigger");
const closeFormTrigger = document.querySelector(".close");
const formPopUp = document.querySelector(".form-popup");
const libraryContainer = document.querySelector(".library-container");
const deleteButtonList = document.getElementsByClassName("delete-btn");

//Library Book Objects
let myLibrary = [];
let newBook;

function Book(title, author, numOfPages, haveRead) {
    this.title = title,
    this.author = author,
    this.numOfPages = numOfPages,
    this.haveRead = haveRead
}

//Display library on page
const displayBook = function(book) {
    //create a div for book with a class inside library
    let bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");
    libraryContainer.appendChild(bookContainer);

    //Loop through and set up display book info
    for (const [key,value] of Object.entries(book)) {
        let p = document.createElement("p");
        
        switch(key){
            case "title":
                p.innerHTML = "Title: " + value;
                p.classList.add("title");
                break;
            case "author":
                p.innerHTML = "Author: " + value;
                p.classList.add("author");
                break;
            case "numOfPages":
                p.innerHTML = "Number of Pages: " + value;
                p.classList.add("pages");
                break;
            case "haveRead":
                p.innerHTML = "Have read already: " + value;
                p.classList.add("read");
                break;
            default:
        }
        bookContainer.append(p);
    }

    //create and add delete button
    let btn = document.createElement("button");
    btn.classList.add("delete-btn");
    btn.setAttribute("type","button");
    btn.innerText = "Delete";
    bookContainer.appendChild(btn);

    //Delete button pressed
    btn.addEventListener("click", () => {
        //Loop to find the book to delete
        myLibrary.map((value,index) => {
            let authorElement = bookContainer.childNodes[1].innerHTML.slice(8);
            if(myLibrary[index].author === authorElement) {
                myLibrary.splice(index,1)
                bookContainer.remove()
            }
        });
    })
}

//Form pop-up triggers
openFormTrigger.addEventListener("click", () => {formPopUp.classList.add("open")});
closeFormTrigger.addEventListener("click", () => formPopUp.classList.remove("open"));

window.addEventListener("click", (e) => {
    if(e.target === formPopUp) {
        formPopUp.classList.remove("open");
    }
})

//Submit button pressed
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formValues = event.target.elements;

    //create and save new book object using form fields
    newBook = new Book(
        formValues.title.value,
        formValues.author.value,
        formValues.pages.value,
        formValues.read.checked
    );

    //push to library list
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayBook(newBook);
    //reset form
    form.reset();
    //close the form
    formPopUp.classList.remove("open");
    return false;
});

//Display entire library after page refresh