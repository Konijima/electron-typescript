// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import { contextBridge } from 'electron'

// Expose VersionAPI
import * as VersionAPI from './api/VersionAPI'
contextBridge.exposeInMainWorld('VersionAPI', VersionAPI)

// Expose DialogManager
import { ElectronDialogManagerRenderer } from 'electron-dialog-manager'
contextBridge.exposeInMainWorld('DialogManager', ElectronDialogManagerRenderer)
