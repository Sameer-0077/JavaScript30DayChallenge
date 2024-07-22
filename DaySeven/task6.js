const library = {
    name : "HistoricBooks",
    books : [
        book1 = {
            tittle : 'The dairy of a young girl',
            author : 'Anne Frank',
            year : 1947
        },
        book2 = {
            tittle : '1984',
            author : 'George Orwell ',
            year : 1949
        },
        book3= {
            tittle : 'The Alchemist',
            author : 'Paulo Coelho',
            year : 1988
        }
    ]
}

console.log("Name of the library is ",library.name);

for(let i=0; i<library.books.length; i++){
    console.log(library.books[i].tittle);
}
