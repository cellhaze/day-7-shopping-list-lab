

var shoppingList = [
    {
    product: "eggs",
    price: 2.00
  },
    {
    product: "ham",
    price: 7.00
  },
    {
    product: "apples",
    price: 1.50
  },
    {
    product: "tomatoes",
    price: 1.00
  },
    {
    product: "yogurt",
    price: 2.50
  },
    {
    product: "eggs",
    price: 2.00
  },
  {
    product: "yogurt",
    price: 2.50
  },
    {
    product: "strawberries",
    price: 2.00
  },
  {
    product: "yogurt",
    price: 2.50
  },
    {
    product: "eggs",
    price: 2.00
  }];


//Including "Hello" to test
//var total = 0;  
//var ammount = shoppingList.entries
//shoppingList.forEach(function() {
//
//var list = document.getElementById("listitems");
//var listItem = document.createElement('li');
//var p = document.createTextNode("Hello" + shoppingList[0]);  
//var p = document.createTextNode("Hello" + shoppingList[0]);    
//list.appendChild(listItem, shoppingList);
//list.appendChild(p);
//});


function myFunction() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Onions");
    node.appendChild(textnode);
    document.getElementById("listitems").appendChild(node);


//Testing
console.log(ammount);


//Putting these here to figure out later.
//document.getElementById("listItems").style.backgroundColor = "black";
//document.getElementById("listItems").style.color = "white";
//document.getElementById("listItems").style.listStyleType = none;


//-----(failed method 5)-----
//var sum = total;
//var sumEl - document.createElement("h3");
//sumEl.appendChild(sum);


//var total = document.createElement(shoppingList);


//-----(failed method 4)-----
//shoppingList.forEach(function(item){
// console.log(item.name, item.price);
//};


//-----(failed method 3)------
//var node = document.createElement("li");                 // Create a <li> node
//var textnode = document.createTextNode("Water");         // Create a text node
//node.appendChild(textnode);                              // Append the text to <li>
//document.getElementById("list-items").appendChild("ul");     // Append <li> to <ul> with id="myList"


//-----(failed method 2)-----
//var itemCol = document.getElementById("list-items");

//var itemCol = document.createElement("li");
//var position = document.getElementById("ul");
//position.appendChild(itemCol);


//-----(failed method 1)-----
//shoppingList.forEach(function(item) {
//    document.appendChild("li");
//                    });




//To calculate price and tax
shoppingList.forEach (function(i) {
    total += i.price;
});
var tax = (total * 0.06)

console.log(tax + total);

            
                    
                    



/* var price = 0;  
 var total = price;
 this is redundant and unecessary

 var total = price;
 var price = 0; 
 the order on this is illogical */
