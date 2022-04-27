//DOM Elements
const openFormTrigger = document.querySelector(".trigger");
const closeFormTrigger = document.querySelector(".close");
const formPopUp = document.querySelector(".form-popup");
const form = document.getElementById("book-form");


//Library Book Objects
let myLibrary = [];
let newBook;

function Book(title, author, numOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.haveRead = haveRead;
    this.info = function() {
        let haveReadString;
        if(haveRead){
            haveReadString = "already read";
        }
        else
        {
            haveReadString = "not read yet";
        }
        return `${title} by ${author}, ${numOfPages} pages, ${haveReadString}`;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

//test code
const book1 = new Book('Hope Never Dies','Andrew Shaffer',301,false);
console.log(book1.info());
addBookToLibrary(book1);
console.log(myLibrary);

//Form pop-up trigger
openFormTrigger.addEventListener("click", () => {formPopUp.classList.add("open")});
closeFormTrigger.addEventListener("click", () => formPopUp.classList.remove("open"));
window.addEventListener("click", (e) => {
    if(e.target === formPopUp) {
        formPopUp.classList.remove("open")
    }
})

//Submit button pressed
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formValues = e.target.elements;
    //create and save new book object using form fields
    newBook = new Book(
        formValues.title.value,
        formValues.author.value,
        formValues.numOfPages.value,
        formValues.haveRead.checked
    )
    //push to library list
    myLibrary.push(newBook);
    //reset form
    form.reset();
    //close the form
    formPopUp.classList.remove("open");
    return false;
})