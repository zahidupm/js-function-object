function add(number1, number2) {
    //console.log(number1, number2);
    let sum = number1 + number2;
    //console.log(sum);
    return sum;
    return 'hello'; // not allow
    console.log('jj');// not allow
}

//add(50, 98);

let total = add(80, 20);
//console.log('Total:', total);

function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var singaras = bringSingara(200);
console.log('Eating singaras:', singaras);