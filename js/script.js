let userChoice;
let oneCall;
let pcChoice;

let scoreUser = 0;
let scorePc = 0;
 
let countWin = 0;
let countLosing = 0;
let countDraw = 0;

//HISTÓRIA HIER, KOLÁ
let score = []; 
let round = [];
let obj = {
    kamen: 0,
    papier: 0,
    noznice: 0
}

//Spustenie hry
$( "button.game" ).on( "click", function game() {
    
    alert('Hra začína! Vyber si (kameň, papier, nožnice) a uvidíš či si vyhral!');
    
    //Voľba PC
    $("button.option-btn").on('click', function(){
    
        pcChoice = Math.floor(Math.random() * 3);
    
        if(pcChoice + 1 == 1){
            oneCall = 'kameň';
        }
        if(pcChoice + 1 == 2){
            oneCall = 'papier';
        }
        if(pcChoice + 1 == 3){
            oneCall = 'nožnice';
        }
        
        alert ('PC : ' + oneCall)
        console.log('PC : ' + oneCall);
        
       
        if (userChoice === 'kameň' && oneCall === 'nožnice') {
            winGame();
        } if (userChoice === 'papier' && oneCall === 'kameň') {
            winGame();
        } if (userChoice === 'nožnice' && oneCall === 'papier') {
            winGame(); 
        }

        if (userChoice === 'kameň' && oneCall === 'kameň') {
            drawGame();
        } if (userChoice === 'papier' && oneCall === 'papier') {
            drawGame();
        } if (userChoice === 'nožnice' && oneCall === 'nožnice') {
            drawGame();
        }

        if (userChoice === 'kameň' && oneCall === 'papier') {
            loseGame();
        } if (userChoice === 'papier' && oneCall === 'nožnice') {
            loseGame();
        } if (userChoice === 'nožnice' && oneCall === 'kameň') {
            loseGame();
        }


    // Vypísanie na obrazovku jednotlivých počítadiel
    document.getElementById('pcscore').innerHTML = scorePc;
    document.getElementById('losingcount').innerHTML = countLosing;
    document.getElementById('wincount').innerHTML = countWin;
    document.getElementById('userscore').innerHTML = scoreUser;
    document.getElementById('drawcount').innerHTML = countDraw;
    document.getElementById('skore').innerHTML = score;

    document.getElementById('kamen').innerHTML =obj.kamen;
    document.getElementById('papier').innerHTML =obj.papier;
    document.getElementById('noznice').innerHTML =obj.noznice;
    });

    
    
});

let winGame = function win() {
    console.log('Výhra user!')
    alert('Výhra!');

    $("button.win").removeClass("text-bg-light");
    $("button.win").addClass("text-bg-success");

    countWin++;
    round++;
    scoreUser ++;
    score.push(round + '.kolo :' + ' Výhra user!');
}; 


let drawGame = function draw() {
    console.log('Remíza!')
    alert('Remíza!');

    $("button.draw").removeClass("text-bg-light");
    $("button.draw").addClass("text-bg-warning");

    countDraw++;
    round++;
    score.push(round + '.kolo :' + ' Remíza!'); 
};

let loseGame = function lose() {
    console.log('Prehra user!')
    alert('Prehra!'); 

    $("button.lose").removeClass("text-bg-light");
    $("button.lose").addClass("text-bg-danger");

    scorePc++;
    countLosing++;
    round++;
    score.push(round + '.kolo :' + ' Prehra user!'); 
};

const logwrite = function log() {
    console.log(round + '.kolo');
    console.log('User : ' + userChoice);
}


//Voľba usera kameň
$("#k").on('click', function() {
    userChoice = 'kameň';
    
    $("button.win, button.draw, button.lose").addClass("text-bg-light");

    obj.kamen++;
    logwrite();
});

//Voľba usera papier
$("#p").on('click', function() {
    userChoice = 'papier';

    $("button.win, button.draw, button.lose").addClass("text-bg-light");

    obj.papier++;
    logwrite();
});

//Voľba usera nožnice
$("#n").on('click', function() {
    userChoice = 'nožnice';

    $("button.win, button.draw, button.lose").addClass("text-bg-light");

    obj.noznice++;
    logwrite();
});


$("#name").on('click', function() {
    $("input#name").removeAttr("disabled")
});

$("img.submit").on('click', function() {
    username = $("#name").val();
    if(username != "") {
        alert('Zadaj meno!')
    }

    // $(username).change(console.log('User : ' + userChoice));
    //     console.log(username  + userChoice)
    
});













