'use strict';

const ps=require('prompt-sync');
const prompt=ps();
const Functions = require("./Functions.js")
var choice = 0;
var musicians = [];
var troupes = [];



    while (true) {
      if(choice==0)
      console.log('=======================');
      console.log('Select your choice');
      console.log('\t1.Create Musician\n\t2.Create Troupe\n\t3.Add Musician To Troupe\n\t4.Provide a summary description of a troupe\n\t5.Provide a detailed description of a troupe\n\t6.Calculate the cost of deploying the troupe for a number of hours\n\t7.Read a list of troupe names to be populated from a file\n\t8.Write a list of the detailed descriptions for all troupes to a given filename\n\t9.Exit');
      choice=prompt('Enter your choice [1,2,3,4,5,6,7,8,9]')
      
      if (choice==1) {
        // Create Musician
        musicians.push(Functions.createMusician());
        console.log(musicians); // Add musician to array
      } else if (choice==2) {
        // Create Troupe
        troupes.push(Functions.createTroupe());
        console.log(troupes);// Add the troupe to the array of troupes
      } else if (choice==3) {
        // Add musician to troupe
        Functions.addMusicianToTroupe(musicians, troupes)
      } else if (choice==4) {
        // Summary - troupe
        Functions.summariseTroupe(); // Provide a summary of a troupe
      } else if (choice==5) {
        // Detailed description - troupe
        Functions.dTroupeSummary(troupe);
      } else if (choice==6) {
        // Calc cost deploying troupe and hours
        Functions.getHourlyRate()

      } else if (choice==7) {
        // Read troupe names from file
      } else if (choice==8) {
        // Detailed description of all saved troupes
      } else if (choice==9) {
        // Quit Program
        break;
        // Uknown input error, passed validation checks somehow too
      }
      choice = 0;
    }




