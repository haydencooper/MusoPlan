"use strict";

const ps=require('prompt-sync');
const { Musician } = require('./classes/Musician');
const prompt=ps();
let musicians = new Array()


function createMusician()
{
    let instrument = "";
    let fullName = "";
    let rate = "";
    let experience = "";

    while(true){
        if(instrument.includes('Guitar', 'Bass Guitar', 'Drums', 'Flute')){
            if(fullName.length >= 3 && fullName.length <= 30){
                if(rate < 50) {
                    if(experience < 0)
                    break;
                } 
                else {
                    experience=prompt('Enter Years of Experience: '); 
                }
            } 
            else {
                fullName=prompt('Enter Musician Full Name: ');
            }
        } 
        else {
            instrument=prompt('Select Instrument: ');
        }
    }
}
const muso = new Musician();
muso.fullName='fname';
muso.hourlyRate='rate';
muso.experience='experience';
muso.instrument='instrument'
registerMusician(muso);



function registerMusician(musician)
{
    musicians.push(musician);
}


module.exports={createMusician, registerMusician}
