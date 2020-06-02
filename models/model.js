let checkOut = new Object;
let checkOutQty;


function addToCart(addItem){
    let prodName = addItem["prod-name"];
    addItem.qty = 1;
    //if name is already in the list, update the qty property
    if (checkOut[prodName]) {
        checkOut[prodName].qty += 1
        
        // update the price
        checkOut[prodName]["itemCost"] += Number(checkOut[prodName].price);
        console.log(checkOut);
    } else {
        checkOut[addItem["prod-name"]] = addItem;
        checkOut[addItem["prod-name"]]["itemCost"] = Number(checkOut[prodName].price);
    } 


    exports.checkOutQty = Object.keys(checkOut).length
    exports.checkOut = checkOut;
    console.log(checkOut);

}

function updateCart(item,action){
    //pressed remove
    delete checkOut[item["name"]]
    console.log(checkOut);
    
  
    
    //remove from checkOut

    //re-calculate subTotal


    



    //pressed +/-


    //altered value 

exports.checkOutQty = Object.keys(checkOut).length
exports.checkOut = checkOut;
}


exports.addToCart = addToCart;
exports.updateCart = updateCart;