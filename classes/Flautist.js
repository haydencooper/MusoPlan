const { Musician } = require("./Musician");
class Flautist extends Musician {
  constructor(instrument, fullName, hourlyRate, experience) {
      super(instrument, fullName, hourlyRate, experience);
      this.musicianTypeName = "Flautist";
      this.instrumentName = "Flute";
  }
}

module.exports={Flautist};