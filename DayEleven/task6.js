const responseUrl = 'https://cat-fact.herokuapp.com/facts'

fetch(responseUrl)
.then((response) => {
    // if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})