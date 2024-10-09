var diceNumber1 = Math.floor((Math.random() * 6)+1);
var diceNumber2 = Math.floor((Math.random() * 6)+1);
var dice1 = document.querySelectorAll("img")[0];
var dice2 = document.querySelectorAll("img")[1];

dice1.setAttribute("src","images/dice"+diceNumber1+".png");
dice2.setAttribute("src","images/dice"+diceNumber2+".png");


if(diceNumber1 > diceNumber2){
  document.querySelector("h1").innerHTML="Player1 wins! :)";
}else if(diceNumber1 < diceNumber2){
  document.querySelector("h1").innerHTML="Player2 wins! :)";
}else{
  document.querySelector("h1").innerHTML="Draw :(";
}