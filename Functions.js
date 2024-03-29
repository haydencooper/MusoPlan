"use strict"

const ps = require("prompt-sync");
const { Musician } = require("./classes/Musician");
const { Guitarist } = require("./classes/Guitarist");
const { Bassist } = require("./classes/Bassist");
const { Flautist } = require("./classes/Flautist");
const { Percussionist } = require("./classes/Percussionist");
const { Troupe } = require("./classes/Troupe");
const prompt = ps();





function createMusician() {  // create a new musician object
  const validInstruments = ["1", "2", "3", "4"];  // create an array of valid instruments
  let userInputInstrument = ""; // create a variable to store the instrument of the musician
  let yearsPlaying = -1; // create a variable to store the years playing of the musician
  let fullName = ""; // create a variable to store the name of the musician
  let hourlyRate = -1; // create a variable to store the hourly rate of the musician

  while (true) { // while the user has not entered a valid instrument, keep asking for a name
    if (validInstruments.includes(userInputInstrument)) { // if the instrument is valid, break out of the loop
      if (fullName.length >= 3 && fullName.length <= 30) { // if the name is valid, break out of the loop
        if (yearsPlaying >= 0) { // if the years playing is valid, break out of the loop
          if (hourlyRate >= 50) { // if the hourly rate is valid, break out of the loop
            break;
          } else {
            hourlyRate = parseFloat(prompt("Enter Musician Hourly Rate: ")); // if the hourly rate is not valid, ask for a new hourly rate
          }
        } else {
          yearsPlaying = parseFloat(prompt("Enter Musician Experience: ")); // if the years playing is not valid, ask for a new years playing
        }
      } else {
        fullName = prompt("Enter Musician Name: "); // if the name is not valid, ask for a new name
      }
    } else {
      console.log("Select Instrument from the list below:"); // if the instrument is not valid, ask for a new instrument
      console.log("1. Guitar \n2. Bass \n3. Drums \n4. Flute"); // print the list of instruments
      userInputInstrument = prompt("Enter Musician Instrument: "); // ask for a new instrument
    }
  }
  switch (userInputInstrument) { // switch statement to create the appropriate musician object based on the instrument
    case "1": 
      // Guitarist
      console.log('Successfully created Guitarist!');
      return new Guitarist( 
        fullName,
        yearsPlaying,
        hourlyRate
        );
    case "2":
      // Bass
      console.log('Successfully created Bassist!')
      return new Bassist(fullName, yearsPlaying, hourlyRate);
    case "3":
      // Drums
      console.log('Successfully created Percussionist!')
      return new Percussionist(
        fullName,
        yearsPlaying,
        hourlyRate
      );
    case "4":
      // Flute
      console.log('Successfully created Flautist!')
      return new Flautist(fullName, yearsPlaying, hourlyRate);
    default:
      throw new Error("Invalid instrument");
  }
}

function createTroupe() { // create a new troupe object
  const validGenres = ["1", "2", "3"]; // create an array of valid genres
  let name = ""; // create a variable to store the name of the troupe
  let duration = -1; // create a variable to store the duration of the troupe
  let genre = ""; // create a variable to store the genre of the troupe

  
  while(true) {
    
    if (validGenres.includes(genre)) {    // if the genre is valid, break out of the loop
      if (name.length >= 3 && name.length <= 30) { // if the name is valid, break out of the loop
          if (duration >= 0.5 && duration <= 3) { // if the duration is valid, break out of the loop
            break;
          } else {
            duration = parseFloat(prompt("Enter minimum duration of hire: "));  // if the duration is not valid, ask for a new duration
          }
      } else {
        name = prompt("Enter Troupe Name: "); // if the name is not valid, ask for a new name
      }
    } else {
      console.log("Select Genre from the list below: "); // if the genre is not valid, ask for a new genre
      console.log("1. Rock \n2. Jazz \n3. Pop"); // print the list of genres
      genre = prompt("Enter Troupe Genre: "); // ask for a new genre
    }
  }
  switch (genre) { // switch statement to create the appropriate troupe object based on the genre
    case "1":
      // Rock Troupe
      console.log('Successfully created Rock Troupe!')
      return new Troupe(
        name,
        duration,
        'Rock'
        );
        
    case "2":
      // Jazz Troupe
      console.log('Successfully created Jazz Troupe!')
      return new Troupe(
        name,
        duration,
        'Jazz'
        );
    case "3":
      // Pop Troupe
      console.log('Successfully created Pop Troupe!')
      return new Troupe(
        name,
        duration,
        'Pop'
        );
    default:
      throw new Error("Invalid genre");
  }
}

