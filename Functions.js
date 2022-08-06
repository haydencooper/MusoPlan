const ps = require("prompt-sync");
const { Musician } = require("./classes/Musician");
const prompt = ps();
const { Troupe } = require("./classes/Troupe");
var musicians = new Array();

function createMusician() {
  let instrument = getInstrument();
  let experience = -1;
  let fullName = "";
  let hourlyRate = -1;
  const validOptions = [...Array(nOptions).keys()].map(e => (e+1).toString()); // ['1', 2, 3, 4]

   while (true) {
     if (fullName.length >= 3 && fullName.length <= 30) {
        if (!validOptions.includes(input)) {
          if (experience >= 0) { 
             if (hourlyRate >= 50) {
           break;

            } else {
             hourlyRate = parseFloat(prompt("Enter Musician Hourly Rate: "));
             console.log("\n Invalid hourly rate. Please enter a valid hourly rate.\n");
            }
         } else {
          experience = parseFloat(prompt("Enter Musician Experience: "));
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
    const musician = new Musician(instrument, fullName, hourlyRate, experience);
    musicians.push(musician);
    console.log(musician); 
  }

  // 
  
  // switch (musicianTypeIndex) {
  //   case "1":
  //     // Guitarist
  //     return new Guitarist(name, yearsPlaying, hourlyRate);
  //   case "2":
  //     // Bass
  //     return new Bassist(name, yearsPlaying, hourlyRate);
  //   case "3":
  //     // Drums
  //     return new Percussionist(name, yearsPlaying, hourlyRate);
  //   case "4":
  //     // Flute
  //     return new Flautist(name, yearsPlaying, hourlyRate);
  //   default:
  //     // Somehow the user managed to bypass the checks from get user musician type so throw error
  //     throw new Error(
  //       `Uknown musician type input: ${musicianTypeIndex}, occurred for create musician`
  //     );
  // }




module.exports = { createMusician };
