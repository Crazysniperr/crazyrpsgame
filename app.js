var userscore = 0;
var compscore = 0;
const userscore_span = document.getElementById('user-score');
const compscore_span = document.getElementById('comp-score');
const score_div = document.querySelector(".score");
const result_p = document.querySelector(".message p");
const rock_div= document.getElementById("roc");
const paper_div = document.getElementById("pap");
const scissors_div = document.getElementById("sci");
//cashing Dom_variable to increase the effeciency of the code.
function getrandom(){
    const choices = ['r','p','s'];
    const number = Math.floor(Math.random()*3);
    return choices[number];
}
function convert(letter){
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'Paper';
    if(letter === 's') return 'Scissors';
}
function win(userchoice,computerchoice){
    userscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    result_p.innerHTML = convert(userchoice) + " beats " + convert(computerchoice) +" . You Win!";

}
function lose(userchoice,computerchoice){
    compscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    result_p.innerHTML = convert(computerchoice) + " beats " + convert(userchoice) +" . Computer Wins!";
    
}
function draw(userchoice,computerchoice){
    result_p.innerHTML = convert(computerchoice) + " equals " + convert(userchoice) +" . Its a Draw!";
    
}
function game(userchoice){
    const computerchoice = getrandom();
    switch(userchoice + computerchoice){
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,computerchoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userchoice,computerchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice,computerchoice);
            break;
    }

}
function main(){
rock_div.addEventListener("click",function(){
    game("r");
})
paper_div.addEventListener("click",function(){
    game("p");
})
scissors_div.addEventListener("click",function(){
    game("s");
})
}
main();