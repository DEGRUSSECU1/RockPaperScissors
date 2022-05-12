const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  if( userInput === 'rock'||'paper'||'sicssors'){
    return userInput;
  }else if (userInput === 'bomb'){
    console.log('you Won with the bomb')
  }else{
    alert('choose between rock, paper, scissors or the secret word')
  }
}



const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()*3)
 
  switch(randomNumber){
    case 0:
      return 'paper';
     break
     case 1: 
     return  'rock';
     break;
     case 2:
     return  'scissors';
     break;
     default:
     console.log('error');
     break
  }
}



const determineWinner = (userChoice ,computerChoice) => {

  if(userChoice === computerChoice ) {
    return  'TIE';
    }else if (userChoice === 'rock' && computerChoice === 'paper'){
    return 'computerChoice Wins'
  }else if (userChoice === 'rock' && computerChoice === 'scissors' ){
    return 'userChoice Wins'
}else if(userChoice === 'paper' & computerChoice === 'rock'){
  return 'userChoice Wins'
}else if(userChoice === 'paper' & computerChoice === 'scissors'){
  return 'computerChoice Wins'
}else if(userChoice === 'scissors' & computerChoice === 'paper'){
  return 'userChoice Wins'
}
else if(userChoice === 'scissors' & computerChoice === 'rock'){
  return 'computerChoice Wins'
}else if(userChoice === 'bomb'){
  return 'USER WINS BEACAUSE BOMB WINS ABOVE ALL'
}
}



const playGame = () => {
   const userChoice = getUserChoice('paper');
   const computerChoice = getComputerChoice();
   console.log('User choice: ' + userChoice);
   console.log('computerChoice:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};
 
playGame();