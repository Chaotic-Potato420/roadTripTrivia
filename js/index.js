//document variables
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var player3 = document.getElementById('player3');
var player4 = document.getElementById('player4');
var player5 = document.getElementById('player5');
var player6 = document.getElementById('player6');

var addPlayer = document.getElementById("addPlayer");

var theme = "";

var i = 0;

window.onload = function(){
    //progress bar on splash screen animation
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 10;
        var id = setInterval(frame, 20);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
    //splash screen timing/animation
    setTimeout(() => {
        document.getElementById('splashScreen').style.display = "none";
        document.getElementById('board').style.display = "block";
    }, 2100)
    document.getElementById('board').style.display = "none";
    document.getElementById('htpDiv').style.display = "none";

    //set player divs to invisible
    player1.style.display = "none";
    player2.style.display = "none";
    player3.style.display = "none";
    player4.style.display = "none";
    player5.style.display = "none";
    player6.style.display = "none";

    //disable theme button
    document.getElementById('theme1').disabled = true;
    document.getElementById('theme2').disabled = true;
    document.getElementById('theme3').disabled = true;
}

//button functions
var playerCount = 0;

//increase number of players and display a div according to the number of players
addPlayer.addEventListener('click', function(){
    playerCount += 1;
    console.log(playerCount)
    if(playerCount == 1){
        player1.style.display = "inline";
        player1Input.focus();
        addPlayer.style.display = "none";
    }else if(playerCount == 2){
        player2.style.display = "inline";
        player2Input.focus();
        addPlayer.style.display = "none";
    }else if(playerCount == 3){
        player3.style.display = "inline";
        player3Input.focus();
        addPlayer.style.display = "none";
    }else if(playerCount == 4){
        player4.style.display = "inline";
        player4Input.focus();
        addPlayer.style.display = "none";
    }else if(playerCount == 5){
        player5.style.display = "inline";
        player5Input.focus();
        addPlayer.style.display = "none";
    }else if(playerCount == 6){
        player6.style.display = "inline";
        player6Input.focus();
    }
})

//set each player's name to the input boxes values
var player1Name = "";
var player2Name = "";
var player3Name = "";
var player4Name = "";
var player5Name = "";
var player6Name = "";

var player1Input = document.getElementById('playerName1');
var player2Input = document.getElementById('playerName2');
var player3Input = document.getElementById('playerName3');
var player4Input = document.getElementById('playerName4');
var player5Input = document.getElementById('playerName5');
var player6Input = document.getElementById('playerName6');

//the function for saving a name
function saveName(){
    //(the comments below apply to each if statment!)
    if(playerCount == 1){
        //if the name is empty, alert the user
        if(player1Input.value == ""){
            alert("please enter a name first")
        }else{
            //if the name isn't empty...
            //save the player's name
            player1Name = player1Input.value;
            //disable editing of the name
            player1Input.disabled = true;
            console.log(player1Name)
            //show the add player button
            addPlayer.style.display = "flex";
            //hide the save button
            document.getElementById('save1').style.display = "none";
        }
    }
    if(playerCount == 2){
        if(player2Input.value == ""){
            alert("please enter a name first")
        }else{
            player2Name = player2Input.value;
            player2Input.disabled = true;
            console.log(player2Name)
            addPlayer.style.display = "flex";
            document.getElementById('save2').style.display = "none";
        }
    }
    if(playerCount == 3){
        if(player3Input.value == ""){
            alert("please enter a name first")
        }else{
            player3Name = player3Input.value;
            player3Input.disabled = true;
            console.log(player3Name)
            addPlayer.style.display = "flex";
            document.getElementById('save3').style.display = "none";
        }
    }
    if(playerCount == 4){
        if(player4Input.value == ""){
            alert("please enter a name first")
        }else{
            player4Name = player4Input.value;
            player4Input.disabled = true;
            console.log(player4Name)
            addPlayer.style.display = "flex";
            document.getElementById('save4').style.display = "none";
        }
    }
    if(playerCount == 5){
        if(player5Input.value == ""){
            alert("please enter a name first")
        }else{
            player5Name = player5Input.value;
            player5Input.disabled = true;
            console.log(player5Name)
            addPlayer.style.display = "flex";
            document.getElementById('save5').style.display = "none";
        }
    }
    if(playerCount == 6){
        if(player6Input.value == ""){
            alert("please enter a name first")
        }else{
            player6Name = player6Input.value;
            player6Input.disabled = true;
            console.log(player6Name)
            addPlayer.style.display = "flex";
            document.getElementById('save6').style.display = "none";
        }
        addPlayer.style.display = "none";
    }
    document.getElementById('theme1').disabled = false;
    document.getElementById('theme2').disabled = false;
    document.getElementById('theme3').disabled = false;
}

//functions that change the screen and set theme mode 
//(comments in the first function apply to the second and third too!)
document.getElementById('theme1').addEventListener('click', function(){
    //set the number of players to storage
    localStorage.setItem('playerCount', playerCount);
    //set all of the player names to storage
    localStorage.setItem('player1Name', player1Name);
    localStorage.setItem('player2Name', player2Name);
    localStorage.setItem('player3Name', player3Name);
    localStorage.setItem('player4Name', player4Name);
    localStorage.setItem('player5Name', player5Name);
    localStorage.setItem('player6Name', player6Name);
    //change theme mode and set mode variable to storage
    theme = "theme1";
    localStorage.setItem('themeMode', theme);
    //change window's location
    window.location.replace("html/theme1.html");
})
document.getElementById('theme2').addEventListener('click', function(){
    localStorage.setItem('playerCount', playerCount);
    localStorage.setItem('player1Name', player1Name);
    localStorage.setItem('player2Name', player2Name);
    localStorage.setItem('player3Name', player3Name);
    localStorage.setItem('player4Name', player4Name);
    localStorage.setItem('player5Name', player5Name);
    localStorage.setItem('player6Name', player6Name);
    theme = "theme2";
    localStorage.setItem('themeMode', theme);
    window.location.replace("html/theme1.html");
})
document.getElementById('theme3').addEventListener('click', function(){
    localStorage.setItem('playerCount', playerCount);
    localStorage.setItem('player1Name', player1Name);
    localStorage.setItem('player2Name', player2Name);
    localStorage.setItem('player3Name', player3Name);
    localStorage.setItem('player4Name', player4Name);
    localStorage.setItem('player5Name', player5Name);
    localStorage.setItem('player6Name', player6Name);
    theme = "theme3";
    localStorage.setItem('themeMode', theme);
    window.location.replace("html/theme1.html");
})

//function for the back button on the help screen
function back(){
    //hide the help screen
    document.getElementById('htpDiv').style.display = "none";
    //show the first screen
    document.getElementById('board').style.display = "block";
}

//function for the question button on the first screen
function htp(){
    //display the help screen
    document.getElementById('htpDiv').style.display = "block";
    //hide the first screen
    document.getElementById('board').style.display = "none";
}