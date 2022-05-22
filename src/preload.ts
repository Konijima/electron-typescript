import { contextBridge } from 'electron'
import * as SampleAPI from './api/SampleAPI'

contextBridge.exposeInMainWorld('SampleAPI', SampleAPI)
