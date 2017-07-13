
function createShape() {
    var shapeName;
    var shapeColorName = colors.colorName.slice();
    var shapeColorNumber = colors.colorNumber.slice();
    var textColor;

    if (gameState.levelStarted) {

        switch (levels[gameState.myLevel].shapeMode) {
            case 'normal':
                shapeName = ["square", "circle", "triangle"];
                textColor = "#ffab00";
                break;

            case 'zen':
                shapeName = ["square", "circle"];
                textColor = "#fff";
                break;

            case 'crazy':
                shapeName = ["square", "circle", "triangle"];
                var a = Math.floor(Math.random() * shapeColorNumber.length); 
                textColor = shapeColorNumber[a];
                break;

            default:
                var shapeName = ["square"];
                textColor = "#fff";
        }
    }

    var text;
    var myFirstColor;
    var n;
    var lastGameIndex = shapeColorName.indexOf(gameState.lastQuestion[gameState.thisQuestionNumber - 1]);

    if (gameState.thisQuestionNumber > 0) {
        shapeColorName.splice(lastGameIndex, 1);
        shapeColorNumber.splice(lastGameIndex, 1);
    }

    n = Math.floor(Math.random() * shapeColorName.length); 
    myFirstColor = shapeColorName[n];

    gameState.lastQuestion.push(myFirstColor);

    // var n = Math.floor(Math.random() * colorName.length); 
    var m = Math.floor(Math.random() * shapeName.length); 
    var text = "this is " + myFirstColor + " " + shapeName[m];

    var newShapeGameBox = document.createElement("div");
    newShapeGameBox.id = "newShapeGameBox";
 
    gameBoard.appendChild(newShapeGameBox);

    createBoard(newShapeGameBox, text, textColor);

    var newBox = document.createElement("div");
    newBox.id = "newBox";
    newShapeGameBox.appendChild(newBox);

    var o = Math.floor(Math.random() * 2); 
    if (o == 0) {
        if (m == 0) { createRect(newBox, shapeColorNumber[n]); }
        else if (m == 1) { createCircle(newBox, shapeColorNumber[n]); }
        else { createTriangle(newBox, shapeColorNumber[n]); }
        gameState.isEquationTrue = true;
        
    } else {
        var roll = shapeColorNumber.splice(n, 1);
        var p = Math.floor(Math.random() * shapeColorNumber.length); 
        var r = Math.floor(Math.random() * shapeName.length); 
        if (r == 0) { createRect(newBox, shapeColorNumber[p]); }
        else if (r == 1) { createCircle(newBox, shapeColorNumber[p]); }
        else { createTriangle(newBox, shapeColorNumber[p]); }
        gameState.isEquationTrue = false;
    }
}

function createRect(parent, myColor) {
    var newRect;
    newRect = document.createElement("div");
    newRect.style.width = "100px";
    newRect.style.height = "100px";
    newRect.style.backgroundColor = myColor;
    parent.appendChild(newRect);
}

function createCircle(parent, myColor) {
    var newCircle;
    newCircle = document.createElement("div");
    newCircle.style.width = "100px";
    newCircle.style.height = "100px";
    newCircle.style.borderRadius = "50px";
    newCircle.style.backgroundColor = myColor;
    parent.appendChild(newCircle);
}

function createTriangle(parent, myColor) {
    var newTriangle;
    newTriangle = document.createElement("div");
    newTriangle.style.width = "0px";
    newTriangle.style.height = "0px";
    newTriangle.style.backgroundColor = "transparent";
    newTriangle.style.borderBottomColor = myColor;
    newTriangle.id = "newTriangle";
    parent.appendChild(newTriangle);
}

