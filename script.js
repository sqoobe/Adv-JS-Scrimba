// // ---------------------------------------------------------------------
//
//  ÆDVÆNS JavaSkriptering
//
// ---------FOR of--------------
// ---------FOR of--------------
// ---------FOR of--------------
// ---------FOR of--------------

// const characters = [
//   {
//     title: "Ninja",
//     emoji: "🥷",
//     powers: ["agility", "stealth", "aggression"],
//   },
//   {
//     title: "Sorcerer",
//     emoji: "🧙",
//     powers: ["magic", "invisibility", "necromancy"],
//   },
//   {
//     title: "Ogre",
//     emoji: "👹",
//     powers: ["power", "stamina", "shapeshifting"],
//   },
//   {
//     title: "Unicorn",
//     emoji: "🦄",
//     powers: ["flight", "power", "purity"],
//   },
// ];

// for (let character of characters) {
//   console.log(character.powers);
//   for (let styrke of character.powers) {
//     console.log(styrke);
//   }
//   /*
// Challenge:
// 1. Nest a for of inside this for of to iterate over
//    the powers array for each character. Log out each
//    power.
// */
// }
// // ---------------------------------------------------------------------

// // ---------FOR IN--------------
// // ---------FOR IN--------------
// // ---------FOR IN--------------
// // ---------FOR IN--------------

// const character1 = {
//     title: 'Ninja',
//     emoji: '🥷',
//     powers: ['agility', 'stealth', 'aggression'],
// }

// for (const property in character1) {
//     console.log(character1[property])
// }

// const character = 'ninja'

// for (const letter of character) {
//     console.log(letter)
// }

// ---------------------------------------------------------------------
// // ---------.forEach()--------------
// // ---------.forEach()--------------
// // ---------.forEach()--------------
// // ---------.forEach()--------------

// const characters = [
//   {
//     title: "Ninja",
//     emoji: "🥷",
//     powers: ["agility", "stealth", "aggression"],
//   },
//   {
//     title: "Sorcerer",
//     emoji: "🧙",
//     powers: ["magic", "invisibility", "necromancy"],
//   },
//   {
//     title: "Ogre",
//     emoji: "👹",
//     powers: ["power", "stamina", "shapeshifting"],
//   },
//   {
//     title: "Unicorn",
//     emoji: "🦄",
//     powers: ["flight", "power", "purity"],
//   },
// ];

// // for (let character of characters){
// //     console.log(character)
// // }

// characters.forEach(function (karakter) {
//   karakter.powers.forEach(function (styrke) {
//     console.log(styrke);
//   });
// });

// characters.forEach(function (character, index) {
//   console.log(index, character.title);
// });

// ---------------------------------------------------------------------

// // ---------.includes()--------------
// // ---------.includes()--------------
// // ---------.includes()--------------
// // ---------.includes()--------------
// // const emojis = ['🐥','🐯','🐼']
// // console.log(emojis.includes('🐴'))

const addItemBtn = document.getElementById("add-item-btn");
const itemInput = document.getElementById("item-input");
const list = document.getElementById("list");

const shoppingList = [];

// addItemBtn.addEventListener("click", function () {
//   /*
// Challenge:
// 1. Add an if else to the event listener's function.
// 2. Only add an item to the shoppingList array if it
//    is not already in the shoppingList array.
// 3. If an item is a duplicate, clear the input field
//    and log out "no duplicates".
// */

//   if (shoppingList.includes(itemInput.value)) {
//     console.log("no duplicates");
//   } else {
//     shoppingList.push(itemInput.value);
//     render();
//   }
//   itemInput.value = "";
// });

// function render() {
//   let html = "";
//   for (let item of shoppingList) {
//     html += `<li class="list-item">${item}</li>`;
//   }
//   list.innerHTML = html;
// }

// render();

// // ---------------------------------------------------------------------

// // ---------.map()--------------
// // ---------.map()--------------
// // ---------.map()--------------
// // ---------.map()--------------

//Convert these Miles to KM!
const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148];

const conversionFactorMilesToKm = 1.6;

//store map array in const => give anon function parameter distanceMiles
// const distanceWalkedKmArr = distanceWalkedMilesArr.map(function (
//   distanceMiles
// ) {
//   // -------------------
//   //   console.log(distanceMiles); //logs each element in the array, except what gets logged out is element by element.
//   // -------------------
//   //   console.log(distanceMiles * conversionFactorMilesToKm); //converts miles to kilometers
//   return distanceMiles * conversionFactorMilesToKm;//returns km array
// });
///////////////////////////////
// // // const distanceWalkedKmArr = distanceWalkedMilesArr.map(function (
// // //   distanceMiles,
// // //   index //added index to the parameter
// // // ) {
// // //   return `Month ${index}: ${distanceMiles * conversionFactorMilesToKm}KM`;
// // //   //added a string to make the console log out months+km at end
// // // });

