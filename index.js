const { BrowserWindow, app } = require('electron');

let win = null;

function boot() {
  console.log(process.type);
  win = new BrowserWindow({
    minWidth: 200,
    minHeight: 170,
    useContentSize: true,
    resizable: true,
    alwaysOnTop: true,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.on('closed', () => {
    win = null;
  });

  win.loadURL(`file://${__dirname}/index.html`);
}

app.on('ready', boot);
