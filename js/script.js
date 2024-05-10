//  1 - login   sign up + save data in local storage 
// 2 -products // add products to cart // add some products fav and delete
// add 1 or more products 
// user without login can see only the products 
///////////////////////////////////////////////////////////////////////////////////
// a" removed succussfully toast " done
// a remove all button in the cart page 

////////////////////////////////////////////////////////////////////////////////// -1-

//this must be in all pages

let userInfo = document.getElementById("user_info")
let user = document.getElementById("user")
let links = document.getElementById("links")
let logOut = document.getElementById("logout")
// console.log(window.Log)
if (localStorage.getItem("user_name")) {
    // links.remove()
    links.style.display = "none"
    userInfo.style.display = "flex"
    user.innerHTML = localStorage.getItem("user_name")

}

logOut.addEventListener("click", function () {
    localStorage.clear()
})
/////////////////////////////////////////////////////////// 2- 


///you make a tables of data then draw only one item and fill it with datat then return it by map and draw it by innerhtml


// let allProducts = document.querySelectorAll(".products li") // this returns a node list and not a real array
let allProducts = document.querySelector(".products")
var productsData = [
    {
        id: 1,
        title: "REFY - Duo Brush",
        imagesUrl: "./Images/refry-removebg-preview.png",
        discription: "REFY's Duo Brush is made from synthetic vegan fibres. It has been designed for perfect application when using our Cream Bronzer and Cream Blush.",
        price: "1000$",
        category : "brush"
    },
    {
        id: 2,
        title: "Combo Lip",
        imagesUrl: "./Images/lipstick.jpg",
        discription: "From new skincare finds perfect for the cold weather to holiday-approved eyeshadow and lip combos , this is my current Sephora wishlist.",
        price: "1500$",
        category : "Lip Stick"
    }, {
        id: 3,
        title: "Lash Princess Mascara",
        imagesUrl: "./Images/maskara.jpg",
        discription: "essence - Lash Princess False Lash Effect Mascara . Gluten & Cruelty Free . Volumizing mascara with a conically shaped fiber brush for a false lash effect.",
        price: "555$",
        category : "maskara"
    },
    {
        id: 4,
        title: "Yasu Eye Shadow Plate",
        imagesUrl: "./Images/eyelash.png",
        discription: "essence - Lash Princess False Lash Effect Mascara . Gluten & Cruelty Free . Volumizing mascara with a conically shaped fiber brush for a false lash effect.",
        price: "90$",
        category :"plate"
    },
    {
        id: 5,
        title: "E.L.F. Liquid Filter",
        imagesUrl: "./Images/fondation.png",
        discription: "essence - Lash Princess False Lash Effect Mascara . Gluten & Cruelty Free . Volumizing mascara with a conically shaped fiber brush for a false lash effect.",
        price: "800$",
        category : "fondation"
    }, {
        id: 6,
        title: "Eyelash Curler",
        imagesUrl: "./Images/roler.png",
        discription: "essence - Lash Princess False Lash Effect Mascara . Gluten & Cruelty Free . Volumizing mascara with a conically shaped fiber brush for a false lash effect.",
        price: "700$",
        category : "eyelash curler"
    }, {
        id: 7,
        title: "KIKO Lip-Stick",
        imagesUrl: "./Images/d758031fe9c566ad2b7797e1cf99f219-removebg-preview.png",
        discription: "essence - Lash Princess False Lash Effect Mascara . Gluten & Cruelty Free . Volumizing mascara with a conically shaped fiber brush for a false lash effect.",
        price: "308$",
        category :"Lip Stick"
    },
    {
        id: 8,
        title: "Blusher",
        imagesUrl: "./Images/blush.png",
        discription: "essence - Lash Princess False Lash Effect Mascara . Gluten & Cruelty Free . Volumizing mascara with a conically shaped fiber brush for a false lash effect.",
        price: "930$",
        category :"fondation"
    }
,
    {
        id: 9,
        title: "Brush2",
        imagesUrl: "./Images/brush3.jpg",
        discription: "REFY's Duo Brush is made from synthetic vegan fibres. It has been designed for perfect application when using our Cream Bronzer and Cream Blush.",
        price: "1000$",
        category : "brush"
    }
,
    {
        id: 10,
        title: "Brush3",
        imagesUrl: "./Images/brushTow.jpg",
        discription: "REFY's Duo Brush is made from synthetic vegan fibres. It has been designed for perfect application when using our Cream Bronzer and Cream Blush.",
        price: "1000$",
        category : "brush"
    }
    ,
    {
        id: 11,
        title: "Brush4",
        imagesUrl: "./Images/brushFour.jpg",
        discription: "REFY's Duo Brush is made from synthetic vegan fibres. It has been designed for perfect application when using our Cream Bronzer and Cream Blush.",
        price: "1000$",
        category : "brush"
    }
    
]

