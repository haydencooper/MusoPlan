"use strict";

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
      return new Guitarist( 
        fullName,
        yearsPlaying,
        hourlyRate
        );
    case "2":
      // Bass
      return new Bassist(fullName, yearsPlaying, hourlyRate);
    case "3":
      // Drums
      return new Percussionist(
        fullName,
        yearsPlaying,
        hourlyRate
      );
    case "4":
      // Flute
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
      // Guitarist
      return new Troupe(
        name,
        duration,
        'Rock'
        );
    case "2":
      // Bass
      return new Troupe(
        name,
        duration,
        'Jazz'
        );
    case "3":
      // Drums
      return new Troupe(
        name,
        duration,
        'Pop'
        );
    default:
      throw new Error("Invalid genre");
  }
}

function addMusicianToTroupe(everyMusician, everyTroupe) { // every Musician is an array of Musician objects, everyTroupe is an array of Troupe objects  
  if(everyMusician.length === 0 || everyTroupe.length === 0) { // if there are no musicians or no troupes, return an error message
    return
  } 
  const musicianNames = everyMusician.map((musician) => {return musician.fullName}) // create an array of all the musician names
  const troupeNames = everyTroupe.map((troupe) => {return troupe.name}) // converts the array of musicians to an array of the names of the musicians
  let userInputMusicianName = ""; // create a variable to store the name of the musician to be added to the troupe
  let userInputTroupeName = ""; // create a variable to store the name of the troupe to which the musician will be added
  while(true) { // while the user has not entered a valid name, keep asking for a name
    if(musicianNames.includes(userInputMusicianName)) { // if the name is valid, break out of the loop
      if(troupeNames.includes(userInputTroupeName)) { 
        for(let i = 0; i < everyMusician.length; i++) // loop through the array of musicians
          if(everyMusician[i].fullName === userInputMusicianName)
            for(let x = 0; x < everyTroupe.length; i++)
              if(everyTroupe[x].name === userInputTroupeName);
                everyTroupe[x].musicians.push(everyMusician[i]); // add the musician to the troupe
                break;
      
      } else {
        userInputTroupeName = prompt("Enter Troupe Name: ");
      }
      
    
    } else {
      userInputMusicianName = prompt("Enter Musician Name: "); 
    } 
  }
}

function summariseTroupe(troupe) { // everyTroupe is an array of Troupe objects
  if(troupe.musicians.length === 0) { // if there are no troupes, return an error message
    return `\
    Troupe Name: ${troupe.name}
    Number of Musicians: 0
    Rate of the Troupe: ${troupe.getTroupeRate()}
    Genre of the Troupe ${troupe.genre}
    Minimum Duration: ${troupe.duration}`;
  }
  return `\
  Troupe Name: ${troupe.name}
  Number of Musicians: ${troupe.getMusicianCount()}
  Rate of the Troupe: ${troupe.getTroupeRate()}
  Genre of the Troupe ${troupe.genre}
  Minimum Duration: ${troupe.duration}`;

}
function dTroupeSummary(troupe) {
   return `\
   ${summariseTroupe(troupe)}
   Musician Introduction: 
   ${troupe.getMusicianIntroductions()}`
}

module.exports = { createMusician, createTroupe, addMusicianToTroupe, getTroupeRate, summariseTroupe, dTroupeSummary }; // export the functions so they can be used in other files
