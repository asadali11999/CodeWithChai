// const time = document.querySelector('clock')
// setInterval(function () {
//     let date = new Date();
//     clock.innerHTML=date.toLocaleTimeString();
// // console.log(date.toLocaleTimeString()); 
// }, 1000);
const clock = document.getElementById('clock')
setInterval(() => {
    let date = new Date()
    // let hour = document.createTextNode(date.toLocaleTimeString())
    // clock.append(hour) //this func is not working its appending its child every second
    clock.innerHTML=date.toLocaleTimeString();
}, 1000);

