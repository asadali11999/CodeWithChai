let obj1 = {
    2:"a",
    3:"b"
}
let obj2 = {
    4:"a",
    5:"b"
}
//how to merge diffrent obj into one 

// there are many ways bu these are two best ways 

// let obj4 = Object.assign(obj1,obj2)


// here the curly brases "{}" is th etarget where all the objs will asign rather than the first "obj1"
let obj4 = Object.assign({},obj1,obj2)

let obj3 = {...obj1 , ...obj2}//spred operator 


console.log(obj3);
console.log(obj4);