function createColorName() {
    var nameColorName = colors.colorName.slice();
    var nameColorNumber = colors.colorNumber.slice();
    var shapeName = ["square", "circle", "triangle"];

    var text;
    var myFirstColor;
    var n;

	var lastGameIndex = nameColorName.indexOf(gameState.lastQuestion[gameState.thisQuestionNumber - 1]);
    if (gameState.thisQuestionNumber > 0) {
        nameColorName.splice(lastGameIndex, 1);
        nameColorNumber.splice(lastGameIndex, 1);
    }
    gameState.lastQuestion.push(myFirstColor);

    n = Math.floor(Math.random() * nameColorName.length); 
    myFirstColor = nameColorName[n];

    if (gameState.levelStarted) {

        switch (levels[gameState.myLevel].colorMode) {
            case 'zen':
                text = "this text is " + myFirstColor;
                var myColor;
                var m = Math.floor(Math.random() * 2); 
                if (m == 0) {
                    myColor = nameColorNumber[n];
                    gameState.isEquationTrue = true;
                } else {
                    var roll = nameColorNumber.splice(n, 1);
                    var o = Math.floor(Math.random() * nameColorNumber.length); 
                    myColor = nameColorNumber[o];
                    gameState.isEquationTrue = false;
                }
                createBoard (gameBoard, text, myColor); 
                break;

            case 'crazy':
                text = "this text is " + myFirstColor;
                var myColor;
                var m = Math.floor(Math.random() * 2); 
                if (m == 0) {
                    myColor = nameColorNumber[n];
                    gameState.isEquationTrue = true;
                } else {
                    var roll = nameColorNumber.splice(n, 1);
                    var o = Math.floor(Math.random() * nameColorNumber.length); 
                    myColor = nameColorNumber[o];
                    gameState.isEquationTrue = false;
                }
                
                var newShapeGameBox = document.createElement("div");
                newShapeGameBox.id = "newShapeGameBox";
             
                gameBoard.appendChild(newShapeGameBox);

                createBoard (newShapeGameBox, text, myColor);

                var newBox = document.createElement("div");
                newBox.id = "newBox";
                newShapeGameBox.appendChild(newBox);

                var p = Math.floor(Math.random() * 3); 
                var r = Math.floor(Math.random() * nameColorNumber.length); 
                
                if (p == 0) { createRect(newBox, nameColorNumber[r]); }
                else if (p == 1) { createCircle(newBox, nameColorNumber[r]); }
                else { createTriangle(newBox, nameColorNumber[r]); }

                break;

            case 'normal':
                text = "this text is not " + myFirstColor;
                var myColor;
                var m = Math.floor(Math.random() * 2); 
                if (m == 0) {
                    myColor = nameColorNumber[n];
                    gameState.isEquationTrue = false;
                } else {
                    var roll = nameColorNumber.splice(n, 1);
                    var o = Math.floor(Math.random() * nameColorNumber.length); 
                    myColor = nameColorNumber[o];
                    gameState.isEquationTrue = true;
                }
                createBoard (gameBoard, text, myColor); 
                break;

            default:
                text = "this text is " + myFirstColor;
                var myColor;
                var m = Math.floor(Math.random() * 2); 
                if (m == 0) {
                    myColor = nameColorNumber[n];
                    gameState.isEquationTrue = true;
                } else {
                    var roll = nameColorNumber.splice(n, 1);
                    var o = Math.floor(Math.random() * nameColorNumber.length); 
                    myColor = nameColorNumber[o];
                    gameState.isEquationTrue = false;
                }
                createBoard (gameBoard, text, myColor); 
        }
    }
}

function createBoard(parent, i, fontcolor) {
	console.log("createBoard is working");
    var newEquationDiv;
    newEquationDiv = document.createElement("div");
    newEquationDiv.id = "gameBoardDiv";
    newEquationDiv.appendChild(document.createTextNode(i));
    parent.appendChild(newEquationDiv);
    newEquationDiv.style.color = fontcolor;
    // newEquationDiv.onclick = function() {
        
    // };
}

