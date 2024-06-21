
let maincontainer = document.querySelector(".maincontainer")

window.addEventListener("DOMContentLoaded", craeteEle)
function craeteEle() {
    let pTags = document.createElement('button')
    pTags.innerText = "P"
    let divTags = document.createElement('button')
    divTags.innerText = "Div tag"

    // let headerTags = document.createElement("select")
    // let h1 = document.createElement('option')
    // let h2 = document.createElement('option')
    // let h3 = document.createElement('option')
    // let h4 = document.createElement('option')
    // let h5 = document.createElement('option')
    // let h6 = document.createElement('option')
    // h1.value = "h1"
    // h2.value = "h2"
    // h3.value = "h3"
    // option.value = "h1"
    // option.value = "h2"
    // option.value = "h3"
    // headerTags.append(option)
    // // console.log(headerTags);
    maincontainer.append(pTags)
    maincontainer.append(divTags)

    pTags.addEventListener("click", () => {
        let p = document.createElement("p");
        p.innerText = "Paragraph";
        maincontainer.appendChild(p);
        console.log(p);
    })
    divTags.addEventListener("click", () => {
        let div = document.createElement("div");
        let ele = document.createElement("h3")
        ele.innerText = "div tag"
        div.appendChild(ele)
        maincontainer.append(div)
    })
}