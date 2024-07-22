const book = {
    tittle : 'The dairy of a young girl',
    author : 'Anne Frank',
    year : 1947,
    updateYear : function(newYear){
        this.year = newYear;
    }
}
book.updateYear(2024);

console.log(book);
console.log(book.year);