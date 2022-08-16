
class Musician {
     constructor(fullName, yearsPlaying, hourlyRate) {
      this.fullName = fullName;
      this.yearsPlaying = yearsPlaying;
      this.hourlyRate = hourlyRate;
      this.funFact = ""; 
    }
    musicianIntroduction() {
      return `Hello there, my name is ${this.fullName} and I'm a ${this.musicianTypeName}.\
  I currently play the ${this.instrumentName} and I have ${this.yearsPlaying} years of experience. \
  It costs $${this.hourlyRate} per hour to hire me. \
  A fun fact about my instrument is: '${this.funFact}'\
  \n`;
    }
  }
  
  module.exports={Musician};