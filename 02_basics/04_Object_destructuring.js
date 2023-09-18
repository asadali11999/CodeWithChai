let user = {
    id: "ali.12",
    email:"asad@gmail.com",
    pass: 123456,
    city:"karachi"
}
// here we are accessing the id of user 
console.log(user.id);
console.log(user["city"]); /*but yoou have to asign the all dot notation al the ~time */
 /*but yoou have to asign the all dot notation al the time */
//if you want to use the same property diffrent time now you dont have to use the dot notation or the block brases all the time u just deconstruct it like below
var user2 = {
     obj2: {
     id: "ali.12",
    email:"asad@gmail.com",
    pass: 123456,
    city:"karachi"
    }
}
 let {id} = (user2.obj2)
 console.log(id);
 console.log(id);

 console.log(id);
 console.log(id);
 //here if you wanna chnage its property name of email
 let {email : asadEmail } = (user2.obj2)
 
 console.log(asadEmail);// look the emai property has been chnaged to "asadEmail" (email : asadEmail)

 console.log(asadEmail);

