function square(x) {
    return x * x;
};
// console.log(square(8))


// const squareArrow = (x) => {
//     return x * x;
// };
const squareArrow = (x) => x * x;
// console.log(squareArrow(8));

// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> 'Mike'
// Create regular arrow function
// Create arrow function using shorthand syntax

const fullName = 'Mike Smith'
let firstName = ''

const getFirsName = (fullName) => fullName.split(' ')[0]
firstName = getFirsName(fullName)
// console.log(firstName) 


const add = function (a, b) {
    return a + b;
};
// console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has traveled to ' + city);
    }
};
console.log(user.printPlacesLived());

// Vhallenge
const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    } 
}

console.log(multiplier.multiply()); // [1, 2, 3] 2 [2, 4, 6]