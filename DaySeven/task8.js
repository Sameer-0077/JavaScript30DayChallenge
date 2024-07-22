const book = {
    tittle : 'The dairy of a young girl',
    author : 'Anne Frank',
    year : 1947
}
for (const key in book) {
    if (book.hasOwnProperty.call(book, key)) {
        console.log(book[key]);
    }
}