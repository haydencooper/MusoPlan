const { Musician } = require("./Musician");
class Bassist extends Musician {
    constructor(instrument, fullName, hourlyRate, experience) {
        super(instrument, fullName, hourlyRate, experience);
        this.instrument = "Bassist";
    }
}

module.exports = {Bassist};