function createEquation() {
    var num;
    var equationColor;
    var equationColorNumber = colors.colorNumber.slice();//["#ffd400", "#54b633", "#5882fe", "#cc3333", "#fff"];
    				  
    if (gameState.levelStarted) {

        switch (levels[gameState.myLevel].equationMode) {
            case 'normal':
                num = 8;
                equationColor = "#ffab00";
                break;

            case 'zen':
                num = 3;
                equationColor = "#fff";           
                break;

            case 'crazy':
                num = 15;
                var a = Math.floor(Math.random() * equationColorNumber.length); 
                equationColor = equationColorNumber[a];
                break;

            default:
                num = 10;
                equationColor = "#fff";  
        }
    }

    var firstElement;
    firstElement = Math.floor(Math.random() * num) + 1; 
   
    var secondElement;
    secondElement = Math.floor(Math.random() * num) + 1; 
    var thirdElement = secondElement + 1;

    var myOperator;  
    var leftSide;
    var rightSide;

    var calculations = [
                        Math.floor(firstElement + secondElement), 
                        Math.floor(firstElement - secondElement), 
                        Math.floor(firstElement * secondElement) ];

    var fakeCalculations = [
                        Math.floor(firstElement + thirdElement), 
                        Math.floor(firstElement - thirdElement), 
                        Math.floor(firstElement * thirdElement) ];                        

    var operators = ["+", "-", "*" ];

    var n;
    var lastGameIndex = calculations.indexOf(gameState.lastQuestion[gameState.thisQuestionNumber - 1]);

    if (gameState.thisQuestionNumber > 0) {
        calculations.splice(lastGameIndex, 1);
        operators.splice(lastGameIndex, 1);
    }

    n = Math.floor(Math.random() * calculations.length); 
    leftSide = calculations[n];

    gameState.lastQuestion.push(leftSide);

    leftSide = calculations[n];
    myOperator = operators[n];

    var m = Math.floor(Math.random() * 2);
    if (m == 0) {
        rightSide = leftSide;
        gameState.isEquationTrue = true;
    } else {
            rightSide = fakeCalculations[n];
        if (rightSide == leftSide) {
            gameState.isEquationTrue = true;
        } else {
            gameState.isEquationTrue = false;
        }
    }
    text = firstElement + " " + myOperator + " " + secondElement + " = " + rightSide;
    createBoard (gameBoard, text, equationColor);
}

var levels = [  
                {creators: [                createColorName             ], timeMode: 'zen', colorMode: 'zen'},
                {creators: [                                 createShape], timeMode: 'zen', shapeMode: 'zen'},
                {creators: [createEquation                              ], timeMode: 'normal', equationMode: 'zen'},
                {creators: [createEquation, createColorName,            ], timeMode: 'normal', equationMode: 'normal', colorMode: 'zen'},
                {creators: [                createColorName, createShape], timeMode: 'normal', shapeMode: 'normal', colorMode: 'crazy'},
                {creators: [createEquation,                  createShape], timeMode: 'normal', equationMode: 'crazy', shapeMode: 'crazy'},
                {creators: [createEquation, createColorName, createShape], timeMode: 'normal', equationMode: 'crazy', shapeMode: 'crazy', colorMode: 'normal'},

                {creators: [createEquation                              ], timeMode: 'crazy', equationMode: 'zen'},
                {creators: [                createColorName             ], timeMode: 'crazy', colorMode: 'zen'},
                {creators: [                                 createShape], timeMode: 'crazy', shapeMode: 'zen'},
                {creators: [createEquation, createColorName,            ], timeMode: 'crazy', equationMode: 'normal', colorMode: 'zen'},
                {creators: [                createColorName, createShape], timeMode: 'supercrazy', shapeMode: 'normal', colorMode: 'crazy'},
                {creators: [createEquation,                  createShape], timeMode: 'supercrazy', equationMode: 'crazy', shapeMode: 'crazy'},
                {creators: [createEquation, createColorName, createShape], timeMode: 'supercrazy', equationMode: 'crazy', shapeMode: 'crazy', colorMode: 'normal'},

                {creators: [createEquation                              ], timeMode: 'crazy', equationMode: 'zen'},
                {creators: [                createColorName             ], timeMode: 'crazy', colorMode: 'zen'},
                {creators: [                                 createShape], timeMode: 'crazy', shapeMode: 'zen'},
                {creators: [createEquation, createColorName,            ], timeMode: 'crazy', equationMode: 'normal', colorMode: 'zen'},
                {creators: [                createColorName, createShape], timeMode: 'crazy', shapeMode: 'normal', colorMode: 'crazy'},
                {creators: [createEquation,                  createShape], timeMode: 'crazy', equationMode: 'crazy', shapeMode: 'crazy'},
                {creators: [createEquation, createColorName, createShape], timeMode: 'crazy', equationMode: 'crazy', shapeMode: 'crazy', colorMode: 'normal'},                                                                  
];

