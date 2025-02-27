// // ---------------------------------------------------------------------
//
//  ÆDVÆNS JavaSkriptering
//
// ---------------------------------------------------------------------
// // ---------Function Expressions--------------

//du kan Kalle på HOISTED functions hvor som helst - før eller etter den blir deklarert her.
console.log(getSpendAlert(250));
//denne funksjonen er HOISTED -
function getSpendAlert(amount) {
  return `Warning! You just spent £${amount}!`;
}

//console.log(getSpendAlertNotHoisted(150)); // du kan IKKE kalle på NotHoisted her.

//---NOT HOISTED---  du kan IKKE calle på denne funksjonen FØR den er deklarert her.
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
console.log(getTheftAlert(6));

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
// ---------------------------------------------------------------------
