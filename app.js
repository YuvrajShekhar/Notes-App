const yargs = require('yargs') //module to parse the input into sensible data
const notes = require('./notes.js')
const chalk = require('chalk')

//console.log(process.argv[2])-->to access the input from command line, the object returns array in which the third element is the input we give in command line

//Add command 
// this yargs.command is used to create an object which takes the input command from terminal and outputs the handler fuction as written
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder: { // builder is a object that is used for describing any input put
        title: {
            describe:'Note title',
            demandOption: true, // when given true, the title argument has to mandatorily be inputed
            type : 'string' // the tittle must be string, if not mentioned it will take anything like boolean 

        },
        body:{ // read title comments to understand this
           describe : 'Note Body',
           demandOption: true,
           type : 'string'
        },
    },
    handler(argv){
        notes.addNote(argv.title, argv.body) //passes the title and body entered in command line to the function in notes.js addNote function
    }
})

//Remove Command
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder: { 
        title: {
            describe:'Note title',
            demandOption: true, // when given true, the title argument has to mandatorily be inputed
            type : 'string' // the tittle must be string, if not mentioned it will take anything like boolean 

        },
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//List command
yargs.command({
    command:'List',
    describe:'Listing a note',
    handler(){
        console.log('Listing the note!')
    }
})

//Read Command
yargs.command({
    command:'read',
    describe:'read the note',
    handler(){
        console.log('Reading the note!')
    }
})


yargs.parse() // this is used to activate the yargs command to parsse the elements 



