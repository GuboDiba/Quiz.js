//For  Example you want a user to enter his/her name in JS

// var input = prompt("Enter your name:");
// alert(input);

//Write aprogram that takes three numbers as input 
//and outputs the largest of the three.
// let num1 = parseFloat(prompt("Enter first number: "));
// let num2 = parseFloat(prompt("Enter second number: "));
// let num3 = parseFloat(prompt("Enter third number: "));

// let largest = num1;

// if (num2 > largest) {
//   largest = num2;
// }

// if (num3 > largest) {
//   largest = num3;
// }

// console.log("The largest number is", largest);

function checkPalindrome(string) {


  // find the length of a string
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {

      // check if first and last string are same
      if (string[i] !== string[len - 1 - i]) {
          return 'It is not a palindrome';
      }
  }
  return 'It is a palindrome';
}

// take input
// const string = prompt('Enter a string: ');
let string="madam"
// call the function
const value = checkPalindrome(string);


console.log(value);

//check whether it is palindrome
function palidrom(str){
  
  const len=str.length;
  for (let x = 0; x < len/2; x++) {
    if (str[0] !==str[len-1-x]) {
      return 'It is not a palindrome';
    }
    
  }
  return 'It is a palindrome';
}
let str="place"
const values=palidrom(str)
console.log(values);

// program to check if the string is palindrome or not

function checkPalindrome(strings) {

  // convert string to an array
  const arrayValues = strings.split('');

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join('');

  if(strings == reverseString) {
      console.log('It is a palindrome');
  }
  else {
    console.log('It is not a palindrome');
}
}

//take input
// const strings = prompt('Enter a string: ');
let strings="madam"
checkPalindrome(strings);


// js program to perform string comparison

const string1 = 'JavaScript Program';
const string2 = 'javascript program';

// compare both strings
const result = string1.toUpperCase() === string2.toUpperCase();

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}


// program to perform case insensitive string comparison

const stringg1 = 'JavaScript Program';
const stringg2 = 'javascript program';

const results = string1.localeCompare(string2, undefined, { sensitivity: 'base' });

if(result == 0) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}