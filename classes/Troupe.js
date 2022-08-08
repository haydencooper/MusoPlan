    class Troupe {
    constructor(groupName, duration, genre) {
      this.name = groupName; // 3 to 30 char
      this.minDuration = duration; // 0.5 -> 3
      this.genre = genre; // rock, jazz, pop
      this.musicians = []; // max len = 5
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
}

module.exports={Troupe};