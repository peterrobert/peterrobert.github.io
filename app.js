/* require express */
const express = require('express');
var bodyParser = require('body-parser');

/* create an instance */
const app = express();

// parse application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false })

/* create port */
const port = 3000;

app.post('/contact', urlencodedParser, function (req, res) {

    console.log(req.body)


  })

app.listen(port , () =>{

    console.log('listening to port ' + port);

})