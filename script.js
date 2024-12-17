function getcompchoice (){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}



function gethumanchoice(){
    let uiinput = prompt("Rock, Paper or Scissors?");
    let uinput = uiinput.toLowerCase();
    if (uinput == "rock" || uinput == "paper" || uinput == "scissors") {
        return uinput;
    }
    else {
        console.log("enter a valid choice"); return gethumanchoice();
    }

}

function round(hc, cc){
    if (hc === cc) {
        console.log("It's a tie!"); return 0;
    } else if (
        (hc === 'rock' && cc === 'scissors') ||
        (hc === 'scissors' && cc === 'paper') ||
        (hc === 'paper' && cc === 'rock')
    ) {
        console.log("You win!"); return 1;
    } else if (
        (cc === 'rock' && hc === 'scissors') ||
        (cc === 'scissors' && hc === 'paper') ||
        (cc === 'paper' && hc === 'rock')
    ) {
        console.log("Computer wins!"); return 2;
    } else {
        console.log("Invalid choice! Please choose rock, paper, or scissors.");
    }
}

function play(){
    let hs = 0;
    let cs = 0;

    let hc = gethumanchoice();
    let cc = getcompchoice();
    console.log(`Computer chose : ${cc}\nPlayer chose : ${hc}`)
    let result = round(hc , cc);
    
    if (result == 1) hs += 1;
    if (result == 2) cs += 1;
    console.log(`Current Scores : Player- ${hs} Computer- ${cs}`)
    
    if (cs == hs){
        console.log(`It is a draw. \nGame Ends.`);
    }
    else if (cs > hs){
        console.log(`Computer wins. \nGame Ends`);
    }
    else {
        console.log(`Player wins. \nGame Ends.`)
    }
}
// play();