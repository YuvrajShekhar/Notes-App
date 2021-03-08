const fs = require('fs') //calls the function required to read JSON file
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

// function to add a new note
const addNote = function (title, body) {
    const notes = loadNotes()  //loading the notes file which is in JSON format
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    }) //function to check whether the title added already exists

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        }) // pushes or appends the arguments title and body into the notes files
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep) //saves note with new input 
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }    
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes) //makes the new arguments into JSON file 
    fs.writeFileSync('notes.json', dataJSON) // writes the new argument into the notes file
}

const loadNotes = function () {
    try {  // try catch function of JS, if a certain block of code throws error in the try block, it prints the catch block. 
        const dataBuffer = fs.readFileSync('notes.json') //reads the json file
        const dataJSON = dataBuffer.toString() // converts the file to un-readable string 
        return JSON.parse(dataJSON) // parses the file to readable string and then returns it
    } catch (e) {
        return []
    }
}
 
// exporting more then 1 function by passing them to required callable names
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}