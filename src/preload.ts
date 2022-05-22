// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import { contextBridge } from 'electron'

// Expose custom APIs

import * as SampleAPI from './api/SampleAPI'
contextBridge.exposeInMainWorld('SampleAPI', SampleAPI)

import { DialogManagerRenderer } from 'electron-dialog-manager'
contextBridge.exposeInMainWorld('DialogManager', DialogManagerRenderer)

// Dom is ready
window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector: string, text: string) => {
        const element = document.getElementById(selector);
        if (element) {
        element.innerText = text;
        }
    };

    for (const type of ["chrome", "node", "electron"]) {
        replaceText(`${type}-version`, process.versions[type as keyof NodeJS.ProcessVersions]);
    }
});
