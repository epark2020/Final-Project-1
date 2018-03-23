board
//2D array initialized with sample values. To get a blank board initialize all the values to zero
// var board = [[2,4,8,16],[32,64,128,512],[1024,0,0,0],[0,0,0,0]];
var board = [];
var UP_ARROW = '38';
var DOWN_ARROW = '40';
var LEFT_ARROW = '37';
var RIGHT_ARROW = '39';
var score = 0;
var goal = 4;
var gameover = 16;
var gameover_condition_2 = 0;
var the_game_is_over = 0;
var board_full = 16;

//As soon as webpage loads run these two functions
$(document).ready(function(){
	setUpBoard();
	printBoard();
	console.log("Loaded webpage"); //how you do print statements in javascript
});

function setUpBoard(){

	// initialize board to have no values
	for(var i=0; i<4; i++){
		var innergrid = [];
		for(var j=0; j<4; j++){
			innergrid.push(0);
		}
		board.push(innergrid);
	}

	addTile();

}

function addTile() {
	//place a 2 on a random spot in the board
	var x = Math.round(Math.random()*3);
	var y = Math.round(Math.random()*3);
while (board[x][y] !== 0) {
	x = Math.round(Math.random()*3);
	y = Math.round(Math.random()*3);
}
if(board[x][y] == 0){
		board[x][y] = 2;
	}


}

function printBoard(){

	console.log("Score: " + score);

	document.getElementById("score").innerHTML =  "Score: " + score;

if (goal > 2048) {
			document.getElementById("message").innerHTML =  "YOU WIN!";
			document.getElementById("goal").innerHTML = " "
}
else if (the_game_is_over == 1) {
	document.getElementById("message").innerHTML =  "GAME OVER!!";
	document.getElementById("goal").innerHTML = " "
}
else {
	document.getElementById("goal").innerHTML =  "Your next goal is " + goal;
}







	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			var boardID = "r"+i+"c"+j;
			// if the tile is not zero, put it on the board
			// else set it to be empty
			if(board[i][j]!=0){
				document.getElementById(boardID).innerHTML = board[i][j];
			}
			else {
				document.getElementById(boardID).innerHTML = "";
			}
			//Change the different number tiles to different colors
			switch(board[i][j]){
				case 2:
					document.getElementById(boardID).style.background = "#f0e5da";
					break;//similar to an else if. Makes sure none of the other cases executes if this one does
				case 4:
					document.getElementById(boardID).style.background = "#ede2c8";
					break;
				case 8:
					document.getElementById(boardID).style.background = "#feb578";
					break;
				case 16:
					document.getElementById(boardID).style.background = "#ff9962";
					break;
				case 32:
					document.getElementById(boardID).style.background = "#ff8060";
					break;
				case 64:
					document.getElementById(boardID).style.background = "#ff613c";
					break;
				case 128:
					document.getElementById(boardID).style.background = "#efd26d";
					break;
				case 256:
					document.getElementById(boardID).style.background = "#efd15c";
					break;
				case 512:
					document.getElementById(boardID).style.background = "#efcd4a";
					break;
				case 1024:
					document.getElementById(boardID).style.background = "#f0ca36";
					break;
				case 2048:
					document.getElementById(boardID).style.background = "#ccc0b3";
					break;
				default:
					//similar to the else statement. If none of the other cases execute, this statement will execute
					// in our game we'll default to the grey background
					document.getElementById(boardID).style.background = "rgba(238, 228, 218, 0.35)";
					break;

			}

		}
	}


}
//show students an ascii conversion tool.
document.onkeydown = function(e){
	console.log(e.keyCode);

	e = e || window.event;

	//keyCode is actually a character value which we convert to a String
	//to use triple equals sign
	if (e.keyCode == UP_ARROW) {
			// up arrow
			moveTilesUp();
			checktiles();
			if (board_full !== 0) {
				addTile();
			}
			Goal();
			Gameover();
				board_full = 16;


	}
	//double equals sign will convert it for us
	else if (e.keyCode == DOWN_ARROW) {
			// down arrow
			moveTilesDown();
			checktiles();
			if (board_full !== 0) {
				addTile();
			}
			Goal();
			Gameover();
			board_full = 16;


	}
	else if (e.keyCode == LEFT_ARROW) {
		 // left arrow
		 moveTilesLeft();
		 checktiles();
		 if (board_full !== 0) {
			 addTile();
		 }
		 Goal();
		 Gameover();
		board_full = 16;


	}
	else if (e.keyCode == RIGHT_ARROW) {
		 // right arrow
			moveTilesRight();
			checktiles();
			if (board_full !== 0) {
				addTile();
			}
			Goal();
			Gameover();
			board_full = 16;

	}


	printBoard();

};



