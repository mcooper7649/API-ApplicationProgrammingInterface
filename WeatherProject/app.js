const express = require ("express");
const https = require("https");

const app = express();

app.get("/", function (req, res){


    const url = "https://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&appid=2c1fc8934a26e431f3169feaee832ccd";
    https.get(url, function(response){
        console.log(response.statusCode)

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            // res.send("Current Temperature is " + temp)
            res.send("Feels Like: " + weatherDescription)
        })
        
    });
    
    // res.send("Server is up and running.")
})



app.listen(3000, function(){
    console.log("Successfully Connected to Port 3000");
})