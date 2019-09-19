/************* */

// var firstName = 'Carlos';
// var lastName = 'Turcios';
// var age = 29;

// console.log(firstName);
// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);
// job = 'tech';
// console.log(job);

// //comments to remind you of things
// //notes

// //Variable mutation and type coerction

// var firstName = 'Carlos';
// var age = 29;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'tech';
// isMarried = true;
// console.log(
//   firstName + '  ' + age + ' year old ' + job + ' Is he married? ' + isMarried
// );
// //variable mutatuion
// age = 'twenty nine';
// job = 'driver';

// // add alert for an alert
// alert(
//   firstName + '  ' + age + ' year old ' + job + ' Is he married? ' + isMarried
// );

// var lastName = prompt('what is his last name?');
// console.log(firstName + ' ' + lastName);

/**************************
 * Basic operators
 */
// var year, yearCarlos, yearRosa;
// var now = 2019;
// let ageCarlos = now - 29;
// let ageRosa = now - 26;

// // math operators
// var yearCarlos = now - 29;
// var yearRosa = now - 26;
// console.log(yearCarlos);
// console.log(yearRosa);
// console.log(now + 2);

// //Logical operators
// var carlosOlder = ageCarlos < ageRosa;
// console.log(carlosOlder);

// //typeof operator
// console.log(typeof carlosOlder);
// console.log(typeof ageCarlos);
// console.log('Carlos is older than Rosa');
// console.log(typeof ageRosa);
// var x;
// console.log(typeof x);

/*********************
 * Operator precedence
 * ******* */
// var now = 2019;
// var yearCarlos = 1990;
// var fullAge = 18;
// // multiple operators
// var isFullAge = now - yearCarlos >= fullAge;
// console.log(isFullAge);
// // groupings
// var ageCarlos = (now = yearCarlos);
// var ageRosa = 26;
// var avaerage = (ageCarlos + ageRosa) / 2;
// console.log(avaerage);
// //Multiple assignemnts
// var x, y;
// x = (3 + 5) * 4 - 6;
// console.log(x);

// //more operators
// x = x * 2;
// console.log(x);
// x += 10;
// console.log(x);

// x++;
// console.log(x);
// var massMark = 50;
// var heightMark = 5.5;

// var massJohn = 92;
// var heightJohn = 5.5;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);
// var whoIsHigher = BMIMark > BMIJohn;
// console.log("is Mark's BMI higher than John's?" + whoIsHigher);
/***********************88888
 *
 *  If / else statments
 *
 */
// var firstName = 'Carlos';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//   console.log(firstName + ' married');
// } else {
//   console.log(firstName + ' is not single :)');
// }

// var isMarried = true;
// if (isMarried) {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' is not single');
// }
// var massMark = 50;
// var heightMark = 5.5;

// var massJohn = 92;
// var heightJohn = 5.5;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI is higher than John's");
// } else {
//   console.log("John's BMI is higher tha Mark's");
// }

// var whoIsHigher = BMIMark > BMIJohn;
// console.log("is Mark's BMI higher than John's?" + whoIsHigher);
/**********
 *
 * Boolian logic
 */
// var firstName = 'Carlos';
// var age = 29;
// if (age < 13) {
//   console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + ' is a teenager');
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + ' is a young man.');
// } else {
//   console.log(firstName + ' is a man.!');
// }
/****8
 *
 * the ternart Operator and switch statements
 */
// let firstName = 'Carlos';
// let age = 29;
// //Ternary operator
// age >= 18
//   ? console.log(firstName + ' drinks beer.')
//   : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);
// //switch statement
// let job = 'tech';
// switch (job) {
//   case 'tech':
//   case 'fixer':
//     console.log(firstName + ' fixed stuff');
//     break;
//   case 'driver':
//     console.log(firstName + ' drives uber in las vegas');
//   default:
//     console.log(firstName + ' is a bum');
// }

// switch (true) {
//   case age < 13:
//     console.log(firstName + ' is a boy');
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + ' is a teenager');
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + ' is a young man.');
//     break;
//   default:
//     console.log(firstName + ' is a man.');
// }

//var firstName = 'Carlos';
// var age = 29;
// if (age < 13) {
//   console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + ' is a teenager');
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + ' is a young man.');
// } else {
//   console.log(firstName + ' is a man.!');
// }
/*****************
 *
 * Truthy and Falsy values and equality operators
 *
 */
// falsy values: undefined, null,0,'',NaN
//truthy values: Not falsy values
// var height;
// height = 23;
// if (height || height === 0) {
//   console.log('Variable is defined');
// } else {
//   console.log('Variable has not been defined');
// }
// // Equality operators

// if (height === '23') {
//   console.log('The === operator does type coercion!');
// }

// coding Challange

let scoreJohn = (89 + 120 + 103) / 3;
let mikesScore = (116 + 94 + 123) / 3;
let maryScore = (97 + 134 + 105) / 3;
console.log(maryScore);
console.log(scoreJohn);
console.log(mikesScore);
if (scoreJohn > mikesScore && scoreJohn > maryScore) {
  console.log("John's Team winns with " + scoreJohn + ' points');
} else if (mikesScore > scoreJohn && mikesScore > maryScore) {
  console.log('Mikes team win with ' + mikesScore + ' score');
} else if (maryScore > scoreJohn && maryScore > mikesScore) {
  console.log("Mary's team won with " + maryScore + ' poinnts ');
} else {
  console.log('there was a draw');
}
// if (scoreJohn > mikesScore) {
//   console.log("John's is the winner with " + scoreJohn + ' points ');
// } else if (mikesScore > scoreJohn) {
//   console.log("Mark's team wins with " + mikesScore + ' points');
// } else {
//   console.log('There is a draw ');
// }
