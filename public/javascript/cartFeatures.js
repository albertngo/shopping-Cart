//gather all the cart items on the page
import gatherProduct from "./_module.js";

window.addEventListener("scroll",(event)=>{
    let body = document.querySelector("body");
    let checkoutBox = document.querySelector(".checkout");
    if (window.innerWidth > 950 && (checkoutBox.offsetHeight + pageYOffset) < body.offsetHeight){
        checkoutBox.style.top = pageYOffset + "px";
    }
})

//remove button
let removeBtns = document.querySelectorAll(".remove");
for (let item of Array.from(removeBtns)){
    item.addEventListener("click",(event)=>{
    //gather the item name
    let itemName = item.parentElement.children[0].innerHTML;
    console.log(itemName);
    //send fetch to server to remove it

    fetch("/cart-remove", {
        method: "post",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({"name": itemName})
    }).then(()=> {
        window.location.reload();
    })
    
    })

}

//Plus and minus button
let plusBtns = document.querySelectorAll(".plus");
let minusBtns = document.querySelectorAll(".minus"); 

for (let plus of Array.from(plusBtns)){
    plus.addEventListener("click", event=>{
        //change the values on client side only
        console.log(plus);
        let prevSibling = plus.previousSibling
        prevSibling.value = Number(prevSibling.value)+1;
    })
}

for (let minus of Array.from(minusBtns)){
    minus.addEventListener("click", event=>{
        //change the values on client side only
        let nextSibling = minus.nextSibling
        if ((Number(nextSibling.value) -1) >=1){
        nextSibling.value = Number(nextSibling.value)-1;
        }
    })
}


//update cart button
let updateCart = document.querySelector(".updateCart");

updateCart.addEventListener("click", (event)=>{
    let productInfo = new Object;
    let updatedItems = new Object;
    let cartItems = document.querySelectorAll(".cart-product");
    for (let item of Array.from(cartItems)){
        productInfo = Object.assign({}, gatherProduct(item))
        updatedItems[[productInfo["prod-name"]]] = productInfo;
    }


    //fetch to change server checkout details
    fetch("/cart-update",{
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updatedItems)
    }).then(()=>{
        window.location.reload();
    })  

})

