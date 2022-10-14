var randNum1=Math.round(Math.random()*5)+1;//we set a random number
var randImg1="dice" + randNum1 + ".png";//made a string that we will use as a random img from our source
var image1=document.querySelectorAll("img")[0];//selected all img elements that we wanted to make changes on
image1.setAttribute("src", "images/" + randImg1);//in all selected img elements we set a new attribute, we changed link in src to a new attribute randImg

var randNum2 = Math.round(Math.random()*5)+1;
var randImg2 = "dice" + randNum2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", "images/" + randImg2)

if(randNum1 > randNum2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!!!";
}

if(randNum1 < randNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!!🚩";
}

if(randNum1 === randNum2){
    document.querySelector("h1").innerHTML = "Draw!";
}