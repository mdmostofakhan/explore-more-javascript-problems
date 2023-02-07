// [45, 21, 6, 86, 65]

const phoneso = [
    { name: 'Vivo', camera: 999, stronge: '32gb', price: 36000, color: 'silver' },
    { name: 'Samsung', camera: 78, stronge: '32gb', price: 21999, color: 'silver' },
    { name: 'Walton', camera: 76, stronge: '32gb', price: 86000, color: 'silver' },
    { name: 'iphone', camera: 98, stronge: '32gb', price: 52000, color: 'silver' },
    { name: 'oppo', camera: 888, stronge: '32gb', price: 40000, color: 'silver' },
    { name: 'Nokia', camera: 12, stronge: '32gb', price: 60000, color: 'silver' },
    { name: 'Vivo', camera: 56, stronge: '32gb', price: 39000, color: 'silver' }
]

// function cheapestPhone(phones) {
//     let cheapest = phones[0];
//     for (let i = 0; i < phones.length; i++){
//         const phone = phones[i];
//         if (phone.price < cheapest.price) {
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }

// const mySelectin = cheapestPhone(phoneso);
// console.log(mySelectin);

function cheapestCamera(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if (phone.camera > cheapest.camera) {
             cheapest = phone;
      }
    }
    return cheapest;
}

const mySelectin = cheapestCamera(phoneso);
console.log(mySelectin);