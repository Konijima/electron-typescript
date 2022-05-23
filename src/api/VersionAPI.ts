/**
 * VersionAPI with typing
 * Added to /src/api/index.d.ts
 */

/**
 * Get the current app version
 */
export function App(): string {
    const json = require('../../package.json')
    return json.version
}

/**
 * Get the current electron version
 */
export function Electron(): string {
    return process.versions.electron
}

/**
 * Get the current Node version
 */
export function Node(): string {
    return process.versions.node
}

/**
 * Get the current Chrome version
 */
export function Chrome(): string {
    return process.versions.chrome
}
