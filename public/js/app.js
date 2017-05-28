"use strict";!function(e){e.fn.extend({addTemporaryClass:function(i,s){var t=this;return setTimeout(function(){t.removeClass(i)},s),this.each(function(){e(this).addClass(i)})}})}(jQuery);var wao=wao||{};wao.timeRemaining=20,wao.timerId=null,wao.delay=200,wao.gameOn=!1,wao.userScore=0,wao.clickScore=0,wao.otterScore=0,wao.beaverScore=0,wao.blankScore=0,wao.highscore=0,wao.highscoreFastestClickTime=0,wao.highscoreAverageClickTime=0,wao.timeShowAnimal=0,wao.userClickAnimal=0,wao.userTimeArray=[],wao.userFastestCLick=0,wao.userAverageClickTime=0,wao.findClickTime=function(){return this.userClickAnimal-this.timeShowAnimal},wao.findUserFastestCLick=function(){return this.userFastestCLick=Math.min.apply(Math,this.userTimeArray),this.userFastestCLick},wao.findUserAverageClickTime=function(){var e=this.userTimeArray.reduce(function(e,i){return e+i},0);return this.userAverageClickTime=parseInt(e/this.userTimeArray.length),this.userAverageClickTime},wao.reset=function(){(this.userFastestCLick<this.highscoreFastestClickTime||0===this.highscoreFastestClickTime)&&(this.highscoreFastestClickTime=this.userFastestCLick,this.$highestscoreFastestClickScreen.html(this.highscoreFastestClickTime)),(this.userAverageClickTime<this.highscoreAverageClickTime||0===this.highscoreAverageClickTime)&&(this.highscoreAverageClickTime=this.userAverageClickTime,this.$highestscoreaverageCLickScreen.html(this.highscoreAverageClickTime)),this.userScore>this.highscore&&(this.highscore=this.userScore,this.$highestscoreScreen.html(this.highscore)),this.userScore=0,this.clickScore=0,this.otterScore=0,this.beaverScore=0,this.clickScore=0,this.userTimeArray=[],this.userFastestCLick=0,this.userAverageClickTime=0,clearInterval(this.timerId),this.timeRemaining=20,this.$clickScoreScreen.html(0),this.$userScoreScreen.html(0),this.$finalScore.html(0),this.$clickTimeDifferenceScreen.html(0),this.$fastestClickScreen.html(0),this.$averageCLickScreen.html(0),this.$avgTimeDifferenceScreen.html(0),this.$squares.removeClass("otter beaver"),this.$badges.removeClass("badge1 badge2 badge3 badge4 badge5 badge6 badge7 badge8")},wao.selectRandomSquare=function(){var e=Math.floor(Math.random()*this.$squares.length);return this.$squares.eq(e)},wao.randomAnimal=function(){return 99*Math.random()+1<30?"otter":"beaver"},wao.showAnimals=function(){var e=this;setTimeout(function(){e.selectRandomSquare().addTemporaryClass(e.randomAnimal(),1e3),e.delay=1e3*Math.random()*1.5+1,!0===e.gameOn&&(e.timeShowAnimal=$.now(),e.showAnimals())},this.delay)},wao.checkAndShowBadges=function(){this.beaverScore>4&&this.$badge1.addClass("badge1"),this.beaverScore>9&&this.$badge2.addClass("badge2"),this.beaverScore>14&&this.$badge3.addClass("badge3"),this.beaverScore>19&&this.$badge4.addClass("badge4"),this.userScore>this.highscore&&this.$badge5.addClass("badge5"),this.blankScore>9&&this.$badge6.addClass("badge6"),this.otterScore>4&&this.$badge7.addClass("badge7"),this.otterScore>9&&this.$badge8.addClass("badge8")},wao.hideIntro=function(){this.$introduction.addClass("hide")},wao.removePulse=function(){this.$play.removeClass("pulse")},wao.startGame=function(){var e=this;!1===this.gameOn&&(this.reset(),this.gameOn=!0,this.showAnimals(),this.timerId=setInterval(function(){e.timeRemaining--,e.$timerScreen.html(e.timeRemaining),0===e.timeRemaining&&(e.$timerScreen.addTemporaryClass("ringing",2e3),clearInterval(e.timerId),e.gameOn=!1,e.$fastestClickScreen.text(e.findUserFastestCLick()),e.$averageCLickScreen.text(e.findUserAverageClickTime()),e.$finalScore.text(e.userScore))},1e3))},wao.userClick=function(e){this.userClickAnimal=$.now(),this.gameOn&&($(e.target).hasClass("beaver")?(this.clickScore=20,this.userScore+=20,this.beaverScore+=1,this.checkAndShowBadges(),$(e.target).removeClass("beaver"),this.$clickOnCorrect.play()):$(e.target).hasClass("otter")?(this.clickScore=-10,this.userScore-=20,this.otterScore+=1,this.checkAndShowBadges(),$(e.target).removeClass("otter"),this.$clickOnWrong.play()):(this.clickScore=-5,this.userScore-=5,this.blankScore+=1,this.$clickOnBlank.play()),this.$clickScoreScreen.text(this.clickScore),this.$userScoreScreen.text(this.userScore),this.userTimeArray.push(this.findClickTime()),this.$clickTimeDifferenceScreen.text(this.findClickTime()),this.$avgTimeDifferenceScreen.text(this.findUserAverageClickTime()))},wao.setup=function(){this.$gameholder=$(".gameholder"),this.$squares=$(".square"),this.$play=$("#play"),this.$ready=$("#ready"),this.$timerScreen=$("#timerScreen"),this.$introduction=$(".introduction"),this.$playButton=$("#play"),this.$clickScoreScreen=$("#clickScoreScreen"),this.$userScoreScreen=$("#userScoreScreen"),this.$finalScore=$("#finalScore"),this.$clickTimeDifferenceScreen=$("#timeDifferenceScreen"),this.$fastestClickScreen=$("#fastestClickScreen"),this.$averageCLickScreen=$("#averageCLickScreen"),this.$avgTimeDifferenceScreen=$("#avgTimeDifferenceScreen"),this.$highestscoreScreen=$("#highscoreScreen"),this.$highestscoreFastestClickScreen=$("#highscoreFastestClickScreen"),this.$highestscoreaverageCLickScreen=$("#highscoreAverageCLickScreen"),this.$badges=$(".badge"),this.$badge1=$("#badge1"),this.$badge2=$("#badge2"),this.$badge3=$("#badge3"),this.$badge4=$("#badge4"),this.$badge5=$("#badge5"),this.$badge6=$("#badge6"),this.$badge7=$("#badge7"),this.$badge8=$("#badge8"),this.$clickOnCorrect=$("#clickOnCorrect"),this.$clickOnWrong=$("#clickOnWrong"),this.$clickOnBlank=$("#clickOnBlank"),this.$ready.on("click",this.hideIntro.bind(this)),this.$playButton.on("click",this.removePulse.bind(this)),this.$play.on("click",this.startGame.bind(this)),this.$gameholder.on("click",this.userClick.bind(this))},$(wao.setup.bind(wao));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiZm4iLCJleHRlbmQiLCJhZGRUZW1wb3JhcnlDbGFzcyIsImNsYXNzTmFtZSIsImR1cmF0aW9uIiwidGhpcyIsImVsZW1lbnRzIiwic2V0VGltZW91dCIsInJlbW92ZUNsYXNzIiwialF1ZXJ5Iiwid2FvIiwidGltZVJlbWFpbmluZyIsInRpbWVySWQiLCJnYW1lT24iLCJ1c2VyU2NvcmUiLCJjbGlja1Njb3JlIiwib3R0ZXJTY29yZSIsImhpZ2hzY29yZSIsImhpZ2hzY29yZUZhc3Rlc3RDbGlja1RpbWUiLCJ0aW1lU2hvd0FuaW1hbCIsInVzZXJDbGlja0FuaW1hbCIsInVzZXJGYXN0ZXN0Q0xpY2siLCJ1c2VyVGltZUFycmF5IiwiZmluZENsaWNrVGltZSIsImZpbmRVc2VyRmFzdGVzdENMaWNrIiwiTWF0aCIsIm1pbiIsImFwcGx5IiwiZmluZFVzZXJBdmVyYWdlQ2xpY2tUaW1lIiwic3VtIiwicmVkdWNlIiwiYSIsImIiLCJ1c2VyQXZlcmFnZUNsaWNrVGltZSIsInBhcnNlSW50IiwibGVuZ3RoIiwicmVzZXQiLCIkaGlnaGVzdHNjb3JlRmFzdGVzdENsaWNrU2NyZWVuIiwiaGlnaHNjb3JlQXZlcmFnZUNsaWNrVGltZSIsIiRoaWdoZXN0c2NvcmVhdmVyYWdlQ0xpY2tTY3JlZW4iLCIkaGlnaGVzdHNjb3JlU2NyZWVuIiwiY2xlYXJJbnRlcnZhbCIsImh0bWwiLCIkdXNlclNjb3JlU2NyZWVuIiwiJGNsaWNrU2NvcmVTY3JlZW4iLCIkZmluYWxTY29yZSIsIiRjbGlja1RpbWVEaWZmZXJlbmNlU2NyZWVuIiwiJGZhc3Rlc3RDbGlja1NjcmVlbiIsIiRhdmdUaW1lRGlmZmVyZW5jZVNjcmVlbiIsIiRzcXVhcmVzIiwic2VsZWN0UmFuZG9tU3F1YXJlIiwicmFuZG9tSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImVxIiwicmFuZG9tQW5pbWFsIiwic2hvd0FuaW1hbHMiLCJfdGhpcyIsImRlbGF5Iiwibm93IiwiY2hlY2tBbmRTaG93QmFkZ2VzIiwiYmVhdmVyU2NvcmUiLCIkYmFkZ2UxIiwiYWRkQ2xhc3MiLCIkYmFkZ2UyIiwiJGJhZGdlMyIsIiRiYWRnZTQiLCIkYmFkZ2U1IiwiYmxhbmtTY29yZSIsIiRiYWRnZTYiLCIkYmFkZ2U3IiwiJGJhZGdlOCIsImhpZGVJbnRybyIsIiRpbnRyb2R1Y3Rpb24iLCJyZW1vdmVQdWxzZSIsIiRwbGF5Iiwic2V0SW50ZXJ2YWwiLCJfdGhpczIiLCIkdGltZXJTY3JlZW4iLCJ0ZXh0IiwiJGF2ZXJhZ2VDTGlja1NjcmVlbiIsInVzZXJDbGljayIsImUiLCJ0YXJnZXQiLCJoYXNDbGFzcyIsInBsYXkiLCIkY2xpY2tPbkNvcnJlY3QiLCIkY2xpY2tPbldyb25nIiwiJGNsaWNrT25CbGFuayIsInNldHVwIiwiJGdhbWVob2xkZXIiLCIkcGxheUJ1dHRvbiIsIiRiYWRnZXMiLCJiaW5kIiwib24iLCJzdGFydEdhbWUiXSwibWFwcGluZ3MiOiJjQUNBLFNBQVVBLEdBRFZBLEVBQUFDLEdBQUFDLFFBQ0NDLGtCQUFZLFNBQUFDLEVBQUFDLEdBQ1gsR0FBS0gsR0FBT0ksSUFJTkMsT0FISkosWUFBQUEsV0FDRUksRUFBSUEsWUFBSkgsSUFDQUksR0FDRUQsS0FBU0UsS0FBQUEsV0FEWFQsRUFFR0ssTUFBQUEsU0FGSEQsU0FNRE0sT0FLTCxJQUFJQyxLQUFNQSxPQUVWQSxLQUFBQyxjQUFBLEdBQ0FELElBQUFFLFFBQUEsS0FDQUYsSUFBSUMsTUFBQUEsSUFLSkQsSUFBSUcsUUFBUyxFQUdiSCxJQUFJSSxVQUFZLEVBRGhCSixJQUFBSyxXQUFBLEVBQ0FMLElBQUlJLFdBQUosRUFDQUosSUFBSUssWUFBSixFQUNBTCxJQUFJTSxXQUFhLEVBS2pCTixJQUFJTyxVQUFZLEVBRGhCUCxJQUFBUSwwQkFBQSxFQUNBUixJQUFJTywwQkFBSixFQUtBUCxJQUFJUyxlQUFpQixFQURyQlQsSUFBQVUsZ0JBQUEsRUFFQVYsSUFBSVUsaUJBQ0pWLElBQUFXLGlCQUFBLEVBQ0FYLElBQUlZLHFC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UUFBVWpFLEVBQUUsV0FDakJNLEtBQUs0RCxRQUFVbEUsRUFBRSxXQUdqQk0sS0FBS2dFLGdCQUFZdEUsRUFBQSxtQkFDakJNLEtBQUtpRSxjQUFZdkUsRUFBQSxpQkFDakJNLEtBQUtrRSxjQUFZeEUsRUFBQSxpQkFHakJNLEtBQUtpRixPQUFBQSxHQUFBQSxRQUFrQnZGLEtBQUV5RSxVQUFBcUIsS0FBekJ4RixPQVFBQSxLQUFLc0YsWUFBWUcsR0FBRyxRQUFTekYsS0FBS3FFLFlBQVltQixLQUFLeEYsT0FHbkRBLEtBQUtzRSxNQUFNbUIsR0FBRyxRQUFTekYsS0FBSzBGLFVBQVVGLEtBQUt4RixPQUczQ0EsS0FBS3FGLFlBQVlJLEdBQUcsUUFBU3pGLEtBQUs0RSxVQUFVWSxLQUFLeEYsUUFIakROLEVBQUFXLElBQUErRSxNQUFBSSxLQUFjbkYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jcmVhdGUgJ2FkZFRlbXBvcmFyeUNsYXNzJyBmdW5jdGlvbiB0byBKcXVlcnkgYXMgYW4gSnF1ZXJ5IG1ldGhvZFxuKGZ1bmN0aW9uKCQpIHtcbiAgJC5mbi5leHRlbmQoe1xuICAgIGFkZFRlbXBvcmFyeUNsYXNzOiBmdW5jdGlvbihjbGFzc05hbWUsIGR1cmF0aW9uKSB7XG4gICAgICB2YXIgZWxlbWVudHMgPSB0aGlzO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZWxlbWVudHMucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59KShqUXVlcnkpO1xuXG4vL2NoZWNrIGZvciBvdGhlciB3YW8gb2JqZWN0cywgaWYgbm9uZSBkZWZpbmUgd2FvIGFzIGdsb2JhbCBvYmplY3RcbnZhciB3YW8gPSB3YW8gfHwge307XG5cbi8vR0FNRSBKUyBWQVJJQUJMRVNcbi8vIHRpbWVyIGNvbnN0YW50c1xud2FvLnRpbWVSZW1haW5pbmcgPSAyMDtcbndhby50aW1lcklkID0gbnVsbDtcbndhby5kZWxheSA9IDIwMDtcblxuLy8gZ2FtZSBsb2dpYyBjb25zdGFudHNcbndhby5nYW1lT24gPSBmYWxzZTtcblxuLy9nYW1lIHNjb3JlIGNvbnN0YW50c1xud2FvLnVzZXJTY29yZSA9IDA7XG53YW8uY2xpY2tTY29yZSA9IDA7XG53YW8ub3R0ZXJTY29yZSA9IDA7XG53YW8uYmVhdmVyU2NvcmUgPSAwO1xud2FvLmJsYW5rU2NvcmUgPSAwO1xuXG4vL2hpZ2ggc2NvcmUgY29uc3RhbnRzXG53YW8uaGlnaHNjb3JlID0gMDtcbndhby5oaWdoc2NvcmVGYXN0ZXN0Q2xpY2tUaW1lID0gMDtcbndhby5oaWdoc2NvcmVBdmVyYWdlQ2xpY2tUaW1lID0gMDtcblxuLy9jbGljayB0aW1lIGNvbnN0YW50c1xud2FvLnRpbWVTaG93QW5pbWFsID0gMDtcbndhby51c2VyQ2xpY2tBbmltYWwgPSAwO1xuLy8gbGV0IGNsaWNrVGltZSA9IDA7XG53YW8udXNlclRpbWVBcnJheSA9IFtdO1xud2FvLnVzZXJGYXN0ZXN0Q0xpY2sgPSAwO1xud2FvLnVzZXJBdmVyYWdlQ2xpY2tUaW1lID0gMDtcblxuLy9mdW5jdGlvbiB0byBmaW5kIGNsaWNrIHRpbWVcbndhby5maW5kQ2xpY2tUaW1lID0gZnVuY3Rpb24gZmluZENsaWNrVGltZSgpIHtcbiAgcmV0dXJuICgodGhpcy51c2VyQ2xpY2tBbmltYWwgLSB0aGlzLnRpbWVTaG93QW5pbWFsKSk7XG59O1xuLy9mdW5jdGlvbiB0byBmaW5kIHRoZSBwbGF5ZXJzIGZhc3RlcyBjbGljayB0aW1lXG53YW8uZmluZFVzZXJGYXN0ZXN0Q0xpY2sgPSBmdW5jdGlvbiBmaW5kVXNlckZhc3Rlc3RDTGljaygpIHtcbiAgdGhpcy51c2VyRmFzdGVzdENMaWNrID0gTWF0aC5taW4uYXBwbHkoTWF0aCwgdGhpcy51c2VyVGltZUFycmF5KTtcbiAgcmV0dXJuIHRoaXMudXNlckZhc3Rlc3RDTGljaztcbn07XG4vL2Z1bmN0aW9uIHRvIGZpbmQgdGhlIHBsYXllcnMgYXZlcmFnZSBjbGljayB0aW1lXG53YW8uZmluZFVzZXJBdmVyYWdlQ2xpY2tUaW1lID0gZnVuY3Rpb24gZmluZFVzZXJBdmVyYWdlQ2xpY2tUaW1lKCkge1xuICBjb25zdCBzdW0gPSB0aGlzLnVzZXJUaW1lQXJyYXkucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gYSArIGI7XG4gIH0sIDApO1xuICB0aGlzLnVzZXJBdmVyYWdlQ2xpY2tUaW1lID0gcGFyc2VJbnQoc3VtIC8gKHRoaXMudXNlclRpbWVBcnJheS5sZW5ndGgpKTtcbiAgcmV0dXJuIHRoaXMudXNlckF2ZXJhZ2VDbGlja1RpbWU7XG59O1xuLy8gcmVzZXQgZnVuY3Rpb25cbndhby5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAvL3VwZGF0ZSBmYXN0ZXN0IGNsaWNrIHRpbWUgYW5kIGZhc3Rlc3QgY2xpY2sgdGltZSBzY3JlZW5cbiAgaWYgKHRoaXMudXNlckZhc3Rlc3RDTGljayA8IHRoaXMuaGlnaHNjb3JlRmFzdGVzdENsaWNrVGltZSB8fCB0aGlzLmhpZ2hzY29yZUZhc3Rlc3RDbGlja1RpbWUgPT09IDApIHtcbiAgICB0aGlzLmhpZ2hzY29yZUZhc3Rlc3RDbGlja1RpbWUgPSB0aGlzLnVzZXJGYXN0ZXN0Q0xpY2s7XG4gICAgdGhpcy4kaGlnaGVzdHNjb3JlRmFzdGVzdENsaWNrU2NyZWVuLmh0bWwodGhpcy5oaWdoc2NvcmVGYXN0ZXN0Q2xpY2tUaW1lKTtcbiAgfVxuICAvL3VwZGF0ZSBmYXN0ZXN0IGF2ZXJhZ2UgY2xpY2sgdGltZSBhbmQgZmFzdGVzdCBhdmVyYWdlIGNsaWNrIHRpbWUgc2NyZWVuXG4gIGlmICh0aGlzLnVzZXJBdmVyYWdlQ2xpY2tUaW1lIDwgdGhpcy5oaWdoc2NvcmVBdmVyYWdlQ2xpY2tUaW1lIHx8IHRoaXMuaGlnaHNjb3JlQXZlcmFnZUNsaWNrVGltZSA9PT0gMCkge1xuICAgIHRoaXMuaGlnaHNjb3JlQXZlcmFnZUNsaWNrVGltZSA9IHRoaXMudXNlckF2ZXJhZ2VDbGlja1RpbWU7XG4gICAgdGhpcy4kaGlnaGVzdHNjb3JlYXZlcmFnZUNMaWNrU2NyZWVuLmh0bWwodGhpcy5oaWdoc2NvcmVBdmVyYWdlQ2xpY2tUaW1lKTtcbiAgfVxuICAvL3VwZGF0ZSBoaWdoc2NvcmUgYW5kIGhpZ2hzY29yZSBzY3JlZW5cbiAgaWYgKHRoaXMudXNlclNjb3JlID4gdGhpcy5oaWdoc2NvcmUpIHtcbiAgICB0aGlzLmhpZ2hzY29yZSA9IHRoaXMudXNlclNjb3JlO1xuICAgIHRoaXMuJGhpZ2hlc3RzY29yZVNjcmVlbi5odG1sKHRoaXMuaGlnaHNjb3JlKTtcbiAgfVxuICAvL3Jlc2V0IGFsbCBzY29yZXNcbiAgdGhpcy51c2VyU2NvcmUgPSAwO1xuICB0aGlzLmNsaWNrU2NvcmUgPSAwO1xuICB0aGlzLm90dGVyU2NvcmUgPSAwO1xuICB0aGlzLmJlYXZlclNjb3JlID0gMDtcbiAgdGhpcy5jbGlja1Njb3JlID0gMDtcbiAgLy9yZXNldCB1c2VyIGZhc3Rlc3QgYW5kIGF2ZXJhZ2UgY2xpY2sgdGltZVxuICB0aGlzLnVzZXJUaW1lQXJyYXkgPSBbXTtcbiAgdGhpcy51c2VyRmFzdGVzdENMaWNrID0gMDtcbiAgdGhpcy51c2VyQXZlcmFnZUNsaWNrVGltZSA9IDA7XG4gIC8vcmVzZXQgdGltZXIgYW5kIHVwZGF0ZSB0aW1lciBzY3JlZW5cbiAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xuICB0aGlzLnRpbWVSZW1haW5pbmcgPSAyMDtcbiAgLy9yZXN0IHNjb3JlYm9hcmQgYW5kIHBsYXllciBpbmZvcm1hdGlvbiBzY3JlZW5zIHRvIHplcm9cbiAgdGhpcy4kY2xpY2tTY29yZVNjcmVlbi5odG1sKDApO1xuICB0aGlzLiR1c2VyU2NvcmVTY3JlZW4uaHRtbCgwKTtcbiAgdGhpcy4kZmluYWxTY29yZS5odG1sKDApO1xuICB0aGlzLiRjbGlja1RpbWVEaWZmZXJlbmNlU2NyZWVuLmh0bWwoMCk7XG4gIHRoaXMuJGZhc3Rlc3RDbGlja1NjcmVlbi5odG1sKDApO1xuICB0aGlzLiRhdmVyYWdlQ0xpY2tTY3JlZW4uaHRtbCgwKTtcbiAgdGhpcy4kYXZnVGltZURpZmZlcmVuY2VTY3JlZW4uaHRtbCgwKTtcbiAgLy9jbGVhciBnYW1lIGJvYXJkXG4gIHRoaXMuJHNxdWFyZXMucmVtb3ZlQ2xhc3MoJ290dGVyIGJlYXZlcicpO1xuICAvL2NsZWFyIGJhZGdlcyBmcm9tIGJhZGdlIGFyZWFcbiAgdGhpcy4kYmFkZ2VzLnJlbW92ZUNsYXNzKCdiYWRnZTEgYmFkZ2UyIGJhZGdlMyBiYWRnZTQgYmFkZ2U1IGJhZGdlNiBiYWRnZTcgYmFkZ2U4Jyk7XG59O1xuXG4vL3NlbGVjdCByYW5kb20gc3F1YXJlXG53YW8uc2VsZWN0UmFuZG9tU3F1YXJlID0gZnVuY3Rpb24gc2VsZWN0UmFuZG9tU3F1YXJlKCkge1xuICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuJHNxdWFyZXMubGVuZ3RoKTtcbiAgcmV0dXJuIHRoaXMuJHNxdWFyZXMuZXEocmFuZG9tSW5kZXgpO1xufTtcblxuLy8gcmFuZG9taXNlIHdoaWNoIGFuaW1hbCB0byBjYWxsIChjdXJyZW5sdHkgb3R0ZXIgb3IgYmVhdmVyKSwgYnV0IHByZWZlciBiZWF2ZXJcbndhby5yYW5kb21BbmltYWwgPSBmdW5jdGlvbiByYW5kb21BbmltYWwoKSB7XG4gIHJldHVybiAoTWF0aC5yYW5kb20oKSAqICgxMDAgLSAxKSArIDEpIDwgMzAgPyAnb3R0ZXInIDogJ2JlYXZlcic7XG59O1xuXG4vL2FkZCBiZWF2ZXIvb3R0ZXIgY2xhc3MgdG8gcmFuZG9tIHNxdWFyZSwgdGhlbiBjYWxsIGZ1bmN0aW9uIGFnYWluIGF0IGFuIHJhbmRvbSBpbnRlcnZhbCAoYmV0d2VlbiAzIGFuZCAxIHNlY29uZClcbndhby5zaG93QW5pbWFscyA9IGZ1bmN0aW9uIHNob3dBbmltYWxzKCkge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvL2FwcGx5IHRlbXBvcmFyeSBjbGFzcyAodXNpbmcgbWV0aG9kIEkgZGVmaW5lZCkgdG8gcmFuZG9tIHNxdWFyZVxuICAgIHRoaXMuc2VsZWN0UmFuZG9tU3F1YXJlKCkuYWRkVGVtcG9yYXJ5Q2xhc3ModGhpcy5yYW5kb21BbmltYWwoKSwgMTAwMCk7XG4gICAgLy9zZXQgZGVsYXkgdG8gcmFuZG9tIHRpbWVcbiAgICB0aGlzLmRlbGF5ID0gTWF0aC5yYW5kb20oKSAqIDEwMDAgKiAoMi41IC0gMSkgKyAxO1xuICAgIC8vb25seSBzaG93IGFuaW1hbHMgaWYgZ2FtZSBoYXMgYmVlbiBzdGFydGVkIGFuZCBjb3VudGRvd24gdGltZXIgaGFzIG5vdCBydW4gb3V0XG4gICAgaWYgKHRoaXMuZ2FtZU9uID09PSB0cnVlKSB7XG4gICAgICAvL3JlY29yZCB0aW1lIHRoYXQgYW1pbmFsIGlzIHNob3duXG4gICAgICB0aGlzLnRpbWVTaG93QW5pbWFsID0gJC5ub3coKTtcbiAgICAgIHRoaXMuc2hvd0FuaW1hbHMoKTtcbiAgICB9XG4gIH0sIHRoaXMuZGVsYXkpO1xufTtcblxuLy8gY2hlY2sgYW5kIHNob3cgYmFkZ2VzIGlmIHBsYXllcidzIHNjb3JlcyBhcmUgaGlnaCBlbm91Z2hcbndhby5jaGVja0FuZFNob3dCYWRnZXMgPSBmdW5jdGlvbiBjaGVja0FuZFNob3dCYWRnZXMoKSB7XG4gIGlmICh0aGlzLmJlYXZlclNjb3JlID4gNCkge1xuICAgIHRoaXMuJGJhZGdlMS5hZGRDbGFzcygnYmFkZ2UxJyk7XG4gIH1cbiAgaWYgKHRoaXMuYmVhdmVyU2NvcmUgPiA5KSB7XG4gICAgdGhpcy4kYmFkZ2UyLmFkZENsYXNzKCdiYWRnZTInKTtcbiAgfVxuICBpZiAodGhpcy5iZWF2ZXJTY29yZSA+IDE0KSB7XG4gICAgdGhpcy4kYmFkZ2UzLmFkZENsYXNzKCdiYWRnZTMnKTtcbiAgfVxuICBpZiAodGhpcy5iZWF2ZXJTY29yZSA+IDE5KSB7XG4gICAgdGhpcy4kYmFkZ2U0LmFkZENsYXNzKCdiYWRnZTQnKTtcbiAgfVxuICBpZiAodGhpcy51c2VyU2NvcmUgPiB0aGlzLmhpZ2hzY29yZSkge1xuICAgIHRoaXMuJGJhZGdlNS5hZGRDbGFzcygnYmFkZ2U1Jyk7XG4gIH1cbiAgaWYgKHRoaXMuYmxhbmtTY29yZSA+IDkpIHtcbiAgICB0aGlzLiRiYWRnZTYuYWRkQ2xhc3MoJ2JhZGdlNicpO1xuICB9XG4gIGlmICh0aGlzLm90dGVyU2NvcmUgPiA0KSB7XG4gICAgdGhpcy4kYmFkZ2U3LmFkZENsYXNzKCdiYWRnZTcnKTtcbiAgfVxuICBpZiAodGhpcy5vdHRlclNjb3JlID4gOSkge1xuICAgIHRoaXMuJGJhZGdlOC5hZGRDbGFzcygnYmFkZ2U4Jyk7XG4gIH1cbn07XG5cbi8vR0FNRSBQTEFZIEZVTkNUSU9OU1xuLy9oaWRlIHRoZSBpbnRybyBwYWdlIGZ1bmN0aW9uXG53YW8uaGlkZUludHJvID0gZnVuY3Rpb24gaGlkZUludHJvKCkge1xuICB0aGlzLiRpbnRyb2R1Y3Rpb24uYWRkQ2xhc3MoJ2hpZGUnKTtcbn07XG4vL3JlbW92ZSB0aGUgcHVsc2UgZnVuY3Rpb25cbndhby5yZW1vdmVQdWxzZSA9IGZ1bmN0aW9uIHJlbW92ZVB1bHNlKCkge1xuICB0aGlzLiRwbGF5LnJlbW92ZUNsYXNzKCdwdWxzZScpO1xufTtcbi8vc3RhcnQgZ2FtZSBmdW5jdGlvblxud2FvLnN0YXJ0R2FtZSA9IGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgaWYgKHRoaXMuZ2FtZU9uID09PSBmYWxzZSkge1xuICAgIC8vcmVzZXQgZ2FtZVxuICAgIHRoaXMucmVzZXQoKTtcbiAgICAvL3N0b3JlIHRoYXQgZ2FtZSBoYXMgYmVlbiBzdGFydGVkXG4gICAgdGhpcy5nYW1lT24gPSB0cnVlO1xuICAgIC8vcnVuIGZ1bmN0aW9uIHRvIHNob3cgYmVhdmVycyBhbmQgb3R0ZXJzIGZvciB0aW1lIGludGVydmFsXG4gICAgdGhpcy5zaG93QW5pbWFscygpO1xuICAgIC8vc3RhcnQgdGltZXJcbiAgICB0aGlzLnRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLnRpbWVSZW1haW5pbmctLTtcbiAgICAgIHRoaXMuJHRpbWVyU2NyZWVuLmh0bWwodGhpcy50aW1lUmVtYWluaW5nKTtcbiAgICAgIC8vIHdoZW4gdGltZXIgcmVhY2hlcyB6ZXJvIHN0b3AgZ2FtZVxuICAgICAgaWYgKHRoaXMudGltZVJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICB0aGlzLiR0aW1lclNjcmVlbi5hZGRUZW1wb3JhcnlDbGFzcygncmluZ2luZycsIDIwMDApO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XG4gICAgICAgIHRoaXMuZ2FtZU9uID0gZmFsc2U7XG4gICAgICAgIC8vZmluZCBhbmQgc2hvdyB1c2VycyBmYXN0ZXN0IGNsaWNrIHRpbWVcbiAgICAgICAgdGhpcy4kZmFzdGVzdENsaWNrU2NyZWVuLnRleHQodGhpcy5maW5kVXNlckZhc3Rlc3RDTGljaygpKTtcbiAgICAgICAgLy9maW5kIGFuZCBzaG93IHVzZXJzIGF2ZXJhZ2UgY2xpY2sgdGltZVxuICAgICAgICB0aGlzLiRhdmVyYWdlQ0xpY2tTY3JlZW4udGV4dCh0aGlzLmZpbmRVc2VyQXZlcmFnZUNsaWNrVGltZSgpKTtcbiAgICAgICAgLy9maW5kIGFuZCBzaG93IGZpbmFsIHNjb3JlIHRvIHVzZXJcbiAgICAgICAgdGhpcy4kZmluYWxTY29yZS50ZXh0KHRoaXMudXNlclNjb3JlKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxufTtcbi8vZnVuY3Rpb24gd2hpY2ggZXhlY3V0ZXMgd2hlbiB1c2VyIGNsaWNrcyBvbiBiZWF2ZXIvb3R0ZXIvYmxhbmsgc3F1YXJlXG53YW8udXNlckNsaWNrID0gZnVuY3Rpb24gdXNlckNsaWNrKGUpIHtcbiAgdGhpcy51c2VyQ2xpY2tBbmltYWwgPSAkLm5vdygpO1xuICBpZiAodGhpcy5nYW1lT24pIHtcbiAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2JlYXZlcicpKSB7XG4gICAgICAvL3VwZGF0ZSBzY29yZXNcbiAgICAgIHRoaXMuY2xpY2tTY29yZSA9IDIwO1xuICAgICAgdGhpcy51c2VyU2NvcmUgKz0gMjA7XG4gICAgICB0aGlzLmJlYXZlclNjb3JlICs9IDE7XG4gICAgICAvL3Nob3cgYmFkZ2VzXG4gICAgICB0aGlzLmNoZWNrQW5kU2hvd0JhZGdlcygpO1xuICAgICAgLy9oaWRlIGFuaW1hbCBieSByZW1vdmluZyBjbGFzc1xuICAgICAgKCQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdiZWF2ZXInKSk7XG4gICAgICAvL21ha2Ugc291bmQgKG5vdCBpbmNsdWRlZCB5ZXQpXG4gICAgICB0aGlzLiRjbGlja09uQ29ycmVjdC5wbGF5KCk7XG4gICAgfSBlbHNlIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnb3R0ZXInKSkge1xuICAgICAgdGhpcy5jbGlja1Njb3JlID0gLTEwO1xuICAgICAgdGhpcy51c2VyU2NvcmUgLT0gMjA7XG4gICAgICB0aGlzLm90dGVyU2NvcmUgKz0gMTtcbiAgICAgIHRoaXMuY2hlY2tBbmRTaG93QmFkZ2VzKCk7XG4gICAgICAoJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ290dGVyJykpO1xuICAgICAgLy9tYWtlIHNvdW5kIChub3QgaW5jbHVkZWQgeWV0KVxuICAgICAgdGhpcy4kY2xpY2tPbldyb25nLnBsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGlja1Njb3JlID0gLTU7XG4gICAgICB0aGlzLnVzZXJTY29yZSAtPSA1O1xuICAgICAgdGhpcy5ibGFua1Njb3JlICs9IDE7XG4gICAgICAvL21ha2Ugc291bmQgKG5vdCBpbmNsdWRlZCB5ZXQpXG4gICAgICB0aGlzLiRjbGlja09uQmxhbmsucGxheSgpO1xuICAgIH1cbiAgICAvL3Nob3cgdXNlcnMgY3VycmVudCBzY29yZSwgcnVubmluZyB0b3RhbCBhbmQgY2xpY2sgdGltZVxuICAgIHRoaXMuJGNsaWNrU2NvcmVTY3JlZW4udGV4dCh0aGlzLmNsaWNrU2NvcmUpO1xuICAgIHRoaXMuJHVzZXJTY29yZVNjcmVlbi50ZXh0KHRoaXMudXNlclNjb3JlKTtcbiAgICAvL3N0b3JlIHVzZXJzIHRpbWUgZGlmZmVyZW5jZSBpbiBhcnJheVxuICAgIHRoaXMudXNlclRpbWVBcnJheS5wdXNoKHRoaXMuZmluZENsaWNrVGltZSgpKTtcbiAgICAvL3Nob3cgY2xpY2sgdGltZSB0byB1c2Vyc1xuICAgIHRoaXMuJGNsaWNrVGltZURpZmZlcmVuY2VTY3JlZW4udGV4dCh0aGlzLmZpbmRDbGlja1RpbWUoKSk7XG4gICAgLy9zaG93IGF2ZXJhZ2UgY2xpY2sgdGltZSB0byB1c2VyXG4gICAgdGhpcy4kYXZnVGltZURpZmZlcmVuY2VTY3JlZW4udGV4dCh0aGlzLmZpbmRVc2VyQXZlcmFnZUNsaWNrVGltZSgpKTtcbiAgfVxufTtcblxuXG4vL1NFVFVQIEZVTkNUSU9OXG53YW8uc2V0dXAgPSBmdW5jdGlvbigpIHtcbiAgLy9kZWZpbmUgZ2xvYmFsIHZhcmlhYmxlc1xuICB0aGlzLiRnYW1laG9sZGVyID0gJCgnLmdhbWVob2xkZXInKTtcbiAgdGhpcy4kc3F1YXJlcyA9ICQoJy5zcXVhcmUnKTtcbiAgdGhpcy4kcGxheSA9ICQoJyNwbGF5Jyk7XG4gIHRoaXMuJHJlYWR5ID0gJCgnI3JlYWR5Jyk7XG4gIHRoaXMuJHRpbWVyU2NyZWVuID0gJCgnI3RpbWVyU2NyZWVuJyk7XG4gIHRoaXMuJGludHJvZHVjdGlvbiA9ICQoJy5pbnRyb2R1Y3Rpb24nKTtcbiAgdGhpcy4kcGxheUJ1dHRvbiA9ICQoJyNwbGF5Jyk7XG5cbiAgLy9nbG9iYWwgdmFpYWJsZXMgZm9yIHVzZXIgc2NvcmVzXG4gIHRoaXMuJGNsaWNrU2NvcmVTY3JlZW4gPSAkKCcjY2xpY2tTY29yZVNjcmVlbicpO1xuICB0aGlzLiR1c2VyU2NvcmVTY3JlZW4gPSAkKCcjdXNlclNjb3JlU2NyZWVuJyk7XG4gIHRoaXMuJGZpbmFsU2NvcmUgPSAkKCcjZmluYWxTY29yZScpO1xuXG4gIC8vZ2xvYmFsIHZhaXJhYmxlcyBmb3IgdXNlciBjbGljayB0aW1lc1xuICB0aGlzLiRjbGlja1RpbWVEaWZmZXJlbmNlU2NyZWVuID0gJCgnI3RpbWVEaWZmZXJlbmNlU2NyZWVuJyk7XG4gIHRoaXMuJGZhc3Rlc3RDbGlja1NjcmVlbiA9ICQoJyNmYXN0ZXN0Q2xpY2tTY3JlZW4nKTtcbiAgdGhpcy4kYXZlcmFnZUNMaWNrU2NyZWVuID0gJCgnI2F2ZXJhZ2VDTGlja1NjcmVlbicpO1xuICB0aGlzLiRhdmdUaW1lRGlmZmVyZW5jZVNjcmVlbiA9ICQoJyNhdmdUaW1lRGlmZmVyZW5jZVNjcmVlbicpO1xuXG4gIC8vZ2xvYmFsIHZhcmlhYmxlcyBmb3IgdG9wc2NvcmVzXG4gIHRoaXMuJGhpZ2hlc3RzY29yZVNjcmVlbiA9ICQoJyNoaWdoc2NvcmVTY3JlZW4nKTtcbiAgdGhpcy4kaGlnaGVzdHNjb3JlRmFzdGVzdENsaWNrU2NyZWVuID0gJCgnI2hpZ2hzY29yZUZhc3Rlc3RDbGlja1NjcmVlbicpO1xuICB0aGlzLiRoaWdoZXN0c2NvcmVhdmVyYWdlQ0xpY2tTY3JlZW4gPSAkKCcjaGlnaHNjb3JlQXZlcmFnZUNMaWNrU2NyZWVuJyk7XG5cbiAgLy9nbG9iYWwgdmFyaWFibGVzIGZvciBiYWRnZXNcbiAgdGhpcy4kYmFkZ2VzID0gJCgnLmJhZGdlJyk7XG4gIHRoaXMuJGJhZGdlMSA9ICQoJyNiYWRnZTEnKTtcbiAgdGhpcy4kYmFkZ2UyID0gJCgnI2JhZGdlMicpO1xuICB0aGlzLiRiYWRnZTMgPSAkKCcjYmFkZ2UzJyk7XG4gIHRoaXMuJGJhZGdlNCA9ICQoJyNiYWRnZTQnKTtcbiAgdGhpcy4kYmFkZ2U1ID0gJCgnI2JhZGdlNScpO1xuICB0aGlzLiRiYWRnZTYgPSAkKCcjYmFkZ2U2Jyk7XG4gIHRoaXMuJGJhZGdlNyA9ICQoJyNiYWRnZTcnKTtcbiAgdGhpcy4kYmFkZ2U4ID0gJCgnI2JhZGdlOCcpO1xuXG4gIC8vYXVkaW9cbiAgdGhpcy4kY2xpY2tPbkNvcnJlY3QgPSAkKCcjY2xpY2tPbkNvcnJlY3QnKTtcbiAgdGhpcy4kY2xpY2tPbldyb25nID0gJCgnI2NsaWNrT25Xcm9uZycpO1xuICB0aGlzLiRjbGlja09uQmxhbmsgPSAkKCcjY2xpY2tPbkJsYW5rJyk7XG5cbiAgLy9zZXR1cCBpbnRyb2R1Y3Rpb24gc2NyZWVuIHNvIHRoYXQgaXQgd2lsbCBoaWRlIHdoZW4gcmVhZHkgYnV0dG9uIGlzIGNsaWNrZWRcbiAgdGhpcy4kcmVhZHkub24oJ2NsaWNrJywgdGhpcy5oaWRlSW50cm8uYmluZCh0aGlzKSk7XG5cbiAgLy9zZXR1cCBwdWxzZSBidXR0b24gc28gdGhhdCBpdCBzdG9wcyBwdWxzaW5nIHdoZW4gY2xpY2tlZFxuICB0aGlzLiRwbGF5QnV0dG9uLm9uKCdjbGljaycsIHRoaXMucmVtb3ZlUHVsc2UuYmluZCh0aGlzKSk7XG5cbiAgLy9zZXR1cCB0aGUgZ2FtZSBzbyB0aGF0IGl0IGNhbiBiZSBzdGFydGVkIHdoZW4gcGxheSBidXR0b24gaXMgY2xpY2tlZFxuICB0aGlzLiRwbGF5Lm9uKCdjbGljaycsIHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcykpO1xuXG4gIC8vc2V0IHVwIHRoZSBnYW1laG9sZGVyIHNvIHRoYXQgdXNlcnMgY2xpY2tzIHJlc3VsdCBpbiBzY29yZXNcbiAgdGhpcy4kZ2FtZWhvbGRlci5vbignY2xpY2snLCB0aGlzLnVzZXJDbGljay5iaW5kKHRoaXMpKTtcbn07XG4kKHdhby5zZXR1cC5iaW5kKHdhbykpO1xuIl19
