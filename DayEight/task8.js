const title = "Dairy of a Young Girl";
const author = "Anne Frank";
const year = 1947;

const book = {
    title,
    author,
    year,
    bookInfo(){
        console.log(`Book name is ${this.title}. Author is ${this.author}. Published Year is ${this.year}.`);
    }
}

console.log(book);