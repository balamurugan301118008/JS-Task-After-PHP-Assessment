
window.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/post")
        .then(response => response.json())
        .then(datum => {
            datum.forEach(data => {
                console.log(data.is_starred);
                // console.log(data.post_name);
                // console.log(data.id);
                // let task = data.id.map(ele => {
                //     return ele * 2;
                // })
                // console.log(task);
                // console.log();    
                // let fil = data.is_starred.filter(ele => {
                //     return ele;
                // })
                // console.log(fil);
            });
        })
})
// const birthYear = [12,3,3,23,32,3];
// const ages = birthYear.map(year => 2 * year);
// // console.log(ages);

// const fil = [12,12,12,3,43,54,3,54,2,1,23];
// const value = fil.filter((val) =>{
//     return val % 2 == 0;
// })
// console.log(value);