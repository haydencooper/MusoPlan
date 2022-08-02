const {Musician} = require('./Musician.js');

class Bassist extends Musician {
    constructor(name, yearsPlaying, hourlyRate) {
        super(name, yearsPlaying, hourlyRate);
        this.instruMent = "Bass Guitar";
        this.funFact = "Everyone loves a bassist";
    }
}