// // ---------------------------------------------------------------------
//
//  ÆDVÆNS JavaSkriptering
//
// ---------------------------------------------------------------------

// // ---------Function Expressions--------------
// // ---------Function Expressions--------------
// // ---------Function Expressions--------------
// // ---------Function Expressions--------------

//du kan Kalle på HOISTED functions hvor som helst - før eller etter den blir deklarert her.
//console.log(getSpendAlert(250));
//denne funksjonen er HOISTED -
//denne functionen kalles for "function declaration(hoisted can b used anywher)"
/*-------------
function getSpendAlert(amount) {
  return `Warning! You just spent £${amount}!`;
}
 */
//console.log(getSpendAlertNotHoisted(150)); // du kan IKKE kalle på NotHoisted her.

//---NOT HOISTED---  du kan IKKE calle på denne funksjonen FØR den er deklarert her.
//denne funksjonen heter "function expression(not hoisted)"
const getSpendAlertNotHoisted = function (amount) {
  return `Warning! You just spent £${amount}!`;
};

console.log(getSpendAlertNotHoisted(150)); // du kan kalle på NotHoisted her.

// // ---------Function Expressions Challenge--------------
// // ---------Function Expressions Challenge--------------
// // ---------Function Expressions Challenge--------------
// // ---------Function Expressions Challenge--------------

/*
Challenge:
    1. Convert this function declaration to a function expression.
*/

// function getTheftAlert(numberOfTransactionsHour) {
//     if (numberOfTransactionsHour > 5) {
//         return `You have made ${numberOfTransactionsHour} transactions
//                 in the past hour. We think your card might have been
//                 compromised`
//     }
// }
const getTheftAlert = function (numberOfTransactionsHour) {
  if (numberOfTransactionsHour > 5) {
    return `You have made ${numberOfTransactionsHour} transactions 
                in the past hour. We think your card might have been 
                compromised`;
  }
};

//console.log(getTheftAlert(6));

// ---------------------------------------------------------------------
// // ---------Arrow functions--------------
// // ---------Arrow functions--------------
// // ---------Arrow functions--------------
// // ---------Arrow functions--------------
/* 
//trenger ikke () med arrow function når du bare har en parameter
const getSpendAlert = amount => {
    return `Warning! You just spent £${amount}!`
} 
*/
/*
//må ha () hvis du skal ha 2 parametere
const getSpendAlert = (name, amount) => {
    return `Warning! Hey ${name}! You just spent £${amount}!`
} 

console.log(getSpendAlert('Tom', 100))
console.log(getSpendAlert(150))
*/
// // ---------Arrow Function Challenge--------------
// // ---------Arrow Function Challenge--------------
// // ---------Arrow Function Challenge--------------
// // ---------Arrow Function Challenge--------------

// function speedWarning(speed){
//     return `You are going at ${speed} mph!`
// }

// const speedWarning = (speed) => `You are going at ${speed} mph!`;

// console.log(speedWarning(40));

/*
Challenge 1 ^
1. Refactor this function to use an arrow function.
2. Make sure you write the least code possible.
*/

const speedWarning = (speedlimit, speed) => {
  if (speed <= speedlimit) return `You are going at ${speed} mph!`;
  else return `WARNING! You are going at ${speed} mph! SLOW DOWN`;
};

console.log(speedWarning(30, 40));

/*
Challenge 2 ^
1. Refactor this function so it only warns drivers 
   who are going over the speed limit.
2. The function now needs to take in two parameters. 
   The first is the speed limit, the second is the 
   driver's actual speed.
*/

const distanceTraveledMiles = [267, 345, 234, 190, 299];

const distanceTraveledKm = distanceTraveledMiles.map((distance) =>
  Math.round(distance * 1.6)
);

console.log(distanceTraveledKm);

/*
Challenge 3 ^
1. Refactor this .map method so the inline function is
   an arrow function. 
2. Write the least amount of code possible.
*/
// // ---------Inline Arrow Functions Refactor Challenge--------------
// // ---------Inline Arrow Functions Refactor Challenge--------------
// // ---------Inline Arrow Functions Refactor Challenge--------------
// // ---------Inline Arrow Functions Refactor Challenge--------------
const itemsBoughtArr = [
  {
    name: "Electric Toothbrush Holder",
    priceUSD: 40,
    desc: "A robotic arm that holds and moves your electric toothbrush for you, ensuring optimal brushing technique.",
  },

  {
    name: "Invisible Milk",
    priceUSD: 10,
    desc: "A carton of milk that turns completely transparent when poured into a glass, providing a magical and mysterious drinking experience.",
  },
  {
    name: "Self-Chilling Soup Can",
    priceUSD: 15,
    desc: "A can of soup that instantly chills itself when opened, so you can enjoy a refreshing cold soup on a hot summer day.",
  },
  {
    name: "Glow-in-the-Dark Eggs",
    priceUSD: 8,
    desc: "A carton of eggs that glow in the dark, making breakfast preparation an exciting and illuminating experience.",
  },
];

/*
  Challenge:
  1. Use the reduce method to calculate the total 
     cost of items which have been bought.
  */

/*
function calculateTotalCost(itemsBoughtArr) {

//2 parameter, den ene er arrow function og den andre er hvori arrayet den skal starte aka ",0" etter priceUSD
  const total = itemsBoughtArr.reduce(
    (total, currentItem) => total + currentItem.priceUSD,
    0
  );
  return total;
}

console.log(calculateTotalCost(itemsBoughtArr));
*/
// // ---------Deafult Parameters--------------
// // ---------Deafult Parameters--------------
// // ---------Deafult Parameters--------------
// // ---------Deafult Parameters--------------

/*
//discount = 10 er deafult parameter, den blir overwrited i console loggen i bunn.
function calculateTotalCost(itemsBoughtArr, discount = 10){
    const total = itemsBoughtArr.reduce((total, currentItem)=>
        total + currentItem.priceUSD, 0
        )
    return total - discount
}

console.log(calculateTotalCost(itemsBoughtArr, 20))
*/
// // ---------Rest Parameters--------------
// // ---------Rest Parameters--------------
// // ---------Rest Parameters--------------
// // ---------Rest Parameters--------------
function setPermissionLevel(permissionLevel, ...names) {
  // ...names er en rest parameter
  // alle navn i rest parameteret blir til eget array
  // bruker array method.forEach til å gå igjennom alle navn og console logge ut hvilke permissionlevel de får.

  names.forEach((name) =>
    console.log(`${name} now has ${permissionLevel} level access.`)
  );
}

setPermissionLevel("admin", "Dave", "Sally", "Mike");

// // ---------The Rest Parameter Challenge--------------
// // ---------The Rest Parameter Challenge--------------
// // ---------The Rest Parameter Challenge--------------
// // ---------The Rest Parameter Challenge--------------
function getLabelsHtml() {
  /*
    Challenge:
    1. Add parameters.
    2. Update the HTML template where you 
       see **NAME**.
    3. Return HTML template for each label.
    */
  // `<div class="label-card">
  //     <p>Dear **NAME** </p>
  //     <p>${text}</p>
  //     <p>Best wishes,</p>
  //     <p>${sender}</p>
  // </div>`
}

const text = "Thank you for all your hard work throughout the year! 🙏🎁";
const sender = "Tom";

document.getElementById("labels-container").innerHTML = getLabelsHtml(
  text,
  sender,
  { name: "Sally" },
  { name: "Mike" },
  { name: "Rob" },
  { name: "Harriet" }
);

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
