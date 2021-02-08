### APIs | Application Programming Interfaces
---

WHAT ARE APIs?
"An Application Programming Interface is a set of commands, functions, protocols, and objects that programmers can use to create software or interact with an external system"

1. We are going to create a newsletter signup using the MailChimp API

2. Newsletters are useful for keeping in touch we your subscribers, announcing product launches, or creating landing pages.

3. APIs allows us to interface with other peoples data. Great for creating widgets or components that generate dynamic data.

4. While using one API can be useful, using more than one opens a whole world of more possibilities.

5. Some are free some are paid, some are silly, while some are very important. So many types of APIs. 



## Kayne Rest APi
---

There are 4 Major Components that make up APIs
    1. Endpoints - The location where you connect to the API the starting URL before the paths and parameters.
        - api.kanye.rest
    2. Paths - The URL after the endpoint root, this lets us drill down specific categories/sub-categories
    3. Parameters -  Paremeters lets you add additional flags to your queries to make it even more granular. They are added by a initial ? then keyvalue pairs with = instead of :    if you want more than 1 parameter you can just add & symbol.
        - endpoint/path/programming?blacklistFlags=nsfw&type=single&type=contains=debugging
    
## API Authentication
---

1. Authentication is how the API Developer can Identify the user making the requests.
2. This allows them to monitor how much someone uses their platform and they can charge you or limit your api usage.
3. Every page load with the API will generate an api request.
4. Read the Documentation for the API to learn more about the API calls.


## API Challenge
---

1. Try to Bring Back your Current Location temperature in Fahenheit


http://api.openweathermap.org/data/2.5/weather?q=Miami&appid=2c1fc8934a26e431f3169feaee832ccd&units=imperial


2. As you can see editing and testing the queries in the browser can be cumbersome. Use Postman help with making API requests.
    1. Postman in the GET address bar put the ENDPOINT 
        - http://api.openweathermap.org/data/2.5/weather?
    2. Key Value Pairs for the rest. 
        - key = q  value = Miami
        - key = appid   value = api key
        - key = units value = imperial




## JSON 
---

[JSON-ViewerChromeExtension](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh/related)

[Mozilla-HTTP-Status-Codes] (developer.mozilla.org/en-us/docs/web/http/status)

What is JSON?
    - JavaScript Object Notation 
    - Most Popular and Modern Type of API Call Format
    - This is similiar to an object when we declare one in JS; 
        - Readable by a Human or Computer
        - Can be compressed into a single string

    
Pro-Tip
    - Use the JSON Viewer Extension when trying to read the API call.

How to Parse JSON?

JSON.parse(data)  // data is any variable passed into the parse method.

How to Stringify? (Compress further our object)

JSON.stringify(object) // Converts Object format into string formatting

Status Codes Help Trouble Shoot API Call errors
[Mozilla-HTTP-Status-Codes] (developer.mozilla.org/en-us/docs/web/http/status)
    - Types of HTTP Response Codes Include
        -100 Continue
        -200 Ok
        -300 Multiple Choices
        -400 Bad Request
        -401 Unauthorized
        -402 Payment Required
        -403 Forbidden
        -404 Not Found


Weather Project Challenge
---

1. Create Directory And Initial App.js and Index.html
2. NPM init - Configure
3. NPM I Express
4. Add Express to App.js (const express = require("expres"))
5. Add https the same way we added express.
6. app.get your landing url and in the callback configure the https, API CALL url and log it.
7. Create our https get and log the response
8. Use the on Method fort he response and parse the data received. 
9. Create variables for temp and weather description. 
10. res.send our Weather Description.
11. Only 1 res.send allowed.
12. Send text as h1
13. res.write to send multiple lines


Weather Project Challenge Weather ICON
---

1. Create icon const and assign icon return data.
2. Return Icon URL with Correct ICON with local current weather, MIAMI.


Weather Project Challenge Weather POST request
---

Objective

1. Create a box that lets the user search for a city.
2. Return Results of City Queried and Update previously declared variables in our project.



Steps Involved

1. On app.get "/",  lets res.sendFile our index.
2. Lets add our Label, Input Box and Submit Button. Assign a name for the Input.
3. Wrap these in a form so you can assign a post method.
4. Action of the form needs to be our get route. "/" in this example.
5. Once we have the POST configured on the INDEX file, we can configured the app.post on our APP.js.


Weather Project BODY PARSER
---

Body Parser lets use look through the post data that is sent from our submit button. We must add these two lines of code
```
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
```


1. Once we have the bodyParser installed. we change our console.log in the app.post from just a normal string to req.body.cityName 

breakdown = (request.bodyParser.nameForOurInputTag)

2.  Once we have our body parsing the input of our posts. We can now create a query variable and assign the req.body.cityName.

3. Now we can un-comment out our previous code, put inside the post add "query" to one of our res.writes.