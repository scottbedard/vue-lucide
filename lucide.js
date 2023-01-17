const { program } = require('commander')
const build = require('./commands/build')

program
  .command('build')
  .description('build lucide components')
  .action(build)

program.parse()
