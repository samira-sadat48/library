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

const book1 = new Book('Hope Never Dies','Andrew Shaffer',301,false);

console.log(book1.info())