const fs = require('fs') //calls the function required to read JSON file

const getNotes = function(){
    const text =  "Your Notes is ..."
    return text
}

// function to add a new note
const addNote = function(tittle, body){ 
   const notes = loadNote() //loading the notes file which is in JSON format
   const duplicateNotes = notes.filter(function(note) {
       return note.tittle === tittle
   }) //function to check whether the title added already exists

   if (duplicateNotes.lenght === 0)
    { notes.push({
        tittle:tittle,
        body:body
      }) // pushes or appends the arguments title and body into the notes files
    
     saveNotes(notes) //saves note with new input 
     console.log('New Note Added')
    }
    else{
       console.log("Title already exists")
   }
}

const saveNotes = function(notes)
{
    const dataJSON =  JSON.stringify(notes) //makes the new arguments into JSON file 
    fs.writeFileSync('notes.json',dataJSON) // writes the new argument into the notes file
}

const loadNote = function(){
    // try catch function of JS, if a certain block of code throws error in the try block, it prints the catch block. 
    try{
        const DataBuffer = fs.readFileSync('notes.json') //reads the json file
        const dataJSON = DataBuffer.toString() // converts the file to un-readable string 
        return JSON.parse(dataJSON) // parses the file to readable string and then returns it
    }
    catch (e){
      return []
    }
}

// exporting more then 1 function by passing them to required callable names
module.exports = {
    getNotes : getNotes, 
    addNote : addNote
}