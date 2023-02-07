function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'please enter type:';
    }
    return num1 * num2;
}

const input = add(35,45);
// console.log(input);

let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}