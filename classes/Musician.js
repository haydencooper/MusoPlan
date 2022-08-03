class Musician {
  constructor() {}
  set musicianInstrument(instrument) {
    if (instrument.includes("Guitar", "Bass Guitar", "Drums", "Flute")) {
      this.instrument = instrument;
    } else {
      console.log("Invalid Instrument. Please try again.");
    }
  }
  get musicianInstrument() {
    return this.instrument;
  }
  set musicianName(fullName) {
    if (fullName.length >= 3 && fullName.length <= 30) {
      this.fullName = fullName;
    } else {
      console.log("Invalud Name. Please try again.");
    }
  }
  get musicianName() {
    return this.fullName;
  }
  set musicianRate(hourlyRate) {
    if (hourlyRate < 50) {
      this.hourlyRate = hourlyRate;
    } else {
      console.log('Invalid Hourly Rate. Please try again.');
    }
  }
  get musicianRate() {
    return this.hourlyRate;
  }
  set musicianExperience(experience) {
    if (experience <= 0) {
      this.experience = experience;
    } else {
      console.log('Invalid Years of Experience. Please try again.');
    }
  }
  get musicianExperience() {
    return this.experience = experience;
  }
}
