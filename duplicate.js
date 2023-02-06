// const names = ['abul', 'chabul', 'dabul', 'ebul',
//     'abul', 'chabul', 'dabul', 'abul', 'ebul', 'chabul', 'dabul']

// function removeDuplicate(names) {
//     const unique = [];
//     for (let i = 0; i < names.length; i++){
//         const name = names[i];
//         if (unique.includes(name) === false) {
//             unique.push(name);
//         }
//     }
//     return unique;
// }

// const unigNames = removeDuplicate(names);
// console.log(unigNames);



const names = ['abul', 'chabul', 'dabul', 'ebul', 'abul',
    'chabul', 'dabul', 'abul', 'ebul', 'chabul', 'dabul']

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        if (unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const fullname = removeDuplicate(names);
console.log(fullname);