var colors = {
                colorName: ["yellow",   "green",  "blue",   "red", "white"],
                colorNumber: ["#ffab00", "#64dd17", "#0091ea", "#d50000", "#fff"]
};



window.onload = initialise;

gameState = { isEquationTrue: false,
             
              timeId: null, 
              myTime: 0,
              levelStarted: false,
              level: 0,
              myLevel: 0,
              levelScores: null,
              levelBestScores: null,
              timeScore: null,
              lastQuestion: null,
              thisQuestionNumber: 0
            };

var gameBoard = null;
var levelBoard = null;
var trueButton = null;
var falseButton = null;

var scoreDiv = null;
var levelDiv = null;
var timeDiv = null;


function initialise() {
    gameBoard = document.getElementById("game");
    levelBoard = document.getElementById("levels");
    trueButton = document.getElementById("trueButton");
    falseButton = document.getElementById("falseButton");

    scoreDiv = document.getElementById("score");
    levelDiv = document.getElementById("level");
    timeDiv = document.getElementById("timer");
    loadMyData();
     
    setTimeout(function(){
    	if (gameState.levelScores[0]) {
    		console.log("it was played before");
    		startTutorial();
    		// startNewLevelButton();
    	} else {
    		console.log("it was not played before");
    		startTutorial();
    	}
        
    }, 10)
}

//to do - save data sometimes
function saveMyData(){
    var myObj = { "levelScores":gameState.levelScores, "levelBestScores":gameState.levelBestScores, "timeScore": gameState.timeScore};

    var myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);
}

function loadMyData(){
    var text = localStorage.getItem("testJSON");
    var myObjIn = JSON.parse(text) || {};
    gameState.levelScores = myObjIn.levelScores || [];
    gameState.levelBestScores = myObjIn.levelBestScores || [];
    gameState.timeScore = myObjIn.timeScore || [];
}


function createTimer() {
    clearInterval(gameState.timeId);

    function frame() {
                    gameState.myTime--;
                    timeDiv.innerHTML = gameState.myTime;
                    if (gameState.myTime == 0) {
                        levelFailed();
                        clearInterval(gameState.timeId);
                    }
                }

    if (gameState.levelStarted) {

        switch (levels[gameState.myLevel].timeMode) {
            case 'normal':
                gameState.myTime = 20;
                timeDiv.innerHTML = gameState.myTime;
                gameState.timeId = setInterval(frame, 100);
                break;

            case 'zen':
                gameState.myTime = 30;
                timeDiv.innerHTML = gameState.myTime;
                gameState.timeId = setInterval(frame, 100);            
                break;

            case 'supercrazy':
                gameState.myTime = 10;
                timeDiv.innerHTML = gameState.myTime;
                gameState.timeId = setInterval(frame, 100);            
                break;

            case 'crazy':
                gameState.myTime = 15;
                timeDiv.innerHTML = gameState.myTime;
                gameState.timeId = setInterval(frame, 100);            
                break;

            default:
                gameState.myTime = 100;
                timeDiv.innerHTML = gameState.myTime;
                gameState.timeId = setInterval(frame, 100);  
        }
    }
}


