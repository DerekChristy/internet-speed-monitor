const { exec } = require('child_process');
var dSpeed;
var uSpeed;
var totalRec;
var totalSent;
var pr = 0;
var ps = 0;
function update() {
  exec('netstat -e', (error, stdout, stderr) => {
    data = stdout.split('\r\n');
    line = data[4].split(/(\s+)/);
    rec = line[2];
    send = line[4];

    totalRec.innerText = (rec / 1048576).toFixed(2) + ' Mb';
    totalSent.innerText = (send / 1048576).toFixed(2) + ' Mb';

    var down = (rec - pr) / 1024;
    var up = (send - ps) / 1024;

    dSpeed.innerText = down.toFixed(2) + ' Kb/s';
    uSpeed.innerText = up.toFixed(2) + ' Kb/s';
    pr = rec;
    ps = send;
  });
}

var mainWin, settingWin, todayWin;

window.onload = function() {
  dSpeed = document.getElementById('d_speed');
  uSpeed = document.getElementById('u_speed');
  mainWin = document.getElementById('main');
  totalRec = document.getElementById('total-rec');
  totalSent = document.getElementById('total-sent');
  settingsWin = document.getElementById('settings-menu');
  todayWin = document.getElementById('today');

  setInterval(update, 1000);
};

function closeWin() {
  window.close();
}

//   function minWin() {
//     window.hide();
//   }
