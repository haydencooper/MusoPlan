const { Musician } = require("./Musician"); // Import the Musician class from the Musician.js file
class Guitarist extends Musician {  // Create the Guitarist class which extends the Musician class
  constructor(fullName, yearsPlaying, hourlyRate) { 
    super(fullName, yearsPlaying, hourlyRate); // Call the superclass constructor
    this.musicianTypeName = "Guitarist"; // Set the musicianTypeName to "Guitarist"
    this.instrumentName = "Guitar"; // Set the instrumentName to "Guitar"
    this.funFact = "The more strings you have, the better you are"; // Set the funFact to "The more strings you have, the better you are"
  }
}

module.exports={Guitarist};