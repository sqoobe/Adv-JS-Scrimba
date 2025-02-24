// // ---------------------------------------------------------------------
//
import { studentsArr } from "/Users/Jacob/OneDrive/Oppgaver/Adv JS Scrimba/studentsArr";
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

// ---------------------------------------------------------------------

// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
