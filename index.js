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
  }

  var returnStr = "In your cart, you have "

// if cart has one item
  if (cart.length === 1){
    returnStr += `${[Object.keys(cart[0])]} at $${cart[0][Object.keys(cart[0])]}.`
    return console.log(returnStr)
  }
// if cart has 2 items
  if (cart.length === 2){
    returnStr += `${[Object.keys(cart[0])]} at $${cart[0][Object.keys(cart[0])]} `
    returnStr += `and ${[Object.keys(cart[1])]} at $${cart[1][Object.keys(cart[1])]}.`
    return console.log(returnStr)
  }

// more than 2 items
  for(let i = 0; i < cart.length; i++){
    if (i === cart.length - 1){
      returnStr += `and ${[Object.keys(cart[i])]} at $${cart[i][Object.keys(cart[i])]}.`;
    } else {
      returnStr += `${[Object.keys(cart[i])]} at $${cart[i][Object.keys(cart[i])]}, `;
    }
  }

  return console.log(returnStr);
}

function total() {
  // write your code here
  let total = 0
  for(let i = 0; i < cart.length; i++){
    total += cart[i][Object.keys(cart[i])]
  }

  return total


    for(let i = 0; i < newArray.length;i++){
      newArray[i]
    }
}

function removeFromCart(item) {
  var didWeDelete = false

  for(let i = 0, l = cart.length; i < l; i++){
    if (cart[i].hasOwnProperty(item)) {
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      didWeDelete = true
      l--;
    }
  }

  if (!didWeDelete){
    console.log('That item is not in your cart.')
  }

  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber){
    console.log('Sorry, we don\'t have a credit card on file for you.')
    return false
  }
  debugger
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []

}
