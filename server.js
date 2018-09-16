let express = require('express');
let bodyParser = require('body-parser');
let PORT = process.env.PORT || 8080;

let app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

let routes = require('./controllers/burgers_controllers');

app.use(routes);

app.listen(PORT, () => {
    console.log('server listening on http://localhost' + PORT)
})