// console.log(distanceWalkedKmArr); //returns km array

// function convertMilesToKms() {
//   return distanceWalkedMilesArr.map(function (distanceMiles, index) {
//     return `Month ${index}: ${distanceMiles * conversionFactorMilesToKm}KM`;
//   });
// }
// //function verison instead of saving it as a const
// console.log(convertMilesToKms());

// ---------the .map() challenge--------------
// .map() challenge er i egen mappe
// ---------the .filter() method--------------
// ---------the .filter() method--------------
// ---------the .filter() method--------------
// ---------the .filter() method--------------
const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18];

// const adults = ages.filter(function (age) {
//   return age >= 18;
// });

// console.log(adults);

// const children = ages.filter(function (age) {
//   return age < 18;
// });

// console.log(children);

// ---------the .filter() method with Objects--------------
// ---------the .filter() method with Objects--------------
// ---------the .filter() method with Objects--------------
// ---------the .filter() method with Objects--------------
const series = [
  {
    name: "The Wire",
    location: "Baltimore",
    lengthInHours: 60,
    genres: ["action", "thriller", "detective", "suspense"],
  },
  {
    name: "Game of Thromes",
    location: "Westeros and Essos",
    lengthInHours: 70.25,
    genres: ["fantasy", "action", "tragedy"],
  },
  {
    name: "Friends",
    location: "New York",
    lengthInHours: 85,
    genres: ["comedy", "romance", "drama"],
  },
  {
    name: "The Walking Dead",
    location: "Atlanta",
    lengthInHours: 131,
    genres: ["zombie", "apocalypse", "thriller", "suspense"],
  },
  {
    name: "The Big Bang Theory",
    location: "Pasadena",
    lengthInHours: 139.66,
    genres: ["comedy", "nerd", "romance"],
  },
];

// const newYorkSeries = series.filter(function (show) {
//   return show.location === "New York";
// });

// console.log(newYorkSeries);
/*
Challenge:
1. Use the .filter() method to create an array
   of all of the thrillers.
*/

// const thrillers = series.filter(function (show) {
//   return show.genres.includes("thriller");
// });

// console.log(thrillers);

// ---------the .reduce() method--------------
// ---------the .reduce() method--------------
// ---------the .reduce() method--------------
// ---------the .reduce() method--------------

// const rainJanuaryByWeek = [10, 20, 0, 122];

// const totalRainfallJanuary = rainJanuaryByWeek.reduce(function (
//   total,
//   currentElement
// ) {
//   console.log("total: " + total, "currentElement: " + currentElement);
//   return total + currentElement;
// });

// console.log(totalRainfallJanuary);

// total: 10 currentElement: 20
// total: 30 currentElement: 0
// total: 30 currentElement: 122
// 152

// ---------the .reduce() method challenge--------------
// ---------the .reduce() method challenge--------------
// ---------the .reduce() method challenge--------------
// ---------the .reduce() method challenge--------------

const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73];

// const averageGrades = grades.reduce(function (total, currentElement) {
//   console.log("total: " + total, "currentElement: " + currentElement);
//   return total + currentElement;
// });

// console.log(averageGrades / grades.length);

// const average = average / grades.length();

/*
Challenge
1. Use the .reduce() method to find the total of all of the students grades.
2. Do some simple maths to log out the class average. 
*/

// console.log(`The class average is ${averageGrades / grades.length}`);
// ---------the .reduce() method with Objects--------------
// ---------the .reduce() method with Objects--------------
// ---------the .reduce() method with Objects--------------
// ---------the .reduce() method with Objects--------------

function calculateClassAverage(studentsArr) {}

// console.log(calculateClassAverage(studentsArr))
// ---------------------------------------------------------------------
// ---------For loop Break and Continue--------------
// ---------For loop Break and Continue--------------
// ---------For loop Break and Continue--------------
// ---------For loop Break and Continue--------------

/* 
    Below is an array of objects representing expenses and refunds. 
    Positive amounts are expenses, negative amounts are refunds. 
    
    We want to find out how much money was spent in 2023. 
*/

