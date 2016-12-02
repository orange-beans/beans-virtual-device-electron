// Installer build script
const path = require('path');
const electronInstaller = require('electron-winstaller');

const appDirectory = path.join(__dirname, 'build/BeansVirtualDevice-win32-x64');
const outputDiectory = path.join(__dirname, 'build/installer64/');

console.log(outputDiectory);

var resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory,
  outputDiectory: outputDiectory,
  authors: 'Beans Inc.',
  exe: 'BeansVirtualDevice.exe',
  description: 'A practise App build using Electron',
});

resultPromise.then(() => console.log('It worked!'), (e) => console.log(`No dice: ${e.message}`));