function startTutorial() {
	var howManyGoodAnswers = 0;

	function rightAnswer() {
		clearBoard(gameBoard);
		var tutorialText;
	    tutorialText = document.createElement("div");
	    tutorialText.id = "startButtonDiv";
	    tutorialText.appendChild(document.createTextNode("if this text on the board is right click True"));
	    gameBoard.appendChild(tutorialText);

        // let's roll some right answers
        var colorName = colors.colorName; //["yellow",   "green",  "blue",   "red", "white"]; 
        // var colorNumber = ["#ffd400", "#54b633", "#5882fe", "#cc3333", "#fff"];
        var colorNumber = colors.colorNumber; //["#ffab00", "#64dd17", "#0091ea", "#d50000", "#fff"];

        var n = Math.floor(Math.random() * colorName.length); 
        var myFirstColor = colorName[n];
        var text = "this text is " + myFirstColor;
        var myColor = colorNumber[n];
        createBoard (gameBoard, text, myColor); 

		trueButton.onclick = function() {
			howManyGoodAnswers++;
			if (howManyGoodAnswers >= 4) {
				clearBoard(gameBoard);
				console.log("more than 5 good answers");
				startNewLevelButton();
			} else {
				console.log(howManyGoodAnswers);
				clearBoard(gameBoard);
				var tutorialText;
			    tutorialText = document.createElement("div");
			    tutorialText.id = "startButtonDiv";
			    tutorialText.appendChild(document.createTextNode("Great!"));
			    gameBoard.appendChild(tutorialText);
			    setTimeout(function(){wrongAnswer();}, 500)
			}
			
		}
		falseButton.onclick = function() {
			clearBoard(gameBoard);
			var tutorialText;
		    tutorialText = document.createElement("div");
		    tutorialText.id = "startButtonDiv";
		    tutorialText.appendChild(document.createTextNode("Try again"));
		    gameBoard.appendChild(tutorialText);
			setTimeout(function(){rightAnswer();}, 500)
		}
	}

	function wrongAnswer() {
		clearBoard(gameBoard);

		var tutorialText;
	    tutorialText = document.createElement("div");
	    tutorialText.id = "startButtonDiv";
	    tutorialText.appendChild(document.createTextNode("if this text on the board is wrong click False"));
	    gameBoard.appendChild(tutorialText);

        //lets roll some wrong colors
        var wrongColorName = colors.colorName.slice();
        var wrongcColorNumber = colors.colorNumber.slice();

        var n = Math.floor(Math.random() * wrongColorName.length); 
        var myFirstColor = wrongColorName[n];
        var text = "this text is " + myFirstColor;

        var roll = wrongcColorNumber.splice(n, 1);
        var o = Math.floor(Math.random() * wrongcColorNumber.length); 
        myColor = wrongcColorNumber[o];
        console.log(wrongcColorNumber);
        createBoard (gameBoard, text, myColor); 

		falseButton.onclick = function() {
			howManyGoodAnswers++;
			if (howManyGoodAnswers >= 4) {
				clearBoard(gameBoard);
				startNewLevelButton();
			} else {
				console.log(howManyGoodAnswers);
				clearBoard(gameBoard);
				var tutorialText;
			    tutorialText = document.createElement("div");
			    tutorialText.id = "startButtonDiv";
			    tutorialText.appendChild(document.createTextNode("Great!"));
			    gameBoard.appendChild(tutorialText);
			    setTimeout(function(){rightAnswer();}, 500)
			}
			
		}
		trueButton.onclick = function() {
			clearBoard(gameBoard);
			var tutorialText;
		    tutorialText = document.createElement("div");
		    tutorialText.id = "startButtonDiv";
		    tutorialText.appendChild(document.createTextNode("Try again"));
		    gameBoard.appendChild(tutorialText);
			setTimeout(function(){wrongAnswer();}, 500)
		}
	}
	rightAnswer();
}


