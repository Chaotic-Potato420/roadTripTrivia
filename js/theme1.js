//document variables
var choicesDiv = document.getElementById('choices');
var questionsDiv = document.getElementById('questions');
var question = document.getElementById('q');
var answer = document.getElementById('a');
var nextQ = document.getElementById('next');
var show = document.getElementById('show');

var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var player3 = document.getElementById('player3');
var player4 = document.getElementById('player4');
var player5 = document.getElementById('player5');
var player6 = document.getElementById('player6');

var playerName1 = document.getElementById('playerName1');
var playerName2 = document.getElementById('playerName2');
var playerName3 = document.getElementById('playerName3');
var playerName4 = document.getElementById('playerName4');
var playerName5 = document.getElementById('playerName5');
var playerName6 = document.getElementById('playerName6');

var playerScore1 = document.getElementById('player1Score');
var playerScore2 = document.getElementById('player2Score');
var playerScore3 = document.getElementById('player3Score');
var playerScore4 = document.getElementById('player4Score');
var playerScore5 = document.getElementById('player5Score');
var playerScore6 = document.getElementById('player6Score');

//get number of players from storage
var playerNum = localStorage.getItem('playerCount');

//player score variables
var player1Scr = 0;
var player2Scr = 0;
var player3Scr = 0;
var player4Scr = 0;
var player5Scr = 0;
var player6Scr = 0;

window.onload = function(){
    //hide the questions div to allow players to choose difficulty
    questionsDiv.style.display = "none";
    answer.style.display = 'none';
    nextQ.disabled = true;
    //get player's name based on number of players
    if(playerNum == 1){
        playerName1.innerHTML = localStorage.getItem('player1Name');
        document.getElementById('player2').style.display = "none";
        document.getElementById('player3').style.display = "none";
        document.getElementById('player4').style.display = "none";
        document.getElementById('player5').style.display = "none";
        document.getElementById('player6').style.display = "none";
    }else if(playerNum == 2){8
        playerName1.innerHTML = localStorage.getItem('player1Name');
        playerName2.innerHTML = localStorage.getItem('player2Name');
        document.getElementById('player3').style.display = "none";
        document.getElementById('player4').style.display = "none";
        document.getElementById('player5').style.display = "none";
        document.getElementById('player6').style.display = "none";
    }else if(playerNum == 3){
        playerName1.innerHTML = localStorage.getItem('player1Name');
        playerName2.innerHTML = localStorage.getItem('player2Name');
        playerName3.innerHTML = localStorage.getItem('player3Name');
        document.getElementById('player4').style.display = "none";
        document.getElementById('player5').style.display = "none";
        document.getElementById('player6').style.display = "none";
    }else if(playerNum == 4){
        playerName1.innerHTML = localStorage.getItem('player1Name');
        playerName2.innerHTML = localStorage.getItem('player2Name');
        playerName3.innerHTML = localStorage.getItem('player3Name');
        playerName4.innerHTML = localStorage.getItem('player4Name');
        document.getElementById('player5').style.display = "none";
        document.getElementById('player6').style.display = "none";
    }else if(playerNum == 5){
        playerName1.innerHTML = localStorage.getItem('player1Name');
        playerName2.innerHTML = localStorage.getItem('player2Name');
        playerName3.innerHTML = localStorage.getItem('player3Name');
        playerName4.innerHTML = localStorage.getItem('player4Name');
        playerName5.innerHTML = localStorage.getItem('player5Name');
        document.getElementById('player6').style.display = "none";
    }else if(playerNum == 6){
        playerName1.innerHTML = localStorage.getItem('player1Name');
        playerName2.innerHTML = localStorage.getItem('player2Name');
        playerName3.innerHTML = localStorage.getItem('player3Name');
        playerName4.innerHTML = localStorage.getItem('player4Name');
        playerName5.innerHTML = localStorage.getItem('player5Name');
        playerName6.innerHTML = localStorage.getItem('player6Name');
    }

    //disable add point buttons
    player1.querySelector("button").disabled = true;
    player2.querySelector("button").disabled = true;
    player3.querySelector("button").disabled = true;
    player4.querySelector("button").disabled = true;
    player5.querySelector("button").disabled = true;
    player6.querySelector("button").disabled = true;
}

//functions when the user chooses the difficulty level
var mode = "";
document.getElementById('easy').addEventListener('click', function(){
    mode = "easy";
    play();
})
document.getElementById('medium').addEventListener('click', function(){
    mode = "medium";
    play();
})
document.getElementById('hard').addEventListener('click', function(){
    mode = "hard";
    play();
})

