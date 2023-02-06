const country = 'Bangladesh';
const age = 25;
const Independent = true;
const student = { id: 234, class: 11, name: 'Mostofa' };
const friends = [13, 14, 24, 42, 14, 53, 23];
function add(num1, num1) {
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof Independent);
console.log(typeof student);
console.log(typeof friends);
console.log(typeof add);
// cheak array using Array.isArray
console.log(Array.isArray(friends));

// ---------------------

console.log(friends.includes(33));
console.log(friends.includes(23));

if (friends.indexOf(253) !== -1) {
    
}

// concat
const newFriend = [12, 13, 21];
const allFrined = newFriend.concat(friends);
console.log(allFrined);