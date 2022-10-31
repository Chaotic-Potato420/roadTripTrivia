var pl1scr = localStorage.getItem('pl1scr');
var pl2scr = localStorage.getItem('pl2scr');
var pl3scr = localStorage.getItem('pl3scr');
var pl4scr = localStorage.getItem('pl4scr');
var pl5scr = localStorage.getItem('pl5scr');
var pl6scr = localStorage.getItem('pl6scr');

var p1n = capitalize(localStorage.getItem('player1Name'));
var p2n = capitalize(localStorage.getItem('player2Name'));
var p3n = capitalize(localStorage.getItem('player3Name'));
var p4n = capitalize(localStorage.getItem('player4Name'));
var p5n = capitalize(localStorage.getItem('player5Name'));
var p6n = capitalize(localStorage.getItem('player6Name'));

var first = document.getElementById('firstPlace');
var second = document.getElementById('secondPlace');
var third = document.getElementById('thirdPlace');
var fourth = document.getElementById('fourthPlace');
var fifth = document.getElementById('fifthPlace');
var sixth = document.getElementById('sixthPlace');

var playerNum = localStorage.getItem('playerCount');

var firstContent = "";
var secondContent = "";
var thirdContent = "";
var fourthContent = "";
var fifthContent = "";
var sixthContent = "";

const scores = [pl1scr, pl2scr, pl3scr, pl4scr, pl5scr , pl6scr];
const names = [p1n, p2n, p3n, p4n, p5n, p6n];

scores.sort();
console.log(names);

const newScores = [];

//sort scores
window.onload = function(){
    for(let i = 0; i < scores.length; ++i){
        scores.sort(function(a, b){return b-a});
        //(comments below apply to each if statement)
        if (scores[i] == pl1scr){
            if(playerNum >= 1){
                //display player name plus the whole number of the player scores
                firstContent = p1n + ' - ' + Math.trunc(pl1scr);
                //add the player scores to a new array
                newScores.push(firstContent);
            }
        }else if (scores[i] == pl2scr){
            if(playerNum >= 2){
                secondContent = p2n + ' - ' + Math.trunc(pl2scr)
                newScores.push(secondContent);
            }
        }else if (scores[i] == pl3scr){
            if(playerNum >= 3){
                thirdContent = p3n + ' - ' + Math.trunc(pl3scr)
                newScores.push(thirdContent);
            }
        }else if (scores[i] == pl4scr){
            if(playerNum >= 4){
                fourthContent = p4n + ' - ' + Math.trunc(pl4scr)
                newScores.push(fourthContent);
            }
        }else if (scores[i] == pl5scr){
            if(playerNum >= 5){
                fifthContent = p5n + ' - ' + Math.trunc(pl5scr)
                newScores.push(fifthContent);
            }
        }else if (scores[i] == pl6scr){
            if(playerNum >= 6){
                sixthContent = p6n + ' - ' + Math.trunc(pl6scr)
                newScores.push(sixthContent);
            }
        }
        
    }

    //display each player and score (ranked)
    if(playerNum == 1){
        document.getElementById("one").innerHTML = "1.) " + newScores[0];
    }else if(playerNum == 2){
        document.getElementById("one").innerHTML = "1.) " + newScores[0];
        document.getElementById("two").innerHTML = "2.) " + newScores[1];
    }else if(playerNum == 3){
        document.getElementById("one").innerHTML = "1.) " + newScores[0];
        document.getElementById("two").innerHTML = "2.) " + newScores[1];
        document.getElementById("three").innerHTML = "3.) " + newScores[2];
    }else if(playerNum == 4){
        document.getElementById("one").innerHTML = "1.) " + newScores[0];
        document.getElementById("two").innerHTML = "2.) " + newScores[1];
        document.getElementById("three").innerHTML = "3.) " + newScores[2];
        document.getElementById("four").innerHTML = "4.) " + newScores[3];
    }else if(playerNum == 5){
        document.getElementById("one").innerHTML = "1.) " + newScores[0];
        document.getElementById("two").innerHTML = "2.) " + newScores[1];
        document.getElementById("three").innerHTML = "3.) " + newScores[2];
        document.getElementById("four").innerHTML = "4.) " + newScores[3];
        document.getElementById("five").innerHTML = "5.) " + newScores[4];
    }else if(playerNum == 6){
        document.getElementById("one").innerHTML = "1.) " + newScores[0];
        document.getElementById("two").innerHTML = "2.) " + newScores[1];
        document.getElementById("three").innerHTML = "3.) " + newScores[2];
        document.getElementById("four").innerHTML = "4.) " + newScores[3];
        document.getElementById("five").innerHTML = "5.) " + newScores[4];
        document.getElementById("six").innerHTML = "6.) " + newScores[5];
    }
}

//capitalize player names
function capitalize(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

//go back to the same mode
function again(){
    window.location.replace("../index.html");
}