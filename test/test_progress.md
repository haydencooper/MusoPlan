# Final Test Report (Hayden Cooper)

## Manual Testing

### Create a Musician Function (Manual)

### Instructions:

1. Select "Create A Musician" by inputting 1.
2. Select an instrument by inputting the correlated number (1. Guitar, 2. Bass, 3. Drums, 4. Flute)
3. Input the Musician's name (must be between 3 and 30 characters.)
4. Input the Musician's years of experience (cannot be 0 or negative.)
5. Input the Musician's hourly rate (must be above equal or greater than 50.)

 
| Identifier | Date/Time conducted | Input    | Expected Output | Actual Output     |
|:----:                |:----:                |  :----:        |    :----:   |          :----:  |
| CreateMusicianTest1 |1/09/2022 12:30 PM| '1' '1' 'Hayden' '10' '100'   | 'Successfully created Guitarist!' | 'Successfully created Guitarist!'   |
| CreateMusicianTest2 |1/09/2022 12:36 PM |'1' '5' | 'Select Instrument from the list below: 1. Guitar, 2. Bass, 3. Drums, 4. Flute' | 'Select Instrument from the list below: 1. Guitar, 2. Bass, 3. Drums, 4. Flute'     |
| CreateMusicianTest3 |1/09/2022 12:40 PM|'1' '1' 'Hayden' '10' '49'  | 'Enter Hourly Rate: '  | 'Enter Hourly Rate: '     |

### Create a Troupe Function (Manual)

### Instructions:

1. Select "Create A Troupe" by inputting 2.
2. Select a genre by inputting the correlated number (1. Rock, 2. Jazz, 3. Pop)
3. Input the Troupe's name (must be between 3 and 30 characters.)
4. Input the Troupe's minimum booking duration (must be between 0.5 and 3 hours.)

| Identifier | Date/Time conducted | Input    | Expected Output | Actual Output     |
|:----:                |:----:                |  :----:        |    :----:   |          :----:  |
| CreateTroupeTest1|1/09/2022 12:45 PM | '2' 'Hayden's Troupe' '3' | 'Successfully created Troupe!'     | 'Successfully created Rock Troupe!'   |
| CreateTroupeTest2 |1/09/2022 12:47 PM | '2' 'Hayden's Troupe' '0'  | 'Enter minimum duration of hire: '        | 'Enter minimum duration of hire: '     |
| CreateTroupeTest3 |1/09/2022 12:52 PM | '2' '4' | 'Select Genre from the list below: 1. Rock, 2. Jazz, 3. Pop'        | 'Select Genre from the list below: 1. Rock, 2. Jazz, 3. Pop'     |

### Add Musician to Troupe Function (Manual)

### Instructions:

1. Select "Add a Musician To Troupe" by inputting 3.
2. Input the Troupe's name (must match previously created Troupe)
3. Input the Musician's name (must match previously created Musician)

| Identifier | Date/Time conducted | Input    | Expected Output | Actual Output     |
|:----:                |:----:                |  :----:        |    :----:   |          :----:  |
| AddMusicianTest1 | 1/09/2022 1:30 PM | '3' 'Hayden's Troupe' 'Hayden' | 'Successfully created Troupe!'     | 'Successfully added Hayden to Hayden's Troupe'   |
| AddMusicianTest2 | 1/09/2022 1:35PM | '3' 'Haydon's Troupe'  | 'Enter Troupe Name: '        | 'Enter Troupe Name: '     |
| AddMusicianTest3 | 1/09/2022 1:37 PM | '3' 'Hayden's Troupe' 'Haydon' | 'Enter Musician Name: '        | 'Enter Musician Name: '     |


## Automated Testing

