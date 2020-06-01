let bodyParser = require("body-parser");
let urlEncoded = bodyParser.urlencoded({extended:false});
let model = require("../models/model");


module.exports = function (app){
    app.use(bodyParser.json());
    console.log(model);
    app.post("/", urlEncoded, (req,resp)=>{
        //updateCart items
        
        model.updateCart(req.body);
        console.log(model.checkOutQty);
        //update cart item view
        resp.render('index', {numCart:model.checkOutQty});
        
    })

    app.get("/", (req,resp)=>{
        resp.render('index', {numCart:model.checkOutQty});
    })

    app.get("/cart", (req,resp)=>{
        resp.render('cart');
    })
    
}