const isAdult = (age) => age > 18 ? true : false;
const canDrink = (age) => age > 21 ? true : false;
const isSenior = (age) => age > 64 ? true : false;


export {isAdult, canDrink, isSenior as default}
