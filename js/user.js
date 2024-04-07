//this must be in all pages

let userInfo = document.getElementById("user_info")
let user  = document.getElementById("user")
let links = document.getElementById("links")
let logOut = document.getElementById("logout")
// console.log(window.Log)
if(localStorage.getItem("user_name")){
    // links.remove()
    links.style.display = "none"
    userInfo.style.display ="flex"
    user.innerHTML = localStorage.getItem("user_name")
}

logOut.addEventListener("click",function (){
localStorage.clear()
})

/// hide and show when click the chart icon
let cartProducts = document.querySelector(".carts_products")
let icon = document.querySelector(".shopping_cart i")

icon.addEventListener("click", function () {
        if (cartProducts.style.display == "block")
            cartProducts.style.display = "none"
        else
            cartProducts.style.display = "block"
   
})


//on load checking for products in cart div
let cartProductsDiv = document.querySelector(".carts_products ul") // element's names will be added here
let badge = document.querySelector(".shopping_cart .badge")

let productsInCartCheck =  localStorage.getItem("productsInCart")?  JSON.parse(localStorage.getItem("productsInCart")) : []
if(productsInCartCheck){
    let y = productsInCartCheck.map(item=>{
        return `<li id="${item.id}" >${item.title}</li>`
    })
    cartProductsDiv.innerHTML = y.join("")

    if(cartProductsDiv.childElementCount !== 0){
    badge.style.display = "block"
    badge.innerHTML = cartProductsDiv.childElementCount}
    else{
        badge.style.display = "none"
    }

}