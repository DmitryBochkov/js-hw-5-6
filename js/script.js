var total = 0;
var state = 0;
var start, stop;
function startPause() {
  update();
  document.getElementById('startPause').innerHTML = 'Pause';
  document.getElementById('startPause').style.background = '#0b8329';
  if (state == 0) {
    state = 1;
    start = new Date();
    start.setTime(start.getTime() - total);
  } else {
  state = 0;
  document.getElementById('startPause').innerHTML = 'Continue';
  stop = new Date();
     }
  }
function reset() {
  state = 0;
  total = 0;
  document.getElementById('startPause').innerHTML = 'Start';
  document.getElementById('timer-output').innerHTML = '00:00:00';
  document.getElementById('timer-output-ms').innerHTML = '000';

}
function update() {
  setTimeout("update();", 50);
  if (state == 1)  {
    stop = new Date();
    total = stop.getTime() - start.getTime();
    var msecs = total % 1000;
    var secs = Math.floor(total/1000 % 60 );
    var mins = Math.floor(total/60000 % 60);
    var hrs = Math.floor(total/3600000 % 60);
    if (hrs < 10) {
      hrs = '0' + hrs;
    }
    if (mins < 10) {
      mins = '0' + mins;
    }
    if (secs < 10) {
      secs = '0' + secs;
    }
    if (msecs < 100) {
      msecs = '0' + msecs;
    }
    document.getElementById('startPause').style.background = '#2b44eb';
    document.getElementById('timer-output').innerHTML = hrs + ':' + mins + ':' + secs;
    document.getElementById('timer-output-ms').innerHTML = msecs;
  }
}
