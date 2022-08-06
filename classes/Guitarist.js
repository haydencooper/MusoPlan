const { Musician } = require("./Musician");


class Guitarist extends Musician {
    constructor(instrument, fullName, hourlyRate, experience) {
        super(instrument, fullName, hourlyRate, experience);
        this.instrument = "Guitarist";
    }
}

module.exports={Guitarist};