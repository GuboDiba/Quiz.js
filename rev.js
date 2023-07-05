// This function takes an array containing strings, as its only argument
// and returns an array of equal length containing the `true`
// if the corresponding entry in the original array is 'apple'
// and `false` if it is anything else.
function checkApple(array) {
    let caps=[]
    let empty=[]
    for (let x = 0; x < array.length; x++) {
         let newArray=array[x].toUpperCase()
         caps.push(newArray)
         console.log(caps);
         
         
        if (caps[x]==="APPLE") {
          empty.push(true)
        }else{
            empty.push(false)
        }
        
    }
    return empty
}
let array=["Mangos","Apple","Oranges","Melon"]
console.log(checkApple(array));


const arr=["apple","melon","cherry"]



function returnarr(arr) {
    const newarr=arr.map(i=> i.toUpperCase())
    return newarr
}
console.log(returnarr(["Mangos","Apple","Oranges","Melon"]));

numbers=[34,66,77,3,56,90,33,47]
const nums=numbers.filter(i=>i%2!==0)
console.log(nums);
let sum=0
const newnum=numbers.filter(i => i > sum)
console.log(sum);