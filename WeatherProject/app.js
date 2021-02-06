const express = require ("express");
const https = require("https");

const app = express();

app.get("/", function (req, res){


    const url = "https://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&appid=2c1fc8934a26e431f3169feaee832ccd";
    https.get(url, function(response){
        console.log(response)
    });

    res.send("Server is up and running.")
})



app.listen(3000, function(){
    console.log("Successfully Connected to Port 3000");
})