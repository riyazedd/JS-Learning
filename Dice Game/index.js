//FOR DICE 1

let randomNumber1= Math.floor(Math.random()*6)+1; //generats random number from 1-6

let randomDiceImage1=`dice${randomNumber1}.png`; //set name of image according to random number dice1.png-dice6.png

let randomImageSource1=`images/${randomDiceImage1}`;  //sets source of image images/dice1.png-images/dice6.png

document.querySelectorAll('img')[0].setAttribute('src',randomImageSource1);  //changes image source of first dice

//FOR DICE 2

let randomNumber2= Math.floor(Math.random()*6)+1; //generats random number from 1-6

let randomDiceImage2=`dice${randomNumber2}.png`; //set name of image according to random number dice1.png-dice6.png

let randomImageSource2=`images/${randomDiceImage2}`;  //sets source of image images/dice1.png-images/dice6.png

document.querySelectorAll('img')[1].setAttribute('src',randomImageSource2);  //changes image source of second dice


//DECLARATION OF WINNER

if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML='&#128681Player 1 Wins!!';
}else if(randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML='Player 2 Wins!!&#128681';
}else{
    document.querySelector('h1').innerHTML='&#128681Draw!!&#128681';
}