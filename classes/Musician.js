
class Musician {
     constructor(fullName, yearsPlaying, hourlyRate) { // Constructor for the Musician class
      this.fullName = fullName; 
      this.yearsPlaying = yearsPlaying; 
      this.hourlyRate = hourlyRate; 
      this.funFact = "";  
    }
    musicianIntroduction() { // Returns the musician's introduction
      return `Hello there, my name is ${this.fullName} and I'm a ${this.musicianTypeName}.\
  I currently play the ${this.instrumentName} and I have ${this.yearsPlaying} years of experience. \
  It costs $${this.hourlyRate} per hour to hire me. \
  A fun fact about my instrument is: '${this.funFact}'\
  \n`;
    }
  }
  
  module.exports={Musician}; // Export the Musician class so it can be used in other files