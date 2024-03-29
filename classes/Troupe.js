class Troupe {
  constructor() {
    this.assignedMusicians = []; // Array of Musician objects
  }
  set troupeName(name) {
    if (name.length >= 3 && name.length <= 30) {
      this.name = name;
    } else {
      throw new Error("Name must be between 3 and 30 characters");
    }
  }
  getTroupeName() {
    return this.name;
  }
  set minDuration(duration) {
    if (duration >= 0.5 && duration <= 3) {
      this.duration = duration;
    } else {
      throw new Error("Minimum duration must be between .5 and 3 hours");
    }
  }
  getminDuration() {
    return this.duration;
  }

  countMusicians() {
    // Each index corresponds to Guitarist, Bassist, Percussionist, Flautist
    const musicianTypesCount = [0, 0, 0, 0];
    this.assignedMusicians.forEach((musician) => {
      // For each musician in the assignedMusicians array
      if (musician.instrumentName === "Guitar") {
        // If the musician's instrument is a Guitar
        musicianTypesCount[0]++; // Increment the index of the array at index 0
      } else if (musician.instrumentName === "Bass") {
        // If the musician's instrument is a Bass
        musicianTypesCount[1]++; // Increment the index of the array at index 1
      } else if (musician.instrumentName === "Drums") {
        // If the musician's instrument is a Drums
        musicianTypesCount[2]++; // Increment the index of the array at index 2
      } else if (musician.instrumentName === "Flute") {
        // If the musician's instrument is a Flute
        musicianTypesCount[3]++; // Increment the index of the array at index 3
      }
    });
    return musicianTypesCount;
  }
  getTroupeRate() {
    // Returns the total cost of the troupe for a number of hours
    let troupeRate = 0; // Initialize troupeRate to 0
    for (let i = 0; i < this.assignedMusicians.length; i++) {
      // For each musician in the assignedMusicians array
      troupeRate += this.assignedMusicians[i].rate * this.duration; // Add the hourly rate of the musician times the minimum duration to troupeRate
    }
    return `Cost of Deploying ${this.name} For ${this.duration} Hours: $${troupeRate}`; // Return the troupeRate
  }
  getMusicianCount() {
    // Returns the number of musicians in the troupe
    const musicianCount = this.countMusicians(); // Each index corresponds to Guitarist, Bassist, Percussionist, Flautist
    return `Guitarists: ${musicianCount[0]} Bassists: ${musicianCount[1]} Drummers: ${musicianCount[2]} Flautists: ${musicianCount[3]}`;
  }
  getMusicianIntroductions() {
    let returnString = "\n";
    for (let i = 0; i < this.assignedMusicians.length; i++) {
      returnString += this.assignedMusicians[i].musicianIntroduction() + "\n";
    }
    return returnString;
  }
  overviewSummary() {
    // Returns a summary of the troupe
    const musicianTypesCount = this.countMusicians(); // Each index corresponds to Guitarist, Bassist, Percussionist, Flautist
    return (
      `Troupe Name: ${this.name}` + // Returns the troupe name
      `\n` +
      `Musicians: ${musicianTypesCount[0]} Guitarists, ${musicianTypesCount[1]} Bassists, ${musicianTypesCount[2]} Percussionists, ${musicianTypesCount[3]} Flautists` + // Returns the number of each musician type
      `\n` +
      `Troupe Genre: ${this.genre}` + // Returns the troupe genre
      `\n` +
      `Minimum Booking Duration: ${this.minDuration}` + // Returns the minimum booking duration
      `\n` +
      `Hourly Rate: ${this.getHourlyRate()}` + // Returns the hourly rate of the troupe
      `\n`
    );
  }

  detailedSummary() {
    // Returns a detailed summary of the troupe
    return `${this.overviewSummary()}\nMusician introductions\n${
      this.assignedMusicians.length === 0
        ? ""
        : this.assignedMusicians // Returns the musician introductions for the troupe
            .map((musician) => musician.musicianIntroduction())
            .join("\n") // Join the musician introductions with a new line
    }`;
  }
  getHourlyRate() {
    // Returns the hourly rate of the troupe
    return this.assignedMusicians.length === 0
      ? 0
      : this.assignedMusicians
          .map((musician) => {
            return musician.hourlyRate;
          })
          .reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
          });
  }
}

module.exports = { Troupe };
