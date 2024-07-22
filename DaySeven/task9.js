const book = {
    tittle : 'The dairy of a young girl',
    author : 'Anne Frank',
    year : 1947
}

const keys = Object.keys(book);
// console.log(keys);

keys.forEach(key => {
    console.log(key);
});

const values = Object.values(book);
// console.log(values);

for (const value of values) {
    console.log(value);    
}