$(() => {
  console.log('Ready.');
  //define global variables
  const $gameholder = $('.gameholder');
  const $badgearea = $('.badgearea');
  const $squares = $('.square');
  const $button = $('.button');

  //global vaiables for user feedback
  const $timerScreen = $('#timerScreen');
  const $clickScoreScreen = $('#clickScoreScreen');
  const $userScoreScreen = $('#userScoreScreen');
  const $fastestClickSreen = $('#fastestClickSreen');
  const $highscoreScreen = $('#highscoreScreen');
  const $averageCLickScreen = $('#highscoreAverageCLickScreen');
  const $highscoreFastestClickScreen = $('.highscoreFastestClickScreen');

  // timer constants
  let timeRemaining = 20;
  let timerId = null;
  let delay = 200;

  // game logic constants
  let gameOn = false;

  //game constants
  let userScore = 0;
  let clickScore = 0;
  let otterScore = 0;
  let beaverScore = 0;
  let blankScore = 0;
  let userFastestClickTime = 0;
  let userAverageClickTime = 0;

  //high score constants
  let highscore = 0;
  let highscoreFastestClickTime = 0;
  let highscoreAverageClickTime = 0;



  //start game when 'start button' is pushed, only if game not started
  $button.on('click', function() {
    if (gameOn === false || timeRemaining === 0) {
      //store that game has been started
      gameOn = true;
      //update highscore and highscore screen
      if (userScore > highscore) {
        highscore = userScore;
        $highscoreScreen.html(highscore);
      }
      //reset score and click score
      userScore = 0;
      clickScore = 0;
      //rest timer and update timer screen
      clearInterval(timerId);
      timeRemaining = 20;
      //run function to show beavers and otters for time interval
      showAnimals();
      //start timer
      timerId = setInterval(() => {
        timeRemaining--;
        $timerScreen.html(timeRemaining);
        if (timeRemaining === 0) {
          clearInterval(timerId);
          gameOn = false;
          //empty board
        }
      }, 1000);

    }
  });

  //reset function

  //select random square
  const selectRandomSquare = function() {
    const randomIndex = Math.floor(Math.random() * $squares.length);
    return $squares.eq(randomIndex);
  };

// randomise which animal to call (currenlty otter or beaver)
const randomAnimal = function() {
  return ( Math.random() * (100-1)+1 ) < 30 ? 'otter' : 'beaver';
};

  //add beaver/otter class to random square, then call function again at an random interval (between 3 and 1 second)
  const showAnimals = function() {
    setTimeout(() => {
      selectRandomSquare().addTemporaryClass(randomAnimal(), 1000);
      delay = Math.random() * 1000 * (3 - 1) + 1;
      showAnimals();
    }, delay);
  };

  //function to show otters

  //game logic for user clicking on beavers/otters/empty square
  $gameholder.on('click', function(e) {
    if (gameOn === true) {
      if ($(e.target).hasClass('beaver')) {
        clickScore = 20;
        userScore += 20;
        beaverScore += 1;
        ($(e.target).removeClass('beaver'));
        //make sound
      } else if ($(e.target).hasClass('otter')) {
        clickScore = -10;
        userScore -= 20;
        otterScore += 1;
        ($(e.target).removeClass('otter'));
        //make sound
      } else {
        clickScore = -5;
        userScore -= 5;
        blankScore += 1;
        //make sound
      }
      $clickScoreScreen.text(clickScore);
      $userScoreScreen.text(userScore);
    }
  });

  //create 'addTemporaryClass' function
  (function($) {

    $.fn.extend({

      addTemporaryClass: function(className, duration) {
        var elements = this;
        setTimeout(function() {
          elements.removeClass(className);
        }, duration);

        return this.each(function() {
          $(this).addClass(className);
        });
      }
    });

  })(jQuery);

});