function startNewLevelButton() {
    clearBoard(gameBoard);
    gameState.score = 0;
    scoreDiv.innerHTML = gameState.score;
    gameState.levelScores[gameState.myLevel] = 0;
    gameState.levelBestScores[gameState.myLevel] = gameState.levelBestScores[gameState.myLevel];
    gameState.timeScore[gameState.myLevel] = 0;

    gameState.thisQuestionNumber = 0;
    gameState.lastQuestion = [];
    
    var text;

    if (gameState.myLevel < 2) {
        text = "Now you have 3 seconds for every answer";  
    } else if (gameState.myLevel >= 2 && gameState.myLevel < 7) {
        text = "Now you have 2 seconds for every answer";  
    } else if (gameState.myLevel >= 7 && gameState.myLevel < 11) {
        text = "Now you have 1.5 second for every answer";  
    } else {
        text = "Now you have 1 second for every answer";  
    }
    
    addLevelButton(gameBoard, text);
}

function addLevelButton(parent, i) {
    document.getElementById("footer").classList.add("hidden");

    var startButtonDiv;
    startButtonDiv = document.createElement("div");
    startButtonDiv.id = "startButtonDiv";
 
    startButtonDiv.appendChild(document.createTextNode(i));

    var startButton;
    startButton = document.createElement("button");
    startButton.id = "startButton";
 
    startButton.appendChild(document.createTextNode("START"));
    startButtonDiv.appendChild(startButton);

    startButtonDiv.onclick = function() {
        startNewLevel(gameBoard);
    };
    parent.appendChild(startButtonDiv);
}

function showLevelsMenu() {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("footer").classList.add("hidden");
    document.getElementById("levels").classList.remove("hidden");
    drawLevelsMenu();
}

function drawLevelsMenu() {
    
    clearBoard(levelBoard);
    var numberOfButtonHere = 0;

    // var newTable = document.createElement("table");
    // newTable.id = "newTable";
    // for (var i=0; i<6; i++) {
    //     var tr = document.createElement("tr");
    //     newTable.appendChild(tr);
    //     for (var j=0; j<4; j++) {
    //         var td = document.createElement("td");
    //         addLevelsMenuButton(td, numberOfButtonHere);
            
    //         numberOfButtonHere++;
    //         tr.appendChild(td);
    //     }
    // }
    // levelBoard.appendChild(newTable);   

    var newGrid = document.createElement("ul");
    newGrid.id = "Grid";
    for (var i=0; i<21; i++) {
        // var li = document.createElement("li");
            addLevelsMenuButton(newGrid, numberOfButtonHere);
            numberOfButtonHere++;
        // newGrid.appendChild(li);
    }
    levelBoard.appendChild(newGrid);  
}

function addLevelsMenuButton(parent, i) {
    var br = document.createElement("br");

    var newButton;
    newButton = document.createElement("li");
    newButton.id = "menuButton";
        var levelContent = document.createElement("div");
        levelContent.id = "levelContent";
        levelContent.classList.add("levelContent");
        var levelNumber = document.createElement("div");
        levelNumber.appendChild(document.createTextNode("level " + i));
        levelContent.appendChild(levelNumber);
        var bestScore = document.createElement("div");
        bestScore.appendChild(document.createTextNode("best score: " + (gameState.levelBestScores[i] || 0)));
        levelContent.appendChild(bestScore);
        // levelContent.appendChild()
        // levelContent.appendChild(document.createTextNode("level " + i + "&nbsp;"));
            // var subLevelContent = document.createElement("div");
        // levelContent.appendChild( document.createTextNode( '\u00A0' ) );
            // var subLevelContent = document.createElement("div");
            // subLevelContent.id = "subLevelContent";
        // levelContent.appendChild(document.createElement("div").appendChild(
        //     document.createTextNode("best score: " + (gameState.levelBestScores[i] || 0))));
        // levelContent.appendChild(document.createTextNode("best score: " + (gameState.levelBestScores[i] || 0)));
            // levelContent.appendChild(subLevelContent);
        newButton.appendChild(levelContent);
    newButton.onclick = function () {
        document.getElementById("levels").classList.add("hidden");
        document.getElementById("game").classList.remove("hidden");
        document.getElementById("footer").classList.remove("hidden");


        gameState.myLevel = i;
        levelDiv.innerHTML = gameState.myLevel;
       
        startNewLevelButton();
    };
    parent.appendChild(newButton);
}

