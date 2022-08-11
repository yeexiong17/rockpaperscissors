
//Get random choices for computer
function getComputerChoice(playChoice){
    return  playChoice[Math.floor(Math.random() * playChoice.length)];
}

//Display result to user
function returnResult(result){
    const rmElement = document.getElementById("result").children[0];

    const rmElement1 = document.querySelector('#result');
    const rmElement2 = document.createElement('h3');
    rmElement2.textContent = result;
    rmElement.replaceChild(rmElement2, rmElement.childNodes[0]);
}

function playRound(playerSelection, computerSelection){

    const table = document.getElementById('scoreOutput');

    if(playerSelection == "rock" && computerSelection == "Rock"){
        console.log("This game is a draw!");
        result = "This game is a draw!";
        returnResult(result);

    }else if(playerSelection == "rock" && computerSelection == "Paper"){
        console.log("You lose! Paper beats Rock");
        result = "You lose! Paper beats Rock";
        returnResult(result);

        p2++ ;
        
        document.getElementById("scoreOutput").deleteRow(1); //Remove previous score
        const row = table.insertRow(1); //Add new score
        row.classList.add('tr2');
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = p1;
        cell1.setAttribute('style', 'color: pink;');
        cell2.innerHTML = p2;
        cell2.setAttribute('style', 'color: pink;');

    }else if(playerSelection == "rock" && computerSelection == "Scissors"){
        console.log("You win! Rock beats scissors");
        result = "You win! Rock beats scissors";
        returnResult(result);

        p1++ ;
        
        document.getElementById("scoreOutput").deleteRow(1); //Remove previous score
        const row = table.insertRow(1); //Add new score
        row.classList.add('tr2');
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = p1;
        cell1.setAttribute('style', 'color: pink;');
        cell2.innerHTML = p2;
        cell2.setAttribute('style', 'color: pink;');

    }

    if(playerSelection == "paper" && computerSelection == "Rock"){
        console.log("You win! Paper beats Rock");
        result = "You win! Paper beats Rock";
        returnResult(result);

        p1 ++ ;

        document.getElementById("scoreOutput").deleteRow(1); //Remove previous score
        const row = table.insertRow(1); //Add new score
        row.classList.add('tr2');
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = p1;
        cell1.setAttribute('style', 'color: pink;');
        cell2.innerHTML = p2;
        cell2.setAttribute('style', 'color: pink;');

    }else if(playerSelection == "paper" && computerSelection == "Paper"){
        console.log("This game is a draw!");
        result = "This game is a draw!";
        returnResult(result);

    }else if(playerSelection == "paper" && computerSelection == "Scissors"){
        console.log("You lose! Scissors beats paper");
        result = "You lose! Scissors beats paper";
        returnResult(result);

        p2 ++;

        document.getElementById("scoreOutput").deleteRow(1); //Remove previous score
        const row = table.insertRow(1); //Add new score
        row.classList.add('tr2');
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = p1;
        cell1.setAttribute('style', 'color: pink;');
        cell2.innerHTML = p2;
        cell2.setAttribute('style', 'color: pink;');

    }

    if(playerSelection == "scissors" && computerSelection == "Rock"){
        console.log("You lose! Rock beats scissors");
        result = "You lose! Rock beats scissors";
        returnResult(result);

        p2 ++ ;

        document.getElementById("scoreOutput").deleteRow(1); //Remove previous score
        const row = table.insertRow(1); //Add previous score
        row.classList.add('tr2');
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = p1;
        cell1.setAttribute('style', 'color: pink;');
        cell2.innerHTML = p2;
        cell2.setAttribute('style', 'color: pink;');

    }else if(playerSelection == "scissors" && computerSelection == "Paper"){
        console.log("You win! Scissors beats paper");
        result = "You win! Scissors beats paper";
        returnResult(result);

        p1 ++ ;

        document.getElementById("scoreOutput").deleteRow(1); //Remove previous score
        const row = table.insertRow(1); //Add previous score
        row.classList.add('tr2');
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = p1;
        cell1.setAttribute('style', 'color: pink;');
        cell2.innerHTML = p2;
        cell2.setAttribute('style', 'color: pink;');

    }else if(playerSelection == "scissors" && computerSelection == "Scissors"){
        console.log("This game is a draw");
        result = "This game is a draw!";
        returnResult(result);
    }

    //Announce Winner
    if(p1 == 5 && p2 < 5){
        alert("Congratulation, You Win!");
    }
    else if(p1 < 5 && p2 == 5){
        alert("Computer Wins, Try again next time!");
    }  

}          

//Header Title
const header1 = document.querySelector('#header1');
const heading =  document.createElement("h1");
heading.textContent = "ROCK PAPER SCISSOR";
header1.appendChild(heading);


const playChoice = ["Rock", "Paper", "Scissors"];
let p1 = 0, p2 = 0;

//Button 1 - Rock
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function() {

    const computerSelection = getComputerChoice(playChoice);
    playerSelection = "rock";
    playRound(playerSelection, computerSelection);

});

//Button 2 - Paper
const btn2= document.querySelector('#btn2');
btn2.addEventListener('click', function() {

    const computerSelection = getComputerChoice(playChoice);
    playerSelection = "paper";
    playRound(playerSelection, computerSelection);

});

//Button 3 - Scissor
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function() {

    const computerSelection = getComputerChoice(playChoice);
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection); 

});
