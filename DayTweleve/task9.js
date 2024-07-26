async function fetchUrl (){
    try {
        const url = await fetch('https://invalidURL.fetchdata.com');
        const data = await url.json();
        console.log("Fetch Successfull!", data);
    } catch (error) {
        console.log("Error : ", error.message);
    }
}

fetchUrl();