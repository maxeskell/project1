$(() => {
  console.log('Ready.');
  //define global variables
  const $gameholder = $('.gameholder');
  const $squares = $('.square');
  const $play = $('#play');
  const $timerScreen = $('#timerScreen');

  //global vaiables for user scores
  const $clickScoreScreen = $('#clickScoreScreen');
  const $userScoreScreen = $('#userScoreScreen');

  //global vairables for user click times
  const $clickTimeDifferenceScreen = $('#timeDifferenceScreen');
  const $fastestClickScreen = $('#fastestClickScreen');
  const $averageCLickScreen = $('#averageCLickScreen');

  //global variables for topscores
  const $highestscoreScreen = $('#highscoreScreen');
  const $highestscoreFastestClickScreen = $('#highscoreFastestClickScreen');
  const $highestscoreaverageCLickScreen = $('#highscoreAverageCLickScreen');

  //global variables for badges
  const $badges = $('.badge');
  const $badge1 = $('#badge1');
  const $badge2 = $('#badge2');
  const $badge3 = $('#badge3');
  const $badge4 = $('#badge4');
  const $badge5 = $('#badge5');
  const $badge6 = $('#badge6');
  const $badge7 = $('#badge7');
  const $badge8 = $('#badge8');

  // timer constants
  let timeRemaining = 20;
  let timerId = null;
  let delay = 200;

  // game logic constants
  let gameOn = false;

  //game score constants
  let userScore = 0;
  let clickScore = 0;
  let otterScore = 0;
  let beaverScore = 0;
  let blankScore = 0;

  //high score constants
  let highscore = 0;
  let highscoreFastestClickTime = 0;
  let highscoreAverageClickTime = 0;

  //click time constants
  let timeShowAnimal = 0;
  let userClickAnimal = 0;
  let clickTime = 0;
  let userTimeArray = [];
  let userFastestCLick = 0;
  let userAverageClickTime = 0;

  //function to find click time
  const findClickTime = function() {
    clickTime = ((userClickAnimal - timeShowAnimal));
    return clickTime;
  };
  //function to find the players fastes click time
  const findUserFastestCLick = function() {
    userFastestCLick = Math.min.apply(Math, userTimeArray);
    return userFastestCLick;
  };
  //function to find the players average click time
  const findUserAverageClickTime = function() {
    const sum = userTimeArray.reduce(function(a, b) {
      return a + b;
    }, 0);
    userAverageClickTime = parseInt(sum/(userTimeArray.length));
    return userAverageClickTime;
  };
  // reset function
  const reset = function() {
    //update fastest click time and fastest click time screen
    if (userFastestCLick < highscoreFastestClickTime || highscoreFastestClickTime === 0) {
      highscoreFastestClickTime = userFastestCLick;
      $highestscoreFastestClickScreen.html(highscoreFastestClickTime);
    }
    //update fastest average click time and fastest average click time screen
    if (userAverageClickTime < highscoreAverageClickTime || highscoreAverageClickTime === 0) {
      highscoreAverageClickTime = userAverageClickTime;
      $highestscoreaverageCLickScreen.html(highscoreAverageClickTime);
    }
    //update highscore and highscore screen
    if (userScore > highscore) {
      highscore = userScore;
      $highestscoreScreen.html(highscore);
    }
    //reset all scores
    userScore = 0;
    clickScore = 0;
    otterScore = 0;
    beaverScore = 0;
    clickScore = 0;
    //reset user fastest and average click time
    userTimeArray = [];
    userFastestCLick = 0;
    userAverageClickTime = 0;
    //reset timer and update timer screen
    clearInterval(timerId);
    timeRemaining = 20;
    //clear game board
    $squares.removeClass('otter beaver');
    //clear badges from badge area
    $badges.removeClass('badge1 badge2 badge3 badge4 badge5 badge6 badge7 badge8');
  };


  //start game when 'start button' is pushed, only if game not started
  $play.on('click', function() {
    if (gameOn === false) {
      //reset game
      reset();
      //store that game has been started
      gameOn = true;
      //run function to show beavers and otters for time interval
      showAnimals();
      //start timer
      timerId = setInterval(() => {
        timeRemaining--;
        $timerScreen.html(timeRemaining);
        // when timer reaches zero stop game
        if (timeRemaining === 0) {
          $timerScreen.addTemporaryClass('ringing', 2000);
          clearInterval(timerId);
          gameOn = false;
        }
      }, 1000);
    }
  });


  //select random square
  const selectRandomSquare = function() {
    const randomIndex = Math.floor(Math.random() * $squares.length);
    return $squares.eq(randomIndex);
  };

  // randomise which animal to call (currenlty otter or beaver), but prefer beaver
  const randomAnimal = function() {
    return (Math.random() * (100 - 1) + 1) < 30 ? 'otter' : 'beaver';
  };

  //add beaver/otter class to random square, then call function again at an random interval (between 3 and 1 second)
  const showAnimals = function() {
    setTimeout(() => {
      selectRandomSquare().addTemporaryClass(randomAnimal(), 1000);
      delay = Math.random() * 1000 * (2.5 - 1) + 1;
      //only show animals if game has been started and countdown timer has not run out
      if (gameOn === true) {
        timeShowAnimal = $.now();
        showAnimals();
      }
    }, delay);
  };

  // check and show badges if player's scores are high enough
  const checkAndShowBadges = function() {
    if (beaverScore > 5) {
      $badge1.addClass('badge1');
    }
    if (beaverScore > 10) {
      $badge2.addClass('badge2');
    }
    if (beaverScore > 20) {
      $badge3.addClass('badge3');
    }
    if (beaverScore > 50) {
      $badge4.addClass('badge4');
    }
    if (otterScore > 5) {
      $badge5.addClass('badge5');
    }
    if (otterScore > 10) {
      $badge6.addClass('badge6');
    }
    if (blankScore > 10) {
      $badge7.addClass('badge7');
    }
    if (userScore > highscore) {
      $badge8.addClass('badge8');
    }
  };

  //game logic for user clicking on beavers/otters/empty square
  $gameholder.on('click', function(e) {
    userClickAnimal = $.now();
    if (gameOn === true) {
      if ($(e.target).hasClass('beaver')) {
        //update scores
        clickScore = 20;
        userScore += 20;
        beaverScore += 1;
        //show badges
        checkAndShowBadges();
        //hide animal by removing class
        ($(e.target).removeClass('beaver'));
        //make sound (not included yet)
      } else if ($(e.target).hasClass('otter')) {
        clickScore = -10;
        userScore -= 20;
        otterScore += 1;
        checkAndShowBadges();
        ($(e.target).removeClass('otter'));
        //make sound (not included yet)
      } else {
        clickScore = -5;
        userScore -= 5;
        blankScore += 1;
        //make sound (not included yet)
      }
      //show users current score, running total and click time
      $clickScoreScreen.text(clickScore);
      $userScoreScreen.text(userScore);
      //store users time difference in array
      userTimeArray.push(findClickTime());
      //show click time to users
      $clickTimeDifferenceScreen.text(findClickTime());
      //find and show users fastest click time
      $fastestClickScreen.text(findUserFastestCLick());
      //find and show users average click time
      $averageCLickScreen.text(findUserAverageClickTime());
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
