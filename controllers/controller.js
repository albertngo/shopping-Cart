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
        resp.render('index', {numCart:model.checkOutQty, checkOut:model.checkOut});
        
    })

    app.post("/cart",urlEncoded, (req,resp)=>{
        console.log(req.body);
        console.log("request made");
        model.updateCart(req.body, req.body["action"]);
        resp.render('cart',{ numCart:model.checkOutQty, checkOut:model.checkOut});
    })


    app.get("/", (req,resp)=>{
        resp.render('index', {numCart:model.checkOutQty});
    })

    

    app.get("/cart", (req,resp)=>{
        resp.render('cart',{ numCart:model.checkOutQty, checkOut:model.checkOut});
    })

    
    
}