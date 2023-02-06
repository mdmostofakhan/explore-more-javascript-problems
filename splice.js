const friends = [12, 34, 13, 54, 24, 23, 26, 44]
// Removes elements from an array and,
// if necessary, inserts new elements in their place,
//  returning the deleted elements
// Will changs the original array
const partial = friends.splice(2, 4, 777, 888, 999, 444);
console.log(partial);
console.log(friends);