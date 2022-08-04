var shoppingCart = {
    books: 3,
    sunglass: 5,
    keyboard: 1,
    mouse: 2,
    pen: 12
}

// when I will know the property name, use dot notation
var penCount = shoppingCart.pen; 
// alternative system
// when I will know the property name, use dot notation
var penCount2 = shoppingCart['pen'];

var properties = Object.keys(shoppingCart); // property name
var propertyValues = Object.values(shoppingCart); // value

//console.log(propertyValues);
// console.log(shoppingCart);

var propertyName = 'books';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);

// set property values
shoppingCart.mouse = 15;
shoppingCart['mouse'] = 29;
shoppingCart[propertyName] = 45;

console.log(shoppingCart);
