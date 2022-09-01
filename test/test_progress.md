# Final Test Report (Hayden Cooper)

## Manual Testing

### Create a Musician Function (Manual)
 
| Identifier | Date/Time conducted | Input    | Expected Output | Actual Output     |
|:----:                |:----:                |  :----:        |    :----:   |          :----:  |
| CreateMusicianTest1 |1/09/2022 12:30 PM| '1' '1' 'Hayden' '10' '100'   | 'Successfully created Guitarist!' | 'Successfully created Guitarist!'   |
| CreateMusicianTest2 |1/09/2022 12:36 PM |'1' '5' | 'Select Instrument from the list below: 1. Guitar, 2. Bass, 3. Drums, 4. Flute' | 'Select Instrument from the list below: 1. Guitar, 2. Bass, 3. Drums, 4. Flute'     |
| CreateMusicianTest3 |1/09/2022 12:40 PM|'1' '1' 'Hayden' '10' '49'  | 'Enter Hourly Rate: '  | 'Enter Hourly Rate: '     |

### Create a Troupe Function (Manual)

| Identifier | Date/Time conducted | Input    | Expected Output | Actual Output     |
|:----:                |:----:                |  :----:        |    :----:   |          :----:  |
| CreateTroupeTest1|1/09/2022 12:45 PM | '2' 'Hayden's Troupe' '3' | 'Successfully created Troupe!'     | 'Successfully created Rock Troupe!'   |
| CreateTroupeTest2 |1/09/2022 12:47 PM | '2' 'Hayden's Troupe' '0'  | 'Enter minimum duration of hire: '        | 'Enter minimum duration of hire: '     |
| CreateTroupeTest3 |1/09/2022 12:52 PM | '2' '4' | 'Select Genre from the list below: 1. Rock, 2. Jazz, 3. Pop'        | 'Select Genre from the list below: 1. Rock, 2. Jazz, 3. Pop'     |

### Add Musician to Troupe Function (Manual)

| Identifier | Date/Time conducted | Input    | Expected Output | Actual Output     |
|:----:                |:----:                |  :----:        |    :----:   |          :----:  |
| AddMusicianTest1 | 1/09/2022 1:30 PM | '3' 'Hayden's Troupe' 'Hayden' | 'Successfully created Troupe!'     | 'Successfully added Hayden to Hayden's Troupe'   |
| AddMusicianTest2 | 1/09/2022 1:35PM | '3' 'Haydon's Troupe'  | 'Enter Troupe Name: '        | 'Enter Troupe Name: '     |
| AddMusicianTest3 | 1/09/2022 1:37 PM | '3' 'Hayden's Troupe' 'Haydon' | 'Enter Musician Name: '        | 'Enter Musician Name: '     |


## Automated Testing

<img src=https://i.imgur.com/IkJnuET.png/>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<testsuites name="jest tests" tests="8" failures="0" errors="0" time="0.432">
  <testsuite name="undefined" errors="0" failures="0" skipped="0" timestamp="2022-09-01T17:33:15" time="0.366" tests="8">
    <testcase classname=" validation of musician name input" name=" validation of musician name input" time="0.002">
    </testcase>
    <testcase classname=" validation of musician hourly rate input" name=" validation of musician hourly rate input" time="0">
    </testcase>
    <testcase classname=" validation of musician experience input" name=" validation of musician experience input" time="0">
    </testcase>
    <testcase classname=" validation of troupe name input" name=" validation of troupe name input" time="0">
    </testcase>
    <testcase classname=" validation of troupe minimum duration input" name=" validation of troupe minimum duration input" time="0">
    </testcase>
    <testcase classname=" validation of print musician introduction function" name=" validation of print musician introduction function" time="0">
    </testcase>
    <testcase classname=" test printing the troupe deployment cost function" name=" test printing the troupe deployment cost function" time="0.001">
    </testcase>
    <testcase classname=" test printing the troupe musicians count function" name=" test printing the troupe musicians count function" time="0">
    </testcase>
  </testsuite>
</testsuites>
.```