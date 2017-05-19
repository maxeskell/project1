$(() => {
  console.log('Ready.');
  //define global variables
  const $gameholder = $('.gameholder');
  const $badgearea = $('.badgearea');
  const $squares = $('.square');
  const $button = $('.button');
  const $scoreScreen = $('.scoresScreen');
  const $timerScreen = $('.timerScreen');
  const $highscoreScreen = $('.highscoreScreen');

  // timer constants
  let timeRemaining = 20;
  let timerId = null;

  // game logic constants
  let gameOn = false;
  var score = 0;
  let highscore = 0;
  let delay = 200;

  //start game when 'start button' is pushed, only if game not started
  $button.on('click', function() {
    if (gameOn === false || timeRemaining === 0) {
      console.log('start button clicked');
      //store that game has been started
      gameOn = true;
      //update highscore and highscore screen
      if (score > highscore) {
        highscore = score;
        $highscoreScreen.text(highscore);
      }
      //reset score
      score = 0;
      //rest timer and update timer screen
      clearInterval(timerId);
      timeRemaining = 20;
      //start timer
      timerId = setInterval(() => {
        timeRemaining--;
        $timerScreen.text(timeRemaining);

        if (timeRemaining === 0) {
          clearInterval(timerId);
          gameOn = false;
        }
      }, 1000);
      //run function to show beavers
      addBeaver();
    }
  });

  //select random square
  const selectRandomSquare = function() {
    const randomIndex = Math.floor(Math.random() * $squares.length);
    return $squares.eq(randomIndex);
  };

  //add beaver class to random square, then call function again at an random interval (between 3 and 1 second)
  const addBeaver = function() {
    setTimeout(() => {
      selectRandomSquare().addClass('beaver');
      delay = Math.random() * 1000 * (3 - 1) + 1;
      addBeaver();
    }, delay);
  };


  //function to show otters

  //game logic


  $gameholder.on('click', function(e) {
    if (gameOn === true) {
      if ($(e.target).hasClass('beaver')) {
        score += 20;
        ($(e.target).removeClass('beaver'));
        //make sound
      } else if ($(e.target).hasClass('otter')) {
        score -= 20;
        ($(e.target).removeClass('otter'));
        //make sound
      } else {
        score -= 5;
        //make sound
      }
      console.log('game area clicked');
      console.log(`score = ${score}`);
      $scoreScreen.text(score);
    }
  });


});
