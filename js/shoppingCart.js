let productContainer = document.querySelector(".cproducts")
let cartProducts =JSON.parse(localStorage.getItem("cartproducts")) 
let favProducts = JSON.parse(localStorage.getItem("favproducts"))
let productInCartContainer = document.querySelector(".products-in-cart")
let productInFavContainer = document.querySelector(".products-in-fav")
var totalPrice = 0
var prices = []
let price = document.querySelector(".total-price")



if(cartProducts) {
    prices=cartProducts.map((item) =>
        item.price
    )
    for(let i=0 ; i<prices.length ; i++) {
        totalPrice+=prices[i]
    }
    price.innerHTML=totalPrice + "$"

    drawCart(cartProducts)
}
else {
    productInCartContainer.innerHTML=`<div class="no-products">No Products In Your Cart</div>`
}
if(favProducts) {
    drawFav(favProducts)
}
else {
    productInFavContainer.innerHTML=`<div class="no-products">No Products In Your Favourites</div>`
}

function drawCart(items) {
    productInCartContainer.innerHTML=""
    items.map((ele) => {
        var item = document.createElement("div")
        item.classList.add("cart-item")
        item.innerHTML=`
            <img src="images/${ele.img}" class="my-2" alt=${ele.name}>
            <p>Product :${ele.name}</p>
            <p>Price : ${ele.price} $</p>
            <p>Category : ${ele.category}</p>
            <div class="d-flex justify-content-center mb-2">
                <button type="button"  class="addtocart-btn" onclick=removeFromCart(${ele.id})>"Remove From Cart"</button>
            </div>
        `
        productInCartContainer.appendChild(item)

})
}

function drawFav (items) {
    productInFavContainer.innerHTML=''
    items.map((ele) => {
        var item = document.createElement("div")
        item.classList.add("fav-item")
        item.innerHTML=`
            <img src="images/${ele.img}" class="my-2" alt=${ele.name}>
            <p>Product :${ele.name}</p>
            <p>Price : ${ele.price} $</p>
            <div class="d-flex justify-content-center mb-2">
               <i class="fa-solid fa-heart fav-icon text-danger" onclick=removeFromFav(${ele.id})></i>
            </div>
        `
        productInFavContainer.appendChild(item)
})
}


function removeFromCart(id) {
    let idArr = cartProducts.map((item) =>
        item.id
    )

    let removedItemIndex = idArr.indexOf(id)
    let removedItem = cartProducts[removedItemIndex]

    if (removedItemIndex!=-1) {
        cartProducts.splice(removedItemIndex,1)
        price.innerHTML= (totalPrice-=removedItem.price )+ "$"
    }
    localStorage.setItem("cartproducts" , JSON.stringify(cartProducts))
        drawCart(cartProducts)
        if(JSON.parse(localStorage.getItem ("cartproducts")).length===0) {
            productInCartContainer.innerHTML=`<div class="no-products">No Products In Your Cart</div>`
        }
}
if(JSON.parse(localStorage.getItem ("cartproducts")).length===0) {
    productInCartContainer.innerHTML=`<div class="no-products">No Products In Your Cart</div>`
}


function removeFromFav(id) {
    let idFarr = favProducts.map((item) =>
        item.id
    )

    let removedFitemIndex = idFarr.indexOf(id)
    // let removedFitem = favProducts[removedFitemIndex]

    if (removedFitemIndex!=-1) {
        favProducts.splice(removedFitemIndex,1)
    }
    localStorage.setItem("favproducts" , JSON.stringify(favProducts))
        drawFav(favProducts)
        if(JSON.parse(localStorage.getItem ("favproducts")).length===0) {
            productInFavContainer.innerHTML=`<div class="no-products">No Products In Your Favourites</div>`
        }
}
if(JSON.parse(localStorage.getItem ("favproducts")).length===0) {
    productInFavContainer.innerHTML=`<div class="no-products">No Products In Your Favourites</div>`
}


