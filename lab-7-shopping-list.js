

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
  
var total = 0;  

shoppingList.forEach(function(i, j) {
//    (i=0, i<11, i++)
var list = document.getElementById("listitems");
var listItem = document.createElement('li');
list.appendChild(listItem, shoppingList);
    var p = document.createTextNode("Hello");
    list.appendChild(p);
});

var total = document.createElement(shoppingList);


//shoppingList.forEach(function(item){
// console.log(item.name, item.price);
//};


//var node = document.createElement("li");                 // Create a <li> node
//var textnode = document.createTextNode("Water");         // Create a text node
//node.appendChild(textnode);                              // Append the text to <li>
//document.getElementById("list-items").appendChild("ul");     // Append <li> to <ul> with id="myList"



//var itemCol = document.getElementById("list-items");

//var itemCol = document.createElement("li");
//var position = document.getElementById("ul");
//position.appendChild(itemCol);


//shoppingList.forEach(function(item) {
//    document.appendChild("li");
//                    });\




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
