import { program } from 'commander'
import compile from './cli/compile'

program
  .command('compile')
  .description('compile lucide components')
  .action(compile)

program.parse()
