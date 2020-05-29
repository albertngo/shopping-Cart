window.addEventListener("scroll",(event)=>{
    let body = document.querySelector("body");
    let checkoutBox = document.querySelector(".checkout");
    if (window.innerWidth > 950 && (checkoutBox.offsetHeight + pageYOffset) < body.offsetHeight){
        checkoutBox.style.top = pageYOffset + "px";
    }
    console.log(checkoutBox.offsetHeight)
    console.log(body.offsetHeight);
})

//assign all "add to cart" a handle
