const {Musician} = require('./Musician.js');

class Flautist extends Musician {
    constructor(name, yearsPlaying, hourlyRate) {
        super(name, yearsPlaying, hourlyRate);
        this.instruMent = "Flute";
        this.funFact = "1989 heavy metal instrument of the year";
    }
}