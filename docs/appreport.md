

# Class Descriptions
  
  ## Musician

Parent class
Includes Data for Musician's name, hourly rate, years of experience and fun fact.
Includes musicianIntroduction method that will introduce the Musician using given data

  ## Guitarist

Child class (inheritence from Musician)
Includes Data for Guitarist name, instrument and fun fact
No methods included as all functionalities are in Functions.js file

  ## Bassist

Child class (inheritence from Musician)
Includes Data for Bassist name, instrument and fun fact
No methods included as all functionalities are in Functions.js file

  ## Flautist

Child class (inheritence from Musician)
Includes Data for Flautist name, instrument and fun fact
No methods included as all functionalities are in Functions.js file

  ## Percussionist

Child class (inheritence from Musician)
Includes Data for Percussionist name, instrument and fun fact
No methods included as all functionalities are in Functions.js file

  ## Troupe

Parent class (no inheritence)
Includes Data for Guitarist's name, instrument and fun fact
No methods included as all functionalities are in Functions.js file

# Class Relationships

* Musician (parent class, no inheritence)
* Troupe (parent class, no inheritence)
* Bassist, Guitarist, Flautist, Percussionist (inherit from Musician)

# Program Inputs and Outputs

* Create Musician
  * createMusician function asks for input of name, instrument, years of experience and hourly rate. It will then output a new Musician object based on what instrument was chosen.

* Create Troupe
  * createTroupe function asks for input of Troupe Name, minimum booking duration and genre. It will then output a new Troupe object and add it to the troupes array.

* Add Musician To Troupe
  * addMusicianToTroupe function asks for input of Musician Name and Troupe Name, assigning the determined musician to the musicians array within the given troupe object.
 
* Troupe Summary
  * troupeSummary function asks for input of Troupe Name, summarising the data of the given Troupe object. It will display the troupe name, amount of given musicians based on instrument, genre, minimum booking duration and hourly rate.

* Detailed Troupe Summary
  * detailedSummary function asks for the same input and displays the same information as above, but adds the respective musicians introductions.

* Get Hourly Rate
  * getHourlyRate function asks for input of Troupe Name then calculates the total hourly rate of the troupe using the assigned musicians.

* Write File
  * writeFile lists the detailed summaries of all troupes to a given filename

* Read File
  * readFile populates the troupe array using names from a written file


# Class Behaviours

## Musician

getIntroductions introduces the Musician and returns their set details
countMusicians counts the amount of musicians within a troupe based on their instruments