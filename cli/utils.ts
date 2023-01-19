import fs from 'fs'
import path from 'path'

/**
 * Console color helpers
 */
export function color(prefix: string, str: string) {
  return `${prefix}${str}\x1b[0m`
}

export function cyan(str: string) {
  return color('\x1b[36m', str)
}

export function green(str: string) {
  return color('\x1b[32m', str)
}

export function red(str: string) {
  return color('\x1b[31m', str)
}

export function yellow(str: string) {
  return color('\x1b[33m', str)
}

/**
 * Check if a file exists
 */
export function exists(...args: string[]) {
  return fs.existsSync(resolve(...args))
}

/**
 * Make directory
 */
export function mkdir(...args: string[]) {
  return fs.mkdirSync(resolve(...args))
}

/**
 * Resolve a path
 */
export function resolve(...args: string[]) {
  return path.resolve(__filename, '..', ...args)
}

/**
 * Read file
 */
export function read(...args: string[]) {
  return fs.readFileSync(resolve(...args)).toString()
}

/**
 * Read directory
 */
export function readDir(...args: string[]) {
  return fs.readdirSync(resolve(...args))
}

/**
 * Write a file
 */
export function write(p: string, src: string) {
  return fs.writeFileSync(resolve(p), src)
}
