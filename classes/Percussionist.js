const { Musician } = require("./Musician");
class Percussionist extends Musician {
    constructor(instrument, fullName, hourlyRate, experience) {
        super(instrument, fullName, hourlyRate, experience);
        this.musicianTypeName = "Percussionist";
        this.instrumentName = "Drums";
    }
}

module.exports={Percussionist};