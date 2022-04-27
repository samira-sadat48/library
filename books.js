//DOM Elements
const openFormTrigger = document.querySelector(".trigger");
//const closeFormTrigger = document.querySelector(".close");
const form = document.querySelector(".form-popup");


//Library Book Objects
let myLibrary = [];

function Book(title, author, numOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.haveRead = haveRead;
    this.info = function() {
        let haveReadString;
        if(haveRead){
            haveIReadString = "already read";
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
openFormTrigger.addEventListener("click", () => {form.classList.add("open")});

//Submit button pressed
form.addEventListener("submit", (e) => {
    //create and save new book object using form fields
    //push to library list
    //close the form
    form.classList.remove("open");
})