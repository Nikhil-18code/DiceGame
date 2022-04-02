// METHOD 1
// For first Dice
var randomNumber1=Math.floor(Math.random()*6)+1;
var randNum1String="dice"+randomNumber1+".png";
var changedImage1="images/"+randNum1String;
var image1=document.querySelector(".img1");
image1.setAttribute("src",changedImage1);

//For second Dice
var randomNumber2=Math.floor(Math.random()*6)+1;
var randNum2String="dice"+randomNumber2+".png";
var changedImage2="images/"+randNum2String;
var image2=document.querySelector(".img2");
image2.setAttribute("src",changedImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").style.fontSize="4rem";
    document.querySelector("h1").textContent="Nikhil Wins!!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").style.fontSize="4rem";
    document.querySelector("h1").textContent="Manish Wins!!";
}
else {
    document.querySelector("h1").style.fontSize="4rem";
    document.querySelector("h1").textContent="It's a draw ,refresh again!";
}


// METHOD 2
// For first Dice
// if(randomNumber1==1){
//     document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }
// else if(randomNumber1==2){
//     document.querySelector(".img1").setAttribute("src","images/dice2.png");       
// }
// else if(randomNumber1==3){
//     document.querySelector(".img1").setAttribute("src","images/dice3.png");      
// }
// else if(randomNumber1==4){
//     document.querySelector(".img1").setAttribute("src","images/dice4.png");       
// }
// else if(randomNumber1==5){
//     document.querySelector(".img1").setAttribute("src","images/dice5.png");    
// }
// else{
//     document.querySelector(".img1").setAttribute("src","images/dice6.png");  
// }
// // For second dicee
// var randomNumber2=Math.floor(Math.random()*6)+1;
// if(randomNumber2==1){
//     document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }
// else if(randomNumber2==2){
//     document.querySelector(".img2").setAttribute("src","images/dice2.png");      
// }
// else if(randomNumber2==3){
//     document.querySelector(".img2").setAttribute("src","images/dice3.png");      
// }
// else if(randomNumber2==4){
//     document.querySelector(".img2").setAttribute("src","images/dice4.png");        
// }
// else if(randomNumber2==5){
//     document.querySelector(".img2").setAttribute("src","images/dice5.png");    
// }
// else{
//     document.querySelector(".img2").setAttribute("src","images/dice6.png");  
// }

// if(randomNumber1>randomNumber2){
//     document.querySelector("h1").style.fontSize="4rem";
//     document.querySelector("h1").textContent="Player 1 Wins!!";
// }
// else if(randomNumber1<randomNumber2){
//     document.querySelector("h1").style.fontSize="4rem";
//     document.querySelector("h1").textContent="Player 2 Wins!!";
// }
// else {
//     document.querySelector("h1").style.fontSize="4rem";
//     document.querySelector("h1").textContent="It's a draw ,refresh again!";
// }
