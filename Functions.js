const ps = require("prompt-sync");
const { Musician } = require("./classes/Musician");
const prompt = ps();
const { Troupe } = require("./classes/Troupe");
var musicians = new Array();

function createMusician() {
  let instrument = "";
  let experience = -1;
  let fullName = "";
  let hourlyRate = -1;

   while (true) {
     if (fullName.length >= 3 && fullName.length <= 30) {
        if (instrument.includes("Guitarist", "Bassist", "Percussionist", "Flautist")) {
          if (experience >= 0) { 
             if (hourlyRate >= 50) {
           break;

            } else {
             hourlyRate = parseFloat(prompt("Enter Musician Hourly Rate: "));
            }
         } else {
          experience = parseFloat(prompt("Enter Musician Experience: "));
       }
     } else {
        instrument = prompt("Enter Musician Instrument: ");
      }
} else {
    fullName = prompt("Enter Musician Name: ");
    }
  }
    const musician = new Musician(instrument, fullName, hourlyRate, experience);
    musicians.push(musician);
    console.log(musician); 
  }


module.exports = { createMusician };
