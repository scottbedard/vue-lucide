const { program } = require('commander')
const update = require('./cli/update')

program
  .command('update')
  .description('update lucide components')
  .action(update)

program.parse()
