"use strict";$(function(){console.log("Ready.");var e=$(".gameholder"),a=$(".square"),r=$(".button"),t=$("#timerScreen"),s=$("#clickScoreScreen"),n=$("#userScoreScreen"),l=($("#fastestClickSreen"),$("#highscoreScreen")),o=($("#highscoreAverageCLickScreen"),$(".highscoreFastestClickScreen"),$("#badge1")),c=$("#badge2"),d=$("#badge3"),i=$("#badge4"),u=$("#badge5"),v=$("#badge6"),h=$("#badge7"),C=$("#badge8"),g=20,f=null,m=200,b=!1,S=0,k=0,y=0,M=0,T=0,x=0,I=function(){S>x&&(x=S,l.html(x)),S=0,k=0,clearInterval(f),g=20,a.removeClass("otter beaver")};r.on("click",function(){!1!==b&&0!==g||(I(),b=!0,j(),f=setInterval(function(){g--,t.html(g),0===g&&(clearInterval(f),b=!1)},1e3))});var p=function(){var e=Math.floor(Math.random()*a.length);return a.eq(e)},q=function(){return 99*Math.random()+1<30?"otter":"beaver"},j=function e(){setTimeout(function(){p().addTemporaryClass(q(),1e3),m=1e3*Math.random()*2+1,!0===b&&e()},m)},A=function(){S>100&&o.addClass("reveal"),S>200&&c.addClass("reveal"),S>300&&d.addClass("reveal"),M>10&&i.addClass("reveal"),M>20&&u.addClass("reveal"),y>5&&v.addClass("reveal"),y>10&&h.addClass("reveal"),S>x&&C.addClass("reveal")};e.on("click",function(e){!0===b&&($(e.target).hasClass("beaver")?(k=20,S+=20,M+=1,A(),$(e.target).removeClass("beaver")):$(e.target).hasClass("otter")?(k=-10,S-=20,y+=1,A(),$(e.target).removeClass("otter")):(k=-5,S-=5,T+=1),s.text(k),n.text(S))}),function(e){e.fn.extend({addTemporaryClass:function(a,r){var t=this;return setTimeout(function(){t.removeClass(a)},r),this.each(function(){e(this).addClass(a)})}})}(jQuery)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiY29uc29sZSIsImxvZyIsIiRzcXVhcmVzIiwiJGdhbWVob2xkZXIiLCIkdGltZXJTY3JlZW4iLCIkY2xpY2tTY29yZVNjcmVlbiIsIiR1c2VyU2NvcmVTY3JlZW4iLCIkYmFkZ2UxIiwiJGJhZGdlMiIsIiRiYWRnZTMiLCIkYmFkZ2U0IiwiJGJhZGdlNSIsIiRiYWRnZTYiLCJ0aW1lUmVtYWluaW5nIiwidGltZXJJZCIsImdhbWVPbiIsInVzZXJTY29yZSIsImNsaWNrU2NvcmUiLCJvdHRlclNjb3JlIiwiaGlnaHNjb3JlIiwicmVzZXQiLCIkaGlnaHNjb3JlU2NyZWVuIiwiJGJ1dHRvbiIsIm9uIiwic2hvd0FuaW1hbHMiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZWxlY3RSYW5kb21TcXVhcmUiLCJmbG9vciIsIk1hdGgiLCJsZW5ndGgiLCJyYW5kb21JbmRleCIsInJhbmRvbUFuaW1hbCIsInNldFRpbWVvdXQiLCJhZGRUZW1wb3JhcnlDbGFzcyIsInJhbmRvbSIsImRlbGF5IiwiY2hlY2tBbmRTaG93QmFkZ2VzIiwiYmVhdmVyU2NvcmUiLCIkYmFkZ2U3IiwiJGJhZGdlOCIsImUiLCJoYXNDbGFzcyIsInRhcmdldCIsInJlbW92ZUNsYXNzIiwidGV4dCIsImZuIiwiZXh0ZW5kIiwiY2xhc3NOYW1lIiwiZHVyYXRpb24iLCJlbGVtZW50cyIsImVhY2giLCJ0aGlzIiwiYWRkQ2xhc3MiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiJZQUFBQSxHQUFFLFdBQ0FDLFFBQVFDLElBQUksU0FBWkQsSUFBQUEsR0FBQUQsRUFBQSxlQUNBRyxFQUFBSCxFQUFBLFdBQ01JLEVBQUFBLEVBQWNKLFdBS2RLLEVBQWVMLEVBQUUsZ0JBRHZCTSxFQUFBTixFQUFBLHFCQUNNSyxFQUFpQkwsRUFBQSxvQkFFakJPLEdBRHNCUCxFQUFBLHNCQUNEQSxFQUFBLHFCQU9yQlEsR0FOdUJSLEVBQUEsZ0NBQ0ZBLEVBQUEsZ0NBS1hBLEVBQUUsWUFEbEJTLEVBQUFULEVBQUEsV0FDTVEsRUFBWVIsRUFBQSxXQUNaUyxFQUFZVCxFQUFBLFdBQ1pVLEVBQVlWLEVBQUEsV0FDWlcsRUFBWVgsRUFBQSxXQUNaWSxFQUFZWixFQUFBLFdBQ1phLEVBQVliLEVBQUEsV0FLZGMsRUFBZ0IsR0FEcEJDLEVBQUEsS0FDSUQsRUFBQUEsSUFLQUUsR0FBUyxFQUdUQyxFQUFZLEVBRGhCQyxFQUFBLEVBQ0lELEVBQUosRUFDSUMsRUFBSixFQUNJQyxFQUFhLEVBT2JDLEVBQVksRUFLVkMsRUFBUSxXQUFSQSxFQUFRRCxJQUNaQSxFQUFBSCxFQUNBSyxFQUFnQkYsS0FBQUEsSUFHZkgsRUFBQSxFQUNEQyxFQUFBLEVBRUFBLGNBQUFILEdBQ0FELEVBQUEsR0FFQUEsRUFBQUEsWUFBQSxnQkFNRlMsR0FBUUMsR0FBRyxRQUFTLFlBRHBCLElBQUFSLEdBQUEsSUFBQUYsSUFFRU8sSUFFRUEsR0FBQUEsRUFFQUwsSUFFQVMsRUFBQUEsWUFBQUEsV0FDQVgsSUFDQUMsRUFBVVcsS0FBQUEsR0FFVVosSUFBbEJULElBQ0FzQixjQUFBWixHQUNBQyxHQUFJRixJQUVGRSxPQU9SLElBQUFZLEdBQUEsV0FDQSxHQUFNQSxHQUFBQSxLQUFxQkMsTUFBQUMsS0FBckJGLFNBQUFBLEVBQWdDRyxPQUNwQyxPQUFNQyxHQUFBQSxHQUFjRixJQUl0QkcsRUFBQSxXQUNBLE1BQU1BLElBQUFBLEtBQUFBLFNBQUFBLEVBQTBCLEdBQUEsUUFBQSxVQUloQ1IsRUFBQSxRQUFBQSxLQUNBUyxXQUFNVCxXQUNKUyxJQUFpQkMsa0JBQUFGLElBQUEsS0FDZkwsRUFBcUJPLElBQXJCUCxLQUFBQSxTQUFBQSxFQUF1Q0ssR0FDMUJHLElBQWJDLEdBQ0FaLEtBRUNZLElBSUxDLEVBQUEsV0FDTUEsRUFBQUEsS0FDSjlCLEVBQUlTLFNBQUosVUFFQ0EsRUFBQSxLQUNEUixFQUFJUSxTQUFKLFVBRUNBLEVBQUEsS0FDRFAsRUFBSU8sU0FBSixVQUVDc0IsRUFBQSxJQUNENUIsRUFBSTRCLFNBQWMsVUFFakJBLEVBQUEsSUFDRDNCLEVBQUkyQixTQUFjLFVBRWpCcEIsRUFBQSxHQUNETixFQUFJTSxTQUFKLFVBRUNBLEVBQUEsSUFDRHFCLEVBQUlyQixTQUFKLFVBRUNGLEVBQUFHLEdBQ0RxQixFQUFJeEIsU0FBWUcsVUFLbEJoQixHQUFBb0IsR0FBQSxRQUFBLFNBQUFrQixJQUNlLElBQWZ0QyxJQUNNWSxFQUFBQSxFQUFBQSxRQUFXMkIsU0FBTSxXQUVqQnpCLEVBQUEsR0FDQUEsR0FBYSxHQUNiRCxHQUFBLEVBRUFxQixJQUVBdEMsRUFBQTBDLEVBQUFFLFFBQUFDLFlBQUEsV0FFQTdDLEVBQUEwQyxFQUFBRSxRQUFBRCxTQUFBLFVBVEZ6QixHQVVlMEIsR0FDYjFCLEdBQWEsR0FDYkQsR0FBYSxFQUNiRSxJQUNBbUIsRUFBQUEsRUFBQUEsUUFBQUEsWUFBQUEsV0FKS3BCLEdBT0EsRUFDTEEsR0FBYSxFQUNiRCxHQUFBLEdBR0RYLEVBQUF3QyxLQUFBNUIsR0FDRFosRUFBQUEsS0FBQVcsTUFLSixTQUFBakIsR0FDQ0EsRUFBQStDLEdBQUFDLFFBQ0dELGtCQUFVLFNBQUFFLEVBQUFDLEdBQ1ZmLEdBQUFBLEdBQUFBLElBSUcsT0FIREQsWUFBSWlCLFdBQ0pqQixFQUFXVyxZQUFXSSxJQUNwQkUsR0FDQ0QsS0FGSEUsS0FBQSxXQUdBcEQsRUFBQXFELE1BQU9DLFNBQVVMLFNBTnJCTSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ1JlYWR5LicpO1xuICAvL2RlZmluZSBnbG9iYWwgdmFyaWFibGVzXG4gIGNvbnN0ICRnYW1laG9sZGVyID0gJCgnLmdhbWVob2xkZXInKTtcbiAgY29uc3QgJHNxdWFyZXMgPSAkKCcuc3F1YXJlJyk7XG4gIGNvbnN0ICRidXR0b24gPSAkKCcuYnV0dG9uJyk7XG5cbiAgLy9nbG9iYWwgdmFpYWJsZXMgZm9yIHVzZXIgZmVlZGJhY2tcbiAgY29uc3QgJHRpbWVyU2NyZWVuID0gJCgnI3RpbWVyU2NyZWVuJyk7XG4gIGNvbnN0ICRjbGlja1Njb3JlU2NyZWVuID0gJCgnI2NsaWNrU2NvcmVTY3JlZW4nKTtcbiAgY29uc3QgJHVzZXJTY29yZVNjcmVlbiA9ICQoJyN1c2VyU2NvcmVTY3JlZW4nKTtcbiAgY29uc3QgJGZhc3Rlc3RDbGlja1NyZWVuID0gJCgnI2Zhc3Rlc3RDbGlja1NyZWVuJyk7XG4gIGNvbnN0ICRoaWdoc2NvcmVTY3JlZW4gPSAkKCcjaGlnaHNjb3JlU2NyZWVuJyk7XG4gIGNvbnN0ICRhdmVyYWdlQ0xpY2tTY3JlZW4gPSAkKCcjaGlnaHNjb3JlQXZlcmFnZUNMaWNrU2NyZWVuJyk7XG4gIGNvbnN0ICRoaWdoc2NvcmVGYXN0ZXN0Q2xpY2tTY3JlZW4gPSAkKCcuaGlnaHNjb3JlRmFzdGVzdENsaWNrU2NyZWVuJyk7XG5cbiAgLy9nbG9iYWwgdmFyaWFibGVzIGZvciBiYWRnZXNcbiAgY29uc3QgJGJhZGdlMSA9ICQoJyNiYWRnZTEnKTtcbiAgY29uc3QgJGJhZGdlMiA9ICQoJyNiYWRnZTInKTtcbiAgY29uc3QgJGJhZGdlMyA9ICQoJyNiYWRnZTMnKTtcbiAgY29uc3QgJGJhZGdlNCA9ICQoJyNiYWRnZTQnKTtcbiAgY29uc3QgJGJhZGdlNSA9ICQoJyNiYWRnZTUnKTtcbiAgY29uc3QgJGJhZGdlNiA9ICQoJyNiYWRnZTYnKTtcbiAgY29uc3QgJGJhZGdlNyA9ICQoJyNiYWRnZTcnKTtcbiAgY29uc3QgJGJhZGdlOCA9ICQoJyNiYWRnZTgnKTtcblxuICAvLyB0aW1lciBjb25zdGFudHNcbiAgbGV0IHRpbWVSZW1haW5pbmcgPSAyMDtcbiAgbGV0IHRpbWVySWQgPSBudWxsO1xuICBsZXQgZGVsYXkgPSAyMDA7XG5cbiAgLy8gZ2FtZSBsb2dpYyBjb25zdGFudHNcbiAgbGV0IGdhbWVPbiA9IGZhbHNlO1xuXG4gIC8vZ2FtZSBjb25zdGFudHNcbiAgbGV0IHVzZXJTY29yZSA9IDA7XG4gIGxldCBjbGlja1Njb3JlID0gMDtcbiAgbGV0IG90dGVyU2NvcmUgPSAwO1xuICBsZXQgYmVhdmVyU2NvcmUgPSAwO1xuICBsZXQgYmxhbmtTY29yZSA9IDA7XG4gIGxldCB1c2VyRmFzdGVzdENsaWNrVGltZSA9IDA7XG4gIGxldCB1c2VyQXZlcmFnZUNsaWNrVGltZSA9IDA7XG5cbiAgLy9oaWdoIHNjb3JlIGNvbnN0YW50c1xuICBsZXQgaGlnaHNjb3JlID0gMDtcbiAgbGV0IGhpZ2hzY29yZUZhc3Rlc3RDbGlja1RpbWUgPSAwO1xuICBsZXQgaGlnaHNjb3JlQXZlcmFnZUNsaWNrVGltZSA9IDA7XG5cbiAgLy8gcmVzZXQgZnVuY3Rpb25cbiAgY29uc3QgcmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAvL3VwZGF0ZSBoaWdoc2NvcmUgYW5kIGhpZ2hzY29yZSBzY3JlZW5cbiAgICBpZiAodXNlclNjb3JlID4gaGlnaHNjb3JlKSB7XG4gICAgICBoaWdoc2NvcmUgPSB1c2VyU2NvcmU7XG4gICAgICAkaGlnaHNjb3JlU2NyZWVuLmh0bWwoaGlnaHNjb3JlKTtcbiAgICB9XG4gICAgLy9yZXNldCBzY29yZSBhbmQgY2xpY2sgc2NvcmVcbiAgICB1c2VyU2NvcmUgPSAwO1xuICAgIGNsaWNrU2NvcmUgPSAwO1xuICAgIC8vcmVzdCB0aW1lciBhbmQgdXBkYXRlIHRpbWVyIHNjcmVlblxuICAgIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XG4gICAgdGltZVJlbWFpbmluZyA9IDIwO1xuICAgIC8vaW5zZXJ0IGNsZWFyIGJvYXJkXG4gICAgJHNxdWFyZXMucmVtb3ZlQ2xhc3MoJ290dGVyIGJlYXZlcicpO1xuICB9O1xuXG4gIC8vc3RhcnQgZ2FtZSB3aGVuICdzdGFydCBidXR0b24nIGlzIHB1c2hlZCwgb25seSBpZiBnYW1lIG5vdCBzdGFydGVkXG4gICRidXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKGdhbWVPbiA9PT0gZmFsc2UgfHwgdGltZVJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgLy9yZXNldCBnYW1lXG4gICAgICByZXNldCgpO1xuICAgICAgLy9zdG9yZSB0aGF0IGdhbWUgaGFzIGJlZW4gc3RhcnRlZFxuICAgICAgZ2FtZU9uID0gdHJ1ZTtcbiAgICAgIC8vcnVuIGZ1bmN0aW9uIHRvIHNob3cgYmVhdmVycyBhbmQgb3R0ZXJzIGZvciB0aW1lIGludGVydmFsXG4gICAgICBzaG93QW5pbWFscygpO1xuICAgICAgLy9zdGFydCB0aW1lclxuICAgICAgdGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGltZVJlbWFpbmluZy0tO1xuICAgICAgICAkdGltZXJTY3JlZW4uaHRtbCh0aW1lUmVtYWluaW5nKTtcbiAgICAgICAgLy8gd2hlbiB0aW1lciByZWFjaGVzIHplcm8gc3RvcCBnYW1lXG4gICAgICAgIGlmICh0aW1lUmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcbiAgICAgICAgICBnYW1lT24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9KTtcblxuXG4gIC8vc2VsZWN0IHJhbmRvbSBzcXVhcmVcbiAgY29uc3Qgc2VsZWN0UmFuZG9tU3F1YXJlID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAkc3F1YXJlcy5sZW5ndGgpO1xuICAgIHJldHVybiAkc3F1YXJlcy5lcShyYW5kb21JbmRleCk7XG4gIH07XG5cbiAgLy8gcmFuZG9taXNlIHdoaWNoIGFuaW1hbCB0byBjYWxsIChjdXJyZW5sdHkgb3R0ZXIgb3IgYmVhdmVyKVxuICBjb25zdCByYW5kb21BbmltYWwgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKE1hdGgucmFuZG9tKCkgKiAoMTAwIC0gMSkgKyAxKSA8IDMwID8gJ290dGVyJyA6ICdiZWF2ZXInO1xuICB9O1xuXG4gIC8vYWRkIGJlYXZlci9vdHRlciBjbGFzcyB0byByYW5kb20gc3F1YXJlLCB0aGVuIGNhbGwgZnVuY3Rpb24gYWdhaW4gYXQgYW4gcmFuZG9tIGludGVydmFsIChiZXR3ZWVuIDMgYW5kIDEgc2Vjb25kKVxuICBjb25zdCBzaG93QW5pbWFscyA9IGZ1bmN0aW9uKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2VsZWN0UmFuZG9tU3F1YXJlKCkuYWRkVGVtcG9yYXJ5Q2xhc3MocmFuZG9tQW5pbWFsKCksIDEwMDApO1xuICAgICAgZGVsYXkgPSBNYXRoLnJhbmRvbSgpICogMTAwMCAqICgzIC0gMSkgKyAxO1xuICAgICAgaWYgKGdhbWVPbiA9PT0gdHJ1ZSkge1xuICAgICAgICBzaG93QW5pbWFscygpO1xuICAgICAgfVxuICAgIH0sIGRlbGF5KTtcbiAgfTtcblxuICAvLyBjaGVjayBhbmQgc2hvdyBiYWRnZXNcbiAgY29uc3QgY2hlY2tBbmRTaG93QmFkZ2VzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHVzZXJTY29yZSA+IDEwMCkge1xuICAgICAgJGJhZGdlMS5hZGRDbGFzcygncmV2ZWFsJyk7XG4gICAgfVxuICAgIGlmICh1c2VyU2NvcmUgPiAyMDApIHtcbiAgICAgICRiYWRnZTIuYWRkQ2xhc3MoJ3JldmVhbCcpO1xuICAgIH1cbiAgICBpZiAodXNlclNjb3JlID4gMzAwKSB7XG4gICAgICAkYmFkZ2UzLmFkZENsYXNzKCdyZXZlYWwnKTtcbiAgICB9XG4gICAgaWYgKGJlYXZlclNjb3JlID4gMTApIHtcbiAgICAgICRiYWRnZTQuYWRkQ2xhc3MoJ3JldmVhbCcpO1xuICAgIH1cbiAgICBpZiAoYmVhdmVyU2NvcmUgPiAyMCkge1xuICAgICAgJGJhZGdlNS5hZGRDbGFzcygncmV2ZWFsJyk7XG4gICAgfVxuICAgIGlmIChvdHRlclNjb3JlID4gNSkge1xuICAgICAgJGJhZGdlNi5hZGRDbGFzcygncmV2ZWFsJyk7XG4gICAgfVxuICAgIGlmIChvdHRlclNjb3JlID4gMTApIHtcbiAgICAgICRiYWRnZTcuYWRkQ2xhc3MoJ3JldmVhbCcpO1xuICAgIH1cbiAgICBpZiAodXNlclNjb3JlID4gaGlnaHNjb3JlKSB7XG4gICAgICAkYmFkZ2U4LmFkZENsYXNzKCdyZXZlYWwnKTtcbiAgICB9XG4gIH07XG5cbiAgLy9nYW1lIGxvZ2ljIGZvciB1c2VyIGNsaWNraW5nIG9uIGJlYXZlcnMvb3R0ZXJzL2VtcHR5IHNxdWFyZVxuICAkZ2FtZWhvbGRlci5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGdhbWVPbiA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdiZWF2ZXInKSkge1xuICAgICAgICAvL3VwZGF0ZSBzY29yZXNcbiAgICAgICAgY2xpY2tTY29yZSA9IDIwO1xuICAgICAgICB1c2VyU2NvcmUgKz0gMjA7XG4gICAgICAgIGJlYXZlclNjb3JlICs9IDE7XG4gICAgICAgIC8vc2hvdyBiYWRnZXNcbiAgICAgICAgY2hlY2tBbmRTaG93QmFkZ2VzKCk7XG4gICAgICAgIC8vaGlkZSBhbmltYWwgYnkgcmVtb3ZpbmcgY2xhc3NcbiAgICAgICAgKCQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdiZWF2ZXInKSk7XG4gICAgICAgIC8vbWFrZSBzb3VuZCAobm90IGluY2x1ZGVkIHlldClcbiAgICAgIH0gZWxzZSBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ290dGVyJykpIHtcbiAgICAgICAgY2xpY2tTY29yZSA9IC0xMDtcbiAgICAgICAgdXNlclNjb3JlIC09IDIwO1xuICAgICAgICBvdHRlclNjb3JlICs9IDE7XG4gICAgICAgIGNoZWNrQW5kU2hvd0JhZGdlcygpO1xuICAgICAgICAoJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ290dGVyJykpO1xuICAgICAgICAvL21ha2Ugc291bmRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsaWNrU2NvcmUgPSAtNTtcbiAgICAgICAgdXNlclNjb3JlIC09IDU7XG4gICAgICAgIGJsYW5rU2NvcmUgKz0gMTtcbiAgICAgICAgLy9tYWtlIHNvdW5kXG4gICAgICB9XG4gICAgICAkY2xpY2tTY29yZVNjcmVlbi50ZXh0KGNsaWNrU2NvcmUpO1xuICAgICAgJHVzZXJTY29yZVNjcmVlbi50ZXh0KHVzZXJTY29yZSk7XG4gICAgfVxuICB9KTtcblxuICAvL2NyZWF0ZSAnYWRkVGVtcG9yYXJ5Q2xhc3MnIGZ1bmN0aW9uXG4gIChmdW5jdGlvbigkKSB7XG4gICAgJC5mbi5leHRlbmQoe1xuICAgICAgYWRkVGVtcG9yYXJ5Q2xhc3M6IGZ1bmN0aW9uKGNsYXNzTmFtZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBlbGVtZW50cy5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSkoalF1ZXJ5KTtcbn0pO1xuIl19
