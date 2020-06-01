//add to cart events
let addCart = document.querySelectorAll(".addCart");
let productObj= new Object;

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
        productObj[name] = value;
    }
}

for (let button of Array.from(addCart)){
    button.addEventListener("click",()=>{
        let product = button.parentElement
    
        getAllChildren(product); //gather all product information
        console.log(productObj);

        //send as fetch request
        fetch("/", {
            method: "post",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(productObj)
        }). then(()=>{
            window.location.reload();
        });
        
        //modal to say it was added
        
    })
    //fire post event


}
