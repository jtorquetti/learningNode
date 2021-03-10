//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();  
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res){

var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);

var result = num1 + num2
    res.send("The result of the calculation is "+ result)
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function(req, res){

var weight = parseFloat(req.body.weight);
var height = parseFloat(req.body.height);
var bmi = Math.floor(weight / (height * height));
if (bmi < 18.65) {
    return res.send("Your BMI is " + bmi + ", so you are underweight.")
} else if (bmi >= 18.5 && bmi < 24.9) {
    return res.send("Your BMI is " + bmi + ", so you have a normal weight.")
} else if (bmi >= 25 && bmi <= 29.9) {
    return res.send("Your BMI is " + bmi + ", so you are overweight.")
} else if (bmi >= 30 && bmi < 34.9) {
    return res.send("Your BMI is " + bmi + ", so you are obese.")
} else {
    return res.send("Youe BMI is " + bmi + ", so you are extremely obese.")
}
})
app.listen(3000, function(){
    console.log("Server started on port 3000")
});