function levelFailed() {
    gameState.levelStarted = false;
    clearInterval(gameState.timeId);
    gameState.lastQuestion = [];

    var text = "your score: " + gameState.levelScores[gameState.myLevel];
    
    var levelFailedBackground;
    levelFailedBackground = document.createElement("div");
    levelFailedBackground.id = "levelFailedBackground";
    gameBoard.appendChild(levelFailedBackground);


    var levelFailedButton;
    levelFailedButton = document.createElement("div");
    levelFailedButton.id = "startButtonDiv";
    levelFailedButton.appendChild(document.createTextNode(text));

    var retryButton;
    retryButton = document.createElement("div");
    retryButton.id = "retryButton";

    if (gameState.levelScores[gameState.myLevel] >=4) {
        gameState.myLevel++;
        levelDiv.innerHTML = gameState.myLevel;
        retryButton.appendChild(document.createTextNode("NEXT"));
    } else {
        retryButton.appendChild(document.createTextNode("RETRY"));
    }
    retryButton.onclick = function() {
        startNewLevelButton();
    };
    levelFailedButton.appendChild(retryButton);

    var goToMenuButton;
    goToMenuButton = document.createElement("div");
    goToMenuButton.id = "goToMenuButton";
    goToMenuButton.appendChild(document.createTextNode("MENU"));
    goToMenuButton.onclick = function() {
        showLevelsMenu();
    };
    levelFailedButton.appendChild(goToMenuButton);

    gameBoard.appendChild(levelFailedButton);

}

function startNewLevel() {
    gameState.levelStarted = true;
    clearBoard(gameBoard); 
    falseButton.classList.remove("element");
    trueButton.classList.remove("element");

    document.getElementById("footer").classList.remove("hidden");
    var n = Math.floor(Math.random() * levels[gameState.myLevel].creators.length); 
    levels[gameState.myLevel].creators[n]();      
    createTimer();
    gamePlay();
}



function clearBoard(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}


function gamePlay() {

    trueButton.onclick = function() {
        if(gameState.levelStarted) {
            // trueButton.style.backgroundColor = "#4f9b94";
            // setTimeout(function() {
            //             trueButton.style.backgroundColor = "#e91e63";
            // }, 200)

            if (gameState.isEquationTrue) {
                gameState.levelScores[gameState.myLevel]++;
                gameState.thisQuestionNumber++;
                scoreDiv.innerHTML = gameState.levelScores[gameState.myLevel];
                startNewLevel();
            } else {
                if (gameState.levelScores[gameState.myLevel] > gameState.levelBestScores[gameState.myLevel]) {
                        gameState.levelBestScores[gameState.myLevel] = gameState.levelScores[gameState.myLevel];
                }
                gameState.timeScore[gameState.myLevel] = gameState.myTime;
                saveMyData();
                levelFailed();
            }
        }
    }

    falseButton.onclick = function() {
        if(gameState.levelStarted) {
            // falseButton.style.backgroundColor = "#4f9b94";
            // setTimeout(function() {
            //             falseButton.style.backgroundColor = "#80ccc4"; 
            // }, 200)

            if (gameState.isEquationTrue) {
                if (gameState.levelScores[gameState.myLevel] > gameState.levelBestScores[gameState.myLevel]) {
                    gameState.levelBestScores[gameState.myLevel] = gameState.levelScores[gameState.myLevel];
                }
                gameState.timeScore[gameState.myLevel] = gameState.myTime;
                saveMyData();
                levelFailed();
            } else {
                gameState.levelScores[gameState.myLevel]++;
                gameState.thisQuestionNumber++;
                scoreDiv.innerHTML = gameState.levelScores[gameState.myLevel];
                startNewLevel();
            }
        }
    }
}