function addMusicianToTroupe(everyMusician, everyTroupe) { 
  // every Musician is an array of Musician objects, everyTroupe is an array of Troupe objects  
  if(!everyMusician || !everyTroupe) { // if there are no musicians or no troupes, return an error message
  } 
  const musicianNames = everyMusician.map((musicians) => {return musicians.fullName}) // create an array of all the musician names
  const troupeNames = everyTroupe.map((troupes) => {return troupes.name}) // converts the array of musicians to an array of the names of the musicians
  let userInputMusicianName = ""; // create a variable to store the name of the musician to be added to the troupe
  let userInputTroupeName = ""; // create a variable to store the name of the troupe to which the musician will be added
  while(true) { // while the user has not entered a valid name, keep asking for a name
    if(musicianNames.includes(userInputMusicianName)) { // if the name is valid, break out of the loop
      if(troupeNames.includes(userInputTroupeName)) { 
        for(let i = 0; i < everyMusician.length; i++) {
          if(everyMusician[i].fullName === userInputMusicianName){
            for(let x = 0; x < everyTroupe.length; x++) {
              if(everyTroupe[x].name === userInputTroupeName) {
                everyTroupe[x].assignedMusicians.push(everyMusician[i]); // add the musician to the troupe
                return console.log("Successfully added " + everyMusician[i].fullName + " to " + everyTroupe[x].name);

              }

            }

          }

        }
          
      } else {
        userInputTroupeName = prompt("Enter Troupe Name: "); // if the name is not valid, ask for a new name
      }
      
    
    } else {
      userInputMusicianName = prompt("Enter Musician Name: ");  // if the name is not valid, ask for a new name
    }
  }
}



function troupeSummary (everyTroupe) { // print the summary of the troupe
  if (!everyTroupe) { 
  }
  const troupeNames = everyTroupe.map((troupes) => {return troupes.name}) // create an array of the names of the troupes
  let inputTroupe = "";
  while (true) {
    if (troupeNames.includes(inputTroupe)) { // if the name is valid, break out of the loop
      for (let i = 0; i < everyTroupe.length; i++) { // loop through the array of troupes
        if (everyTroupe[i].name === inputTroupe) { // if the name of the troupe matches the name entered by the user, print the summary of the troupe
          console.log(everyTroupe[i].overviewSummary()); // print the summary of the troupe
          return
        }
      }
    } else {
      inputTroupe = prompt("Enter Troupe Name: "); // if the name is not valid, ask for a new name
    }
  }
}

function detailedSummary (everyTroupe) { // print the detailed summary of the troupe
  if (!everyTroupe) {  // if there are no troupes, return an error message
  }  
  const troupeNames = everyTroupe.map((troupes) => {return troupes.name}) // create an array of the names of the troupes
  let inputTroupe = ""; // create a variable to store the name of the troupe
  while (true) { // while the user has not entered a valid name, keep asking for a name
    if (troupeNames.includes(inputTroupe)) { // if the name is valid, break out of the loop
      for (let i = 0; i < everyTroupe.length; i++) { // loop through the array of troupes
        if (everyTroupe[i].name === inputTroupe) { // if the name of the troupe matches the name entered by the user, print the detailed summary of the troupe
          console.log(everyTroupe[i].detailedSummary()); // print the detailed summary of the troupe
          return
        }
      }
    } else {
      inputTroupe = prompt("Enter Troupe Name: "); // if the name is not valid, ask for a new name
    }
  }
}

function getHourlyRate(everyTroupe) { // print the hourly rate of the troupe
  if (!everyTroupe) { // if there are no troupes, return an error message
  } 
  const troupeNames = everyTroupe.map((troupes) => {return troupes.name})   // create an array of the names of the troupes
  let inputTroupe = ""; // create a variable to store the name of the troupe
  while (true) { // while the user has not entered a valid name, keep asking for a name
    if (troupeNames.includes(inputTroupe)) { // if the name is valid, break out of the loop
      for (let i = 0; i < everyTroupe.length; i++) { // loop through the array of troupes
        if (everyTroupe[i].name === inputTroupe) { // if the name of the troupe matches the name entered by the user, print the hourly rate of the troupe
          console.log(everyTroupe[i].getTroupeRate()); // print the hourly rate of the troupe
          return
        }
      }
    } else {
      inputTroupe = prompt("Enter Troupe Name: "); // if the name is not valid, ask for a new name
    }
  }
}

    function writeFile(troupes) { // write the troupes to a file
    const fs = require('fs'); // require the fs module
    const filePath = prompt(`Enter file name (file will be created.): `); // ask for the name of the file to be written to
    const content = Array.from(troupes.values()) // convert the troupes to an array
      .map((troupe) => troupe.detailedSummary()) // map the array to the detailed summary of the troupes
      .join("\n"); // join the array to a new line
    fs.writeFileSync(filePath+`.txt`, content, "utf8"); // write the content to the file
  }
// Read a list of troupe names to be populated from a file
function readFile(troupes) {
  const fs = require('fs'); // require the fs module
  const filePath = prompt(`Enter file name: `); // ask for the name of the file to be read
  const content = fs.readFileSync(`${filePath}`+`.txt`, "utf8"); // read the file
  const lines = content.split("\n"); // split the file into lines
  for (let i = 0; i < lines.length; i++) { // loop through the lines
    const line = lines[i]; // get the line
    const troupe = new Troupe(line); // create a new troupe with the line as the name
    troupes.push(troupe.name, troupe);
  }
  console.log(`${lines.length} troupe(s) read from ${filePath}`); // print the number of troupes read from the file
}


module.exports = {createMusician, createTroupe, addMusicianToTroupe, troupeSummary, detailedSummary, getHourlyRate, writeFile, readFile}; // export the functions so they can be used in other files


