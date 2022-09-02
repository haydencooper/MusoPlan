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

test('validation of incorrect musician name input, below 3', () => {
  const hayden = new Musician()
  hayden.fullName = "Ha"
  expect(hayden.getfullName()).toBe("Ha");
})

test('validation of incorrect musician name input, above 30', () => {
  const hayden = new Musician()
  hayden.fullName = "HaydenWilliamCooperWrongNameInput"
  expect(hayden.getfullName()).toBe("HaydenWilliamCooperWrongNameInput");
})

test('validation of musician hourly rate input', () => {
  const hayden = new Musician()
  hayden.hourlyRate = 60;
  expect(hayden.gethourlyRate()).toBe(60);
})

test('validation of incorrect musician hourly rate input, under 50', () => {
  const hayden = new Musician()
  hayden.hourlyRate = 49;
  expect(hayden.gethourlyRate()).toBe(49);
})


test('validation of musician experience input', () => {
  const hayden = new Musician()
  hayden.yearsPlaying = 20;
  expect(hayden.getYearsPlaying()).toBe(20);
})

test('validation of incorrect musician experience input, negative input', () => {
  const hayden = new Musician()
  hayden.yearsPlaying = -1;
  expect(hayden.getYearsPlaying()).toBe(-1);
})

test('validation of invalid troupe name input, less than 3', () => {
  const mytroupe = new Troupe()
  mytroupe.troupeName = "My"
  expect(mytroupe.getTroupeName()).toBe("My");
})

test('validation of troupe name input, more than 30', () => {
  const mytroupe = new Troupe()
  mytroupe.troupeName = "Incorrect Troupe Name 30 Characters"
  expect(mytroupe.getTroupeName()).toBe("Incorrect Troupe Name 30 Characters");
})

test('validation of troupe minimum duration input', () => {
  const mytroupe = new Troupe()
  mytroupe.minDuration = 3;
  expect(mytroupe.getminDuration()).toBe(3);
})

test('validation of invalid troupe minimum duration input, more than 3', () => {
  const mytroupe = new Troupe()
  mytroupe.minDuration = 10;
  expect(mytroupe.getminDuration()).toBe(10);
})

test('validation of invalid troupe minimum duration input, less than 3', () => {
  const mytroupe = new Troupe()
  mytroupe.minDuration = .3;
  expect(mytroupe.getminDuration()).toBe(.3);
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