const notes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const { command, argv } = require('yargs')

// console.log(notes())

// // console.log(validator.isEmail('gmail.com'))
// console.log(validator.isURL('https://facebook.com'))
// console.log(chalk.bold.blue('that is text in red color using chalk'))
// console.log(process.argv[2])

// yargs.command ({
//     command: 'add',
    
//     builder: {
//         description: {
//             demandOption : true,
//             type: 'string'
//         }
//     },
//     handler: function(){
//         console.log('description: ',argv.description)
//     }

// })
// yargs.parse()