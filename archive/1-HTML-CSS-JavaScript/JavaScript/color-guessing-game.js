const COLORS_ARRAY = ['blue','cyan','gold','gray','green','magenta','orange','red','white','yellow'];
function runGame(){
    let numTries = 0;
let Guess = '';
let Correct = false;
const targetIndex = Math.floor( Math.random() * COLORS_ARRAY.length);
const target=COLORS_ARRAY[targetIndex];
console.log(target);


do {
    numTries += 1;
    Guess = prompt ('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.join(', ') +
    '\n\nWhat color am I thinking of?\n');
    if (Guess === null){
        alert('Game has been aborted.');
        return;
    }
    Correct = checkGuess(Guess,target);
} while (!Correct);
document.body.style.background = Guess;
       alert('Congratulations you guessed the color! It took you '+ numTries +' tries.');
}


function checkGuess(Guess,target){
let Correct = false;
if (!COLORS_ARRAY.includes(Guess) ){
    alert('Color is not a guess included in the list!');
}
else if(Guess>target){
    alert('Color is alphabetically higher.');
}
else if(Guess<target){
    alert('Color is alphabetically lower.');
}
else{
    Correct=true;
    
}
return Correct
}
