let express = require('express');
let controller = require('./controllers/controller');
let app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');


controller(app);


app.listen(5500);
console.log("Listening on 5500....");


