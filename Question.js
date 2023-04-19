//Given an array of unsorted numbers, 
//return the index of the following target if the target exists in the array.
 //If the target is not found, return null
// let num=[45,12,6,89,2,5]
// let target=6
//Mergesort
function divideArray(num){
    if(num.length<=1){
        return num
    }
    let middle =Math.floor ((num.length)/2);
    let left = num.slice(0,middle);
    console.log("left",left)
    let right=num.slice(middle);
    console.log("right",right);
   return mergesort(divideArray (left),divideArray (right));
}
function mergesort(left,right){
    emptyArray=[];
    while(left.length && right.length){
        if(right[0]<=left[0]){
         emptyArray.push(right.shift());
        }
        else{
            emptyArray.push(left.shift());
        }
       
    }
    return[...emptyArray,...left,...right];
}
let num=[45,12,6,89,2,5]
// let target=6
console.log(divideArray(num));

//Binary search
function binarysearch(numm,target){
    leftIndex=0;
    rightIndex=numm.length-1
    while(leftIndex<=rightIndex){
        let middle=Math.floor((leftIndex+rightIndex)/2)
        if (numm[middle]===target) {
            return middle
        }else if(numm[middle]<target){
            leftIndex=middle+1
        }else{
            rightIndex=middle-1
        }
    }
    
}
let numm=[2,5,6,12,45,89]
target=6
console.log(binarysearch(numm,target))


//Write a program that takes a year as input and
// outputs whether it is a leap year or not.
//(A leap year is a year that is divisible by 4, except for years
// that are divisible by 100 but not divisible by 400.
// let x=0
let year = 2024
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}
console.log('${year} is leap year//is not a leap year');

// function drinks(){
//         let text;
//         let favDrink = prompt("What's your favorite drink?", "Coca-Cola"); alert(favDrink);
//         switch(favDrink) {
//           case "Coca-Cola":
//             text = "Excellent choice. Coca-Cola is good for your soul.";
//             break;
//           case "Pepsi":
//             text = "Pepsi is my favorite too!";
//             break;
//           case "Sprite":
//             text = "Really? Are you sure the Sprite is your favorite?";
//             break;
//           default:
//             text = "I have never heard of that one..";
//         }
//  }