//create the questions and answers array and initialises them to empty
var questions = [];
var answers = [];

//function for setting the questions
function play(){
    //hide the difficulty div
    choicesDiv.style.display = "none";
    //show the questions div
    questionsDiv.style.display = "block";
    //show questions based on mode
    if(localStorage.getItem('themeMode') == "theme1"){
        //change questions for theme1 based on difficulty
        if(mode == "easy"){
            questions = [
                'What ship does Jim Kirk captain?',
                'Who wrote "The Lorax"?',
                'What are the four Hogwarts houses?',
                'Who lives in a pineapple under the sea?',
                "What color are Dorothy's slippers in The Wizard of Oz?",
                'How many times did Ross Geller from Friends get divorced?',
                "Who is Luke Skywalker's father?",
                'Who wrote the "Twilight" series?',
                'What did the app "Musically" turn into?',
                'What social media platform has a ghost as the logo?',
                'Who played Forrest Gump?',
                'What kind of dog is Old Yeller?',
                'Who is the"Tiger King"?',
                "Who is Shrek's sidekick?",
                'What movie is the character "Moto Moto" from?',
                'In "Ice Age" who does Manny first meet?',
                "What is the prince's name in 'The Little Mermaid'?",
                'How many dwarfs does Snow White live with?',
                "What is Indiana Jones' signature weapon?",
                'Who plays Patrick Bateman in "American Psycho"?',
            ];
            answers = [
                'U.S.S Enterprise',
                'Dr. Seuss',
                'Gryffindor, Hufflepuff, Ravenclaw, Slytherin ',
                'SpongeBob SquarePants',
                'Red',
                'Three',
                'Darth Vader',
                'Stephenie Meyer',
                'Tik Tok',
                'Snapchat',
                'Tom Hanks',
                'Labrador Retriever',
                'Joe Exotic',
                'Donkey',
                'Madagascar 2',
                'Sid the Sloth',
                'Prince Eric',
                'Seven',
                'A whip',
                'Christian Bale',
            ]
            question.innerHTML = questions[listIndex];
            answer.innerHTML = answers[listIndex];
        }else if(mode == "medium"){
            questions = [
                "What is the name of Winston's cat in 'New Girl'?",
                'Who plays Michael in "The Good Place"?',
                'When was the live action "Beauty and the Beast" released?',
                "What is the tow truck's name in the movie 'Cars'?",
                'Who is the leader of the penguins from the "Madagascar" francise?',
                "What is the name of Dumbledore's phoenix?",
                'What does Smokey the Bear say?',
                'Who wrote the Hamilton musical?',
                'What camp does Percy Jackson stay at?',
                'Who sang the 1997 song "Barbie Girl"?',
                'What song did Tom Holland lip sync to?',
                'What TV show aired the first interracial kiss?',
                'Finish the quote from "The Office", "Bears, Beets, _ ".',
                "Who hosts 'Hell's Kitchen?'",
                'Who is Beyoncé married to?',
                'Who played Freddie Mercury in "Bohemian Rhapsody"?',
                'Who sang at the 2021 superbowl?',
                'What is the name of the "Full House" reboot?',
                'What famous Christmas song did Elvis sing?',
                'Who played Jack in the movie musical "Newsies"?',
            ];
            answers = [
                'Furguson',
                'Ted Danson',
                '2017',
                'Mater',
                'Skipper',
                'Fawks',
                '"Only you can prevent wildfires."',
                'Lin-Manuel Miranda',
                'Camp Half-Blood',
                'Aqua',
                'Umbrella',
                'Star Trek',
                'Battlestar Galactica',
                'Gordon Ramsay',
                'Jay-Z',
                'Rami Malek',
                'The Weekend',
                'Fuller House',
                'Blue Christmas',
                'Christian Bale',
            ];
            question.innerHTML = questions[listIndex];
            answer.innerHTML = answers[listIndex];
        }else if(mode == "hard"){
            questions = [
                "What was Marilyn Monroe's real name?",
                'Name the company that uses Santa in their ads every year.',
                'What is the name of the boat in "Jaws"?',
                'What character did Jasmine Cephas Jones play in the second act of "Hamilton"?',
                "Who was TIME's person of the year in 2021?",
                'How old was Rose at the end "Titanic"?',
                'What Disney princess has only 18 lines in her movie?',
                'What phone first implemented face ID?',
                'Who is Marvel’s first superhero in the comic books?',
                'In which U.S. city did the first Starbucks open? ',
                'What was the original name for Scrabble?',
                'How many ways can you put together six Lego bricks of the same color if each brick has eight studs?',
                'Which tokens were included in the original Monopoly game?',
                "What is the Target dog's name?",
                "What is the Cookie Crisp mascot's name?",
                "Which book was the bestselling memoir of the 2010's?",
                "What was Freddie Mercury's real name?",
                'A best-selling book in 1981 explained how to crack the code of which puzzle?',
                'What month was the movie Miracle on 34th Street released?',
                'In the 1994 movie "Little Women" who does Christian Bale play?',
            ];
            answers = [
                'Norma Jeane Mortenson',
                'Coca-Cola',
                'Orca',
                'Maria Reynolds',
                'Elon Musk',
                '100',
                'Aurora',
                'iPhone X',
                'The Human Torch',
                'Seattle',
                'Criss-Cross Words',
                'Over 900 million',
                'There were none.',
                'Bullseye',
                'Cookie Jarvis',
                'Becoming by Michelle Obama',
                'Farrokh Bulsara',
                'The Rubik’s Cube',
                'June',
                'Laurie',
            ];
            question.innerHTML = questions[listIndex];
            answer.innerHTML = answers[listIndex];
        }
    }else if(localStorage.getItem('themeMode') == "theme2"){
        //change questions for theme2 based on difficulty
        if(mode == "easy"){
            questions = [
                'Who sang Supercalafragalisticexpialidocious?',
                'Which classical composer was deaf?',
                'Who sang the song "You Belong With Me"?',
                'What instrument does Lizzo play?',
                "Who is the king of rock and roll?",
                'Who sang "Sweet Caroline"?',
                "What US festival hosted over 350,000 music fans in 1969?",
                'Who sang the song "Unchained Melody"?',
                'Vanilla Ice’s 1991 hit “Ice Ice Baby” was used as a sample from which Queen song?',
                "What is the name of Taylor Swift's newest album?",
                "Who sang Can't Touch This?",
                'Which Korean Artist’s Video became the first to reach one billion views on youtube?',
                'Who released a parody of Michael Jackson’s Beat It, called Eat It?',
                "What does K-Pop stand for?",
                'Who sang the song "Hotel California"?',
                'What song did Celine Dion sing from Titanic?',
                'Who sang "Blinding Lights"?',
                'Who sang the song "Say So"?',
                "Who sang I Ain't Worried from Top Gun Maverick?",
                'Who is famous for her ability to scat?',
            ];
            answers = [
                'Marry Poppins',
                'Beethoven',
                'Taylor Swift',
                'The flute',
                'Elvis',
                'Neil Diamond',
                'Woodstock',
                'The Righteous Brothers',
                '“Under Pressure”',
                'Midnights',
                'MC Hammer',
                'Psy (Gangnam Style)',
                "‘Weird Al’ Yankovic",
                'Korean Popular Music',
                'The Eagles',
                'My Heart Will Go On',
                'The Weekend',
                'Doja Cat',
                'One Republic',
                'Ella Fitzgerald',
            ]
            question.innerHTML = questions[listIndex];
            answer.innerHTML = answers[listIndex];
        }else if(mode == "medium"){
            questions = [
                "Who was the first winner of American Idol?",
                'Who was the first woman ever inducted into the Rock and Roll Hall of Fame?',
                'Which member of the band Queen is an astrophysicist?',
                "Who performed at the 50th super bowl?",
                'What was the first ever video to air on MTV?',
                "Which Pink Floyd album features a prism on the cover?",
                'Name the members of the band "Wham!"?',
                'What song has the lyric “I need you more tonight, and I need you more than ever”?',
                'The Barenaked Ladies wrote and performed the theme-song for which television series?',
                'Who went solo in 1987 with the song Faith?',
                'In which song did Queen sing: "Ive fallen in love / Ive fallen in love for the first time"?',
                'What is the most used music streaming service?',
                'Who does Fun sing with in the song "We Are Young"?',
                "What was Queen's first music video?",
                'Who is the youngest pop star with a number one hit on the Billboard Hot 100?',
                'What is the most-recorded Christmas song?',
                'How many members were part of the Beach Boys?',
                "When was the Beach Boys' album Surfin' Safari released?",
                "What was Tom Jones's first hit song?",
                'What Frank Sinatra song was used in the movie, "Mrs. Doubtfire"?',
            ];
            answers = [
                'Kelly Clarkson',
                'Areatha Franklin',
                'Brian May',
                'Coldplay, Beyonce, and Bruno Mars',
                '"Video Killed the Raido Star" by The Buggles',
                'Dark Side Of The Moon',
                'Andrew Ridgeley and George Michael',
                '“Total Eclipse Of The Heart”',
                'The Big Bang Theory',
                'George Michael',
                'I Want To Break Free',
                'Spotify',
                'Janelle Monáe',
                'Bohemian Rhapsody',
                'Stevie Wonder',
                '"White Christmas"',
                'Nine',
                '1962',
                "It's Not Unusual",
                '"Luck Be A Lady"',
            ];
            question.innerHTML = questions[listIndex];
            answer.innerHTML = answers[listIndex];
        }else if(mode == "hard"){
            questions = [
                'What intrument does Dolly Parton play in the song "9 to 5"?',
                'The song We Are Never Getting Back Together was allegedly written in reference to which of her ex boyfriends?',
                'In the popular musical movie Grease, what was the name of the artist who sings ‘Beauty School Drop Out’?',
                'Who the wrote the music for the musical "The Waitress"?',
                "What year did My Chemical Romance's song Wlecome to the Black Parade come out?",
                'Who played a cover of Thunderstruck with cellos?',
                'What is the title of the song Captain America and Peggy Carter dance to?',
                'Which member of the Avengers had a brief stint as a pop star?',
                'Prince introduced his iconic symbol on the cover of which single?',
                'How many Just Dance games is "Promiscuous" by Nelly Furtado featuring Timbaland on?',
                'Which musician has his real name as Peter Gene Hernandez?',
                'Which Austrian musician outsold Beyonce, Adele, and Drake in the number of CDs sold in 2016?',
                "What is Lady Gaga's real name?",
                "Which band is so important to their country’s economy that it cannot be allowed to fail?",
                "How many number one hits did Elvis Presley have in the US?",
                "What is Post Malone’s favorite restaurant?",
                "What is the Notorious BIG’s real name?",
                'Who founded the Backstreet Boys?',
                'What country did ABBA originate from?',
                'What country is Rihanna from?',
            ];
            answers = [
                'Her fingernails',
                'Jake Gyllenhaal',
                'Frankie Avalon',
                'Sara Bareilles',
                '2006',
                '2 Cellos',
                '"Its Been a Long, Long Time" by Kitty Kallen',
                'Brie Larson',
                '"1999"',
                '4 (Just Dance 3, Just Dance Wii 2, Just Dance Unlimited, and Just Dance Now)',
                'Bruno Mars',
                'Wolfgang Amadeus Mozart',
                'Stafani Germanotta',
                'BTS',
                '18',
                'Olive Garden',
                'Christopher George Latore Wallace',
                'Lou Pearlman',
                'Sweden',
                'Barbados',
            ];
            question.innerHTML = questions[listIndex];
            answer.innerHTML = answers[listIndex];
        }
    }else if(localStorage.getItem('themeMode') == "theme3"){
        //change questions for theme3 based on difficulty
        if(mode == "easy"){
            questions = [
                'What state has the most water within it?',
                'What is the name of the island The Statue of Liberty is on?',
                'What is the smallest state in landmass?',
                'What is the name of Colorado’s mountain range?',
                "Which state is Mount Rushmore in?",
                'How many states have a border with Mexico?',
                "Which two states do not share a border with any other U.S. state?",
                'What state is bordered by Nebraska, Kansas, Oklahoma, New Mexico, Utah, and Wyoming?',
                'What national park spreads across Wyoming, Montana, and Idaho?',
                "How many States does the United States consist of?",
                "What is New York City’s nickname?",
                'What is the largest lake in the US?',
                'What state is Las Vegas in?',
                "What river runs through the Grand Canyon?",
                'Which ocean borders the East Coast of the US?',
                'How many countries does the US share land borders with?',
                'What American city is the Golden Gate Bridge located in?',
                'What’s the third-largest US state?',
                "What year was the U.S. discovered?",
                'How many original colonies were there?',
            ];
            answers = [
                'Alaska',
                'Liberty Island',
                'Rhode Island',
                'The Rocky Mountains',
                'South Dakota',
                'Four',
                'Alaska and Hawaii',
                'Colorado',
                'Yellowstone National Park',
                'Fifty',
                'The Big Apple',
                'Lake Superior',
                "Nevada",
                'The Colorado River',
                'The Atlantic Ocean',
                'Two',
                'San Fransisco',
                'California',
                '1492',
                '13',
            ]
            question.innerHTML = questions[listIndex];
            answer.innerHTML = answers[listIndex];
        }else if(mode == "medium"){
            questions = [
                "What state is closest to Africa?",
                'What is the least populated state?',
                'What is the longest river in the United States?',
                "Which state has the highest population density (people per square mile)?",
                'What is the deepest lake?',
                "What is the capital city of Delaware?",
                'Name the capital of Florida.',
                'How long is the Niagara Fall Channel?',
                'How many U.S. states are landlocked?',
                'Which two states donated land for the creation of Washington D.C?',
                'Which U.S. state is known as the Garden state?',
                'Which of the Great Lakes is located entirely within the U.S. border?',
                'What is the state bird of North Carolina?',
                "How many islands make up Hawaii?",
                'What are the only two U.S. state capitals with rhyming names?',
                'What states make up the Four Corners Monument?',
                'What was the temporary US capital from 1790 to 1800?',
                "Which National Forest was created across 5 counties in Arkansas by President Roosevelt in 1908?",
                "What is Alabama's state bird?",
                'What holiday shares a day with Indigenous peoples Day?',
            ];
            answers = [
                'Maine',
                'Wyoming',
                'The Missouri River',
                'Washington, D.C.',
                'Crater Lake, Oregon',
                'Dover',
                'Tallahassee',
                '36-miles',
                'Sixteen',
                'Maryland and Virginia',
                'New Jersey',
                'Lake Michigan',
                'Cardinal',
                '137',
                'Boston and Austin',
                'New Mexico, Colorado, Utah, and Arizona',
                'Philadelphia',
                'The Ozark National Forest',
                "Yellowhammer",
                'Columbus Day',
            ];
            question.innerHTML = questions[listIndex];
            answer.innerHTML = answers[listIndex];
        }else if(mode == "hard"){
            questions = [
                'What is the westernmost state capital in the mainland United States?',
                'Which two states share borders with eight other states each?',
                'Which animal is featured on the state flag of California?',
                'Which state is Lake Winnebago in?',
                "Where does the Rio Grande river start?",
                'Name the U.S State nicknamed as “The Land of 10,000 Lakes.”',
                'Which place has 43 buildings with their own zip code?',
                'Name the tallest mountain in the U.S.',
                'Where is Lake Okeechobee situated?',
                'Which U.S. city has the largest population of Polish people?',
                'Which river ended up flowing backwards after three earthquakes in the 1800s?',
                'What is the largest island on Lake Superior called?',
                "What is the name of the world’s shortest river, and where can you find it?",
                "What state is known as the Ocean State?",
                "On average, how many days a year does Illinois have thunderstorms?",
                "Idaho follows Mountain Time, but what time does the Idaho Panhandle north of Salmon River observe?",
                "Which state has rivers forming its complete east and west borders?",
                'Which state is bordered by Rhode Island, Massachusetts, New York, and Long Island Sound?',
                "What is Connecticut's state fossil?",
                'How tall is Niagara Falls?',
            ];
            answers = [
                'Salem, Oregon',
                'Missouri and Tennessee',
                'A bear',
                'Wisconsin',
                'San Juan Mountains',
                'Minnesota',
                'Manhattan, NY City',
                'Mount McKinley',
                'Florida',
                'Chicago',
                'The Mississippi River',
                'Isle Royale',
                'The Roe River, Montana (200 feet)',
                'Rhode Island',
                '51',
                'Pacific Time',
                'Iowa',
                'Connecticut',
                'Eubrontes',
                '325 feet',
            ];
            question.innerHTML = questions[listIndex];
            answer.innerHTML = answers[listIndex];
        }
    }
}