function moveTilesUp()
{

for(var i = 0; i< 3; i++) {


			for(var r=3; r >= 0; r--)
			{
					for(var c=3; c>= 0; c--)
					{

							if(r !== 0  && board[r][c] !== 0 && board[r-1][c] === 0)
							{
								board[r-1][c] = board[r][c];
								board[r][c] = 0;
							}

					}

			}}

		for(var r=0; r < board.length; r++)
		{
				for(var c=0; c<board[r].length; c++)
				{
						if(r !== 0  && board[r][c] == board[r-1][c] && board[r][c] !== 0){

						 board[r-1][c] = board[r][c]*2;
						 score = score + board[r-1][c];
						 board[r][c] = 0;


						}

					}
				}

				for(var i = 0; i< 3; i++) {

							for(var r=3; r >= 0; r--)
							{
									for(var c=3; c>= 0; c--)
									{
											if(r !== 0  && board[r][c] !== 0 && board[r-1][c] === 0)
											{
												board[r-1][c] = board[r][c];
												board[r][c] = 0;

											}

									}

							}}



		    }



function moveTilesDown()
{
for(var i = 0; i< 3; i++){
    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(r !== 3  && board[r][c] !== 0 && board[r+1][c] === 0)
            {
                board[r+1][c] = board[r][c];
                board[r][c] = 0;
            }

        }

    }
	}

		for(var r=3; r >= 0; r--)
    {
        for(var c=3; c >= 0; c--)
        {

						if(r !== 3  && board[r][c] == board[r+1][c] && board[r][c] !== 0){
							board[r+1][c] = board[r][c]*2;
							score = score + board[r+1][c];
							board[r][c] = 0;
						}

        }

    }
		for(var i = 0; i< 3; i++){
		for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(r !== 3  && board[r][c] !== 0 && board[r+1][c] === 0)
            {
                board[r+1][c] = board[r][c];
                board[r][c] = 0;
            }

        }

    }

}




}


function moveTilesLeft()
{
for(var i=0 ;i<3;i++){
    for(var c=3; c >= 0; c--)
    {
        for(var r=3; r >= 0; r--)
        {
            if(c !== 0  && board[r][c] !== 0 && board[r][c-1] === 0)
            {
                board[r][c-1] = board[r][c];
                board[r][c] = 0;
            }

        }

    }
	}

		for(var c=0; c < board.length; c++)
    {
        for(var r=0; r<board[c].length; r++)
        {
          if(c !== 0  && board[r][c] == board[r][c-1] && board[r][c] !== 0){
							board[r][c-1] = board[r][c]*2;
							score = score + board[r][c-1];
							board[r][c] = 0;
						}

        }

    }
for(var i=0 ;i<3;i++){
		for(var c=3; c >= 0; c--)
    {
        for(var r=3; r >= 0; r--)
        {
            if(c !== 0  && board[r][c] !== 0 && board[r][c-1] === 0)
            {
                board[r][c-1] = board[r][c];
                board[r][c] = 0;
            }

						}

        }

    }


}


function moveTilesRight()
{
for(var i = 0; i<3 ;i++){
    for(var c=0; c < board.length; c++)
    {
        for(var r=0; r<board[c].length; r++)
        {
            if(c !== 3  && board[r][c] !== 0 && board[r][c+1] === 0)
            {
                board[r][c+1] = board[r][c];
                board[r][c] = 0;
            }

        }

    }}
		for(var c=3; c >= 0; c--)
    {
        for(var r=3; r >= 0; r--)
        {
          if(c !== 3  && board[r][c] == board[r][c+1] && board[r][c] !== 0){
							board[r][c+1] = board[r][c]*2;
							score = score + board[r][c+1];
							board[r][c] = 0;
						}



    }}
	for(var i = 0;i<3;i++){
		for(var c=0; c < board.length; c++)
    {
        for(var r=0; r<board[c].length; r++)
        {
            if(c !== 3  && board[r][c] !== 0 && board[r][c+1] === 0)
            {
                board[r][c+1] = board[r][c];
                board[r][c] = 0;
            }


        }

    }

}


}

