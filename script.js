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

const adults = ages.filter(function (age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
});

console.log(adults.length);
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------

// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