//iterate through the questions and answers list
var listIndex = 0;
function next(){
    //enable the add points button
    document.getElementById('addOne').disabled = false;
    document.getElementById('addTwo').disabled = false;
    document.getElementById('addThree').disabled = false;
    document.getElementById('addFour').disabled = false;
    document.getElementById('addFive').disabled = false;
    document.getElementById('addSix').disabled = false;
    //hide the answer
    answer.style.display = "none";
    //disable the next button
    nextQ.disabled = true;
    //enable the button to show the answer
    show.disabled = false;
    //increase the list index
    listIndex += 1;
    //display the question/answer in the list based on the listIndex variable
    question.innerHTML = questions[listIndex];
    answer.innerHTML = answers[listIndex];
    //when the all the questions are over
    if(listIndex == 20){
        nextQ.innerHTML = "Next";
        question.innerHTML = "";
        answer.innerHTML = "";
        
        //set the players scores to storage
        //adding more onto the scores prevents an error in ranking the scores
        localStorage.setItem('pl1scr', player1Scr + 0.6);
        localStorage.setItem('pl2scr', player2Scr + 0.5);
        localStorage.setItem('pl3scr', player3Scr + 0.4);
        localStorage.setItem('pl4scr', player4Scr + 0.3);
        localStorage.setItem('pl5scr', player5Scr + 0.2);
        localStorage.setItem('pl6scr', player6Scr + 0.1);
        //change the window location
        window.location.replace('congrat.html')
    }
    //disable the add point buttons
    player1.querySelector("button").disabled = true;
    player2.querySelector("button").disabled = true;
    player3.querySelector("button").disabled = true;
    player4.querySelector("button").disabled = true;
    player5.querySelector("button").disabled = true;
    player6.querySelector("button").disabled = true;
}

