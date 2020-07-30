const gameContainer = document.getElementById("game");/*
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}


let shuffledColors = shuffle(COLORS); */

// declare var
var cardsize = 100;
var cardspacing = 10;
var gameWidth = 4;
var gameHeight = 4;
var firstcard = null;
var secondcard = null;
var checktimeout = null;
var matches = 0;

//create game box
createGrid(gameWidth,gameHeight);

function createGrid(h,v) {
	var a = [];
	for(var i=0;i<gameWidth*gameHeight/2;i++) {
		a.push(i);
		a.push(i);
	}
	
	var s = [];
	while(a.length > 0) {
		var r = Math.floor(Math.random()*a.length);
		s.push(a[r]);
		a.splice(r,1);
	}
	
	for(var x=0;x<h;x++) {
		for(var y=0;y<v;y++) {
			createCard(s.pop(),x,y);
		}
	}
}

//create card
function createCard(cardNum,posX,posY) {
	var card = document.createElement("img");
	card.num = cardNum;
	card.src = "matchcards/cardback.png";
	card.style.position = "absolute";
	card.style.left = (posX*(cardsize+cardspacing)+cardspacing)+"px";
	card.style.top = (posY*(cardsize+cardspacing)+cardspacing)+"px";
	card.onclick = handleCardClick;
	gameContainer.appendChild(card);
}

//create handlecrad
function handleCardClick(e) {
	if (checktimeout != null) {
		clearTimeout(checktimeout);
		checktimeout = null;
		checkCards();
	}

	var card = e.target;
	
	if (firstcard == null) {
		card.src = "matchcards/card"+card.num+".png";
		firstcard = card;
	
	} else if (firstcard == card) {
		firstcard.src = "matchcards/cardback.png";
		firstcard = null;
		
	} else if (secondcard == null) {
		card.src = "matchcards/card"+card.num+".png";
		secondcard = card;
		checktimeout = setTimeout(checkCards,1000);
	}
}

// check two cards
function checkCards() {
	if (firstcard.num == secondcard.num) {
		gameContainer.removeChild(firstcard);
		gameContainer.removeChild(secondcard);
		matches++;
		if (matches >= gameWidth*gameHeight/2) {
			gameWon();
		}
	} else {
		firstcard.src = "matchcards/cardback.png";
		secondcard.src = "matchcards/cardback.png";
	}
	
	firstcard = null;
	secondcard = null;
	checktimeout = null;
}

// show win messgae
function gameWon() {
	document.getElementById("GameWin").style.visibility = "visible";
}

/*



// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
createDivsForColors(shuffledColors);

// my code starts here
// TODO: Implement this function!

function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);

  event.target.style.backgroundColor = event.target.classList[0];

}


// when the DOM loads

*/