const { Musician } = require("./Musician");
class Percussionist extends Musician {
    constructor(instrument, fullName, hourlyRate, experience) {
        super(instrument, fullName, hourlyRate, experience);
        this.instrument = "Percussionist";
    }
}

module.exports={Percussionist};