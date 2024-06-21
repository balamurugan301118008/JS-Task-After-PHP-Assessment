
window.addEventListener("DOMContentLoaded", Posts)
let container = document.querySelector(".container")
function Posts() {
    for (let i = 0; i <= 10; i++) {
        fetch(`https://dummyjson.com/products/${i}`)
            .then(res => res.json())
            .then(datum => {
                console.log(datum);
                let id = document.createElement("h2")
                id.innerText = `Id: ${datum.id}`
                container.append(id)

                let title = document.createElement("p")
                title.innerText = `Title : ${datum.title}`
                container.append(title)

                let price = document.createElement("h4")
                price.innerText = `Price : ${datum.price}`
                container.append(price)

                let brand = document.createElement("h4")
                brand.innerText = `brand : ${datum.brand}`
                container.append(brand)

                let stock = document.createElement("h4")
                stock.innerText = `stock : ${datum.stock}`
                container.append(stock)

                let category = document.createElement("h4")
                category.innerText = `category : ${datum.category}`
                container.append(category)

                let description = document.createElement("h4")
                description.innerText = `description : ${datum.description}`
                container.append(description)

                let thumbnail = document.createElement("img")
                thumbnail.src = datum.thumbnail
                thumbnail.style.width = "200px";
                thumbnail.style.height = "200px"
                container.append(thumbnail)

                let discountPercentage = document.createElement("h4")
                discountPercentage.innerText = `discountPercentage : ${datum.discountPercentage}`
                container.append(discountPercentage)
                let rating = document.createElement("h4")
                rating.innerText = `rating : ${datum.rating}`
                container.append(rating)

                let image = datum.images
                image.forEach(img => {
                    let image = document.createElement("img")
                    image.src = img
                    image.style.width = "100px";
                    image.style.height = "100px"
                    container.append(image)
                });
            })
    }
}