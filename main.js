const {app, BrowserWindow} = require('electron');


let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 750,
        frame: false,
        centered: true,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('index.html');


    mainWindow.on('closed', () => {

        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {

    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {

    if (mainWindow === null) {
        createWindow();
    }
});

