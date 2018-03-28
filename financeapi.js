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

app.post('/newaccount',function(request,response)
{
    console.log("Testing...")
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    response.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    response.setHeader('Access-Control-Allow-Credentials', true);
    console.dir(request.query);
    //console.log(request);
    refAddState.Add(request.query.ID,request.query.Name);

    response.end("New Account information received successfully");

})


app.listen(3000, function(){
    console.log('The server is running, ' +
        ' please open your browser at http://localhost:3000',
       );
});