let checkOut = new Object;
let checkOutQty;
console.log(module)

function updateCart(addItem){
    let prodName = addItem["prod-name"];
    addItem.qty = 1;
    //if name is already in the list, update the qty property
    if (checkOut[prodName]) {
        checkOut[prodName].qty += 1
    } else  checkOut[addItem["prod-name"]] = addItem;


    exports.checkOutQty = Object.keys(checkOut).length
    console.log(checkOut);

}

exports.updateCart = updateCart;