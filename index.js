
// leftimg scrisp way

var randomNumber1=Math.floor(Math.random()*6)+1;

var randomImgSrc="images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src", randomImgSrc);


// rightimg using if-else (both work same2same)

var randomNumber2=Math.floor((Math.random()*6)+1);



if(randomNumber2===1){
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
else if(randomNumber2===2){
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if(randomNumber2===3){
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if(randomNumber2===4){
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if(randomNumber2===5){
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else if(randomNumber2===6){
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

// who wins or draw

if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}
else if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
