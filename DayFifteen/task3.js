function generateId(){
    let uniqueId = Math.floor(Math.random() * 10);
    console.log(uniqueId);
    return function trackId(){
        uniqueId++;
        return uniqueId;
    }
}

const createId = generateId();
console.log(createId());
console.log(createId());
console.log(createId());
