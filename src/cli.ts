import * as commander from 'commander'
import {translate} from './main'

const program = new commander.Command()

program
  .version('0.0.1')
  .name('trans')
  .usage('<English>')
  .arguments('<English>')
  .action(function (english) {
    translate(english)
  })

program.parse(process.argv)