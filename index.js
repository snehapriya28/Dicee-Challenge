function play(){
var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 =  Math.floor(Math.random() * 6)+1;
//console.log(randomNumber1);
var randomDiceImg= "dice" +randomNumber1+ ".png";
var randomDiceSource= "images/"+randomDiceImg;
document.querySelectorAll("img")[0].setAttribute("src" , randomDiceSource);

var randomDiceImg2= "dice" +randomNumber2+ ".png";
var randomDiceSource2= "images/"+randomDiceImg2;
document.querySelectorAll("img")[1].setAttribute("src" , randomDiceSource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else{
  document.querySelector("h1").innerHTML = " Match Draw ";
}
}
function refresh(){
  document.location.reload();
}
