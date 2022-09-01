const { Musician } = require("../classes/Musician");
const { Guitarist } = require("../classes/Guitarist");
const { Bassist } = require("../classes/Bassist");
const { Flautist } = require("../classes/Flautist");
const { Percussionist } = require("../classes/Percussionist");
const { Troupe } = require("../classes/Troupe");
const Functions = require("../Functions.js")



test('validation of musician name input', () => {
  const hayden = new Musician()
  hayden.fullName = "Hayden"
  expect(hayden.getfullName()).toBe("Hayden");
})

test('validation of musician hourly rate input', () => {
  const hayden = new Musician()
  hayden.hourlyRate = 60;
  expect(hayden.gethourlyRate()).toBe(60);
})

test('validation of musician experience input', () => {
  const hayden = new Musician()
  hayden.yearsPlaying = 20;
  expect(hayden.getYearsPlaying()).toBe(20);
})

test('validation of troupe name input', () => {
  const mytroupe = new Troupe()
  mytroupe.troupeName = "My Troupe"
  expect(mytroupe.getTroupeName()).toBe("My Troupe");
})

test('validation of troupe minimum duration input', () => {
  const mytroupe = new Troupe()
  mytroupe.duration = 3
  expect(mytroupe.getMinDuration()).toBe(3);
})

test('validation of print musician introduction function', () => {
  const hayden = new Musician()
  hayden.fullName = "Hayden"
  hayden.hourlyRate = 60
  hayden.yearsPlaying = 10
  hayden.funFact = "The more strings you have, the better you are"
  hayden.musicianTypeName = "Guitarist";
  hayden.instrumentName = "Guitar";
  expect(hayden.musicianIntroduction()).toBe("Hello there, my name is Hayden and I'm a Guitarist.  I currently play the Guitar and I have 10 years of experience.   It costs $60 per hour to hire me.   A fun fact about my instrument is: The more strings you have, the better you are")
})


test('test printing the troupe deployment cost function', () => {
  const hayden = new Guitarist()
  hayden.name = 'Hayden'
  hayden.rate = '500'
  hayden.experience = '50'
  const mytroupe = new Troupe()
  mytroupe.name = 'Troupe'
  mytroupe.minDuration = 3
  mytroupe.genre = 'Rock'
  mytroupe.assignedMusicians.push(hayden);

  expect(mytroupe.getTroupeRate()).toEqual("Cost of Deploying Troupe For 3 Hours: $1500");
})

test('test printing the troupe musicians count function', () => {
  const hayden = new Guitarist()
  hayden.name = 'Hayden'
  hayden.rate = '500'
  hayden.experience = '50'
  const mytroupe = new Troupe()
  mytroupe.name = 'Troupe'
  mytroupe.minDuration = 3
  mytroupe.genre = 'Rock'
  mytroupe.assignedMusicians.push(hayden);

  expect(mytroupe.countMusicians()).toEqual([1, 0, 0, 0]);
})