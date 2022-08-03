const ps=require('prompt-sync');
const { Musician } = require('./classes/Musician');
const prompt=ps();
let musicians = new Array()

function createMusician()
{
    let instrument = "";
    let musname = "";
    let rate = "";
    let experience = "";

    while(true)
    {
        if (!instrument.includes(geetar))
        {
            if (musname >= 3 && musname <= 30)
            {
                if (rate <= 50)
                {
                    if (experience <= 0)
                    
                    break;
                }
                else {
                    rate=prompt('Enter Hourly Rate: ')
                }
            }
            else {
                musname=prompt('Enter Full Name: ')
        }
    }
    else {
        experience=prompt('Enter Musician Experience: ')
    }
  }
const muso = new Musician();
muso.instrument=instrument;
muso.fullName=musname;
muso.hourlyRate=rate;
muso.experience=experience;
createMusician(muso);
}

function registerMusician(musician)
{
    musicians.push(Musician);
    console.log(musicians);
}

