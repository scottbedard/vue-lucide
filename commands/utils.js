const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')

/**
 * Console color helpers
 */
function color(prefix, str) {
  return `${prefix}${str}\x1b[0m`
}

function cyan(str) {
  return color('\x1b[36m', str)
}

function green(str) {
  return color('\x1b[32m', str)
}

function red(str) {
  return color('\x1b[31m', str)
}

function yellow(str) {
  return color('\x1b[33m', str)
}

/**
 * Check if a file exists
 */
function exists(...args) {
  return fs.existsSync(resolve(...args))
}

/**
 * Make directory
 */
function mkdir(...args) {
  return fs.mkdirSync(resolve(...args))
}

/**
 * Resolve a path
 */
function resolve(...args) {
  return path.resolve(__dirname, '..', ...args)
}

/**
 * Read file
 */
function read(...args) {
  return fs.readFileSync(resolve(...args)).toString()
}

/**
 * Read directory
 */
function readDir(...args) {
  return fs.readdirSync(resolve(...args))
}

/**
 * Remove
 */
async function rm(p) {
  return new Promise(resolve => rimraf(p, resolve))
}

/**
 * Write a file
 */
function write(p, src) {
  return fs.writeFileSync(resolve(p), src)
}

module.exports = {
  color,
  cyan,
  exists,
  green,
  mkdir,
  read,
  readDir,
  red,
  resolve,
  rm,
  write,
  yellow,
}