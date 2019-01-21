'use.strict';

const electron = require('electron');
const app = electron.app; //Module to control app life.
const BrowserWindow = electron.BrowserWindow; //Module to create native browser window

/*Keep a global reference of the window object, otherwise when the Javascript object is garbage collected, the window will be closed automatically.*/
var mainWindow = null;

//Quit if all windows are closed.
app.on('window-all-closed', function() {
    /*accommodates OS X workflow where an app and its menu bar stay active until the user quits explicitly with Cmd-Q.*/
    if (process.platform != 'darwin') {
        app.quit();
    }
});

/*This method is called when Electron finishes initialization and is ready to create browser windows*/
app.on('ready', function() {
    //Create the browser window. Change frame to false for deployment
    //See CSS add add/remove cursor
    mainWindow = new BrowserWindow({width: 800, height: 600, frame: true});
    
    //load index.html for the app
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    
    //Maximize window - uncomment for production, comment out for dev, testing, background use
    //mainWindow.setFullScreen(true);
    
    //Open the DevTools - comment out for production
    //mainWindow.webContents.openDevTools(true);
    
    //Emitted when the window is closed.
    mainWindow.on('closed', function() {
        /*Dereference the window object. If your app supports multiple windows, you would store them in an array. Delete the corresponding element now.*/
        mainWindow = null;
    });
});

//
