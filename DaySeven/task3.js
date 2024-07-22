const book = {
    tittle : 'The dairy of a young girl',
    author : 'Anne Frank',
    year : 1947,
    bookDetail : function(){
        return `Tittle is ${this.tittle} and author is ${this.author}`;
    }
}

console.log(book.bookDetail());
