function getcompchoice (){
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}



function gethumanchoice(){
    let uinput = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (uinput === "rock" || uinput == "paper" || uinput == "scissors"){
        console.log(uinput);
    }
    else {
        console.log("enter a valid choice");
    }

}
console.log(gethumanchoice());