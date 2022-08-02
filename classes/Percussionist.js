const {Musician} = require('./Musician.js');

class Percussionist extends Musician {
    constructor(name, yearsPlaying, hourlyRate) {
        super(name, yearsPlaying, hourlyRate);
        this.instruMent = "Drums";
        this.funFact = "Me drum";
    }
}