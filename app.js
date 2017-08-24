
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
    

    n = Math.floor(Math.random() * nameColorName.length); 
    myFirstColor = nameColorName[n];

    gameState.lastQuestion.push(myFirstColor);

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
    var newEquationDiv;
    newEquationDiv = document.createElement("div");
    newEquationDiv.id = "gameBoardDiv";
    newEquationDiv.appendChild(document.createTextNode(i));
    parent.appendChild(newEquationDiv);
    newEquationDiv.style.color = fontcolor;
}

function createEquation() {
    var num;
    var equationColor;
    var equationColorNumber = colors.colorNumber.slice();
    				  
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
                {creators: [                createColorName, createShape], timeMode: 'crazy', shapeMode: 'normal', colorMode: 'crazy'},
                {creators: [createEquation,                  createShape], timeMode: 'crazy', equationMode: 'crazy', shapeMode: 'crazy'},
                {creators: [createEquation, createColorName, createShape], timeMode: 'crazy', equationMode: 'crazy', shapeMode: 'crazy', colorMode: 'normal'},

                {creators: [createEquation                              ], timeMode: 'supercrazy', equationMode: 'zen'},
                {creators: [                createColorName             ], timeMode: 'supercrazy', colorMode: 'zen'},
                {creators: [                                 createShape], timeMode: 'supercrazy', shapeMode: 'zen'},
                {creators: [createEquation, createColorName,            ], timeMode: 'turbo', equationMode: 'normal', colorMode: 'zen'},
                {creators: [                createColorName, createShape], timeMode: 'turbo', shapeMode: 'normal', colorMode: 'crazy'},
                {creators: [createEquation,                  createShape], timeMode: 'turbo', equationMode: 'crazy', shapeMode: 'crazy'},
                {creators: [createEquation, createColorName, createShape], timeMode: 'turbo', equationMode: 'crazy', shapeMode: 'crazy', colorMode: 'normal'},                                                                  
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
    		showLevelsMenu();
    	} else {
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

                        saveMyData();
                        gameState.levelBestScores[gameState.myLevel] = gameState.levelBestScores[gameState.myLevel] || 0;
                        levelFailed();
                        clearInterval(gameState.timeId);
                    }
                }

    if (gameState.levelStarted) {

        switch (levels[gameState.myLevel].timeMode) {
            

            case 'zen':
                gameState.myTime = 30;
                timeDiv.innerHTML = gameState.myTime;
                gameState.timeId = setInterval(frame, 100);            
                break;

            case 'normal':
                gameState.myTime = 20;
                timeDiv.innerHTML = gameState.myTime;
                gameState.timeId = setInterval(frame, 100);
                break;

            case 'crazy':
                gameState.myTime = 15;
                timeDiv.innerHTML = gameState.myTime;
                gameState.timeId = setInterval(frame, 100);            
                break;

            case 'supercrazy':
                gameState.myTime = 10;
                timeDiv.innerHTML = gameState.myTime;
                gameState.timeId = setInterval(frame, 100);            
                break;

            case 'turbo':
                gameState.myTime = 7;
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

        var colorName = colors.colorName; 
        var colorNumber = colors.colorNumber; 

        var n = Math.floor(Math.random() * colorName.length); 
        var myFirstColor = colorName[n];
        var text = "this text is " + myFirstColor;
        var myColor = colorNumber[n];
        createBoard (gameBoard, text, myColor); 

		trueButton.onclick = function() {
			howManyGoodAnswers++;
			if (howManyGoodAnswers >= 4) {
				clearBoard(gameBoard);
				startNewLevelButton();
			} else {
				
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
        createBoard (gameBoard, text, myColor); 

		falseButton.onclick = function() {
			howManyGoodAnswers++;
			if (howManyGoodAnswers >= 4) {
				clearBoard(gameBoard);
				startNewLevelButton();
			} else {
				
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
    loadMyData();

    levelDiv.innerHTML = gameState.myLevel + 1;
    gameState.score = 0;
    scoreDiv.innerHTML = gameState.score;
    gameState.levelScores[gameState.myLevel] = 0;
    gameState.levelBestScores[gameState.myLevel] = gameState.levelBestScores[gameState.myLevel] || 0;
    gameState.timeScore[gameState.myLevel] = 0;

    gameState.thisQuestionNumber = 0;
    gameState.lastQuestion = [];
    
    var text;

    if (gameState.myLevel < 2) {

        switch (levels[gameState.myLevel].timeMode) {
            

            case 'zen':
                text = "Now you have 3 seconds for every answer";            
                break;

            case 'normal':
                text = "Now you have 2 seconds for every answer";
                break;

            case 'crazy':
                text = "Now you have 1.5 second for every answer";            
                break;

            case 'supercrazy':
                text = "Now you have only 1 second for every answer";             
                break;

            case 'turbo':
                text = "Now you have only 0.7 second for every answer";            
                break;

            default:
                text = "Now you have 3 second for every answer";   
        }
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
    loadMyData();
    gameState.levelBestScores[gameState.myLevel] = gameState.levelBestScores[gameState.myLevel] || 0;
    drawLevelsMenu();
}

function drawLevelsMenu() {
    clearBoard(levelBoard);
    var numberOfButtonHere = 0;  

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

    var numberOfThisLevel = i + 1; 
    var newButton;
    newButton = document.createElement("li");
    newButton.id = "menuButton";

    var levelContent = document.createElement("div");
    levelContent.id = "levelContent";
    levelContent.classList.add("levelContent");
    var levelNumber = document.createElement("div");
    levelNumber.appendChild(document.createTextNode("level " + numberOfThisLevel));
    levelContent.appendChild(levelNumber);
    var bestScore = document.createElement("div");
    bestScore.appendChild(document.createTextNode("best score: " + (gameState.levelBestScores[i] || 0)));
    levelContent.appendChild(bestScore);
    newButton.appendChild(levelContent);

    if ( gameState.levelBestScores[i] > 0) {
        newButton.style.backgroundColor = "#00897B";
    }

    newButton.onclick = function () {
        document.getElementById("levels").classList.add("hidden");
        document.getElementById("game").classList.remove("hidden");
        document.getElementById("footer").classList.remove("hidden");


        gameState.myLevel = i;
        levelDiv.innerHTML = gameState.myLevel + 1;
       
        startNewLevelButton();
    };
    parent.appendChild(newButton);
}

function levelFailed() {
    gameState.levelStarted = false;
    clearInterval(gameState.timeId);
    gameState.lastQuestion = [];
    loadMyData();
    gameState.levelBestScores[gameState.myLevel] = gameState.levelBestScores[gameState.myLevel] || 0;


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
        levelDiv.innerHTML = gameState.myLevel + 1;
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

            if (gameState.isEquationTrue) {
                gameState.levelScores[gameState.myLevel]++;
                gameState.thisQuestionNumber++;
                scoreDiv.innerHTML = gameState.levelScores[gameState.myLevel];
                if (gameState.levelScores[gameState.myLevel] > gameState.levelBestScores[gameState.myLevel]) {
                        gameState.levelBestScores[gameState.myLevel] = gameState.levelScores[gameState.myLevel];
                }
                saveMyData();
                startNewLevel();
            } else {
                if (gameState.levelScores[gameState.myLevel] > gameState.levelBestScores[gameState.myLevel]) {
                        gameState.levelBestScores[gameState.myLevel] = gameState.levelScores[gameState.myLevel];
                } else {
                    gameState.levelBestScores[gameState.myLevel] = gameState.levelBestScores[gameState.myLevel] || 0;
                }
                gameState.timeScore[gameState.myLevel] = gameState.myTime;
                saveMyData();
                levelFailed();
            }
        }
    }

    falseButton.onclick = function() {
        if(gameState.levelStarted) {

            if (gameState.isEquationTrue) {
                if (gameState.levelScores[gameState.myLevel] > gameState.levelBestScores[gameState.myLevel]) {
                    gameState.levelBestScores[gameState.myLevel] = gameState.levelScores[gameState.myLevel];
                } else {
                    gameState.levelBestScores[gameState.myLevel] = gameState.levelBestScores[gameState.myLevel] || 0;
                }
                gameState.timeScore[gameState.myLevel] = gameState.myTime;
                saveMyData();

                levelFailed();
            } else {
                gameState.levelScores[gameState.myLevel]++;
                gameState.thisQuestionNumber++;
                scoreDiv.innerHTML = gameState.levelScores[gameState.myLevel];
                if (gameState.levelScores[gameState.myLevel] > gameState.levelBestScores[gameState.myLevel]) {
                        gameState.levelBestScores[gameState.myLevel] = gameState.levelScores[gameState.myLevel];
                }
                saveMyData();
                startNewLevel();
            }
        }
    }
}

