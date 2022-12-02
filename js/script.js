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
            oneCall = 'k';
        }
        if(pcChoice + 1 == 2){
            oneCall = 'p';
        }
        if(pcChoice + 1 == 3){
            oneCall = 'n';
        }
    
        console.log('PC : ' + oneCall);


        $("#name").on('click', function() {
            $("input#name").removeAttr("disabled")
        });
        
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

// //Voľba usera kameň
// $("#k").on('click', function() {
//     userChoice = 'k'
//     console.log(round + '.kolo');
//     console.log('User : ' + userChoice);
//     $("button.win, button.draw, button.lose").removeClass("text-bg-success, text-bg-warning, text-bg-danger")
//     $("button.win, button.draw, button.lose").addClass("text-bg-light");
// });

// //Voľba usera papier
// $("#p").on('click', function() {
//     userChoice = 'p';
//     console.log(round + '.kolo');
//     console.log('User : ' + userChoice);
//     $("button.win, button.draw, button.lose").removeClass("text-bg-success, text-bg-warning, text-bg-danger")
//     $("button.win, button.draw, button.lose").addClass("text-bg-light");
// });

// //Voľba usera nožnice
// $("#n").on('click', function() {
//     userChoice = 'n';
//     console.log(round + '.kolo');
//     console.log('User : ' + userChoice);
//     $("button.win, button.draw, button.lose").removeClass("text-bg-success, text-bg-warning, text-bg-danger")
//     $("button.win, button.draw, button.lose").addClass("text-bg-light");
// });

$("#k, #p, #n").on('click', function kpn() {
    userChoice = 'k', 'p', 'n'

    console.log(round + '.kolo');
    console.log('User : ' + userChoice);

    $("button.win, button.draw, button.lose").removeClass("text-bg-success, text-bg-warning, text-bg-danger")
    $("button.win, button.draw, button.lose").addClass("text-bg-light");
});

function differentCounts() {
    obj.kamen++;
    obj.papier++;
    obj.noznice++;
    round++;  // pripočítanie + 1 ku skóre
};

let winGame = function win() {
    if (userChoice === 'k' && oneCall === 'n') 
    if (userChoice === 'p' && oneCall === 'k') 
    if (userChoice === 'n' && oneCall === 'p') 
    
    console.log('Výhra user!')
    alert('Výhra!');

    $("button.win").removeClass("text-bg-light");
    $("button.win").addClass("text-bg-success");

    differentCounts();
    countWin++;
    scoreUser ++;
    score.push(round + '.kolo :' + ' Výhra user!');
};;


let drawGame = function draw() {
    if (userChoice === 'k' && oneCall === 'k') 
    if (userChoice === 'p' && oneCall === 'p')
    if (userChoice === 'n' && oneCall === 'n')

    console.log('Remíza!')
    alert('Remíza!');

    $("button.draw").removeClass("text-bg-light");
    $("button.draw").addClass("text-bg-warning");

    differentCounts();
    countDraw++;
    score.push(round + '.kolo :' + ' Remíza!'); 
};

let loseGame = function lose() {
    if (userChoice === 'k' && oneCall === 'p')
    if (userChoice === 'p' && oneCall === 'n')
    if (userChoice === 'n' && oneCall === 'k')

    console.log('Prehra user!')
    alert('Prehra!'); 

    $("button.lose").removeClass("text-bg-light");
    $("button.lose").addClass("text-bg-danger");

    differentCounts();
    scorePc++;
    countLosing++;
    score.push(round + '.kolo :' + ' Prehra user!'); 
};