/*const expensesAndRefunds = [
  { description: "Groceries", amount: 50, year: 2023 },
  { description: "Electronics", amount: -30, year: 2023 },
  { description: "Dinner", amount: 40, year: 2023 },
  { description: "Clothing", amount: 60, year: 2023 },
  { description: "Entertainment", amount: 25, year: 2023 },
  { description: "Rent", amount: -500, year: 2024 },
  { description: "Utilities", amount: 100, year: 2024 },
  { description: "Books", amount: 20, year: 2024 },
  { description: "Fitness", amount: 30, year: 2024 },
  { description: "Gifts", amount: 15, year: 2024 },
];

let totalSpent = 0;
const cutoffDate = 2024;

for (let i = 0; i < expensesAndRefunds.length; i++) {
  const currentExpenseOrRefund = expensesAndRefunds[i];

  if (currentExpenseOrRefund.year >= cutoffDate) {
    console.log("reached cutoff date, exiting loop");
    break;
  }
  if (currentExpenseOrRefund.amount < 0) {
    console.log(`Skipping ${currentExpenseOrRefund.description} due to refund`);
    continue;
  }
  totalSpent += currentExpenseOrRefund.amount;
}

console.log(`Total amount spent on items in 2023: $${totalSpent}`);

*/

// ---------Various Array methods--------------
// ---------Various Array methods--------------
// ---------Various Array methods--------------
// ---------Various Array methods--------------

const dailyStepsArr = [1000, 1200, 800, 1500, 1100, 1900, 1300];

/*

// .every() returns true if every item passes the test.
const areAllOver10k = dailyStepsArr.every(function (stepCount) {
  return stepCount >= 10000;
});

// .some() returns true if one or more items pass the test.
const areSomeOver10k = dailyStepsArr.some(function (stepCount) {
  return stepCount >= 10000;
});

const invoicesUSDArr = [201, 354, 26, 1299, 1400, 60, 76];

// .find() returns the value of the first item that passes the test.
const invoiceOver1k = invoicesUSDArr.find(function (invoice) {
  return invoice > 1000;
});

// .findIndex() returns the index of the first item that passes the test.
const invoiceIndexOver1k = invoicesUSDArr.findIndex(function (invoice) {
  return invoice > 1000;
});

// .indexOf() gives us the index of a given item in the array.
// console.log(invoicesUSDArr.indexOf(26))

// .at() takes a positive or negative integer and returns the item at that index.
// Negative integers count back from the end of the array.
console.log(invoicesUSDArr.at(-2));

*/

// ---------------------------------------------------------------------
// ---------string.replace and replaceAll--------------
// ---------string.replace and replaceAll--------------
// ---------string.replace and replaceAll--------------
// ---------string.replace and replaceAll--------------

/*
const paragraph =
  "js is the backbone of the internet. It was created in 1995. Before js, websites were so boring.";

console.log(paragraph.replaceAll("js", "JS"));
//JS is the backbone of the internet. It was created in 1995. Before js, websites were so boring.
//JS is the backbone of the internet. It was created in 1995. Before JS, websites were so boring.

*/

// const sentence = "i went to Australia and i saw a shark";

// /*
// Challenge:
//     1. Change the lowercase i’s to uppercase.
// */

// console.log(sentence.replaceAll("i", "I"));

const sentence = "I love you with all my heart!";

console.log(
  sentence.replaceAll(/\b(love|heart)\b/g, function (match) {
    return `${match} 💜`;
  })
);

//love
//heart
//I undefined you with all my undefined!

const paragraph =
  "javaScript is the backbone of the internet. it was created in 1995. before JS, websites were so boring";

/*
Challenge:
    1. Use replaceAll and regex to ensure the first 
       character of each sentence is uppercase.
       You will need to use a string method which converts 
       characters to uppercase.
*/
console.log(
  paragraph.replaceAll(/(?:^|\.\s)([A-Za-z])/g, function (match) {
    return match.toUpperCase();
  })
);
//JavaScript is the backbone of the internet. It was created in 1995. Before JS, websites were so boring

// ---------Regex flags and constructor--------------
// ---------Regex flags and constructor--------------
// ---------Regex flags and constructor--------------
const text = "Please switch off the WIFI before you leave.";
const userInput = "wifi";

const regex = /wifi/gi; //finds wifi and return true. g means global and i means case insensitive
// const regex = new RegExp(userInput, "g");

const doesMatch = regex.test(text); //boolean

console.log(doesMatch);
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
