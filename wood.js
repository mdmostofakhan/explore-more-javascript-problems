/*
fixed per item wood requirements
1. chair --> 3 cft
2. table --> 10 cft
3. bed --> 50 cft

vary: quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = perChairWood * chairQuantity;
    const tableWood = perTableWood * tableQuantity;
    const bedWood = perBedWood * bedQuantity;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;

}

const totalWood = woodCalculator(0, 1, 0);
console.log(totalWood);





// function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;

//     const chairWood = perChairWood * chairQuantity;
//     const tableWood = perTableWood * tableQuantity;
//     const bedWood = perBedWood * bedQuantity;

//     const totalWood = chairWood + tableWood + bedWood;
//     return totalWood;

// }
// const totalWood = woodCalculator(2, 2, 5);
// console.log('total quantity result', totalWood);
// console.log(chairQuantity, tableQuantity, chairQuantity)