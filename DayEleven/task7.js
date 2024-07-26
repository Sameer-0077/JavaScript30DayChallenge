const apiUrl = 'https://cat-fact.herokuapp.com/facts';

(async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})();