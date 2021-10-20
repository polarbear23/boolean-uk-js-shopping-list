const arr = [["Milk", 1.20], ["Cocoa", 2.00], ["Salad", 2.00], ["Carrots", 2.00], ["Tomatoes", 2.50], ["Ready Meals", 5.00]];

window.addEventListener('load', (event) => {
    for(let i = 0; i< arr.length; i++){
        const listItem = document.createElement('li'); //create list html item
        listItem.innerHTML = arr[i]; //item text
        const shoppingList = document.getElementById("shopping-list"); // find shopping list in html
        shoppingList.appendChild(listItem);//add list item to list html
    }
  });


function totalCost(array){
    let cost = 0;
    for(let i = 0; i < array.length; i++){
        cost += array[i][1].toFixed(2);
        console.log(cost);
    }
    return cost;
}

function addToShoppingList(){
    let numberOfItems = prompt("How many items would you like to add?");
    while(numberOfItems > 0){
        let nameOfItem = prompt("What is the name of the Item you would like to add?");
        let priceOfItem = prompt(`What is the price of ${nameOfItem}?`).toFixed(2);
        arr.push([nameOfItem,priceOfItem]); //add new item to array

        const listItem = document.createElement('li'); //create list html item
        listItem.innerHTML = [nameOfItem,priceOfItem]; //item text
        const shoppingList = document.getElementById("shopping-list"); // find shopping list in html
        shoppingList.appendChild(listItem);//add list item to list html

        numberOfItems--;
    }
    const cost = document.getElementById("cost");
    cost.innerHTML = `Cost: ${totalCost(arr)}`
}

