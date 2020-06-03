let product = new Object;

export default function getAllChildren(parentNode){
    
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
            if (parentNode.className == "qty") value = parentNode.value;
        }
        product[name] = value;
    }

    return product;
}