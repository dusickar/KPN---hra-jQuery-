
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

let score = []; 
let round = [];
let obj = {
    kamen: 0,
    papier: 0,
    noznice: 0
}

$(document).ready(function(){
    $( "button.game, button#nextGame" ).on( "click", function game() {
 
        alert('Hra začína! Vyber si (kameň, papier, nožnice) a uvidíš či si vyhral!');

        let userChoice;

        



        $( "button.option-btn" ).on( "click", function() {
            $( "#k" ).on("click", function() {
                userChoice = 'k';
                
                oneCall;
                console.log('User : kameň ');
                console.log('PC : ' + oneCall );
            }); 

            $( "#p" ).on("click", function() {
                userChoice = 'p';
                oneCall;
                console.log('User : papier ');
                console.log('PC : ' + oneCall );
            });

            $( "#n" ).on("click", function() {
                userChoice = 'n';
                oneCall;
                console.log('User : nožnice ');
                console.log('PC : ' + oneCall );
        });
        
           

        

        if (userChoice === 'k' && oneCall === 'n') {
            console.log('Výhra user!')
            alert('Výhra');
            scoreUser ++;
            countWin++;
            obj.kamen++;
            round++;
            score.push(round + '.kolo :' + ' Výhra user!'); // pripočítanie + 1 ku skóre
        } else if (userChoice === 'p' && oneCall === 'k') {
            console.log('Výhra user!')
            alert('Výhra');
            scoreUser ++;
            countWin++;
            obj.papier++;
            round++;
            score.push(round + '.kolo :' + ' Výhra user!'); // pripočítanie + 1 ku skóre
        } else if (userChoice === 'n' && oneCall === 'p') {
            console.log('Výhra user!')
            alert('Výhra');
            scoreUser ++;
            countWin++; 
            obj.noznice++;
            round++;
            score.push(round + '.kolo :' + ' Výhra user!'); // pripočítanie + 1 ku skóre
        };
    
        
        // Podmienky pre prehru
        if (userChoice === 'k' && oneCall === 'p') {
            console.log('Prehra user!')
            alert('Prehra!'); 
            scorePc++;
            countLosing++;
            obj.kamen++;
            round++;
            score.push(round + '.kolo :' + ' Prehra user!'); // pripočítanie + 1 ku skóre
        } else if (userChoice === 'p' && oneCall === 'n') {
            console.log('Prehra user!')
            alert('Prehra!'); 
            scorePc++;
            countLosing++;
            obj.papier++;
            round++;
            score.push(round + '.kolo :' + ' Prehra user!'); // pripočítanie + 1 ku skóre
        } else if (userChoice === 'n' && oneCall === 'k') {
            console.log('Prehra user!')
            alert('Prehra!'); 
            scorePc++;
            countLosing++;
            obj.noznice++;
            round++;
            score.push(round + '.kolo :' + ' Prehra user!'); // pripočítanie + 1 ku skóre
        };
    
       
        // Podmienky pre remízu
        if (userChoice === 'k' && oneCall === 'k') {
            console.log('Remíza!')
            alert('Remíza!');
            countDraw++;
            obj.kamen++;
            round++;
            score.push(round + '.kolo :' + ' Remíza!'); // pripočítanie + 1 ku skóre
        } else if (userChoice === 'p' && oneCall === 'p') {
            console.log('Remíza!')
            alert('Remíza!');
            countDraw++;
            obj.papier++;
            round++;
            score.push(round + '.kolo :' + ' Remíza!'); // pripočítanie + 1 ku skóre
        } else if (userChoice === 'n' && oneCall === 'n') {
            console.log('Remíza!')
            alert('Remíza!');
            countDraw++;
            obj.noznice++;
            round++;
            score.push(round + '.kolo :' + ' Remíza!'); // pripočítanie + 1 ku skóre
        }; 
    
        
    
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

});



let oneCall = PcChoice();
function PcChoice() {
    const length = 1; 
    // Declare all characters
    const chars = 'kpn';
    
    // Pick characters randomly
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log('PC : ' + str ) 

    return str;
};