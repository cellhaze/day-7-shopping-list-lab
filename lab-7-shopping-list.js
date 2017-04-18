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



shoppingList.forEach (function(i) {
    total += i.price;
});
var tax = (total * 0.06)

console.log(tax + total);



// var price = 0;  
// var total = price;
// // this is redundant and unecessary

// var total = price;
// var price = 0; 
// // the order on this is illogical
