function managingItem(){
    let items = [];
    return {
        add : (item)=>{
            items.push(item);
            console.log(`Item ${item} is added!`);
        },
        remove : (item)=>{
            let index = items.indexOf(item);
            if(index !== -1){
                items.splice(index, 1);
                console.log(`Item ${item} removed!`);
            }
            else{
                console.log(`Item ${item} not found!`);
            }
        },
        listItem : () => {
            console.log(items);
        }
    }
}


const item1 = managingItem();

item1.add("Glasses");
item1.add("Hand-Watch");
item1.add("Perse");

item1.listItem();

item1.remove("Hand-Watch");
item1.listItem();