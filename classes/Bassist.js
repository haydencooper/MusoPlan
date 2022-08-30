
const { Musician } = require("./Musician"); // Import the Musician class from the Musician.js file
class Bassist extends Musician { // Create the Bassist class which extends the Musician class
    constructor(instrument, fullName, hourlyRate, experience) {  // Constructor for the Bassist class
        super(instrument, fullName, hourlyRate, experience); // Call the superclass constructor
        this.musicianTypeName = "Bassist"; // Set the musicianTypeName to "Bassist"
        this.instrumentName = "Bass"; // Set the instrumentName to "Bass"
        this.funFact = "Everyone loves a bassist"; 
}
}
module.exports = {Bassist};