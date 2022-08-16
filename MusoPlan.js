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
      console.log('\t1.Create Musician\n\t2.Create Troupe\n\t3.Add Musician To Troupe\n\t4.Provide a summary description of a troupe\n\t5.Provide a detailed description of a troupe\n\t6.Calculate the cost of deploying the troupe for a number of hours\n\t7.Write a list of the detailed descriptions for all troupes to a given filename\n\t8.Read a list of troupe names to be populated from a file\n\t9.Exit'); 
      choice=prompt('Enter your choice [1,2,3,4,5,6,7,8,9]')
      
      if (choice==1) {
         musicians.push(Functions.createMusician());// Create Musician
      } else if (choice==2) {        
        troupes.push(Functions.createTroupe()); // Create Troupe
      } else if (choice==3) {
       Functions.addMusicianToTroupe(musicians,troupes); // Add Musician to Troupe
      } else if (choice==4) {
       Functions.troupeSummary(troupes)   // Troupe Summary
      } else if (choice==5) {
       Functions.detailedSummary(troupes);   // Detailed Troupe Summary
      } else if (choice==6) {
      Functions.getHourlyRate(troupes)   // Deployment cost based on given hours
      } else if (choice==7) {
      Functions.writeFile(troupes)  // Write troupe descriptions to file
      } else if (choice==8) {
      Functions.readFile(troupes) // Read written troupe descriptions file
      } else if (choice==9) {
        break; // Quit Program
        
      }
      choice = 0;
    }




