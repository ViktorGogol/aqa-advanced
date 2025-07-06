class Book {

   static sortingDescBook(books) {
    const years = books
        .map(book => book.Year)                      
        .filter(year => typeof year === 'number');   

    const minYear = Math.min(...years);              
    const oldestBook = books.find(book => book.Year === minYear); 

    return console.log(oldestBook);
    }

    constructor(BookName, Author, Year){
        this.BookName = BookName;
        this.Author = Author;
        this.Year = Year;
    }

    get BookName(){
        return `Ім'я автора ${this._BookName}`;
    }

    set BookName(newBookName){
        if (newBookName.length < 2){
            console.log('Book Name is too short');
            return;
        }
        this._BookName = newBookName;
    }

    get Author(){
        return `Назва автора ${this._Author}`;
    }

    set Author(newAuthor){
        if (newAuthor.length < 2){
            console.log('Назва автора закоротка');
            return;
        }
        this._Author = newAuthor;
    }

    get Year(){
        return this._Year;
    }

    set Year(newYear){
        if (typeof newYear != "number"){
            console.log("Рік має бути цифрами");
            return;
        }
        this._Year = newYear
    }



    printInfo() {
        return console.log(this.BookName, this.Author, this.Year);
    }

}

const newBook = new Book("Tom Soer","Mark Twen", 1976 )
newBook.printInfo();
const newBook1 = new Book("White Chief", "Carl May", 1890)
newBook1.printInfo();
const newBook2 = new Book("War","Conan", 2323);
newBook2.printInfo();




module.exports = { Book, newBook, newBook1, newBook2 };