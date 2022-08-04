class Guitarist {
    constructor() {}
    set guitaristInstrument(instrument) {
        if (instrument.includes("Guitarist", "Bassist", "Percussionist", "Flautist")) {
        this.instrument = instrument;
        } else {
        console.log("Invalid Instrument. Please try again.");
        }
    }
    get guitaristInstrument() {
        return this.instrument;
    }
    set guitaristName(fullName) {
        if (fullName.length >= 3 && fullName.length <= 30) {
        this.fullName = fullName;
        } else {
        console.log("Invalid Name. Please try again.");
        }
    }
    get guitaristName() {
        return this.fullName;
    }
    set guitaristRate(hourlyRate) {
        if (hourlyRate < 50) {
        this.hourlyRate = hourlyRate;
        } else {
        console.log('Invalid Hourly Rate. Please try again.');
        }
    }
    get guitaristRate() {
        return this.hourlyRate;
    }
    set guitaristExperience(experience) {
        if (experience < 0) {
        this.experience = experience;
        } else {
        console.log('Invalid Years of Experience. Please try again.');
        }
    }
    get guitaristExperience() {
        return this.experience
    }
}