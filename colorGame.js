
var numSqaures = 6;
var colors = generateRandomColors(numSqaures);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 =  document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSqaures= 3;
    colors = generateRandomColors(numSqaures);
    pickedColor= pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0 ; i < squares.length; i ++){
    	if(colors[i]){
    		squares[i].style.background = colors[i];
    	}
    	else
    		squares[i].style.display = "none";
    		
    }
})
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSqaures= 6;
    colors = generateRandomColors(numSqaures);
    pickedColor= pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0 ; i < squares.length; i ++){
    	squares[i].style.background = colors[i];
    	squares[i].style.display = "block";
    }
})
resetButton.addEventListener("click", function(){
	//generate all new colors
	colors= generateRandomColors(numSqaures);
	//pick anew random color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change colors of square
	messageDisplay.textContent = "";
	for(var i = 0 ; i <squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
    h1.style.background = "steelblue";
    resetButton.textContent ="New Colors ?";

})


colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	//add initial colors to square

    //add click listeneres to squares
    squares[i].addEventListener("click", function(){
    // compare the squares i to the pickedColor
    var clickedColor = this.style.backgroundColor;
      if ( clickedColor=== pickedColor)
    	{
    		messageDisplay.textContent ="Correct!!!";
    		resetButton.textContent = "Play Again!"
    		changeColor(clickedColor);
    		h1.style.backgroundColor = clickedColor;
    	}
     else 
    	{
    	 this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Wrong!!!"
    }
    // if wrong change the color to the background color
    // display voila you won the game
    })
}

function changeColor (color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor (Math.random() * colors.length);
	return colors[random];

}
function generateRandomColors(num){
	var arr = [];
	for( var i = 0 ; i < num; i++){
		arr.push (randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor (Math.random() * 256);
	var g = Math.floor (Math.random() * 256);
	var b = Math.floor (Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}