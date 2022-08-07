"use strict";

const ps = require("prompt-sync");
const { Musician } = require("./classes/Musician");
const { Guitarist } = require("./classes/Guitarist");
const { Bassist } = require("./classes/Bassist");
const { Flautist } = require("./classes/Flautist");
const { Percussionist } = require("./classes/Percussionist");
const { Troupe } = require("./classes/Troupe");
const prompt = ps();


function createMusician() {
  const validInstruments = ["1", "2", "3", "4"];
  let userInputInstrument = "";
  let yearsPlaying = -1;
  let fullName = "";
  let hourlyRate = -1;

  while (true) {
    if (validInstruments.includes(userInputInstrument)) {
      if (fullName.length >= 3 && fullName.length <= 30) {
        if (yearsPlaying >= 0) {
          if (hourlyRate >= 50) {
            break;
          } else {
            hourlyRate = parseFloat(prompt("Enter Musician Hourly Rate: "));
          }
        } else {
          yearsPlaying = parseFloat(prompt("Enter Musician Experience: "));
        }
      } else {
        fullName = prompt("Enter Musician Name: ");
      }
    } else {
      console.log("Select Instrument from the list below:");
      console.log("1. Guitar \n2. Bass \n3. Drums \n4. Flute");
      userInputInstrument = prompt("Enter Musician Instrument: ");
    }
  }
  switch (userInputInstrument) {
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

function createTroupe() {
  const validGenres = ["1", "2", "3"];
  let name = "";
  let duration = -1;
  let genre = "";
  
  while(true) {
    
    if (validGenres.includes(genre)) {
      if (name.length >= 3 && name.length <= 30) {
          if (duration >= 0.5 && duration <= 3) {
            break;
          } else {
            duration = parseFloat(prompt("Enter minimum duration of hire: ")); 
          }
      } else {
        name = prompt("Enter Troupe Name: ");
      }
    } else {
      console.log("Select Genre from the list below: ");
      console.log("1. Rock \n2. Jazz \n3. Pop");
      genre = prompt("Enter Troupe Genre: ");
    }
  }
  switch (genre) {
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
  while(true) {
    if(musicianNames.includes(userInputMusicianName)) {
      if(troupeNames.includes(userInputTroupeName)) {
        for(let i = 0; i < everyMusician.length; i++)
          if(everyMusician[i].fullName === userInputMusicianName)
            for(let uwu = 0; uwu < everyTroupe.length; i++)
              if(everyTroupe[uwu].name === userInputTroupeName)
      } else {
        userInputTroupeName = prompt("Enter Troupe Name: ");
      }
      
    
    } else {
      userInputMusicianName = prompt("Enter Musician Name: "); 
    } 
  }

}
module.exports = { createMusician, createTroupe, addMusicianToTroupe };
