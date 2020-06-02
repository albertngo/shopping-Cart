//add to cart events
let addCart = document.querySelectorAll(".addCart");
let productInfo= new Object;
let modal = document.querySelector(".addedCart");

function getAllChildren(parentNode){
    if (Array.from(parentNode.children).length > 0){            
        for (let child of Array.from(parentNode.children)){
            //if child has children, call this function again
            getAllChildren(child);

        }
    } else {
        let name;
        let value;
        //place into object
        if (parentNode.nodeName.toLowerCase() == "img"){
            name = parentNode.nodeName.toLowerCase();
            value = parentNode.getAttribute("src");
        } else {                                     
            name = parentNode.className;
            if (!parentNode.className) name = "notHandled"  
            value = parentNode.innerHTML;
        }
        productInfo[name] = value;
    }
}

for (let button of Array.from(addCart)){
    button.addEventListener("click",(event)=>{
        event.stopPropagation();
        let product = button.parentElement
        
        getAllChildren(product); //gather all product information
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
    console.log(pageYOffset)
    if (pageYOffset > 0){
        navigation.style.backgroundColor  = "rgb(95, 158, 160)"
    } else navigation.removeAttribute("style");
})