const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.listen(process.env.PORT || 3000, function(){
  console.log("server is running on server 3000");
});

app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");
});
