let productsInCart = localStorage.getItem("productsInCart")
let Allproducts = document.querySelector(".products")
let RemoveAllBtn = document.querySelector("#removeAll")
let EmptyCart = document.getElementsByClassName("EmptyCart")
RemoveAllBtn.addEventListener("click",RemoveAll)


if (productsInCart != "[]") {
    console.log( Object.prototype.toString.call(productsInCart))
   
    // console.log(productsInCart)
    productsInCart = JSON.parse(productsInCart)
   console.log( Object.prototype.toString.call(productsInCart))
    RemoveAllBtn.style.display="block"
    drawItems()
} else {
    EmptyCart[0].style.display = "flex"
}

function drawItems() {

    let y = productsInCart.map(item => {
        return `<li id="${item.id}" price="${item.price}" class="card border-info p-0">
    <div class="card-header  bg-light text-center text-capitalize  lead">
       ${item.title}
    </div>
    <img src="${item.imagesUrl}" height="200" alt=""
        class="card-img p-2 rounded-4">

    <div class="card-body text-center">
        <p class="text-muted text-start">
           ${item.discription}
        </p>
    </div>
    <div class="order-5 card-footer text-center">${item.price}</div>

    <a href="#result" class="btn btn-outline-danger w-75 m-auto mb-3 " onClick="Remove(${item.id})">
    <i class="bi bi-cart-x-fill"></i>
    Remove from cart
    </a>
</li>`
    })

    Allproducts.innerHTML = y.join("")

}


function RemoveAll(){
    //Empty local storige
productsInCart =[]
localStorage.setItem("productsInCart", JSON.stringify(productsInCart))
    //Refresh interface
    if (window.confirm("Do you really want delete All items in your cart?")) {
        setTimeout(()=>{
            location.reload()
            },1000)
      }
   
    
}


function Remove(id) {
    let deletedProduct = productsInCart.find(ele => {
        return ele.id === id
    }
    )
    productsInCart.splice(productsInCart.indexOf(deletedProduct), 1)

    localStorage.setItem("productsInCart", JSON.stringify(productsInCart))



    let cartProductsDiv = document.querySelector(".carts_products ul") // element's names will be added here
    let badge = document.querySelector(".shopping_cart .badge")
    // console.log(deletedProduct.id)
    let ToRemoveItem = document.querySelector(`.carts_products ul li[id="${deletedProduct.id}"]`)  /// element's names will be added here
    ToRemoveItem.remove()


    let ToTransion = document.querySelector(`.products li[id="${deletedProduct.id}"]`) //the product card element

    // show a toast message saying it was removed suuccesfully

    // let ToastElement = document.createElement("div")
    // ToastElement.classList.add("toastDiv",  "text-dark")

    // let ToastIcon = document.createElement("i")
    // ToastIcon.classList.add("bi", "bi-check-circle-fill", "me-2", "text-success")

    // let ToastText = document.createTextNode("Item removed from Cart Successfully!")

    // ToastElement.appendChild(ToastIcon)
    // ToastElement.appendChild(ToastText)

    // document.body.insertBefore(ToastElement, document.querySelector("section"))
    // setTimeout(() => {
    //     ToastElement.remove()

    // }, 1800)

    ToTransion.classList.add("cartProductsDivItem")

    ToTransion.addEventListener("transitionend", function () {

        console.log("transion has finished")

        drawItems()


    })


    if (cartProductsDiv.childElementCount == 0) {
        setTimeout(()=>{
            badge.style.display = "none"
            let EmptyCart = document.getElementsByClassName("EmptyCart")
            EmptyCart[0].style.display = "flex"
            RemoveAllBtn.style.display="none"
        }
        ,2000)}
      
    else {
        badge.style.display = "block"
        badge.innerHTML = cartProductsDiv.childElementCount
    }



}