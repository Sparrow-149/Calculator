const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// the home route
app.get("/",function (request,response) {
    // response.send("<h1>Hello World!</h1>");

    response.sendFile(__dirname + "/index.html");
});

// the BMI calculator route
app.get("/bmicalculator",function (request,response) {
    // response.send("<h1>Hello World!</h1>");
    response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function (request,response) {
    // response.send("<h1>Hello World!</h1>");
    var weight = parseFloat(request.body.weight);
    var height = parseFloat(request.body.height);
    var bmi = weight / (height * height);
    response.send("Your BMI is " + bmi);
});


app.post("/",function (request,response) { 
    console.log(request.body);
    // response.send("Thanks for posting that!");
    var num1 = Number(request.body.num1);
    var num2 = Number(request.body.num2);
    var result = num1 + num2;
    response.send("The result of the calculation is " + result);

});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});