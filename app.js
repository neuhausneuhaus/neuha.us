var express = require('express');

var app = express();

var port = process.env.PORT || 3000;




app.use(express.static('public'));


if (app.get('env') === 'development') {
    console.log("app is in development environment");
    var morgan = require('morgan');
    app.use(morgan('combined'));
}


app.get('/', function(req, res){
  res.sendFile('index.html')
})

app.listen(process.env.port || 3000);