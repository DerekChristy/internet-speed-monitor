function settings() {
  if (settingsWin.style.display === 'block') {
    settingsWin.style.display = 'none';
  } else {
    settingsWin.style.display = 'block';
  }
}

Backgrounds = [
  'linear-gradient(180deg, #1CB5E0bb 0%, #000851bb 100%)',
  'linear-gradient(90deg, #00C9FFbb 0%, #92FE9Dbb 100%)',
  'linear-gradient(90deg, #FC466Bbb 0%, #3F5EFBbb 100%)',
  'linear-gradient(90deg, #3F2B96bb 0%, #A8C0FFbb 100%)',
  'linear-gradient(90deg, #FDBB2Dbb 0%, #22C1C3bb 100%)',
  'linear-gradient(90deg, #f8ff00bb 0%, #3ad59fbb 100%)',
  'linear-gradient(180deg, #868686bb 0%, #000000bb 100%)'
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
    document.getElementById('today-btn').style.background = '#8a2be2';
  }
}
