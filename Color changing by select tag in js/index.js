let userNmae = document.querySelector(".name")
let error = document.querySelector("label")
userNmae.addEventListener("keyup", () => {
    let val = userNmae.value
    if (val.length >= 16) {
        error.style.display = "block";
        error.style.color = "red";
    }
})
let choosingColor = document.querySelector(".choosingColor")
let colorName = document.querySelector('.colorName')
let next = document.querySelector(".next")
let container = document.querySelector(".container")
let option = document.querySelector("option")
let pre = document.querySelector(".pre")
let array = [];
// console.log(option);
function changeColor() {
    container.style.backgroundColor = choosingColor.value
    colorName.innerText = choosingColor.value
}
window.addEventListener("DOMContentLoaded", changeColor)
choosingColor.addEventListener("click", changeColor);

for (let i = 0; i < choosingColor.length; i++) {
    array.push(choosingColor[i].innerText)
}

let increment = 0;

next.addEventListener("click", () => {
    increment++
    let va = array[increment]
    if (increment == choosingColor.length-1) {
        increment = 0;
    }
    console.log(increment);
    choosingColor.value = va
    container.style.backgroundColor = va
    colorName.innerText = va
})
pre.addEventListener("click", () => {
    increment--
    if(increment == -1){
        increment = 14
    }
    console.log(increment);
    let va = array[increment]
    choosingColor.value = va
    container.style.backgroundColor = va
    colorName.innerText = va
})


// let printName = document.querySelector(".printName")
// let content = document.querySelector(".content")
// let span = document.querySelector("span")
// printName.addEventListener("click", () => {
//     span.innerText = printName.value
//     // colorName.innerText = printName.value
//     console.log(colorName);
//     content.style.display = "block";
// })





// class User{
//     constructor(name){
//         // this.name = name;
//         // this.age = age;
//         return  `welcome to our site${this.name = name}`
//     }
//     // greeting() {
//     //     return `welcome to our site ${this.name}`
//     // }
// }
// let obj = new User('bala',20)
// // obj = greeting()
// let name = "bala";

// let cases= {
//     bala:"hello bala",
//     guna:"hello guna"
// }
// console.log(bala);