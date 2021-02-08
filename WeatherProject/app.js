const express = require ("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();



app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");

    
    // res.send("Server is up and running.")
})

app.post("/", function (req, res){
    
    const query = req.body.cityName;
    const apiKey = "2c1fc8934a26e431f3169feaee832ccd"
    const units = "imperial"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units="+ units + "&appid=" + apiKey;
    https.get(url, function(response){
        console.log(response.statusCode)

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            

            res.write("<h1>Current Temperature in " + query + " is " + temp + " Degress Fahrenheit.</h1>");
            res.write("<h3>Feels Like: " + weatherDescription + "</h3>");
            res.write("<img src=" + iconUrl  + ">");
            res.send();
        })
    
});
})




app.listen(3000, function(){
    console.log("Successfully Connected to Port 3000");
})