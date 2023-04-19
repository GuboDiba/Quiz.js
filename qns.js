
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