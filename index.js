// Code your solutions in this file
let names = [];
let thankYou = [];
function writeCards(names, event){
    for (let x = 0; x < names.length; x++) {
        thankYou.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`);
    }
    console.log(thankYou)
    return thankYou
}
writeCards([], 'surprise')

function countDown(n){
    while (n >= 0){
        console.log(n--)
    }
}