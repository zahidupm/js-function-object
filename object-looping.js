var shoppingCart = {
    books: 3,
    sunglass: 5,
    keyboard: 1,
    mouse: 2,
    pen: 12,
    shoes: 3,
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
for(var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName]
    //console.log(propertyName, propertyValue);
}

// for in loop
for(var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}