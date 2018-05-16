var express=require('express');
var cors=require('cors');
var mysql=require('mysql');
var port=9800;

var app=express();
app.use(cors());

var connection=mysql.createConnection(
    {
        host:"localhost",
        user:"satya",
        password:"satya",
        database:"empdb"
    }
);

connection.connect(function(error)
{
    if(error)
    {
        console.log("Error occured...");
    }
    else{
        console.log("Database Connected..");
    }
});

app.get("/api/data",function(req,res)
{
    connection.query("select *from emp",function(error,data,fields)
{
    if(error)
    {
        console.log("ERROR OCCURED...");
    }
    else{
        res.status(200).json(data);
    }
});
});

app.get("/api/data/:id",function(req,res)
{
    connection.query("select *from emp where id ="+req.params.id,function(error,data,fields)
{
    if(error)
    {
        console.log("Error in ids");
    }
    else{
        res.send(data);
    }
});
});






app.listen(port,function()
{
    console.log("Listening port... "+port);
});