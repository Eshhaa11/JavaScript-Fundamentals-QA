//Write a function that takes an array of numbers and returns their sum.

function sumArray(numbers) {
    let total = 0; 
    for (let number of numbers) {
        total += number; 
    return total; 
}
const nums = [10, 20, 30, 40, 50];
console.log(sumArray(nums));
}