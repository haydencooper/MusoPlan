class Musician {
    constructor(name, yearsPlaying, hourlyRate) {
      this.fullName=name;
      this.experience=experience;
      this.hourlyRate=hourlyRate;
      this.instrument = "";
      this.funfact = "";
    }

    introduction() {
        console.log(`Hello my name is ${this.fullName}`)
    }
}

module.exports={Musician};