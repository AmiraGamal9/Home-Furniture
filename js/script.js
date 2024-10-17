// setup variables
let selectfield = document.querySelector("#select")
let searchfield = document.querySelector("#search")
let productContainer = document.querySelector(".products")
let addBtn = document.querySelector(".addtocart-btn")
let cartproducts = document.querySelector("#cart-products")
let cartproductsContainer = document.querySelector("#cart-products div")
let badge = document.querySelector(".cart-icon .badge")
let cartIcon = document.querySelector(".cart-icon #cart-icon-img")
let favIcon = document.querySelector(".fav-icon")
let productItem = document.querySelector(".item")
itemCount = document.querySelector(".count")





data = [
    {
        id:1,
        img:"chair1.jpg",
        name:"panton Junior",
        category:"seating furniture",
        price:80,
        count:1
    },
    {
        id:2,
        img:"sofa1.jpg",
        name:"suita Ottoman & Daybed",
        category:"seating furniture",
        price:120,
        count:1
    },
    {
        id:3,
        img:"clock1.jpg",
        name:"wall Clocks - Sunflower Clock",
        category:"accessories",
        price:45,
        count:1
    },
    {
        id:4,
        img:"table1.jpg",
        name:"trapèze",
        category:"tables",
        price:105,
        count:1

    }, {
        id:5,
        img:"bestseller1.jpg",
        name:"soft Seats",
        category:"bestseller",
        price:46,
        count:1
    },
    {
        id:6,
        img:"chair2.jpg",
        name:"organic Chair",
        category:"seating furniture",
        price:99,
        count:1
    },
    {
        id:7,
        img:"sofa2.jpg",
        name:"freeform Sofa, Freeform Ottoman",
        category:"seating furniture",
        price:150,
        count:1
    },
    {
        id:8,
        img:"clock2.jpg",
        name:"zoo Timers-Elihu the Elephant",
        category:"accessories",
        price:55,
        count:1
    },
    {
        id:9,
        img:"tabel2.jpg",
        name:"coffee Table",
        category:"tables",
        price:93,
        count:1
    },
    {
        id:10,
        img:"bestseller2.jpg",
        name:"iD Trim",
        category:"bestseller",
        price:60,
        count:1
    },
    {
        id:11,
        img:"chair3.jpg",
        name:"wiggle Side Chair",
        category:"seating furniture",
        price:156,
        count:1
    },
    {
        id:12,
        img:"sofa3.jpg",
        name:"suita 3-Seater, tufted",
        category:"seating furniture",
        price:110,
        count:1
    },
    {
        id:13,
        img:"clock3.jpg",
        name:"desk Clocks - Tripod Clock",
        category:"accessories",
        price:80,
        count:1
    },
    {
        id:14,
        img:"table3.jpg",
        name:"dining Table",
        category:"tables",
        price:140,
        count:1
    },
    {
        id:15,
        img:"bestseller3.jpg",
        name:"eames Elephant",
        category:"bestseller",
        price:100,
        count:1
    },
    {
        id:16,
        img:"chair4.jpg",
        name:"cone Chair",
        category:"seating furniture",
        price:120,
        count:1
    },
    {
        id:17,
        img:"sofa4.jpg",
        name:"anagram Sofa",
        category:"seating furniture",
        price:200,
        count:1
    },
    {
        id:18,
        img:"clock4.jpg",
        name:"wall Clocks-Turbine Clock",
        category:"accessories",
        price:90,
        count:1
    },
    {
        id:19,
        img:"table4.jpg",
        name:"guéridon",
        category:"tables",
        price:153,
        count:1
    },
    {
        id:20,
        img:"bestseller4.jpg",
        name:"corniches",
        category:"bestseller",
        price:120,
        count:1
    }
]

/////////////////////////////////////////////////////////////////////////////////////////////

//drawing products

function draw (items) {
    productContainer.innerHTML=""
    
    items.map((ele) => {
        var item = document.createElement("div")
        item.classList.add("item")
        item.innerHTML=`
            <img src="images/${ele.img}" class="my-3" alt=${ele.name}>
            <p>Product :${ele.name}</p>
            <p>Price : ${ele.price} $</p>
            <p>Category : ${ele.category}</p>
            <div class="d-flex justify-content-between mb-2">
                <button type="button"  class="addtocart-btn" onclick=addToCart(${ele.id})>${ele.addBt ?"Remove From Cart" : "Add To Cart"}</button>
                <i class="fa-solid fa-heart fav-icon" onclick=addToFav(${ele.id})></i>
            </div>
        `
        productContainer.appendChild(item)
})
}


    window.onload = function () {
        draw(data)
    }
//////////////////////////////////////////////////////////////////////////////////////////////

// handling search
// *search by name
searchfield.addEventListener("input" , function () {
    if (selectfield.value==="search by name"){
        var searchName = data.filter(function(ele) {
         return ele.name.startsWith(searchfield.value)
        })
         draw(searchName)
     }
})

//*search by category
searchfield.addEventListener("input" , function () {
    if (selectfield.value==="search by category"){
        var seaechCategory = data.filter(function(ele) {
         return ele.category.startsWith(searchfield.value )
        })
         draw(seaechCategory)
     }
})

///////////////////////////////////////////////////////////////////////////////////////////////

// change add/remove btn 
productContainer.addEventListener("click" , function (e) {
    if (e.target.tagName==="I") {
        e.target.style.color="red"
    }
    
})


//user shopping 

let addedItems = localStorage.getItem("cartproducts") ? JSON.parse(localStorage.getItem("cartproducts")) : []
let allFavItems = localStorage.getItem("favproducts") ? JSON.parse(localStorage.getItem("favproducts")) : []

if (addedItems) {
    addedItems.map((item) => {
        cartproductsContainer.innerHTML += `<div class="cart-product-item">${item.name}`
    }
    )
    badge.innerHTML = addedItems.length;
}

// ADD To Cart

function addToCart (id) {
    if(localStorage.getItem("username")) {
            
        let choosenItem = data.find((item) =>
            item.id===id
        )
            cartproductsContainer.innerHTML += `<div class="cart-product-item">${choosenItem.name}`
            addedItems = [...addedItems,choosenItem]
            localStorage.setItem("cartproducts" ,JSON.stringify(addedItems))
            badge.innerHTML = addedItems.length
        }
    
    else {
        window.location = "login.html"
    }
}

// ADD To Favourites

function addToFav(id) {
    if(localStorage.getItem("username")) {
       
        let favItem=data.find((item) =>
            item.id===id
        )
       
        allFavItems = [...allFavItems,favItem]
        localStorage.setItem("favproducts" ,JSON.stringify(allFavItems))

    }
    else {
        window.location = "login.html"
    }
}

// show/hide cart products 

cartIcon.addEventListener("click" , function () {
    if(cartproducts.style.right== "0px") {
         cartproducts.style.right="-100%"
    }
    else {
        cartproducts.style.right="0px"
    }
})










