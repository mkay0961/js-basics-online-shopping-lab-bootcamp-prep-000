var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  let price = Math.floor(((Math.random() * 100) + 1))
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  // write your code here

  // if cart is empty
  if (cart.length === 0){
    return console.log("Your shopping cart is empty.")
  } else for (var i = 0; i < cart.length) {

  }


}

function total() {


}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {
}
