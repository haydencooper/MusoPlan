'use strict';

const ps=require('prompt-sync');
const prompt=ps();
const fs = require('fs')
fs.readFileSync('package.json', 'utf8')
const Functions = require("./Functions.js")
const {Troupe} = require("./classes/Troupe");
let choice = 0;
const musicians = [];
const troupes = [];


    while (true) {
      if(choice==0)
      console.log('=======================');
      console.log('Select your choice');
      console.log('\t1.Create Musician\n\t2.Create Troupe\n\t3.Add Musician To Troupe\n\t4.Provide a summary description of a troupe\n\t5.Provide a detailed description of a troupe\n\t6.Calculate the cost of deploying the troupe for a number of hours\n\t7.Read a list of troupe names to be populated from a file\n\t8.Write a list of the detailed descriptions for all troupes to a given filename\n\t9.Exit');
      choice=prompt('Enter your choice [1,2,3,4,5,6,7,8,9]')
      
      if (choice==1) {
         musicians.push(Functions.createMusician());// Create Musician
      } else if (choice==2) {        
        troupes.push(Functions.createTroupe()); // Create Troupe
      } else if (choice==3) {
       Functions.addMusicianToTroupe(musicians,troupes); // Add Musician to Troupe
      } else if (choice==4) {
       Functions.tSummary(troupes)   // Troupe Summary
      } else if (choice==5) {
       Functions.detailedSummary(troupes);   // Detailed Troupe Summary
      } else if (choice==6) {
      Functions.getHourlyRate(troupes)   // Deployment cost and Hourly Rate
      } else if (choice==7) {
      // Detailed description of all saved troupes
      Functions.writeFile(troupes)
      } else if (choice==8) {
        // Read troupe names from file
      Functions.readFile()
      } else if (choice==9) {
        // Quit Program
        break;
        // Uknown input error, passed validation checks somehow too
      }
      choice = 0;
    }




