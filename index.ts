import { program } from 'commander'
import generate from './cli/generate'

program
  .command('generate')
  .description('generate lucide components')
  .action(generate)

program.parse()
