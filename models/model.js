let checkOut = new Object;
let checkOutQty;
let subTotal = 0;

function addToCart(addItem){
    let prodName = addItem["prod-name"];
    addItem.qty = 1;
    //if name is already in the list, update the qty property
    if (checkOut[prodName]) {
        checkOut[prodName].qty += 1
        
        // update the price
        checkOut[prodName]["itemCost"] += Number(checkOut[prodName].price);
        
    } else {
        checkOut[addItem["prod-name"]] = addItem;
        checkOut[addItem["prod-name"]]["itemCost"] = Number(checkOut[prodName].price);
    } 

    subTotal += Number(checkOut[prodName].price)

    exports.subTotal = subTotal.toFixed(2);
    exports.checkOutQty = Object.keys(checkOut).length
    exports.checkOut = checkOut;

    console.log(checkOut);
    console.log(subTotal);
}


function removeCart(item){
    //re-calculate subTotal
    subTotal -= checkOut[item["name"]].itemCost
    
    //remove from checkOut
    delete checkOut[item["name"]]

    console.log(checkOut);
    console.log(subTotal);

    exports.subTotal = subTotal.toFixed(2);
    exports.checkOutQty = Object.keys(checkOut).length
    exports.checkOut = checkOut;
}

function updateCart(cartItems){
    
    //change the qty in the checkOut object
    let keys = Object.keys(cartItems);
    subTotal = 0;

    for (let item of keys){
        checkOut[item].qty = cartItems[item].qty;
        checkOut[item].itemCost = cartItems[item].qty * checkOut[item].price;
        subTotal += checkOut[item].itemCost
        subTotal.toFixed(2);
        //calculate the subTotal
    }
    console.log(checkOut);
    console.log(subTotal);

    //export it
    exports.subTotal = subTotal.toFixed(2);
    exports.checkOut = checkOut;
}


exports.addToCart = addToCart;
exports.updateCart = updateCart;
exports.removeCart = removeCart;