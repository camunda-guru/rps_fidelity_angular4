var express=require('express');
var bodyParser=require('body-parser');
var http=require('http');
var cors=require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.json())

app.get("/stockquotes", function(request, response) {
    var stocks=[
        {
            stockId:458,
            rate:1567
        },
        {
            stockId:6788,
            rate:450
        }, 
    ]
    response.send(stocks);
});

app.listen(3000, function(){
    console.log('The server is running, ' +
        ' please open your browser at http://localhost:3000',
       );
});