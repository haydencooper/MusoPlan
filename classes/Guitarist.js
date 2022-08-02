const {Musician} = require('./Musician.js');

class Guitarist extends Musician {
    constructor(name, yearsPlaying, hourlyRate) {
        super(name, yearsPlaying, hourlyRate);
        this.instrument = "Guitar";
        this.funFact = "The more strings you have, the better you are";
    }
}