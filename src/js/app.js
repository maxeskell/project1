//create 'addTemporaryClass' function to Jquery as an Jquery method
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

//check for other wao objects, if none define wao as global object
var wao = wao || {};

//GAME JS VARIABLES
// timer constants
wao.timeRemaining = 20;
wao.timerId = null;
wao.delay = 200;

// game logic constants
wao.gameOn = false;

//game score constants
wao.userScore = 0;
wao.clickScore = 0;
wao.otterScore = 0;
wao.beaverScore = 0;
wao.blankScore = 0;

//high score constants
wao.highscore = 0;
wao.highscoreFastestClickTime = 0;
wao.highscoreAverageClickTime = 0;

//click time constants
wao.timeShowAnimal = 0;
wao.userClickAnimal = 0;
// let clickTime = 0;
wao.userTimeArray = [];
wao.userFastestCLick = 0;
wao.userAverageClickTime = 0;

//function to find click time
wao.findClickTime = function findClickTime() {
  return ((this.userClickAnimal - this.timeShowAnimal));
};
//function to find the players fastes click time
wao.findUserFastestCLick = function findUserFastestCLick() {
  this.userFastestCLick = Math.min.apply(Math, this.userTimeArray);
  return this.userFastestCLick;
};
//function to find the players average click time
wao.findUserAverageClickTime = function findUserAverageClickTime() {
  const sum = this.userTimeArray.reduce(function(a, b) {
    return a + b;
  }, 0);
  this.userAverageClickTime = parseInt(sum / (this.userTimeArray.length));
  return this.userAverageClickTime;
};
// reset function
wao.reset = function reset() {
  //update fastest click time and fastest click time screen
  if (this.userFastestCLick < this.highscoreFastestClickTime || this.highscoreFastestClickTime === 0) {
    this.highscoreFastestClickTime = this.userFastestCLick;
    this.$highestscoreFastestClickScreen.html(this.highscoreFastestClickTime);
  }
  //update fastest average click time and fastest average click time screen
  if (this.userAverageClickTime < this.highscoreAverageClickTime || this.highscoreAverageClickTime === 0) {
    this.highscoreAverageClickTime = this.userAverageClickTime;
    this.$highestscoreaverageCLickScreen.html(this.highscoreAverageClickTime);
  }
  //update highscore and highscore screen
  if (this.userScore > this.highscore) {
    this.highscore = this.userScore;
    this.$highestscoreScreen.html(this.highscore);
  }
  //reset all scores
  this.userScore = 0;
  this.clickScore = 0;
  this.otterScore = 0;
  this.beaverScore = 0;
  this.clickScore = 0;
  //reset user fastest and average click time
  this.userTimeArray = [];
  this.userFastestCLick = 0;
  this.userAverageClickTime = 0;
  //reset timer and update timer screen
  clearInterval(this.timerId);
  this.timeRemaining = 20;
  //rest scoreboard and player information screens to zero
  this.$clickScoreScreen.html(0);
  this.$userScoreScreen.html(0);
  this.$finalScore.html(0);
  this.$clickTimeDifferenceScreen.html(0);
  this.$fastestClickScreen.html(0);
  this.$averageCLickScreen.html(0);
  this.$avgTimeDifferenceScreen.html(0);
  //clear game board
  this.$squares.removeClass('otter beaver');
  //clear badges from badge area
  this.$badges.removeClass('badge1 badge2 badge3 badge4 badge5 badge6 badge7 badge8');
};

//select random square
wao.selectRandomSquare = function selectRandomSquare() {
  const randomIndex = Math.floor(Math.random() * this.$squares.length);
  return this.$squares.eq(randomIndex);
};

// randomise which animal to call (currenlty otter or beaver), but prefer beaver
wao.randomAnimal = function randomAnimal() {
  return (Math.random() * (100 - 1) + 1) < 30 ? 'otter' : 'beaver';
};

//add beaver/otter class to random square, then call function again at an random interval (between 3 and 1 second)
wao.showAnimals = function showAnimals() {
  setTimeout(() => {
    //apply temporary class (using method I defined) to random square
    this.selectRandomSquare().addTemporaryClass(this.randomAnimal(), 1000);
    //set delay to random time
    this.delay = Math.random() * 1000 * (2.5 - 1) + 1;
    //only show animals if game has been started and countdown timer has not run out
    if (this.gameOn === true) {
      //record time that aminal is shown
      this.timeShowAnimal = $.now();
      this.showAnimals();
    }
  }, this.delay);
};

// check and show badges if player's scores are high enough
wao.checkAndShowBadges = function checkAndShowBadges() {
  if (this.beaverScore > 4) {
    this.$badge1.addClass('badge1');
  }
  if (this.beaverScore > 9) {
    this.$badge2.addClass('badge2');
  }
  if (this.beaverScore > 14) {
    this.$badge3.addClass('badge3');
  }
  if (this.beaverScore > 19) {
    this.$badge4.addClass('badge4');
  }
  if (this.userScore > this.highscore) {
    this.$badge5.addClass('badge5');
  }
  if (this.blankScore > 9) {
    this.$badge6.addClass('badge6');
  }
  if (this.otterScore > 4) {
    this.$badge7.addClass('badge7');
  }
  if (this.otterScore > 9) {
    this.$badge8.addClass('badge8');
  }
};

