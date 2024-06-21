let addTask = document.querySelector(".addTask")
let taskname = document.querySelector(".taskname")
let taskContainer = document.querySelector(".taskContainer")


addTask.addEventListener("click",()=>{
    let list = document.createElement("h4")
    list.setAttribute("class","tasks")
    list.innerText = taskname.value
    taskname.value = " ";
    let del = document.createElement("i")
    del.setAttribute("class",'fa-solid fa-trash')

    let con = document.createElement("div")
    con.setAttribute("class","taskInnerContainer")
    con.appendChild(list)
    con.appendChild(del)
    taskContainer.appendChild(con)

    del.addEventListener("click",(e)=>{
        console.log(e.target.parentElement.remove());
    })
})

function myFunction(a){
    let val =  a.filter((elem)=> elem < 0 );
    console.log(val.length)
    }
    myFunction([1,2,-32,-54,6,1 ]);