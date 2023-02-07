const shoppingCard = [
    { name: 'shirt', price: 2200 },
    { name: 'show', price: 1200 },
    { name: 'pant', price: 3000 },
    { name: 'balt', price: 700 }
];

function totalCard(shopping) {
    let sum = 0;
    for (let i = 0; i < shopping.length; i++){
        const product = shopping[i];
        sum = sum + product.price;
        console.log(product);
    
    }
    return sum;
}

const totalcost = totalCard(shoppingCard);
console.log('totalprice', totalcost);