"use strict";$(function(){console.log("Ready.");var e=$(".gameholder"),t=($(".badgearea"),$(".square")),r=$(".button"),a=$("#timerScreen"),n=$("#clickScoreScreen"),o=$("#userScoreScreen"),c=($("#fastestClickSreen"),$("#highscoreScreen")),s=($("#highscoreAverageCLickScreen"),$(".highscoreFastestClickScreen"),20),i=null,l=200,u=!1,h=0,f=0,m=0,v=0,d=0,g=0;r.on("click",function(){!1!==u&&0!==s||(u=!0,h>g&&(g=h,c.html(g)),h=0,f=0,clearInterval(i),s=20,k(),i=setInterval(function(){s--,a.html(s),0===s&&(clearInterval(i),u=!1)},1e3))});var C=function(){var e=Math.floor(Math.random()*t.length);return t.eq(e)},S=function(){return 99*Math.random()+1<30?"otter":"beaver"},k=function e(){setTimeout(function(){C().addTemporaryClass(S(),1e3),l=1e3*Math.random()*2+1,e()},l)};e.on("click",function(e){!0===u&&($(e.target).hasClass("beaver")?(f=20,h+=20,v+=1,$(e.target).removeClass("beaver")):$(e.target).hasClass("otter")?(f=-10,h-=20,m+=1,$(e.target).removeClass("otter")):(f=-5,h-=5,d+=1),n.text(f),o.text(h))}),function(e){e.fn.extend({addTemporaryClass:function(t,r){var a=this;return setTimeout(function(){a.removeClass(t)},r),this.each(function(){e(this).addClass(t)})}})}(jQuery)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiY29uc29sZSIsImxvZyIsIiRnYW1laG9sZGVyIiwiJGJhZGdlYXJlYSIsIiR0aW1lclNjcmVlbiIsIiRjbGlja1Njb3JlU2NyZWVuIiwiJHVzZXJTY29yZVNjcmVlbiIsInRpbWVSZW1haW5pbmciLCJ0aW1lcklkIiwiZ2FtZU9uIiwidXNlclNjb3JlIiwiY2xpY2tTY29yZSIsIm90dGVyU2NvcmUiLCJoaWdoc2NvcmUiLCIkYnV0dG9uIiwib24iLCIkaGlnaHNjb3JlU2NyZWVuIiwiaHRtbCIsImNsZWFySW50ZXJ2YWwiLCJzaG93QW5pbWFscyIsInNldEludGVydmFsIiwicmFuZG9tSW5kZXgiLCJmbG9vciIsIk1hdGgiLCJyYW5kb20iLCIkc3F1YXJlcyIsImxlbmd0aCIsImVxIiwicmFuZG9tQW5pbWFsIiwic2V0VGltZW91dCIsInNlbGVjdFJhbmRvbVNxdWFyZSIsImRlbGF5IiwiYWRkVGVtcG9yYXJ5Q2xhc3MiLCJlIiwidGFyZ2V0IiwiaGFzQ2xhc3MiLCJiZWF2ZXJTY29yZSIsInJlbW92ZUNsYXNzIiwiYmxhbmtTY29yZSIsInRleHQiLCJmbiIsImV4dGVuZCIsImNsYXNzTmFtZSIsImR1cmF0aW9uIiwidGhpcyIsImVsZW1lbnRzIiwiYWRkQ2xhc3MiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiJZQUFBQSxHQUFFLFdBQ0FDLFFBQVFDLElBQUksU0FBWkQsSUFBQUEsR0FBQUQsRUFBQSxlQUVNRyxHQUROSCxFQUFBLGNBQ01HLEVBQWNILFlBQ2RJLEVBQUFBLEVBQWFKLFdBS2JLLEVBQWVMLEVBQUUsZ0JBRHZCTSxFQUFBTixFQUFBLHFCQUNNSyxFQUFpQkwsRUFBQSxvQkFFakJPLEdBRHNCUCxFQUFBLHNCQUNEQSxFQUFBLHFCQU92QlEsR0FOeUJSLEVBQUEsZ0NBQ0ZBLEVBQUEsZ0NBS1AsSUFEcEJTLEVBQUEsS0FDSUQsRUFBQUEsSUFLQUUsR0FBUyxFQUdUQyxFQUFZLEVBRGhCQyxFQUFBLEVBQ0lELEVBQUosRUFDSUMsRUFBSixFQUNJQyxFQUFhLEVBT2JDLEVBQVksQ0FPaEJDLEdBQVFDLEdBQUcsUUFBUyxZQUNILElBQVhOLEdBQXNDLElBQWxCRixJQUV0QkUsR0FBUyxFQUVMQyxFQUFZRyxJQUNkQSxFQUFZSCxFQUNaTSxFQUFpQkMsS0FBS0osSUFHeEJILEVBQVksRUFDWkMsRUFBYSxFQUViTyxjQUFjVixHQUNkRCxFQUFnQixHQUVoQlksSUFFQVgsRUFBVVksWUFBWSxXQUNwQmIsSUFDQUgsRUFBYWEsS0FBS1YsR0FDSSxJQUFsQkEsSUFDRlcsY0FBY1YsR0FDZEMsR0FBUyxJQUdWLE9BU0wsSUFBTVksR0FBbUJDLFdBQ3pCLEdBQUFELEdBQW1CQSxLQUFBQSxNQUFuQkUsS0FBQUMsU0FBQUMsRUFBQUMsT0FGRixPQUFBRCxHQUFBRSxHQUFBTixJQU9BTyxFQUFjSixXQUNmLE1BRkQsSUFBQUQsS0FBQUMsU0FBQSxFQUFBLEdBQUEsUUFBQSxVQU1JSyxFQUFXLFFBQVhBLEtBQ0VDLFdBQUFBLFdBQ0FDLElBQVFDLGtCQUFBSixJQUFSLEtBQ0FULEVBQUFBLElBQUFBLEtBQUFBLFNBQUFBLEVBQUFBLEVBSEZBLEtBREZZLEdBWUU3QixHQUFJTyxHQUFBQSxRQUFpQixTQUFBd0IsSUFDWEMsSUFBUnpCLElBQ0VFLEVBQUFBLEVBQUFBLFFBQWF3QixTQUFiLFdBQ0F6QixFQUFhLEdBQ2IwQixHQUFBQSxHQUNDckMsR0FBWXNDLEVBQ2J0QyxFQUFBa0MsRUFBQUMsUUFBQUcsWUFBQSxXQUVBMUIsRUFBQUEsRUFBYXVCLFFBQWJDLFNBQUEsVUFDQXpCLEdBQWEsR0FDYkUsR0FBQUEsR0FDQ2IsR0FBWXNDLEVBQ2J0QyxFQUFBa0MsRUFBQUMsUUFBQUcsWUFBQSxXQUdBM0IsR0FBQSxFQUNBNEIsR0FBQUEsRUFDQUEsR0FBQSxHQUdGaEMsRUFBaUJpQyxLQUFLN0IsR0FDdkJKLEVBQUFpQyxLQUFBN0IsTUFJSCxTQUFVWCxHQUVSQSxFQUFFeUMsR0FBR0MsUUFHRFQsa0JBQWUsU0FBZlUsRUFBQUMsR0FDQWQsR0FBQUEsR0FBV2UsSUFLVDdDLE9BSkE4QyxZQUFTUixXQURYUSxFQUFBUixZQUFBSyxJQUVHQyxHQUdDQyxLQUFNRSxLQUFBQSxXQURWL0MsRUFBQTZDLE1BQUFFLFNBQUFKLFNBTUhLIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoKCkgPT4ge1xuICBjb25zb2xlLmxvZygnUmVhZHkuJyk7XG4gIC8vZGVmaW5lIGdsb2JhbCB2YXJpYWJsZXNcbiAgY29uc3QgJGdhbWVob2xkZXIgPSAkKCcuZ2FtZWhvbGRlcicpO1xuICBjb25zdCAkYmFkZ2VhcmVhID0gJCgnLmJhZGdlYXJlYScpO1xuICBjb25zdCAkc3F1YXJlcyA9ICQoJy5zcXVhcmUnKTtcbiAgY29uc3QgJGJ1dHRvbiA9ICQoJy5idXR0b24nKTtcblxuICAvL2dsb2JhbCB2YWlhYmxlcyBmb3IgdXNlciBmZWVkYmFja1xuICBjb25zdCAkdGltZXJTY3JlZW4gPSAkKCcjdGltZXJTY3JlZW4nKTtcbiAgY29uc3QgJGNsaWNrU2NvcmVTY3JlZW4gPSAkKCcjY2xpY2tTY29yZVNjcmVlbicpO1xuICBjb25zdCAkdXNlclNjb3JlU2NyZWVuID0gJCgnI3VzZXJTY29yZVNjcmVlbicpO1xuICBjb25zdCAkZmFzdGVzdENsaWNrU3JlZW4gPSAkKCcjZmFzdGVzdENsaWNrU3JlZW4nKTtcbiAgY29uc3QgJGhpZ2hzY29yZVNjcmVlbiA9ICQoJyNoaWdoc2NvcmVTY3JlZW4nKTtcbiAgY29uc3QgJGF2ZXJhZ2VDTGlja1NjcmVlbiA9ICQoJyNoaWdoc2NvcmVBdmVyYWdlQ0xpY2tTY3JlZW4nKTtcbiAgY29uc3QgJGhpZ2hzY29yZUZhc3Rlc3RDbGlja1NjcmVlbiA9ICQoJy5oaWdoc2NvcmVGYXN0ZXN0Q2xpY2tTY3JlZW4nKTtcblxuICAvLyB0aW1lciBjb25zdGFudHNcbiAgbGV0IHRpbWVSZW1haW5pbmcgPSAyMDtcbiAgbGV0IHRpbWVySWQgPSBudWxsO1xuICBsZXQgZGVsYXkgPSAyMDA7XG5cbiAgLy8gZ2FtZSBsb2dpYyBjb25zdGFudHNcbiAgbGV0IGdhbWVPbiA9IGZhbHNlO1xuXG4gIC8vZ2FtZSBjb25zdGFudHNcbiAgbGV0IHVzZXJTY29yZSA9IDA7XG4gIGxldCBjbGlja1Njb3JlID0gMDtcbiAgbGV0IG90dGVyU2NvcmUgPSAwO1xuICBsZXQgYmVhdmVyU2NvcmUgPSAwO1xuICBsZXQgYmxhbmtTY29yZSA9IDA7XG4gIGxldCB1c2VyRmFzdGVzdENsaWNrVGltZSA9IDA7XG4gIGxldCB1c2VyQXZlcmFnZUNsaWNrVGltZSA9IDA7XG5cbiAgLy9oaWdoIHNjb3JlIGNvbnN0YW50c1xuICBsZXQgaGlnaHNjb3JlID0gMDtcbiAgbGV0IGhpZ2hzY29yZUZhc3Rlc3RDbGlja1RpbWUgPSAwO1xuICBsZXQgaGlnaHNjb3JlQXZlcmFnZUNsaWNrVGltZSA9IDA7XG5cblxuXG4gIC8vc3RhcnQgZ2FtZSB3aGVuICdzdGFydCBidXR0b24nIGlzIHB1c2hlZCwgb25seSBpZiBnYW1lIG5vdCBzdGFydGVkXG4gICRidXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKGdhbWVPbiA9PT0gZmFsc2UgfHwgdGltZVJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgLy9zdG9yZSB0aGF0IGdhbWUgaGFzIGJlZW4gc3RhcnRlZFxuICAgICAgZ2FtZU9uID0gdHJ1ZTtcbiAgICAgIC8vdXBkYXRlIGhpZ2hzY29yZSBhbmQgaGlnaHNjb3JlIHNjcmVlblxuICAgICAgaWYgKHVzZXJTY29yZSA+IGhpZ2hzY29yZSkge1xuICAgICAgICBoaWdoc2NvcmUgPSB1c2VyU2NvcmU7XG4gICAgICAgICRoaWdoc2NvcmVTY3JlZW4uaHRtbChoaWdoc2NvcmUpO1xuICAgICAgfVxuICAgICAgLy9yZXNldCBzY29yZSBhbmQgY2xpY2sgc2NvcmVcbiAgICAgIHVzZXJTY29yZSA9IDA7XG4gICAgICBjbGlja1Njb3JlID0gMDtcbiAgICAgIC8vcmVzdCB0aW1lciBhbmQgdXBkYXRlIHRpbWVyIHNjcmVlblxuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcbiAgICAgIHRpbWVSZW1haW5pbmcgPSAyMDtcbiAgICAgIC8vcnVuIGZ1bmN0aW9uIHRvIHNob3cgYmVhdmVycyBhbmQgb3R0ZXJzIGZvciB0aW1lIGludGVydmFsXG4gICAgICBzaG93QW5pbWFscygpO1xuICAgICAgLy9zdGFydCB0aW1lclxuICAgICAgdGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGltZVJlbWFpbmluZy0tO1xuICAgICAgICAkdGltZXJTY3JlZW4uaHRtbCh0aW1lUmVtYWluaW5nKTtcbiAgICAgICAgaWYgKHRpbWVSZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xuICAgICAgICAgIGdhbWVPbiA9IGZhbHNlO1xuICAgICAgICAgIC8vZW1wdHkgYm9hcmRcbiAgICAgICAgfVxuICAgICAgfSwgMTAwMCk7XG5cbiAgICB9XG4gIH0pO1xuXG4gIC8vcmVzZXQgZnVuY3Rpb25cblxuICAvL3NlbGVjdCByYW5kb20gc3F1YXJlXG4gIGNvbnN0IHNlbGVjdFJhbmRvbVNxdWFyZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogJHNxdWFyZXMubGVuZ3RoKTtcbiAgICByZXR1cm4gJHNxdWFyZXMuZXEocmFuZG9tSW5kZXgpO1xuICB9O1xuXG4vLyByYW5kb21pc2Ugd2hpY2ggYW5pbWFsIHRvIGNhbGwgKGN1cnJlbmx0eSBvdHRlciBvciBiZWF2ZXIpXG5jb25zdCByYW5kb21BbmltYWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICggTWF0aC5yYW5kb20oKSAqICgxMDAtMSkrMSApIDwgMzAgPyAnb3R0ZXInIDogJ2JlYXZlcic7XG59O1xuXG4gIC8vYWRkIGJlYXZlci9vdHRlciBjbGFzcyB0byByYW5kb20gc3F1YXJlLCB0aGVuIGNhbGwgZnVuY3Rpb24gYWdhaW4gYXQgYW4gcmFuZG9tIGludGVydmFsIChiZXR3ZWVuIDMgYW5kIDEgc2Vjb25kKVxuICBjb25zdCBzaG93QW5pbWFscyA9IGZ1bmN0aW9uKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2VsZWN0UmFuZG9tU3F1YXJlKCkuYWRkVGVtcG9yYXJ5Q2xhc3MocmFuZG9tQW5pbWFsKCksIDEwMDApO1xuICAgICAgZGVsYXkgPSBNYXRoLnJhbmRvbSgpICogMTAwMCAqICgzIC0gMSkgKyAxO1xuICAgICAgc2hvd0FuaW1hbHMoKTtcbiAgICB9LCBkZWxheSk7XG4gIH07XG5cbiAgLy9mdW5jdGlvbiB0byBzaG93IG90dGVyc1xuXG4gIC8vZ2FtZSBsb2dpYyBmb3IgdXNlciBjbGlja2luZyBvbiBiZWF2ZXJzL290dGVycy9lbXB0eSBzcXVhcmVcbiAgJGdhbWVob2xkZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChnYW1lT24gPT09IHRydWUpIHtcbiAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnYmVhdmVyJykpIHtcbiAgICAgICAgY2xpY2tTY29yZSA9IDIwO1xuICAgICAgICB1c2VyU2NvcmUgKz0gMjA7XG4gICAgICAgIGJlYXZlclNjb3JlICs9IDE7XG4gICAgICAgICgkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnYmVhdmVyJykpO1xuICAgICAgICAvL21ha2Ugc291bmRcbiAgICAgIH0gZWxzZSBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ290dGVyJykpIHtcbiAgICAgICAgY2xpY2tTY29yZSA9IC0xMDtcbiAgICAgICAgdXNlclNjb3JlIC09IDIwO1xuICAgICAgICBvdHRlclNjb3JlICs9IDE7XG4gICAgICAgICgkKGUudGFyZ2V0KS5yZW1vdmVDbGFzcygnb3R0ZXInKSk7XG4gICAgICAgIC8vbWFrZSBzb3VuZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xpY2tTY29yZSA9IC01O1xuICAgICAgICB1c2VyU2NvcmUgLT0gNTtcbiAgICAgICAgYmxhbmtTY29yZSArPSAxO1xuICAgICAgICAvL21ha2Ugc291bmRcbiAgICAgIH1cbiAgICAgICRjbGlja1Njb3JlU2NyZWVuLnRleHQoY2xpY2tTY29yZSk7XG4gICAgICAkdXNlclNjb3JlU2NyZWVuLnRleHQodXNlclNjb3JlKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vY3JlYXRlICdhZGRUZW1wb3JhcnlDbGFzcycgZnVuY3Rpb25cbiAgKGZ1bmN0aW9uKCQpIHtcblxuICAgICQuZm4uZXh0ZW5kKHtcblxuICAgICAgYWRkVGVtcG9yYXJ5Q2xhc3M6IGZ1bmN0aW9uKGNsYXNzTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBlbGVtZW50cy5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH0pKGpRdWVyeSk7XG5cbn0pO1xuIl19
