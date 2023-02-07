
const shoppingCard = [
    { name: 'shirt', price: 3300, quantity: 5},
    { name: 'show', price: 1200, quantity: 3 },
    { name: 'pant', price: 3000, quantity: 7 },
    { name: 'balt', price: 700, quantity: 2 },
];

function totalCard(shopping) {
    let sum = 0;
    for (let i = 0; i < shopping.length; i++){
        const product = shopping[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
        // console.log(product);
    
    }
    return sum;
}

const totalcost = totalCard(shoppingCard);
console.log('totalprice', totalcost);