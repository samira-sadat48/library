//DOM Elements
const form = document.getElementById("book-form");
const openFormTrigger = document.querySelector(".trigger");
const closeFormTrigger = document.querySelector(".close");
const formPopUp = document.querySelector(".form-popup");

const submitFormTrigger = document.querySelector(".submit-btn");


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
//submitFormTrigger.addEventListener("click", () => formPopUp.classList.remove("open"));//try to do this in the submit event

window.addEventListener("click", (e) => {
    if(e.target === formPopUp) {
        formPopUp.classList.remove("open");
    }
})

//Submit button pressed
form.addEventListener("submit", (e) => {
    console.log("Submit event!");
    e.preventDefault();
    let formValues = e.target.elements;
    //create and save new book object using form fields
    newBook = new Book(
        formValues.title.value,
        formValues.author.value,
        formValues.numOfPages.value,
        formValues.haveRead.checked
    );
    //push to library list
    myLibrary.push(newBook);
    //reset form
    form.reset();
    //close the form
    formPopUp.classList.remove("open");
    return false;
})