//show answer function
function showAnswer(){
    //show answer
    answer.style.display = "flex";
    //disable show button
    show.disabled = true;
    //enable next question button
    nextQ.disabled = false;
    //enable the add points buttons
    player1.querySelector("button").disabled = false;
    player2.querySelector("button").disabled = false;
    player3.querySelector("button").disabled = false;
    player4.querySelector("button").disabled = false;
    player5.querySelector("button").disabled = false;
    player6.querySelector("button").disabled = false;
}

//add points for each player
//(comments below apply to each function)
function p1ap(){
    //diable add point button
    document.getElementById('addOne').disabled = true;
    //add 1 point for easy mode, 3 points for medium, and 5 for hard and set player score
    if(mode == "easy"){
        player1Scr += 1;
        playerScore1.innerHTML = player1Scr;
    }else if(mode == "medium"){
        player1Scr += 3;
        playerScore1.innerHTML = player1Scr;
    }else if(mode == "hard"){
        player1Scr += 5;
        playerScore1.innerHTML = player1Scr;
    }
}
function p2ap(){
    document.getElementById('addTwo').disabled = true;
    if(mode == "easy"){
        player2Scr += 1;
        playerScore2.innerHTML = player2Scr;
    }else if(mode == "medium"){
        player2Scr += 3;
        playerScore2.innerHTML = player2Scr;
    }else if(mode == "hard"){
        player2Scr += 5;
        playerScore2.innerHTML = player2Scr;
    }
}
function p3ap(){
    document.getElementById('addThree').disabled = true;
    if(mode == "easy"){
        player3Scr += 1;
        playerScore3.innerHTML = player3Scr;
    }else if(mode == "medium"){
        player3Scr += 3;
        playerScore3.innerHTML = player3Scr;
    }else if(mode == "hard"){
        player3Scr += 5;
        playerScore3.innerHTML = player3Scr;
    }
}
function p4ap(){
    document.getElementById('addFour').disabled = true;
    if(mode == "easy"){
        player4Scr += 1;
        playerScore4.innerHTML = player4Scr;
    }else if(mode == "medium"){
        player4Scr += 3;
        playerScore4.innerHTML = player4Scr;
    }else if(mode == "hard"){
        player4Scr += 5;
        playerScore4.innerHTML = player4Scr;
    }
}
function p5ap(){
    document.getElementById('addFive').disabled = true;
    if(mode == "easy"){
        player5Scr += 1;
        playerScore5.innerHTML = player5Scr;
    }else if(mode == "medium"){
        player5Scr += 3;
        playerScore5.innerHTML = player5Scr;
    }else if(mode == "hard"){
        player5Scr += 5;
        playerScore5.innerHTML = player5Scr;
    }
}
function p6ap(){
    document.getElementById('addSix').disabled = true;
    if(mode == "easy"){
        player6Scr += 1;
        playerScore6.innerHTML = player6Scr;
    }else if(mode == "medium"){
        player6Scr += 3;
        playerScore6.innerHTML = player6Scr;
    }else if(mode == "hard"){
        player6Scr += 5;
        playerScore6.innerHTML = player6Scr;
    }
}

//function for the home button
document.getElementById('home').addEventListener('click', function(){
    window.location.replace('../index.html')
})