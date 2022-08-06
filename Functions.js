const ps = require("prompt-sync");
const { Musician } = require("./classes/Musician");
const { Guitarist } = require("./classes/Guitarist");
const prompt = ps();
const { Troupe } = require("./classes/Troupe");
var musicians = new Array();


 function createMusician() {
  let instrument = "";
  let yearsPlaying = -1;
  let fullName = "";
  let hourlyRate = -1;

   while (true) {
     if (fullName.length >= 3 && fullName.length <= 30) {
        if (instrument.includes('Guitar', 'Bass', 'Drums', 'Flute')) {
          if (yearsPlaying >= 0) { 
             if (hourlyRate >= 50) {
           break;

            } else {
             hourlyRate = parseFloat(prompt("Enter Musician Hourly Rate: "));
             console.log("\n Invalid hourly rate. Please enter a valid hourly rate.\n");
            }
         } else {
          yearsPlaying = parseFloat(prompt("Enter Musician Experience: "));
          console.log("\n Invalid experience. Please enter a valid experience.\n");
       }
     } else {
        instrument = prompt("Enter Musician Instrument: ");
      }
} else {
    fullName = prompt("Enter Musician Name: ");
    console.log("\n Invalid name. Please enter a valid name.\n");
    }
  }
  switch (instrument) {
    case "Guitar":
      // Guitarist
      return new Guitarist(fullName, yearsPlaying, hourlyRate, instrument);
    case "Bass":
      // Bass
      return new Bassist(fullName, yearsPlaying, hourlyRate, instrument);
    case "Drums":
      // Drums
      return new Percussionist(fullName, yearsPlaying, hourlyRate, instrument);
    case "Flute":
      // Flute
      return new Flautist(fullName, yearsPlaying, hourlyRate, instrument);
    case undefined:
      console.log('Invalid instrument. Please enter a valid instrument.');
  }

  }

  // 
  
  



module.exports = { createMusician };
