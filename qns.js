
let places=["Nairobi","Mombasa","Nyeri","Kisii"]
places.forEach(element => {
    if (element.length>6) {
        console.log(element)
    }
    
});

//NO 1
//Merge sort
const numbers=[2,37,98,90,2,45,72,13,56,87];
target=56
function divideArray(numbers) {
    if (numbers.length<=1) {
        return numbers
    }
    let middle=Math.floor(numbers.length/2);
    let left=numbers.slice(0,middle);
    let right=numbers.slice(middle);
return sortedArray(divideArray(left),divideArray(right))
}
function sortedArray(left,right) {
    let emptyArray=[];
    while (left.length && right.length) {
        if (right[0]<left[0]) {
            emptyArray.push(right.shift())
        }
        else{
            emptyArray.push(left.shift())
        }
    }
    return [...emptyArray,...left,...right];
}
console.log(divideArray(numbers));

function binarysearch(numbers,target) {
    let left=0
    let right=numbers.length-1
    while (left<=right) {
        let middle=Math.floor((left+right)/2);
        if (numbers[middle]===target) {
            return middle
        }else if (numbers[middle]<target) {
            left=middle+1
        }else{
            right=middle-1
        }
    }
    return null
}
console.log( binarysearch(numbers,target));

// Write a function that merges two sorted arrays into a single one. 
// The arrays only contain integers. Also, 
// the final outcome must be sorted and not have any duplicate


//Print all even numbers from 0 – 10
function evennum() {
    for (let i = 0; i <=10; i++) {
       if (i%2===0) {
        console.log(i);
       }
        
    }
}
evennum()


// Sort an array from lowest to highest
let nam=[23,4,54,98,2,54,56,43,12,2,4,87,67,96]

function dividenam(nam) {
    if (nam.length<=1) {
        return nam
    }
    let middleIndex=Math.floor(nam.length/2);
    let leftIndex=nam.slice(0,middleIndex);
    let rightIndex=nam.slice(middleIndex);
return  sorted(dividenam(leftIndex),dividenam(rightIndex))
}
function sorted(leftIndex,rightIndex) {
    let emptyArray=[];
    while (leftIndex.length && rightIndex.length) {
       if (rightIndex[0]<=leftIndex[0]) {
        emptyArray.push(rightIndex.shift())
       }else{
        emptyArray.push(leftIndex.shift())
       }
    }
    return [...emptyArray,...leftIndex,...rightIndex]
}
console.log(dividenam(nam));

// Create a function that reverses an array
let num=[23,4,54,98,2,54,56,43,12,2,4,87,67,96]
function reversed(num) {
  let rev=num.reverse()
  console.log(rev);
}
reversed(num)

// Calculate the sum of numbers within an array

function calcSum(nuuum) {
    let sum=0;
    for (let x = 0; x <nuuum.length; x++) {
          sum+=nuuum[x]
         
      
    }
    console.log(sum);
}
let nuuum=[23,4,54,98,2,54,56,43,12,2,4,87,67,96]
calcSum(nuuum) 

// Return the number of vowels in a string

function countVowel(city) {
    let count=0;
    const vowels=['a','e','i','o','u','A','E','I','O','U']
    for (let i = 0; i < city.length; i++) {
        if (vowels.includes(city[i])) {
            count++
        }
        
    }
    
    return count
   
}
let city="Naiiirroobi"
const vowelCount=countVowel(city)
console.log(vowelCount);

//Print a table containing multiplication tables
// const number = parseInt(prompt('Enter an integer: '));
let number=3

function multTable(number) {
    for(let i = 1; i <= 10; i++) {
        const result = i * number;
        console.log(`${number} * ${i} = ${result}`);
     } 
}
multTable(number)

//Create a length converter function
function converter() {
    
}
//Create a function that filters out negative numbers
let arrr=[3,-4,2,4,-2,5,8,-5,-9,8]
// function filter(arr) {
//     let emptyArray=[];
//     for (let b =0; b< arr.length; b++) {
//        if (b<0) {
//         emptyArray.push(arr.shift())
    
//        }
       
//     }
//     console.log(emptyArray);
// }
// filter(arr)

function filternegative(arr) {
    return arr.filter(arr=>arr<=0);
}
let arr=[3,-4,2,4,-2,5,8,-5,-9,8]
console.log(filternegative(arr));


//Print a table containing multiplication tables
function tableCreate() {
    for (let n = 1; n <=10; n++) {
       let row=' ';
       for (let v = 1; v <=10; v++) {
          row+=(n*v)+'\t'
        
       }
        console.log(row);
    }
}
tableCreate()

//Write a function that takes a string as input and 
//returns the most common character in the string.
// function commonCharacter(String) {
    
//  for (let z = char; z < String.length; z++) {
//     let repeated=z>1
//     if (z>1) {
//         console.log(repeated);
//     }
    
//    }
// }
// let String="Goodbye"
// commonCharacter(String)

//prime numbers between 0 to 20
function primenumbers() {
    for (let k = 0; k <=20; k++) {
        let res=0
      for (let m = 0; m < k; m++) {
       if (m%k===0) {
           res=1
       }
        
      }
      console.log(res);
    }
}
primenumbers()

// Write a function that takes a string as an argument and returns
//  true if the string is a palindrome 
// (reads the same backwards and forwards) and false if it is not.
function palindrome(str) {
    return str === str.split('').reverse().join('')
    
}
console.log( palindrome("dad"));
console.log( palindrome("school"))

//second option
function checkPalindrome(String) {
    const array=String.split('').reverse().join('')
    if (array===String) {
        console.log("true");
    }
    else{
        console.log("false");
    }
}
let String="civic"
checkPalindrome(String)

//Write a function that sums up all the odd numbers squared in an array

function sumOdd() {
    sum=0
    for (let x = 0; x <=10; x++) {
       if (x%2!==0) {
        sum+=x
       }
    }
    console.log(sum*sum);
}
sumOdd() 

//Write a function that sums up all the odd numbers squared in an array

function sOdd() {
    summ=0
    for (let t = 0; t<=10; t++) {
       if (t%2!==0) {
        summ+=(t*t)
       }
    }
    console.log(summ);
}
sOdd() 

//Write a function that takes two arrays of integers and returns a new array that co
//ntains all the integers that are present in both input arrays.
function array(arr1,arr2) {
    let emptyArray=[];
    for (let x = 0; x < arr1.length && x < arr2.length ; x++) {
        if (x===arr1 && x===arr2) {
            emptyArray.push(arr1.shift() && arr2.shift())
        }
         
    }
    console.log(emptyArray);
}
let arr1=[2,4,6,7,8,9,65];
let arr2=[2,12,3,4,8,65]
array(arr1,arr2) 



