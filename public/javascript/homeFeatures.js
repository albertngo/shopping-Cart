//add to cart events
let addCart = document.querySelectorAll(".addCart");
let productInfo= new Object;
let modal = document.querySelector(".addedCart");
import gatherProduct from "./_module.js";

window.addEventListener("load",()=>{
    let introImg = document.querySelector(".mouseBack");
    introImg.style.opacity = "1";
})

for (let button of Array.from(addCart)){
    button.addEventListener("click",(event)=>{
        event.stopPropagation();
        let product = button.parentElement
        
        productInfo = gatherProduct(product); //gather all product information
        console.log(productInfo);

        //send as fetch request
        fetch("/", {
            method: "post",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(productInfo)
        })
        
        //modal to say it was added
        modal.style.display = "block";
        
    })


}

//modal event
let addedCart = document.querySelector(".addedCart");
addedCart.addEventListener("click",()=>{
    modal.style.display = "none";
    window.location.reload();
})

let navigation = document.querySelector(".navigation");

window.addEventListener("scroll", event=>{

    if (pageYOffset > 0){
        navigation.style.backgroundColor  = "rgb(95, 158, 160)"
    } else navigation.removeAttribute("style");
})