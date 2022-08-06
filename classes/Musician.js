
class Musician {
     constructor(fullName, yearsPlaying, hourlyRate) {
      this.fullName = fullName;
      this.yearsPlaying = yearsPlaying;
      this.hourlyRate = hourlyRate;
      this.instrument = "";
      this.funFact = "";
    }
    /* Introduction line stating:
      - Name
      - instrument
      - years playing
      - hourly rate
      - interesting fact (see below)
    */
    introductionLine() {
      return `Hi! My name is ${this.fullName} and I'm a ${this.musicianTypeName}.\
  I've been playing the ${this.instrumentName} for ${this.yearsPlaying} years. \
  I charge $${this.hourlyRate} per hour to hire. \
  A fact I always tell people about my instrument is: '${this.funFact}'\
  \n`;
    }
  }
  
  module.exports={Musician};