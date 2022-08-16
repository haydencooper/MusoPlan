    class Troupe {
    constructor(name, duration, genre) {
      this.name = name; // 3 to 30 char
      this.minDuration = duration; // 0.5 -> 3
      this.genre = genre; // rock, jazz, pop
      this.assignedMusicians = [];

    }
      countMusicians() {
      const musicianTypesCount = [0, 0, 0, 0]; 
      this.assignedMusicians.forEach((musician) => {
        if (musician.instrumentName === "Guitar") {
          musicianTypesCount[0]++;
        } else if (musician.instrumentName === "Bass") {
          musicianTypesCount[1]++;
        } else if (musician.instrumentName === "Drums") {
          musicianTypesCount[2]++;
        } else if (musician.instrumentName === "Flute") {
          musicianTypesCount[3]++;
        }
      });
      return musicianTypesCount;
    }
    getTroupeRate() {
      let troupeRate = 0;
      for (let i = 0; i < this.assignedMusicians.length; i++) {
        troupeRate += this.assignedMusicians[i].hourlyRate
      }
      return troupeRate;
    }
    getMusicianCount() {
      const musicianCount = this.countMusicians();
      return `Guitarists: ${musicianCount[0]} Bassists: ${musicianCount[1]} Drummers: ${musicianCount[2]} Flautists: ${musicianCount[3]}`;
    }
    getMusicianIntroductions() {
      let returnString = '\n';
      for (let i = 0; i < this.assignedMusicians.length; i++){
        returnString += this.assignedMusicians[i].introductionLine()+'\n';
      }
      return returnString
    }
    overviewSummary() {
      const musicianTypesCount = this.countMusicians(); // Each index corresponds to Guitarist, bassist, percussionist, flautist
      return (
        `Troupe: ${this.name}` +
        `\n` +
        `Has: ${musicianTypesCount[0]} Guitarists, ${musicianTypesCount[1]} Bassists, ${musicianTypesCount[2]} Percussionists, ${musicianTypesCount[3]} Flautists` +
        `\n` +
        `Genre: ${this.genre}` +
        `\n` +
        `Min booking duration: ${this.minDuration}` +
        `\n` +
        `Hourly rate: ${this.getHourlyRate()}` +
        `\n`
      );
    }
  
    detailedSummary() {
      return `${this.overviewSummary()}\nMusician introductions\n${
        this.assignedMusicians.length === 0
          ? ""
          : this.assignedMusicians
              .map((musician) => musician.introductionLine())
              .join("\n")
      }`;
    }
    getHourlyRate() {
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


module.exports={Troupe};
