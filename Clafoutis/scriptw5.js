var countDownDate = new Date("Jun 1, 2019 07:00:00").getTime();
var countdownfunction = setInterval(function() {
var now = new Date().getTime();
  
var distance = countDownDate - now;
  
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
document.getElementById("odate").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("odate").innerHTML = "Get it now!!!";
  }
}, 1000);
