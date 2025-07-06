const { Book, newBook, newBook1, newBook2 } = require('./task1');

class Ebook extends Book {
    constructor(BookName,Author,Year,formatFile){
        super(BookName,Author,Year)
        this.formatFile = formatFile
    }

    get formatFile(){
        return `Формат файлу ${this._formatFile}`;
    }

    set formatFile(newformatFile){
        if (typeof newformatFile !="string"){
            console.log('Формат має бути прописаний буквами');
            return;
        }
        this._formatFile = newformatFile; 
    }

    printInfo(){
        super.printInfo();
        console.log(this.formatFile)
    }

     static fromBook(bookInstance, formatFile) {
        if (!(bookInstance instanceof Book)) {
            throw new Error("Перший аргумент має бути екземпляром Book");
        }
        if (typeof formatFile !== "string") {
            throw new Error("Формат файлу має бути рядком");
        }
        return new Ebook(bookInstance._BookName, bookInstance._Author, bookInstance._Year, formatFile);
    }
}

const ebook = new Ebook("Jungle Book", "Unknown", 1965, "PDF");
ebook.printInfo();

const allBooks = [newBook, newBook1, newBook2, ebook];

const showOldestBook = Book.sortingDescBook(allBooks);