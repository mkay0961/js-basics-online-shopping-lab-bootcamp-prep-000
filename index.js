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

  cart.push({itemName: item, itemPrice: price})
  console.log(`${item} has been added to your cart.`)
  return (`${item} has been added to your cart.`)
}

function viewCart() {

  let returnStr = "In your cart, you have"
  if (cart.length === 0){
    return "Your shopping cart is empty."
  } else {
    for (let i = 0; i<cart.length; i++){
      if (i === cart.length-1 && cart.length != 1) {
        let endItem = (` and ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`)
        returnStr += endItem
      } else if (i < cart.length){
      let middleItem = (` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`)
        returnStr += middleItem

    }
  }
  return returnStr +"."
  }
}

function total() {


}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {
}
