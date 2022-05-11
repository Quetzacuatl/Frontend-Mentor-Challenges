


var Player1 = ( Math.floor(Math.random() * 6))+1
var Player2 = ( Math.floor(Math.random() * 6))+1


document.getElementsByClassName('img1')[0].setAttribute('src',"images/dice"+Player1+".png");
document.getElementsByClassName('img2')[0].setAttribute('src',"images/dice"+Player2+".png");


if (Player1 > Player2) {
    document.querySelector('h1').innerHTML = 'Player 1 wins ! Refresh me to play again';
}

if (Player1 === Player2) {
    document.querySelector('h1').innerHTML = 'Woaah Ty ! Refresh me to play again';
}

if (Player1 < Player2) {
    document.querySelector('h1').innerHTML = 'Player 2 wins ! Refresh me to play again';
}
