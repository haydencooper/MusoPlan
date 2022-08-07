    class Troupe {
    constructor(groupName, duration, genre) {
      this.name = groupName; // 3 to 30 char
      this.minDuration = duration; // 0.5 -> 3
      this.genre = genre; // rock, jazz, pop
      this.musicians = []; // max len = 5
    }
}

module.exports={Troupe};