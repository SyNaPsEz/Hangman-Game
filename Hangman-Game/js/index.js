var guessWord = [
["D", "E", "A", "T", "H", "S", "T", "A", "R"],
  ["S","K","Y","W","A","L","K","E","R"],
  ["C","H","E","W","B","A","C","C","A"],
  ["E","M","P","I","R","E"],
  ["S","T","O","R","M","T","R","O","O","P","E","R"],
  ["V","A","D","E","R",]
]
var random = Math.floor((Math.random()*(guessWord.length-1))); 

var word = guessWord[random]; 
var newWord = new Array(word.length);
var error = 0;


for (var i = 0; i < newWord.length; i++){
	newWord[i] = "_ ";
}


function printnewWord(){
	for (var i = 0; i < newWord.length; i++){
	var rate = document.getElementById("rate");
	var letter = document.createTextNode(newWord[i]);
	rate.appendChild(letter);
	}
}


var testCheck = function(){
	var f = document.rateformular; 
	var b = f.elements["ratecharacter"]; 
	var character = b.value; 
	character = character.toUpperCase();
	for (var i = 0; i < word.length; i++){
		if(word[i] === character){
			newWord[i] = character + " ";
			var hit = true;
		}
	b.value = "";
	}
	
	var rate = document.getElementById("rate");
	rate.innerHTML=""; 
	printnewWord();
	
	
	if(!hit){
		var guessedLetter = document.getElementById("guessedLetter");
		var letter = document.createTextNode(" " + character);
		guessedLetter.appendChild(letter); 
		error++;
		var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + error + ".png";
	}
	

	var finished = true;
	for (var i = 0; i < newWord.length; i++){
		if(newWord[i] === "_ "){
			finished = false;
		}
	}
	if(finished){
		window.alert("You win!");
	}
	

	if(error === 6){
		window.alert("Uh...I guess you're dead now.");
	}
}

function init(){
	printnewWord();
}

window.onload = init;