//GAME PLAY FUNCTIONS
//hide the intro page function
wao.hideIntro = function hideIntro() {
  this.$introduction.addClass('hide');
};
//remove the pulse function
wao.removePulse = function removePulse() {
  this.$play.removeClass('pulse');
};
//start game function
wao.startGame = function startGame() {
  if (this.gameOn === false) {
    //reset game
    this.reset();
    //store that game has been started
    this.gameOn = true;
    //run function to show beavers and otters for time interval
    this.showAnimals();
    //start timer
    this.timerId = setInterval(() => {
      this.timeRemaining--;
      this.$timerScreen.html(this.timeRemaining);
      // when timer reaches zero stop game
      if (this.timeRemaining === 0) {
        this.$timerScreen.addTemporaryClass('ringing', 2000);
        clearInterval(this.timerId);
        this.gameOn = false;
        //find and show users fastest click time
        this.$fastestClickScreen.text(this.findUserFastestCLick());
        //find and show users average click time
        this.$averageCLickScreen.text(this.findUserAverageClickTime());
        //find and show final score to user
        this.$finalScore.text(this.userScore);
      }
    }, 1000);
  }
};
//function which executes when user clicks on beaver/otter/blank square
wao.userClick = function userClick(e) {
  this.userClickAnimal = $.now();
  if (this.gameOn) {
    if ($(e.target).hasClass('beaver')) {
      //update scores
      this.clickScore = 20;
      this.userScore += 20;
      this.beaverScore += 1;
      //show badges
      this.checkAndShowBadges();
      //hide animal by removing class
      ($(e.target).removeClass('beaver'));
      //make sound (not included yet)
      $('/public/assets/sounds/success.mp3')[0].play();
    } else if ($(e.target).hasClass('otter')) {
      this.clickScore = -10;
      this.userScore -= 20;
      this.otterScore += 1;
      this.checkAndShowBadges();
      ($(e.target).removeClass('otter'));
      //make sound (not included yet)
      $('/public/assets/sounds/notsuccess.mp3')[0].play();
    } else {
      this.clickScore = -5;
      this.userScore -= 5;
      this.blankScore += 1;
      //make sound (not included yet)
      $('/public/assets/sounds/blank.wav')[0].play();
    }
    //show users current score, running total and click time
    this.$clickScoreScreen.text(this.clickScore);
    this.$userScoreScreen.text(this.userScore);
    //store users time difference in array
    this.userTimeArray.push(this.findClickTime());
    //show click time to users
    this.$clickTimeDifferenceScreen.text(this.findClickTime());
    //show average click time to user
    this.$avgTimeDifferenceScreen.text(this.findUserAverageClickTime());
  }
};


//SETUP FUNCTION
wao.setup = function() {
  //define global variables
  this.$gameholder = $('.gameholder');
  this.$squares = $('.square');
  this.$play = $('#play');
  this.$ready = $('#ready');
  this.$timerScreen = $('#timerScreen');
  this.$introduction = $('.introduction');
  this.$playButton = $('#play');

  //global vaiables for user scores
  this.$clickScoreScreen = $('#clickScoreScreen');
  this.$userScoreScreen = $('#userScoreScreen');
  this.$finalScore = $('#finalScore');

  //global vairables for user click times
  this.$clickTimeDifferenceScreen = $('#timeDifferenceScreen');
  this.$fastestClickScreen = $('#fastestClickScreen');
  this.$averageCLickScreen = $('#averageCLickScreen');
  this.$avgTimeDifferenceScreen = $('#avgTimeDifferenceScreen');

  //global variables for topscores
  this.$highestscoreScreen = $('#highscoreScreen');
  this.$highestscoreFastestClickScreen = $('#highscoreFastestClickScreen');
  this.$highestscoreaverageCLickScreen = $('#highscoreAverageCLickScreen');

  //global variables for badges
  this.$badges = $('.badge');
  this.$badge1 = $('#badge1');
  this.$badge2 = $('#badge2');
  this.$badge3 = $('#badge3');
  this.$badge4 = $('#badge4');
  this.$badge5 = $('#badge5');
  this.$badge6 = $('#badge6');
  this.$badge7 = $('#badge7');
  this.$badge8 = $('#badge8');

  //audio
  this.$clickOnCorrect = $('#clickOnCorrect')[0];
  this.$clickOnWrong = $('#clickOnWrong')[0];
  this.$clickOnBlank = $('#clickOnBlank')[0];

  //setup introduction screen so that it will hide when ready button is clicked
  this.$ready.on('click', this.hideIntro.bind(this));

  //setup pulse button so that it stops pulsing when clicked
  this.$playButton.on('click', this.removePulse.bind(this));

  //setup the game so that it can be started when play button is clicked
  this.$play.on('click', this.startGame.bind(this));

  //set up the gameholder so that users clicks result in scores
  this.$gameholder.on('click', this.userClick.bind(this));
};
$(wao.setup.bind(wao));
