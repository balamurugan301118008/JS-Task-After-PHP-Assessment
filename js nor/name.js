const selec = document.querySelector("#color")

const colors = document.querySelector(".colors")

const name = document.querySelector("p")

selec.addEventListener("click",()=>{
    clor = selec.value
    colors.style.background = clor
    name.innerText = clor
})