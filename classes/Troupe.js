    class Troupe {
    constructor(groupName, duration, genre) {
      this.name = groupName; // 3 to 30 char
      this.minDuration = duration; // 0.5 -> 3
      this.genre = genre; // rock, jazz, pop
      this.musicians = [];
    }
      countMusicians() {
      const musicianTypesCount = [0, 0, 0, 0]; 
      this.musicians.forEach((musician) => {
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
      for (let i = 0; i < this.musicians.length; i++) {
        troupeRate += this.musicians[i].hourlyRate
      }
      return troupeRate;
    }
    getMusicianCount() {
      const musicianCount = this.countMusicians();
      return `Guitarists: ${musicianCount[0]} Bassists: ${musicianCount[1]} Drummers: ${musicianCount[2]} Flautists: ${musicianCount[3]}`;
    }
    getMusicianIntroductions() {
      let returnString = '\n';
      for (let i = 0; i < this.musicians.length; i++){
        returnString += this.musicians[i].introductionLine()+'\n';
      }
      return returnString
    }
}

module.exports={Troupe};