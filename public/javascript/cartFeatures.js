window.addEventListener("scroll",(event)=>{
    let body = document.querySelector("body");
    let checkoutBox = document.querySelector(".checkout");
    if (window.innerWidth > 950 && (checkoutBox.offsetHeight + pageYOffset) < body.offsetHeight){
        checkoutBox.style.top = pageYOffset + "px";
    }
    console.log(checkoutBox.offsetHeight)
    console.log(body.offsetHeight);
})

//gather all the cart items on the page
let cartItems = document.querySelectorAll(".cart-product")

//remove button
let removeBtns = document.querySelectorAll(".remove");
for (let item of Array.from(removeBtns)){
    item.addEventListener("click",(event)=>{
    //gather the item name
    let itemName = item.parentElement.children[0].innerHTML;
    console.log(itemName);
    //send fetch to server to remove it

    fetch("/cart", {
        method: "post",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({"name": itemName, "action":"remove"})
    }).then(()=> {
        window.location.reload();
    })
    
    })

}

//Plus and minus button
let plusBtns = document.querySelectorAll(".plus");
let minusBtns = documnet.querySelectorAll(".minus"); 

