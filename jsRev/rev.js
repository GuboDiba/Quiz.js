const person={
    name: "John",
    age:30,

}
console.log(person.name);
console.log(person["age"]);

const student ={
    name:"Amina",
    age:13,
    marks: {
        sience:56,
        english:90,
        cre:98
    

    }
}
console.log(student.name);
console.log(student.marks);
console.log(student.marks.cre);

const people={
    name:"kim",
    weigh:45,
    greet:function () {console.log("hello");
        
    }
}
console.log(people.weigh);
console.log(people.greet());



//crete a call back function that substract the value of a function 
// executed and then calls the callback function
function substraction(a,b) {
   return a-b
}
function callback(result) {
console.log("The result",result);
    
}
function performCalcultaion(a,b,callback) {
    const result = substract(a,b);
    callback(result)
    
}
performCalcultaion(10,5,callback)