let bodyParser = require("body-parser");
let urlEncoded = bodyParser.urlencoded({extended:false});
let model = require("../models/model");


module.exports = function (app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
      }));
    console.log(model);
    app.post("/", urlEncoded, (req,resp)=>{
        //updateCart items
        model.addToCart(req.body);
        //update cart item view
        console.log(model.checkOutQty);
        resp.render('index', {subTotal:model.subTotal, numCart:model.checkOutQty, checkOut:model.checkOut});
        
    })

    app.post("/cart-remove",urlEncoded, (req,resp)=>{
        console.log("request made");
        model.removeCart(req.body);
        resp.render('cart',{subTotal:model.subTotal, numCart:model.checkOutQty, checkOut:model.checkOut});
    })

    app.post("/cart-update",urlEncoded, (req,resp)=>{
        console.log("request made");
        model.updateCart(req.body);
        resp.render('cart',{subTotal:model.subTotal, numCart:model.checkOutQty, checkOut:model.checkOut});
    })


    app.get("/", (req,resp)=>{
        resp.render('index', {numCart:model.checkOutQty});
    })

    

    app.get("/cart", (req,resp)=>{
        resp.render('cart',{subTotal:model.subTotal, numCart:model.checkOutQty, checkOut:model.checkOut});
    })

    
    
}