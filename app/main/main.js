'use strict';

const electron = require('electron');
const path = require('path');
const app = electron.app;
const protocol = electron.protocol;
const configuration = require('../configuration');
// const BrowserWindow = electron.BrowserWindow;
// const ipcMain = electron.ipcMain;
// const globalShortcut = electron.globalShortcut;

const { BrowserWindow, ipcMain, globalShortcut } = electron;

//const mainWindowURL = path.join(__dirname, '../../public/index.html');
const mainWindowURL = path.join(__dirname, '../public/index.html');
//const settingsWindowURL = path.join(__dirname, '../../public/settings.html');

console.log(mainWindowURL);

// Init windows
let mainWindow = null;
let settingsWindow = null;
let tray = null;

// IPC messages handling
ipcMain.on('debug', (event, msg) => {
  console.log(msg);
});

ipcMain.on('close-main-window', () => {
  app.quit();
});

// ipcMain.on('open-settings-window', () => {
//   if (settingsWindow) {
//     return;
//   }
//
//   settingsWindow = new BrowserWindow({
//     frame: false,
//     resizable: false,
//     height: 200,
//     width: 200,
//   });
//
//   settingsWindow.loadURL(settingsWindowURL);
//
//   settingsWindow.on('close', () => {
//     settingsWindow = null;
//   });
// });
//
// ipcMain.on('close-settings-window', () => {
//   settingsWindow.close();
// });

ipcMain.on('set-global-shortcuts', () => {
  setGlobalShortcuts();
});


// Start App
app.on('ready', function() {
  // Init configuration
  if (!configuration.readSettings('shortcutKeys')) {
    configuration.saveSettings('shortcutKeys', ['ctrl', 'shift']);
  }

  mainWindow = new BrowserWindow({
    height: 1020,
    width: 994,
    resizable: false,
    frame: true,
  });

  // Set menu null
  //mainWindow.setMenu(null);

  console.log(mainWindowURL);
  mainWindow.loadURL(mainWindowURL);

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.send('ping', 'whoooooooh!');
  });

  // Open Dev-debug window
  //mainWindow.openDevTools();

  setGlobalShortcuts();

  // tray = new Tray(path.join(__dirname, 'app/img/tray-iconTemplate.png'));
  // const contextMenu = Menu.buildFromTemplate([
  //   { label: 'Item1', type: 'radio' },
  //   { label: 'Item2', type: 'radio' },
  //   { label: 'Item3', type: 'radio', checked: true },
  //   { label: 'Item4', type: 'radio' },
  // ]);
  // tray.setToolTip('This is my application.');
  // tray.setContextMenu(contextMenu);
});

function setGlobalShortcuts() {
  globalShortcut.unregisterAll();

  let shortcutKeysSetting = configuration.readSettings('shortcutKeys');
  let shortcutPrefix = shortcutKeysSetting.length === 0 ?
    '' : shortcutKeysSetting.join('+') + '+';

  globalShortcut.register(shortcutPrefix + '1', function () {
    mainWindow.webContents.send('global-shortcut', 0);
  });

  globalShortcut.register(shortcutPrefix + '2', function () {
    mainWindow.webContents.send('global-shortcut', 1);
    console.log('CommandOrControl+A is pressed');
  });
}
