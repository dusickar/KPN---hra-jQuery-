//Variables
let userChoice = null;
let pcChoice = null;
let pcSelect = null;

let scoreUser = 0;
let scorePc = 0;
 
let count = {
    win: 0,
    draw: 0,
    lose: 0,
}

//Počítadlá HISTÓRIA HIER, KOLÁ
let score = []; 
let round = [];
let obj = {
    kamen: 0,
    papier: 0,
    noznice: 0
}


//Event listeners
//Spustenie hry
$( 'button.game' ).on( 'click', function() {
    alert('Hra začína! Vyber si (kameň, papier, nožnice) a uvidíš či si vyhral!');
});


$('#k.action-button, #p.action-button, #n.action-button').on('click', ($event) => {
    if ($event.currentTarget === k) {
        userChoice = 'kameň';
        obj.kamen++;
        logwriteResetbadge();
    } else if ($event.currentTarget === p) {
        userChoice = 'papier';
        obj.papier++;
        logwriteResetbadge();
    } else if ($event.currentTarget === n) {
        userChoice = 'nožnice';
        obj.noznice++;
        logwriteResetbadge();
    }

    console.log($event);
});



//Voľba PC
$('button.option-btn').on('click', function() {

    pcChoice = Math.floor(Math.random() * 3);

    if(pcChoice == 1){
        pcSelect = 'kameň';
    } else if(pcChoice == 2){
        pcSelect = 'papier';
    } else if(pcChoice == 3){
        pcSelect = 'nožnice';
    }
    
    alert ('PC : ' + pcSelect)
    console.log('PC : ' + pcSelect);


    if (userChoice === 'kameň' && pcSelect === 'nožnice') {
        win();
    } else if (userChoice === 'papier' && pcSelect === 'kameň') {
        win();
    } else if (userChoice === 'nožnice' && pcSelect === 'papier') {
        win(); 
    }

    else if (userChoice === 'kameň' && pcSelect === 'kameň') {
        draw();
    } else if (userChoice === 'papier' && pcSelect === 'papier') {
        draw();
    } else if (userChoice === 'nožnice' && pcSelect === 'nožnice') {
        draw();
    }

    else if (userChoice === 'kameň' && pcSelect === 'papier') {
        lose();
    } else if (userChoice === 'papier' && pcSelect === 'nožnice') {
        lose();
    } else if (userChoice === 'nožnice' && pcSelect === 'kameň') {
        lose();
    }


// Vypísanie na obrazovku jednotlivých počítadiel
document.getElementById('userscore').innerHTML = scoreUser;
document.getElementById('pcscore').innerHTML = scorePc;


document.getElementById('skore').innerHTML = score;
document.getElementById('losingcount').innerHTML = count.lose;
document.getElementById('wincount').innerHTML = count.win;
document.getElementById('drawcount').innerHTML = count.draw;


document.getElementById('kamen').innerHTML =obj.kamen;
document.getElementById('papier').innerHTML =obj.papier;
document.getElementById('noznice').innerHTML =obj.noznice;
});



$('#name').prop('disabled',true);


$('.input-group-text').on('click', function() {
    $('input').prop('disabled', false)
});



$('img.submit').on('click', function() {
    username = $('#name').val();
    if (username == '') {
        alert('Zadaj svoje meno!')
    }
});



//custom function
function win() {
    console.log('Výhra ' + username + '!')
    alert('Výhra!');

    $('button.win').removeClass('text-bg-light');
    $('button.win').addClass('text-bg-success');

    count.win++;
    round++;
    scoreUser ++;
    score.push(round + '.kolo : ' + 'Výhra ' + username + '! ');
}; 


function draw() {
    console.log('Remíza!')
    alert('Remíza!');

    $('button.draw').removeClass('text-bg-light');
    $('button.draw').addClass('text-bg-warning');

    count.draw++;
    round++;
    score.push(round + '.kolo :' + ' Remíza!'); 
};


function lose() {
    console.log('Prehra ' + username + '!')
    alert('Prehra!'); 

    $('button.lose').removeClass('text-bg-light');
    $('button.lose').addClass('text-bg-danger');

    scorePc++;
    count.lose++;
    round++;
    score.push(round + '.kolo :' + ' Prehra ' + username + '!'); 
};



//private functions
function log() {
    console.log(round + '.kolo');
    console.log(username + ' : ' + userChoice);
}

function logwriteResetbadge() {
       
    $('button.win, button.draw, button.lose').addClass('text-bg-light');

    log();
}
