function drawItems() {
    let y = productsData.map((item) => {
        return `<li price="${item.price}}" class="card border-info p-0">
        <div class="card-header  bg-light text-center text-capitalize  lead">
           ${item.title}
        </div>
        <img src="${item.imagesUrl}" height="200" alt="" class="card-img p-2 rounded-4">

        <div class="card-body text-center">
            <p class="text-muted text-start">
               ${item.discription}
            </p>
        </div>
        <div class="order-5 card-footer text-center">${item.price}</div>

        <a href="#result" class="btn btn-outline-info w-75 m-auto mb-3 " onClick="AddToCart(${item.id})"><i
                class="bi bi-cart-plus-fill me-2"></i>Add to
            chart
        </a>

    </li>`
    })


    allProducts.innerHTML = y.join("\n")
}

drawItems()
let cartProductsDiv = document.querySelector(".carts_products ul") // element's names will be added here
let cartProducts = document.querySelector(".carts_products")
let badge = document.querySelector(".shopping_cart .badge")
let icon = document.querySelector(".shopping_cart i")



/// hide and show when click the chart icon
icon.addEventListener("click", function () {
    // if (cartProductsDiv.innerHTML != "") {
    if (cartProducts.style.display == "block")
        cartProducts.style.display = "none"
    else
        cartProducts.style.display = "block"
    // }
})

//on load checking  && also when removing an item
let productsInCart = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : []
if (productsInCart) {
    productsInCart.forEach(item => {
        cartProductsDiv.innerHTML += `<li id="${item.id}" >${item.title}</li>`
        console.log("this htis")
    })

    if (cartProductsDiv.childElementCount == 0) {
        badge.style.display = "none"
    }
    else {
        badge.style.display = "block"
        badge.innerHTML = cartProductsDiv.childElementCount
    }

}


// add item to cartlist when click add to chart button

function AddToCart(id) {
    if (localStorage.getItem("user_name") != null) {
        let choosenItem = productsData.find((item) => {
            return item.id === id
        })
        //show adde product in the products cart Div
        cartProductsDiv.innerHTML += `<li id="${choosenItem.id}">${choosenItem.title}</li>`
        console.log(cartProductsDiv)
        // show number of items in cart on the cart icon
        badge.style.display = "block"
        badge.innerHTML = cartProductsDiv.childElementCount

        // store the added item's info to the local storige
        productsInCart.push(choosenItem)
        localStorage.setItem("productsInCart", JSON.stringify(productsInCart))

        // show a toast message saying it was added suuccesfully

        let ToastElement = document.createElement("div")
        ToastElement.classList.add("toastDiv", "text-dark")

        let ToastIcon = document.createElement("i")
        ToastIcon.classList.add("bi", "bi-check-circle-fill", "me-2", "text-success")

        let ToastText = document.createTextNode("Item Added to Cart Successfully!")

        ToastElement.appendChild(ToastIcon)
        ToastElement.appendChild(ToastText)

        document.body.insertBefore(ToastElement, document.querySelector("section"))
        setTimeout(() => {
            ToastElement.remove()
        }, 1800)
    } else {
        alert("Create an account first please!")
    }
}


