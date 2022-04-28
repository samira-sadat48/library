//DOM Elements
const form = document.getElementById("book-form");
const openFormTrigger = document.querySelector(".trigger");
const closeFormTrigger = document.querySelector(".close");
const formPopUp = document.querySelector(".form-popup");

//Library Book Objects
let myLibrary = [];
let newBook;

function Book(title, author, numOfPages, haveRead) {
    this.title = title,
    this.author = author,
    this.numOfPages = numOfPages,
    this.haveRead = haveRead
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
    //reset form
    form.reset();
    //close the form
    formPopUp.classList.remove("open");
    return false;
});