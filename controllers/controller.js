module.exports = function (app){
    app.get("/", (req,resp)=>{
        resp.render('index');
    })

    app.get("/cart", (req,resp)=>{
        resp.render('cart');
    })
    
}