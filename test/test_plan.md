# Testing Plan

## MusoPlan Software

### Prepared by Hayden Cooper

## Introduction

The required testing for this application will be both Manual and Automatic.
Software required will be VCS Code, Node and Jest.
There will be no edge test cases in this report and no defects and/or modifcation strategies that will be required.

## Manual Testing

**Create A Musician**

**Identifier**: CreateMusicianTest1

  * **Test Case**: User will be able to successfully create a Musician through the app
  * **Preconditions**: User must have the app installed and initialised through terminal correctly
  * **Input Values**: 
    * Instrument (1. Guitar, 2. Bass, 3. Drums, 4. Flute)
    * Name (between 3 and 30 characters)
    * Experience (cannot be 0 or negative)
    * Hourly Rate (must be equal or greater than 50)
  * **Test Steps**:
    * Initialise app
    * Input '1' to access Create Musician function
    * Input values as required
  * **Expected Result**
    * Successfully creates a Musician and displays success message
    
**Identifier**: CreateMusicianTest2

  * **Test Case**: User will be unable to successfully create a Musician due to failing input validation
  * **Preconditions**: User must have the app installed and initialised through terminal correctly
  * **Input Values**: 
    * Instrument (1. Guitar, 2. Bass, 3. Drums, 4. Flute)
    * Name (between 3 and 30 characters)
    * Experience (cannot be 0 or negative)
    * Hourly Rate (must be equal or greater than 50)
  * **Test Steps**:
    * Initialise app
    * Input '1' to access Create Musician function
    * Input values as required
  * **Expected Result**
    * Successfully creates a Musician and displays success message


**Create A Troupe**
  
**Identifier**: CreateTroupeTest1

  * **Test Case**: User will be able to successfully create a Troupe through the app
  * **Preconditions**: User must have the app installed and initialised through terminal correctly
  * **Input Values**: 
    * Genre (1. Rock, 2. Jazz, 3. Pop)
    * Name (between 3 and 30 characters)
    * Minimum Booking Duration (must be equal to or greater than 0.5 hours and below 3 hours)
  * **Test Steps**:
    * Initialise app
    * Input '2' to access Create Troupe function
    * Input values as required
  * **Expected Result**
    * Successfully creates a Troupe with given values and displays success message

**Identifier**: CreateTroupeTest2

  * **Test Case**: User will be unable to successfully create a Troupe due to failing input validation
  * **Preconditions**: User must have the app installed and initialised through terminal correctly
  * **Input Values**: 
    * Genre (1. Rock, 2. Jazz, 3. Pop)
    * Name (between 3 and 30 characters)
    * Minimum Booking Duration (must be equal to or greater than 0.5 hours and below 3 hours)
  * **Test Steps**:
    * Initialise app
    * Input '2' to access Create Troupe function
    * Input values as required
  * **Expected Result**
    * Application will continue to ask for a valid input and will not continue until given


**Add a Musician To Troupe**

**Identifier**: AddMusicianTest1

  * **Test Case**: User will be unable to add a Musician to a Troupe due to no created Troupe
    * User must have the app installed and initialised through terminal correctly
    * User must input a Troupe name that has not been previously created
  * **Input Values**: 
    * Troupe Name (between 3 and 30 characters)
    * Musician Name (between 3 and 30 characters)
  * **Test Steps**:
    * Initialise app
    * Input '3' to access Add Musician to Troupe function
    * Input invalid Troupe Name or Musician Name value
  * **Expected Result**
    * Application will continue to ask for a valid Musician name until successful


**Identifier**: AddMusicianTest2

  * **Test Case**: User will be unable to add a Musician to a Troupe due to no created Musician
    * User must have the app installed and initialised through terminal correctly
    * User must create and input a valid Troupe to reach input Musician name
  * **Input Values**: 
    * Troupe Name (between 3 and 30 characters)
    * Musician Name (between 3 and 30 characters)
  * **Test Steps**:
    * Initialise app
    * Input '3' to access Add Musician to Troupe function
    * Input previously created Troupe name
    * Input invalid Musician name
  * **Expected Result**
    * Application will continue to ask for a valid Musician name until successful

**Identifier**: AddMusicianTest3

  * **Test Case**: User will successfully add a previously created Musician to a previously created Troupe.
    * User must have the app installed and initialised through terminal correctly
    * User must create and input a valid Troupe and Musician name
  * **Input Values**: 
    * Troupe Name (between 3 and 30 characters)
    * Musician Name (between 3 and 30 characters)
  * **Test Steps**:
    * Initialise app
    * Input '3' to access Add Musician to Troupe function
    * Input previously created Troupe name
    * Input previously created Musician name
  * **Expected Result**
    * Application will succesfully add chosen Musician to the chosen Troupe and display a success message
