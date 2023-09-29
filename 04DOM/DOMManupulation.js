function appending() {const dev = document.createElement('div')
console.log(dev);
dev.className = "main";
dev.id = Math.random((Math.random * 10 )+1)
dev.setAttribute("title" , "generate title")
dev.style.backgroundColor = "red"
dev.style.padding = "15px"
dev.style.color = "white"
// dev.innerText = "chai aur code"
const insText = document.createTextNode("chai aur code")
dev.appendChild(insText)
document.body.append(dev)
} 
 function randomValu() {const set =document.createElement("div")
 console.log(set);
 set.style.backgroundColor = "green"
 set.style.Color = "blue"
 set.padding = "20px"
 const get = document.createTextNode(Math.floor(Math.random() * 10 +1))
 set.appendChild(get)
 document.body.append(set)
}
function abc() {
    let lan = prompt("please enter your name", "javascript")
    function addlang(inputlan){
        const lu = document.createElement("li")
        lu.innerHTML=`${inputlan}`
        document.querySelector(".alias").appendChild(lu)
     }addlang(lan)
}

//appending an li element into the unordered list
 

