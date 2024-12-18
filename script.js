function getcompchoice (){
    const choices = ["rock", "paper", "scissors"];
    const butn = [crock, cpaper, cscissor];
    let idx = Math.floor(Math.random() * 3);
    highlightChoice(butn[idx]);
    return choices[idx];
}

function highlightChoice (element) {
    element.classList.add('highlight');
    setTimeout(() => { element.classList.remove('highlight');}, 900);
}
function highlightCard (element) {
    element.classList.add('highlightcard');
    setTimeout(() => { element.classList.remove('highlightcard');}, 5000);
}

function round(hc, cc){
    // highlightChoice()
    if (hc === cc) {
        
               
    } else if (
        (hc === 'rock' && cc === 'scissors') ||
        (hc === 'scissors' && cc === 'paper') ||
        (hc === 'paper' && cc === 'rock')
    ) {
        hs+=1;
    } else {
        cs+=1;
    }
    score_hum.textContent = `Player : ${hs}`;
    score_comp.textContent = `Comp : ${cs}`;

    if (hs == 5) {
        subHead.textContent = `Player has won!`;
        highlightCard(humanCard);
        setTimeout(() => {
            rstbtn.click(); 
        }, 5000);
    } else if (cs == 5) {
        highlightCard(computerCard);
        subHead.textContent = `Computer has won!`;
        setTimeout(() => {
            rstbtn.click(); 
        }, 5000);
    }
}
    
    let hs = 0;
    let cs = 0;

    const score_hum  = document.getElementById('player_score');
    const score_comp  = document.getElementById('comp_score');

    const hrock = document.getElementById('rock');
    const hpaper = document.getElementById('paper');
    const hscissor = document.getElementById('scissors')

    const crock = document.getElementById('rock-c');
    const cpaper = document.getElementById('paper-c');
    const cscissor = document.getElementById('scissors-c')

    const subHead = document.getElementById('subHead');
    const rstbtn = document.getElementById('resetbtn');

    const humanCard = document.getElementById('player');
    const computerCard = document.getElementById('computer');
function play(){
    
    
    if (!hrock || !hpaper || !hscissor) {
        console.error("Buttons not found! Check your HTML IDs.");
        return;
    }
    rstbtn.addEventListener('click', () => {
        hs = 0;
        cs = 0;
        score_hum.textContent = `Player : ${hs}`;
        score_comp.textContent = `Comp : ${cs}`;
        subHead.textContent = `First to have a score of 5 wins`
    })

    hrock.addEventListener('click', function () {
        highlightChoice(hrock);
        console.log("Rock button clicked");
        round("rock", getcompchoice());
    });

    hpaper.addEventListener('click', function () {
        highlightChoice(hpaper);
        console.log("Paper button clicked");
        round("paper", getcompchoice());
    });

    hscissor.addEventListener('click', function () {
        highlightChoice(hscissor);
        console.log("Scissors button clicked");
        round("scissors", getcompchoice());
    });

}
document.addEventListener('DOMContentLoaded', function () {
    play();
});