<img src=https://i.imgur.com/Fn8WKgO.png/>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<testsuites name="jest tests" tests="15" failures="8" errors="0" time="0.406">
  <testsuite name="undefined" errors="0" failures="8" skipped="0" timestamp="2022-09-02T02:25:23" time="0.329" tests="15">
    <testcase classname=" validation of musician name input" name=" validation of musician name input" time="0.001">
    </testcase>
    <testcase classname=" validation of incorrect musician name input, below 3" name=" validation of incorrect musician name input, below 3" time="0">
      <failure>Error: Name must be between 3 and 30 characters long
    at Musician.set fullName [as fullName] (C:\Users\Hayden\Documents\code\MusoPlan\classes\Musician.js:8:13)
    at Object.&lt;anonymous&gt; (C:\Users\Hayden\Documents\code\MusoPlan\test\musoplan.test.js:18:3)
    at Promise.then.completed (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\utils.js:333:28)
    at new Promise (&lt;anonymous&gt;)
    at callAsyncCircusFn (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\utils.js:259:10)
    at _callCircusTest (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:277:40)
    at _runTest (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:209:3)
    at _runTestsForDescribeBlock (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:97:9)
    at run (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:31:3)
    at runAndTransformResultsToJestFormat (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\legacy-code-todo-rewrite\jestAdapterInit.js:135:21)</failure>
    </testcase>
    <testcase classname=" validation of incorrect musician name input, above 30" name=" validation of incorrect musician name input, above 30" time="0">
      <failure>Error: Name must be between 3 and 30 characters long
    at Musician.set fullName [as fullName] (C:\Users\Hayden\Documents\code\MusoPlan\classes\Musician.js:8:13)
    at Object.&lt;anonymous&gt; (C:\Users\Hayden\Documents\code\MusoPlan\test\musoplan.test.js:24:3)
    at Promise.then.completed (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\utils.js:333:28)
    at new Promise (&lt;anonymous&gt;)
    at callAsyncCircusFn (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\utils.js:259:10)
    at _callCircusTest (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:277:40)
    at _runTest (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:209:3)
    at _runTestsForDescribeBlock (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:97:9)
    at run (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:31:3)
    at runAndTransformResultsToJestFormat (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\legacy-code-todo-rewrite\jestAdapterInit.js:135:21)</failure>
    </testcase>
    <testcase classname=" validation of musician hourly rate input" name=" validation of musician hourly rate input" time="0">
    </testcase>
    <testcase classname=" validation of incorrect musician hourly rate input, under 50" name=" validation of incorrect musician hourly rate input, under 50" time="0">
      <failure>Error: Hourly rate must be equal to or greater than 50
    at Musician.set hourlyRate [as hourlyRate] (C:\Users\Hayden\Documents\code\MusoPlan\classes\Musician.js:19:13)
    at Object.&lt;anonymous&gt; (C:\Users\Hayden\Documents\code\MusoPlan\test\musoplan.test.js:36:3)
    at Promise.then.completed (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\utils.js:333:28)
    at new Promise (&lt;anonymous&gt;)
    at callAsyncCircusFn (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\utils.js:259:10)
    at _callCircusTest (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:277:40)
    at _runTest (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:209:3)
    at _runTestsForDescribeBlock (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:97:9)
    at run (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:31:3)
    at runAndTransformResultsToJestFormat (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\legacy-code-todo-rewrite\jestAdapterInit.js:135:21)</failure>
    </testcase>
    <testcase classname=" validation of musician experience input" name=" validation of musician experience input" time="0.002">
    </testcase>
    <testcase classname=" validation of incorrect musician experience input, negative input" name=" validation of incorrect musician experience input, negative input" time="0.001">
      <failure>Error: Experience cannot be 0 or negative
    at Musician.set yearsPlaying [as yearsPlaying] (C:\Users\Hayden\Documents\code\MusoPlan\classes\Musician.js:31:13)
    at Object.&lt;anonymous&gt; (C:\Users\Hayden\Documents\code\MusoPlan\test\musoplan.test.js:49:3)
    at Promise.then.completed (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\utils.js:333:28)
    at new Promise (&lt;anonymous&gt;)
    at callAsyncCircusFn (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\utils.js:259:10)
    at _callCircusTest (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:277:40)
    at _runTest (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:209:3)
    at _runTestsForDescribeBlock (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:97:9)
    at run (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:31:3)
    at runAndTransformResultsToJestFormat (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\legacy-code-todo-rewrite\jestAdapterInit.js:135:21)</failure>
    </testcase>
    <testcase classname=" validation of invalid troupe name input, less than 3" name=" validation of invalid troupe name input, less than 3" time="0">
      <failure>Error: Name must be between 3 and 30 characters
    at Troupe.set troupeName [as troupeName] (C:\Users\Hayden\Documents\code\MusoPlan\classes\Troupe.js:9:13)
    at Object.&lt;anonymous&gt; (C:\Users\Hayden\Documents\code\MusoPlan\test\musoplan.test.js:55:3)
    at Promise.then.completed (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\utils.js:333:28)
    at new Promise (&lt;anonymous&gt;)
    at callAsyncCircusFn (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\utils.js:259:10)
    at _callCircusTest (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:277:40)
    at _runTest (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:209:3)
    at _runTestsForDescribeBlock (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:97:9)
    at run (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:31:3)
    at runAndTransformResultsToJestFormat (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\legacy-code-todo-rewrite\jestAdapterInit.js:135:21)</failure>
    </testcase>
    <testcase classname=" validation of troupe name input, more than 30" name=" validation of troupe name input, more than 30" time="0">
      <failure>Error: Name must be between 3 and 30 characters
    at Troupe.set troupeName [as troupeName] (C:\Users\Hayden\Documents\code\MusoPlan\classes\Troupe.js:9:13)
    at Object.&lt;anonymous&gt; (C:\Users\Hayden\Documents\code\MusoPlan\test\musoplan.test.js:61:3)
    at Promise.then.completed (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\utils.js:333:28)
    at new Promise (&lt;anonymous&gt;)
    at callAsyncCircusFn (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\utils.js:259:10)
    at _callCircusTest (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:277:40)
    at _runTest (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:209:3)
    at _runTestsForDescribeBlock (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:97:9)
    at run (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:31:3)
    at runAndTransformResultsToJestFormat (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\legacy-code-todo-rewrite\jestAdapterInit.js:135:21)</failure>
    </testcase>
    <testcase classname=" validation of troupe minimum duration input" name=" validation of troupe minimum duration input" time="0">
    </testcase>
    <testcase classname=" validation of invalid troupe minimum duration input, more than 3" name=" validation of invalid troupe minimum duration input, more than 3" time="0">
      <failure>Error: Minimum duration must be between .5 and 3 hours
    at Troupe.set minDuration [as minDuration] (C:\Users\Hayden\Documents\code\MusoPlan\classes\Troupe.js:19:13)
    at Object.&lt;anonymous&gt; (C:\Users\Hayden\Documents\code\MusoPlan\test\musoplan.test.js:73:3)
    at Promise.then.completed (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\utils.js:333:28)
    at new Promise (&lt;anonymous&gt;)
    at callAsyncCircusFn (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\utils.js:259:10)
    at _callCircusTest (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:277:40)
    at _runTest (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:209:3)
    at _runTestsForDescribeBlock (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:97:9)
    at run (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:31:3)
    at runAndTransformResultsToJestFormat (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\legacy-code-todo-rewrite\jestAdapterInit.js:135:21)</failure>
    </testcase>
    <testcase classname=" validation of invalid troupe minimum duration input, less than 3" name=" validation of invalid troupe minimum duration input, less than 3" time="0">
      <failure>Error: Minimum duration must be between .5 and 3 hours
    at Troupe.set minDuration [as minDuration] (C:\Users\Hayden\Documents\code\MusoPlan\classes\Troupe.js:19:13)
    at Object.&lt;anonymous&gt; (C:\Users\Hayden\Documents\code\MusoPlan\test\musoplan.test.js:79:3)
    at Promise.then.completed (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\utils.js:333:28)
    at new Promise (&lt;anonymous&gt;)
    at callAsyncCircusFn (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\utils.js:259:10)
    at _callCircusTest (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:277:40)
    at _runTest (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:209:3)
    at _runTestsForDescribeBlock (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:97:9)
    at run (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\run.js:31:3)
    at runAndTransformResultsToJestFormat (C:\Users\Hayden\Documents\code\MusoPlan\node_modules\jest-circus\build\legacy-code-todo-rewrite\jestAdapterInit.js:135:21)</failure>
    </testcase>
    <testcase classname=" validation of print musician introduction function" name=" validation of print musician introduction function" time="0">
    </testcase>
    <testcase classname=" test printing the troupe deployment cost function" name=" test printing the troupe deployment cost function" time="0.001">
    </testcase>
    <testcase classname=" test printing the troupe musicians count function" name=" test printing the troupe musicians count function" time="0.001">
    </testcase>
  </testsuite>
</testsuites>
.```