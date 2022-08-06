const { Musician } = require("./Musician");
class Flautist extends Musician {
  constructor(instrument, fullName, hourlyRate, experience) {
      super(instrument, fullName, hourlyRate, experience);
      this.instrument = "Flautist";
  }
}

module.exports={Flautist};