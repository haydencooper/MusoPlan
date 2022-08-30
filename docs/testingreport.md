# Testing Report (Hayden Cooper)


## Create A Musician (Unit Test 1)

### Instructions:

1. Select "Create A Musician" by inputting 1.
2. Select an instrument by inputting the correlated number (1. Guitar, 2. Bass, 3. Drums, 4. Flute)
3. Input the Musician's name (must be between 3 and 30 characters.)
4. Input the Musician's years of experience (cannot be 0 or negative.)
5. Input the Musician's hourly rate (must be above equal or greater than 50.)

| Input    | Expected Output | Actual Output     |
| :---        |    :----:   |          ---: |
| '1' '1' 'Hayden' '10' '100'   | 'Successfully created Guitarist!' | 'Successfully created Guitarist!'   |
| '1' '5' | 'Select Instrument from the list below: 1. Guitar, 2. Bass, 3. Drums, 4. Flute' | 'Select Instrument from the list below: 1. Guitar, 2. Bass, 3. Drums, 4. Flute'     |
| '1' '1' 'Hayden' '10' '49'  | 'Enter Hourly Rate: '  | 'Enter Hourly Rate: '     |



## Create A Troupe (Unit Test 2)

### Instructions:

1. Select "Create A Troupe" by inputting 2.
2. Select a genre by inputting the correlated number (1. Rock, 2. Jazz, 3. Pop)
3. Input the Troupe's name (must be between 3 and 30 characters.)
4. Input the Troupe's minimum booking duration (must be between 0.5 and 3 hours.)

| Input    | Expected Output | Actual Output     |
| :---        |    :----:   |          ---: |
| '2' 'Hayden's Troupe' '3' | 'Successfully created Troupe!'     | 'Successfully created Rock Troupe!'   |
| '2' 'Hayden's Troupe' '0'  | 'Enter minimum duration of hire: '        | 'Enter minimum duration of hire: '     |
| '2' '4' | 'Select Genre from the list below: 1. Rock, 2. Jazz, 3. Pop'        | 'Select Genre from the list below: 1. Rock, 2. Jazz, 3. Pop'     |


## Add a Musician To troupe (Unit Test 3)

### Instructions:

1. Select "Add a Musician To Troupe" by inputting 3.
2. Input the Troupe's name (must match previously created Troupe)
3. Input the Musician's name (must match previously created Musician)

| Input    | Expected Output | Actual Output     |
| :---        |    :----:   |          ---: |
| '3' 'Hayden's Troupe' 'Hayden' | 'Successfully created Troupe!'     | 'Successfully added Hayden to Hayden's Troupe'   |
| '3' 'Haydon's Troupe'  | 'Enter Troupe Name: '        | 'Enter Troupe Name: '     |
| '3' 'Hayden's Troupe' 'Haydon' | 'Enter Musician Name: '        | 'Enter Musician Name: '     |

## Provide a summary description of a troupe (Unit Test 4)

### Instructions:

1. Select "Provide a summary description of a troupe" by inputting 4.
2. Input the Troupe's name (must match previously created Troupe)

| Input    | Expected Output | Actual Output     |
| :---        |    :----:   |          ---: |
| '4' 'Hayden's Troupe'  | 'Troupe Name: Hayden's Troupe Musicians: 1 Guitarists, 0 Bassists, 0 Percussionists, 0 Flautists Troupe Genre: Rock Minimum Booking Duration: 3 Hourly Rate: 51'     | 'Troupe Name: Hayden's Troupe Musicians: 1 Guitarists, 0 Bassists, 0 Percussionists, 0 Flautists Troupe Genre: Rock Minimum Booking Duration: 3 Hourly Rate: 51'     | 'Successfully added Hayden to Hayden's Troupe'    |
| '4' 'Haydon's Troupe'  | 'Enter Troupe Name: '        | 'Enter Troupe Name: '     |


## Modifications

All expected outputs match the actual outputs thus no modifications will be needed.

