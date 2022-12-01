let userChoice;
let oneCall;
let PcChoice;

// USER skóre
let scoreUser = 0;
document.getElementById('userscore').innerHTML = scoreUser;

// PC skóre
let scorePc = 0;
document.getElementById('pcscore').innerHTML = scorePc;


// POČET VÝHIER  
let countWin = 0;
document.getElementById('wincount').innerHTML = countWin;

// POČET PREHIER
let countLosing = 0;
document.getElementById('losingcount').innerHTML = countLosing;

// POČET REMÍZ
let countDraw = 0;
document.getElementById('drawcount').innerHTML = countDraw;

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
    
    //Voľba usera kameň
    $("#k").on('click', function() {
        userChoice = 'k'
        console.log(round + '.kolo');
        console.log('User : ' + userChoice);
        $("button.win, button.draw, button.lose").removeClass("text-bg-success, text-bg-warning, text-bg-danger")
        $("button.win, button.draw, button.lose").addClass("text-bg-light");
    });

    //Voľba usera papier
    $("#p").on('click', function() {
        userChoice = 'p';
        console.log(round + '.kolo');
        console.log('User : ' + userChoice);
        $("button.win, button.draw, button.lose").removeClass("text-bg-success, text-bg-warning, text-bg-danger")
        $("button.win, button.draw, button.lose").addClass("text-bg-light");
    });

    //Voľba usera nožnice
    $("#n").on('click', function() {
        userChoice = 'n';
        console.log(round + '.kolo');
        console.log('User : ' + userChoice);
        $("button.win, button.draw, button.lose").removeClass("text-bg-success, text-bg-warning, text-bg-danger")
        $("button.win, button.draw, button.lose").addClass("text-bg-light");
    });
    

    //Voľba PC
    $("button.option-btn").on('click', function(){

    
        PcChoice = Math.floor(Math.random() * 3);
    
        if(PcChoice + 1 == 1){
            oneCall = 'k';
        }
        if(PcChoice + 1 == 2){
            oneCall = 'p';
        }
        if(PcChoice + 1 == 3){
            oneCall = 'n';
        }
    
        console.log('PC : ' + oneCall);


        // Podmienky pre výhru
        if (userChoice === 'k' && oneCall === 'n') {
            console.log('Výhra user!')
            alert('Výhra!'); 
            $("button.win").removeClass("text-bg-light");
            $("button.win").addClass("text-bg-success");
            scoreUser ++;
            countWin++;
            obj.kamen++;
            round++;  // pripočítanie + 1 ku skóre
            score.push(round + '.kolo :' + ' Výhra user!'); 
        } else if (userChoice === 'p' && oneCall === 'k') {
            console.log('Výhra user!')
            alert('Výhra!'); 
            $("button.win").removeClass("text-bg-light");
            $("button.win").addClass("text-bg-success");
            scoreUser ++;
            countWin++;
            obj.papier++;
            round++;  // pripočítanie + 1 ku skóre
            score.push(round + '.kolo :' + ' Výhra user!'); 
        } else if (userChoice === 'n' && oneCall === 'p') {
            console.log('Výhra user!')
            alert('Výhra!'); 
            $("button.win").removeClass("text-bg-light");
            $("button.win").addClass("text-bg-success");
            scoreUser ++;
            countWin++; 
            obj.noznice++;
            round++;  // pripočítanie + 1 ku skóre
            score.push(round + '.kolo :' + ' Výhra user!'); 
        };
    
        
        // Podmienky pre prehru
        if (userChoice === 'k' && oneCall === 'p') {
            console.log('Prehra user!')
            alert('Prehra!'); 
            $("button.lose").removeClass("text-bg-light");
            $("button.lose").addClass("text-bg-danger");
            scorePc++;
            countLosing++;
            obj.kamen++;
            round++;  // pripočítanie + 1 ku skóre
            score.push(round + '.kolo :' + ' Prehra user!'); 
        } else if (userChoice === 'p' && oneCall === 'n') {
            console.log('Prehra user!')
            alert('Prehra!'); 
            $("button.lose").removeClass("text-bg-light");
            $("button.lose").addClass("text-bg-danger");
            scorePc++;
            countLosing++;
            obj.papier++;
            round++;  // pripočítanie + 1 ku skóre
            score.push(round + '.kolo :' + ' Prehra user!'); 
        } else if (userChoice === 'n' && oneCall === 'k') {
            console.log('Prehra user!')
            alert('Prehra!'); 
            $("button.lose").removeClass("text-bg-light");
            $("button.lose").addClass("text-bg-danger");
            scorePc++;
            countLosing++;
            obj.noznice++;
            round++;  // pripočítanie + 1 ku skóre
            score.push(round + '.kolo :' + ' Prehra user!'); 
        };
    
        
        // Podmienky pre remízu
        if (userChoice === 'k' && oneCall === 'k') {
            console.log('Remíza!')
            alert('Remíza!');
            $("button.draw").removeClass("text-bg-light");
            $("button.draw").addClass("text-bg-warning");
            countDraw++;
            obj.kamen++;
            round++;  // pripočítanie + 1 ku skóre
            score.push(round + '.kolo :' + ' Remíza!'); 
        } else if (userChoice === 'p' && oneCall === 'p') {
            console.log('Remíza!')
            alert('Remíza!');
            $("button.draw").removeClass("text-bg-light");
            $("button.draw").addClass("text-bg-warning");
            countDraw++;
            obj.papier++;
            round++;  // pripočítanie + 1 ku skóre
            score.push(round + '.kolo :' + ' Remíza!'); 
        } else if (userChoice === 'n' && oneCall === 'n') {
            console.log('Remíza!')
            alert('Remíza!');
            $("button.draw").removeClass("text-bg-light");
            $("button.draw").addClass("text-bg-warning");
            countDraw++;
            obj.noznice++;
            round++;  // pripočítanie + 1 ku skóre
            score.push(round + '.kolo :' + ' Remíza!'); 
        }; 

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

    


// Podmienky pre výhru


        //Voľba usera
        // let userChoice; //= prompt('Tvoja voľba?');
        // kpn = ['k',  'p',  'n'];
        // console.log('User : ', userChoice);
        
        // const oneCall = PcChoice();
        // alert('Voľba PC : ' + oneCall);










// HISTÓRIA
function history(skore, round, score) {
    history.addEventListener('click', history)

    const list = document.getElementById(skore),
            newItem = document.createElement('li');

        newItem.textContent = round;
        newItem.textContent = score;
        list.appendChild(newItem);
    
    console.log;
};


//Voľba PC


// playGame.addEventListener('click', game);
// nextGame.addEventListener('click', game);






