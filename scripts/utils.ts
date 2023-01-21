import fs from 'fs'
import path from 'path'

/**
 * Console colors
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
 * Util
 */
export function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms))
}
