const { app, BrowserWindow } = require('electron');

let mainWindow;
app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL('https://www.example.com'); // Change this to your app URL
});
