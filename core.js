const { exec } = require('child_process');
var dSpeed;
var uSpeed;
var totalRec;
var totalSent;
var mSpeed;
var pr = 0;
var ps = 0;
var maxSpeed = 0;
var mainWin, settingWin, todayWin;

window.onload = function() {
  dSpeed = document.getElementById('d_speed');
  uSpeed = document.getElementById('u_speed');
  mainWin = document.getElementById('main');
  totalRec = document.getElementById('total-rec');
  totalSent = document.getElementById('total-sent');
  settingsWin = document.getElementById('settings-menu');
  todayWin = document.getElementById('today');
  mSpeed = document.getElementById('mSpeed');
  document.getElementById('opacity-range').oninput = function() {
    mainWin.style.opacity = this.value + '%';
  };
  setInterval(update, 1000);
};

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

    if (pr > 0) {
      if (down > maxSpeed) {
        maxSpeed = down;
        mSpeed.innerText = maxSpeed.toFixed(2) + ' Kb/s';
      }
      dSpeed.innerText = down.toFixed(2) + ' Kb/s';
      uSpeed.innerText = up.toFixed(2) + ' Kb/s';
    }

    pr = rec;
    ps = send;
  });
}

function closeWin() {
  window.close();
}

//   function minWin() {
//   }

function settings() {
  if (settingsWin.style.display === 'block') {
    settingsWin.style.display = 'none';
  } else {
    settingsWin.style.display = 'block';
  }
}

Backgrounds = [
  'linear-gradient(180deg, #1CB5E0 0%, #000851 100%)',
  'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',
  'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)',
  'linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)',
  'linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)',
  'linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)',
  'linear-gradient(180deg, #868686 0%, #000000 100%)'
];

function changeBackground(i) {
  mainWin.style.background = Backgrounds[i];
}

var isBlack = false;
function changeText() {
  if (!isBlack) {
    mainWin.style.color = '#1c1c1c';
    isBlack = true;
  } else {
    isBlack = false;
    mainWin.style.color = '#eee';
  }
}

function toggleToday() {
  if (todayWin.style.display === 'none') {
    todayWin.style.display = 'block';
    document.getElementById('today-btn').style.background = '#531a87';
  } else {
    todayWin.style.display = 'none';
    document.getElementById('today-btn').style.background = 'rgb(61, 61, 61)';
  }
}

function applyGradient() {
  var gcolor1 = document.getElementById('color-1');
  var gcolor2 = document.getElementById('color-2');
  var angle = document.getElementById('angle');

  mainWin.style.background = `linear-gradient(${angle.value}deg, ${gcolor1.value} 0%, ${gcolor2.value} 100%)`;
}
