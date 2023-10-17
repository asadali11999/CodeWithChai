// new Promise (function(resolve , reject){
//   setTimeout ( 
//     function() {console.log('this is new promise ')
//     resolve()}
//    ,1000)
// }).then(function(){
//     console.log('this is ten log ');
// })

// let ali = {
//     user : 'Ali Asif ',
//     email:'asad37837@gmail.com',
//     age:23,
//     height:`5'10" `
// }
// const twoPromise  = new Promise (function(resolve , reject ){   
//         setTimeout(
//             function(){
//                 console.log('this is the second console ');
//                 resolve(ali)
//             }
//         ,1000)
//         // {user:"Ali Asif " ,email:"asad3783@gamail.com"}
// })
// twoPromise.then(function(user){
//     console.log(user);
// })

// function user(userName, islogedIn, loginCount ){
//     this.userName = userName;
//     this.islogedIn = islogedIn;
//     this.loginCount = loginCount;
//     console.log(this.userName);

//     //  return this.loginCount;
// }
// const userOne =new user('ALi Asif', true, 8)
// console.log(userOne); 

function init(){
    let name = "ali asif"
    function ali()  {
        console.log(name);
    }ali()
}
init()