const { Musician } = require("./Musician"); // Import the Musician class from the Musician.js file
class Percussionist extends Musician { // Create the Percussionist class which extends the Musician class
    constructor(instrument, fullName, hourlyRate, experience) { // Constructor for the Percussionist class
        super(instrument, fullName, hourlyRate, experience); // Call the superclass constructor
        this.musicianTypeName = "Percussionist"; // Set the musicianTypeName to "Percussionist"
        this.instrumentName = "Drums"; // Set the instrumentName to "Drums"
        this.funFact = "Me drum";
    }
}

module.exports={Percussionist};