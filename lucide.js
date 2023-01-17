const { program } = require('commander')
const build = require('./cli/build')

program
  .command('build')
  .description('build lucide components')
  .action(build)

program.parse()
