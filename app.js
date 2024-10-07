// Chapter 31 to 34

// Questions

// q 01
var date = new Date();

console.log(date);




// q 02
var monthList =["january","feburary","March","April","May","june","july","August","september","october","nevember","december"]

var month = new Date();

console.log(monthList[month.getMonth()]);



// q 03
var days = ["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"];

var day = new Date();

var current = (days[day.getDay()]);

console.log("Today is " + current.slice(0,3));



// q 04
var day = new Date();

if(day === "Saturday" || day === "Sunday"){
    alert("Its Funday")
}
else{
    alert("Its Work Day")
}




// q 05
var date = new Date().getDate();

if(date < 16){
    alert("First fifteen days of the month")
}
else{
    alert("Last Days of the Month")
}




// q 06
var date = new Date();

console.log("Current Date : " + date);

var currMillis = date.getTime();
console.log("Elapsed MilliSecond since January 1 : " + currMillis );

var time = date.getTime();
console.log("Elapsed MilliSecond since January 1 : " + time);




// q 07
var hour = new Date();

var update = hour.getHours();

if(hour >= 12){
    alert("Current Time : " + update + " AM");
}
else{
    alert("Current Time : " + update + " PM")
}




// q 08
var laterDate = new Date("2020 Dec 31");

console.log(laterDate);




// q 09
pastRamazan = new Date("2024 3 8");

var ramazan = new Date();

var diff = (pastRamazan - ramazan );

var day = diff / (1000*60*60*24);

console.log("Past Ramazan before Days : " + Math.round(Math.abs(day)));





// q 10
var date = new Date();
console.log(date);


var startPoint = new Date("2015 January 01");

var diff = date - startPoint;

var update = diff / 1000;

console.log(update);




// q 11
var date = new Date();

var up = date.getHours();

date.setHours(up +1);
console.log(date);




// q 12
// q 13

var user = prompt("Enter Your Sun");

var year = new Date().getFullYear();

console.log(`Your Age is : ${ year - user}`);

console.log(`Your Birth Year is : ${user}`);





// // q 14
























