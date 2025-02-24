import { playlistArr } from "./playlist.js";

/*
Challenge 1 
1. Refactor the code below to use .map() 
   instead of the for loop.
   ⚠️ Don't worry about the commas for now.
*/

// const playlistHtml = playlistArr.map(function (track) {
//   return `
//       <section class="card">
//       <div class="card-start">
//           <img src="./images/${track.albumArt}">
//       </div>
//           <div class="card-mid">
//               <h4 class="card-title">${track.title}</h4>
//               <p class="card-artist">${track.artist}</p>
//           </div>
//       <div class="card-end">
//           <p class="card-menu">...</p>
//       </div>
//   </section>
//   `;
// });

// document.getElementById("container").innerHTML = playlistHtml;

// ----old code----
// for (let i = 0; i < playlistArr.length; i++) {
//   playlistHtml.push(
//     `<section class="card">
//     <div class="card-start">
//         <img src="./images/${playlistArr[i].albumArt}">
//     </div>
//         <div class="card-mid">
//             <h4 class="card-title">${playlistArr[i].title}</h4>
//             <p class="card-artist">${playlistArr[i].artist}</p>
//         </div>
//     <div class="card-end">
//         <p class="card-menu">...</p>
//     </div>
// </section>
//     `
//   );
// }

// document.getElementById("container").innerHTML = playlistHtml;

/*
Challenge 2 
1. Use the .join() method to remove 
   those annoying commas!
⚠️ You will need to chain two methods
   together to complete the challenge.
   
document.getElementById(`container`).classList.toggle('hidden')


*/

const playlistHtml = playlistArr
  .map(function (track) {
    return `
        <section class="card">
        <div class="card-start">
            <img src="./images/${track.albumArt}">
        </div>
            <div class="card-mid">
                <h4 class="card-title">${track.title}</h4>
                <p class="card-artist">${track.artist}</p>
            </div>
        <div class="card-end">
            <p class="card-menu">...</p>
        </div>
    </section>
    `;
  })
  .join(""); //.join funker kun på map pga den lager ny array og .join er array method

document.getElementById("container").innerHTML = playlistHtml;

// -------- .map() vs forEach()------------------
// -------- .map() vs forEach()------------------
// -------- .map() vs forEach()------------------
// -------- .map() vs forEach()------------------

// const playlistHtml2 = [];

// playlistArr.forEach(function (track) {
//   playlistHtml2.push(`
//     <section class="card">
//         <div class="card-start">
//             <img src="/images/${track.albumArt}">
//         </div>
//             <div class="card-mid">
//                 <h4 class="card-title">${track.title}</h4>
//                 <p class="card-artist">${track.artist}</p>
//             </div>
//         <div class="card-end">
//             <p class="card-menu">...</p>
//         </div>
//     </section>
//     `);

//   document.getElementById("container").innerHTML = playlistHtml2.join(""); //.join må legges til på slutten siden det er array method
// });

// Use .map() if you need to make use of the new array it returns.Use------------------
// Use .map() if you need to make use of the new array it returns.Use------------------
// Use .map() if you need to make use of the new array it returns.Use------------------
// Use .map() if you need to make use of the new array it returns.Use------------------

// use .forEach() if u dont need to create a new array------------------
// use .forEach() if u dont need to create a new array------------------
// use .forEach() if u dont need to create a new array------------------
// use .forEach() if u dont need to create a new array------------------
