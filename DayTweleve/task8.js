const url = fetch('https://invalidURL.fetchdata.com');

url
.then((response) => {
    return response.json();
}).then((data) => {
    console.log("Fetch Successfull",data);
}).catch((error) => {
    console.log("Fetch Error : ",error.message);
})