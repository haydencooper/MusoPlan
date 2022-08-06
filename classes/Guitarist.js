const { Musician } = require("./Musician");
class Guitarist extends Musician {
  constructor(fullName, yearsPlaying, hourlyRate) {
    super(fullName, yearsPlaying, hourlyRate);
    this.musicianTypeName = "Guitarist";
    this.instrumentName = "Guitar";
    this.funFact = "The more strings you have, the better you are";
  }
}

module.exports={Guitarist};