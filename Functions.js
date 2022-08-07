"use strict";

const ps = require("prompt-sync");
const { Musician } = require("./classes/Musician");
const { Guitarist } = require("./classes/Guitarist");
const { Bassist } = require("./classes/Bassist");
const { Flautist } = require("./classes/Flautist");
const { Percussionist } = require("./classes/Percussionist");
const prompt = ps();
const { Troupe } = require("./classes/Troupe");


function createMusician() {
  let validInstruments = ["1", "2", "3", "4"];
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

module.exports = { createMusician };
