const url1 = "https://api.thecatapi.com/v1/images/search?limit=10";
const url2 = "https://dog.ceo/api/breeds/image/random";
const url3 = "https://cat-fact.herokuapp.com/facts";

async function promiseAll(){
    try {
        const responses = await Promise.all([
            fetch(url1),
            fetch(url2),
            fetch(url3)
        ]);        
        const data = await Promise.all(responses.map(response => response.json()));
        console.log(data[0]);
        console.log(data[1]);
        console.log(data[2]);
    } catch (error) {
        console.log(error);
    }
}

promiseAll();