function Goal(){
var a = 1
	for(var c=3; c >= 0; c--)
	{
			for(var r=3; r >= 0; r--)
			{
				if (board[r][c] > a) {
					a = board[r][c];
					goal = a*2;
				}


				}
				}



}

function Gameover(){

for(var c = 3; c >= 0; c--)
	{
			for(var r = 3; r >= 0; r--)
			{
				if (board[r][c] != 0) {
					gameover--;
				}

}
}

for(var c = 3; c >= 0; c--)
{
		for(var r = 3; r >= 0; r--)
		{
			if (r !== 0 && c !== 0 && r !== 3 && c !== 3 && board[r][c] !== 0) {
				if(board[r][c] !== board[r][c-1] && board[r][c] !== board[r][c+1] && board[r][c] !== board[r-1][c]
					&& board[r][c] !== board[r+1][c]){
							gameover_condition_2 = gameover_condition_2 + 1;
				}

			}
			else if(r == 0 && c == 0 && board[r][c] !== 0) {
					if (board[r][c] !== board[r][c+1] && board[r][c] !== board[r+1][c]) {
						gameover_condition_2 = gameover_condition_2 + 1;

					}
			}
			else if((r == 0 && c == 1 && board[r][c] !== 0) || (r == 0 && c == 2 && board[r][c] !== 0)){
				if (board[r][c] !== board[r][c+1] && board[r][c] !== board[r+1][c] && board[r][c] !== board[r][c-1]) {
					gameover_condition_2 = gameover_condition_2 + 1;

				}
			}
			else if(r == 0 && c == 3 && board[r][c] !== 0){
				if (board[r][c] !== board[r+1][c] && board[r][c] !== board[r][c-1]) {
					gameover_condition_2 = gameover_condition_2 + 1;

				}
			}
			else if((r == 1 && c == 3 && board[r][c] !== 0) || (r == 2 && c == 3 && board[r][c] !== 0)){
					if (board[r][c] !== board[r+1][c] && board[r][c] !== board[r][c-1] && board[r][c] !== board[r-1][c]) {
						gameover_condition_2 = gameover_condition_2 + 1;
					}
			}
			else if (r == 3 && c == 3 && board[r][c] !== 0) {
				if (board[r][c] !== board[r][c-1] && board[r][c] !== board[r-1][c]) {
					gameover_condition_2 = gameover_condition_2 + 1;
				}
			}
			else if ((r == 3 && c == 1 && board[r][c] !== 0) || (r == 3 && c == 2 && board[r][c] !== 0)) {
				if (board[r][c] !== board[r][c-1] && board[r][c] !== board[r-1][c] && board[r][c] !== board[r][c+1]) {
					gameover_condition_2 = gameover_condition_2 + 1;
				}
			}
			else if (r == 3 && c == 0 && board[r][c] !== 0) {
				if (board[r][c] !== board[r-1][c] && board[r][c] !== board[r][c+1]) {
				gameover_condition_2 = gameover_condition_2 + 1;
				}
					}
			else if ((r == 1 && c == 0 && board[r][c] !== 0) || (r == 2 && c == 0 && board[r][c] !== 0)) {
				if (board[r][c] !== board[r][c+1] && board[r][c] !== board[r-1][c] && board[r][c] !== board[r+1][c]) {
			gameover_condition_2 = gameover_condition_2 + 1;
				}
			}


}

}
console.log("gameover is: " + gameover);
console.log("gameover_condition_2 is: " + gameover_condition_2);


if (gameover == 0 && gameover_condition_2 == 16)
{
	the_game_is_over = 1;
}

else if (gameover !== 0 || gameover_condition_2 !== 9) {
	gameover = 16;
	gameover_condition_2 = 0;
	console.log("resetting gameover is: " + gameover);
	console.log("resetting gameover_condition_2 is: " + gameover_condition_2);

}

}


function checktiles(){

	for(var c = 3; c >= 0; c--)
	{
			for(var r = 3; r >= 0; r--)
			{
				if (board[r][c] !== 0) {
					board_full--;
				}


	}
	}
		console.log("Board full is: " + board_full);
	if (board_full !== 0) {
		board_full = 16;
		console.log("Resetting Board full is: " + board_full);
	}


}
