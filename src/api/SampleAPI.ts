/**
 * SampleAPI with typing
 * Added to /src/api/index.d.ts
 */

function world(): void {
    console.log('world')
}

/**
 * Print out `hello` then `world`
 */
export function hello(): void {
    console.log('hello')
    world()
}
