let name = "Gubo, Diba,";
let length = name.length;
console.log(length)

let names =["Masian","Gubo","Purity","Ann","Winny","Buraje"];
let lengths=names.length;
console.log(lengths);
let sht=names.unshift("Moraa");
console.log(sht)
console.log(names)

let fruits ="Apple, Banana, Mango";
let len = fruits.length;
console.log(len);
let part = fruits.slice(5,16);
console.log(part);
let parts=fruits.slice(-10);
console.log(parts);
let par = fruits.slice(-12,-7);
console.log(par);
let sub= fruits.substring(7,13);
console.log(sub);
let sb=fruits.substring(-12,-7); //substring does not apply on negative indexing
console.log(sb);
let subb=fruits.substr(5,10); //combination of negative and poitive 
console.log(subb);
console.log(fruits);
let newstring=fruits.replace("Mango","Kiwi");
console.log(newstring);
let newst=fruits.replace("Apple","Melon");
console.log(newst);
let upcase=fruits.toUpperCase();
console.log(upcase);
let matunda=fruits.toUpperCase("matunda");
console.log(matunda);
let low=fruits.toLowerCase();
console.log(low)
let concat=fruits.concat(" ",matunda);
console.log(concat);

let numb ="5";
let text =numb.toString();
let padded = text.padStart(4,"0");
console.log(padded);

let num = "7";
let str = num.toString();
let paded =str.padEnd(8,"2");
console.log(paded);

//Extracting String Characters
let txt="i love Javascript";
let char =txt.charAt(4);
console.log(char);
let charcode=txt.charCodeAt(1);
console.log(charcode);

//Converting String to an Array
let places="Nairobi,Nakuru,Mombasa,Eldoret,Marsabit";
let pls=places.split(",");
console.log(pls);
let plas=places.split(" ");
console.log(plas);
let plaas=places.split("|");
console.log(plaas);

//String Search Method
let country="Kenya Ethiopia Somalia Uganda Tanzania Somalia";
let index=country.indexOf("Somalia");
console.log(index);
let inde=country.lastIndexOf("Somalia");
console.log(inde);
let indes=country.indexOf("Somalia",16);
console.log(indes);
let search=country.search("Somalia");
console.log(search);
let match=country.match("malia");
console.log(match);
let inc=country.includes("Somalia");
console.log(inc)
let incl=country.includes("Burundi");
console.log(incl);
let inclu=country.includes("Kenya",3);
console.log(inclu);
let start=country.startsWith("Kenya");
console.log(start);
let end =country.endsWith("Somalia");
console.log(end);

//Arrays
//Accessing Array Elements
const cars=["Saab","Volvo","BMW"];
let car =cars[2];
console.log(car);
//Changing an Array Element
let crs=cars[1];
console.log(crs);
//Accessing the full Array
console.log(cars);
//sorting an Array
let sorted=cars.sort();
console.log(sorted);
let carlength=cars.length;
console.log(carlength)
//Accessing the last element in an Array
let last =cars[cars.length-1];
console.log(last);
//checking the type of arrays
let typ=typeof cars;
console.log(typ)
let inst=cars instanceof Array;
console.log(inst);
//remove last element
let remove =cars.pop();
console.log(remove);
//add element at the end of the eements
let add =cars.push("Toyota");
console.log(add);
console.log(cars);
//remove the first element of an Array
let shift=cars.shift();
console.log(shift);
console.log(cars);
//Add element at the begining of an  Array
let unshift=cars.unshift("Nissan")
console.log(unshift);
console.log(cars);

//Sorting
const numbers=[2,37,98,90,2,45,72,13,56,87];
let sort =numbers.sort(function(a,b){return b-a});
console.log(sort);
let join=numbers.join(",,");
console.log(join); 
let string=numbers.toString();
console.log(string);

//Merge Sort
//sorting
//divide the array
function divideArray(arr) {
  console.log({arr});
  if(arr.length <= 1){
      return arr;
  };
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
   let right = arr.slice(middle);
  console.log("middle1",middle);
  console.log("left1",left);
  console.log("right1",right);
   return sortedArray(divideArray(left), divideArray(right))
}
function sortedArray (left, right){
let emptyArray= [];
 console.log("emptyarray",emptyArray);
 console.log("left2",left);
console.log("right2",right);
while (right.length && left.length){
    console.log("left3",left);
    console.log("right3",right);
  if (right[0] < left[0]){
    emptyArray.push(right.shift());
    // console.log("right4",right);
  }
  else{
    emptyArray.push(left.shift());
  }
}
return [...emptyArray,...left,...right];
}

//the array
let arr = [3,10,2,26,15,11,4];
console.log(divideArray(arr));
//sorted an array using mergesort algorithm

let d="10"
let tre=d.split(" ");
console.log(tre)

const numm=[5,2,6,3,5];
const map=numm.map(x=>x*2);
console.log(map);

const words=["school","life","hurt","alot"];
const result=words.filter(word=>word.length>4);
console.log(result);
                                                                                                     

// //Binary search
// let nuum=[5,8,22,6,30,9,7,17,56,99,56]
// target=56

// function devidearr(nuum){
//   if(nuum.length<=1)
//   return nuum

// let middle=Math.floor((nuum.length)/2)
// let left=nuum.slice(0,middle)
// let right=nuum.slice(middle)
// return mergesort(devidearr(left),devidearr(right))
// }

// function mergesort(left,right){
//   emptyArray=[]
// while(left.length && right.length){
//   if(right[0]<left[0]){
//     emptyArray.push(right.shift())
//   }
//   else{
//    emptyArray.push(left.shift())
//   }
// }
// return [...emptyArray,...left,...right]

// }
// console.log(devidearr(nuum))

// function binarysearch(nuums,target){
//   leftIndex=0
//   rightIndex=nuums.length-1
//   while(leftIndex<=rightIndex){
//     let middleIndex=Math.floor((leftIndex+rightIndex)/2)
//     if(nuums[middleIndex]===target){
//       return middleIndex
//     }else if(nuums[middleIndex]>target){
//        rightIndex=middleIndex-1
//     }else{
//       leftIndex= middleIndex+1
//     }
   
   

//   }
//   return null
  
// }
// let nuums=[4,6,7,8,9,17,22,30,56,99]
// target =56
// console.log(binarysearch(nuums,target));

// Find the first and last occurrence
// of a target value in a sorted array
function findFirstAndLast(arrr, target) {
  const first = binarySearch(arrr, target, true);
  const last = binarySearch(arrr, target, false);
  return [first, last];
}
function binarySearch(arrr, target, isFirst) {
  let left = 0;
  let right = arrr.length - 1;
  let result = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arrr[mid] === target) {
      result = mid;
      if (isFirst) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (arrr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}
const arrr = [1, 2, 2, 3, 3, 3, 4, 5];
const target = 3;
const [first, lasts] = findFirstAndLast(arr, target);
console.log(`First occurrence: ${first}`);
console.log(`Last occurrence: ${last}`);


//Converting string to integers
function convert() {
  var a="100"
  var b=parseInt(a);
  console.log("integer" + b);
}
convert()

function tointegers() {
  var x="100"
  var c=x*1
  console.log(c);
 console.log( typeof(c));
}
tointegers()