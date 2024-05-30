function start(){
// Guess The Number of Function
function guessTheNumber(difficulty) {
    let randomNumber;
    let attemps = 0;
    let maxAttemps;
    let range;
  
    // Set difficulty-based Parameters
    switch (difficulty) {
      case 'easy','1':
        range = 10;
        maxAttemps = 5;
        randomNumber = Math.floor(Math.random() * 10) + 1; // Range 1 - 10
        console.log(randomNumber);
        break;
      case 'medium','2':
        range = 100;
        maxAttemps = 7;
        randomNumber = Math.floor(Math.random() * 100) + 1; // Range 1 - 100
        console.log(randomNumber);
        break;
      case 'hard','3':
        range = 1000;
        maxAttemps = 10;
        randomNumber = Math.floor(Math.random() * 1000) + 1; // Range 1 - 1000
        console.log(randomNumber);
        break;
      default:
        alert(
          `Invalid difficulty level. Choose 1.easy, 2.medium, or 3.hard`
        );
        return;
    }
  
    // Get user input and check guesses
    while (attemps < maxAttemps) {
      let guess = parseInt(
        prompt(
          `Guess a number between 1 and ${range} (Inclusive). You have ${
            maxAttemps - attemps
          } attemps left`
        )
      );
      attemps++;
  
      if (guess === randomNumber) {
        alert(
          `Congratulations! You gussed the number in ${attemps} attemps`
        );
        break;
      } else if (guess < randomNumber) {
        alert(`Too Low. Try Again`);
      } else {
        alert(`Too High. Try Again`);
      }
  
      // console.log(guess);
    }
    if (maxAttemps === attemps) {
      alert(`Sorry, You ran out of attemps. The Number was ${randomNumber}`);
    }
  }
  
  // Get user input difficulty
  let difficulty = prompt('Choose level ( 1, 2, or 3 ) = (easy, medium, hard)').toLowerCase();
  
  guessTheNumber(difficulty);
}
  
  // console.log(difficulty);
  
