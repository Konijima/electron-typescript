// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

// Check exposed API in renderer process
console.log(VersionAPI)
console.log(DialogManager)

function replaceText(selector: string, text: string) {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
}

// Replace dom elements text
replaceText(`app-version`, VersionAPI.App());
replaceText(`chrome-version`, VersionAPI.Chrome());
replaceText(`electron-version`, VersionAPI.Electron());
replaceText(`node-version`, VersionAPI.Node());

// Show message dialog with versions
const versions = `App Version: ${VersionAPI.App()}
Chromium version: ${VersionAPI.Chrome()}
Electron version: ${VersionAPI.Electron()}
Node version: ${VersionAPI.Node()}`;

DialogManager.MessageDialog({
    title: 'DialogManager',
    message: versions
});
