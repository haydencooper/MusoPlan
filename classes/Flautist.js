const { Musician } = require("./Musician"); // Import the Musician class from the Musician.js file
class Flautist extends Musician { // Create the Flautist class which extends the Musician class
  constructor(instrument, fullName, hourlyRate, experience) { // Constructor for the Flautist class
      super(instrument, fullName, hourlyRate, experience); // Call the superclass constructor
      this.musicianTypeName = "Flautist"; // Set the musicianTypeName to "Flautist"
      this.instrumentName = "Flute"; // Set the instrumentName to "Flute"
      this.funFact = "1989 heavy metal instrument of the year";
  }
}

module.exports={Flautist};