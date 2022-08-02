"use strict";

const ps = require("prompt-sync");
const prompt = ps();
const {Musician} = require("./classes/Musician.js");

function mainMenu() {
    while (true) {
      console.log('=======================');
      console.log('Select your choice');
      console.log('\t1.Create Musician\n\t2.Create Troupe\n\t3.Add Musician To Troupe\n\t4.Provide a summary description of a troupe\n\t5.Provide a detailed description of a troupe\n\t6.Calculate the cost of deploying the troupe for a number of hours\n\t7.Read a list of troupe names to be populated from a file\n\t8.Write a list of the detailed descriptions for all troupes to a given filename\n\t9.Exit');
      const userInput = getUserInputOptionNumber();
      if (userInput === "1") {
        // Create Musician
        createMusician();
      } else if (userInput === "2") {
        // Create Troupe
      } else if (userInput === "3") {
        // Add musician
      } else if (userInput === "4") {
        // Summary - troupe
      } else if (userInput === "5") {
        // Detailed description - troupe
      } else if (userInput === "6") {
        // Calc cost deploying troupe n hours
      } else if (userInput === "7") {
        // Read troupe names from file
      } else if (userInput === "8") {
        // Detailed description of all saved troupes
      } else if (userInput === "9") {
        // Quit Program
        break;
      } else {
        // Uknown input error, passed validation checks somehow too
        throw new Error(`Unknown user input value: ${userInput}`);
      }
    }
}
function getUserInputOptionNumber() {
  const userInput = prompt("Enter option number: ");
  const validOptions = ['1','2','3','4','5','6','7','8','9']
  if (!validOptions.includes(userInput)) {
    // user has not inputted correct value
    console.log('select good option')
    return getUserInputOptionNumber();
  }
  // user not stupid
  return userInput;
}

// name, hourly rate, experience, weapon
function createMusician() {
const inputName = getUserInputToUseAsMusicianName();
const instrumentType = getInstrument();
const inputExperience = getExperience();
const inputRate = getRate();

if (userInput === "1") {
    // Create Guitarist
    createMusician(inputName, instrumentType, inputExperience, inputRate);
    this.inputName = getUserInputOptionNumber;
    this.instrumentType = getInstrument;
    this.inputExperience = getExperience;
    this.inputRate = getRate;
    return userInput;
    console.log(createMusician());
  } else if (userInput === "2") {
    // Create Bassist
  } else if (userInput === "3") {
    // Add Percussionist
  } else if (userInput === "4") {
    // Add Flautist
  }
}

function getUserInputToUseAsMusicianName () {
    const userInput = prompt('Enter musician name: ');
  
    if (userInput > 30 || userInput < 3) {
      // User has inputted either too long or too short a name
      console.log('error name must be between 3 and 30 characters');
      return getUserInputToUseAsMusicianName();
    }
    // user has selected a good option from 1-9
    return userInput;
  }

  function getInstrument() {
    const userInput = prompt("Enter Played Instrument: ");
    const validOptions = ['1','2','3','4']
    if (!validOptions.includes(userInput)) {
      // user has not inputted correct value
      console.log('Select Valid Instrument: Guitar, Bass Guitar, Drums, Flute')
      return getInstrument();
    }
    // user not stupid
    return userInput;
  }

  function getRate () {
    const userInput = prompt('Enter Hourly Rate: ');
  
    if (userInput < 50) {
      // User has inputted either too long or too short a name
      console.log('Error: Hourly Rate must be above 50.');
      return getRate();
    }
    // user has selected a good option from 1-9
    return userInput;
  }

  function getExperience () {
    const userInput = prompt('Enter Years Of Experience: ');
  
    if (userInput < 0) {
      // User has inputted either too long or too short a name
      console.log('Error: Years of Experience cannot be negative');
      return getExperience();
    }
    // user has selected a good option from 1-9
    return userInput;
  }
  mainMenu();