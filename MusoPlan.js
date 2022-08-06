"use strict";

const ps=require('prompt-sync');
const prompt=ps();
const {Musician} = require("./classes/Musician.js");
const {Guitarist} = require("./classes/Guitarist.js")
const Functions = require("./Functions.js")
var choice = 0;

    while (true) {
      if(choice==0)
      console.log('=======================');
      console.log('Select your choice');
      console.log('\t1.Create Musician\n\t2.Create Troupe\n\t3.Add Musician To Troupe\n\t4.Provide a summary description of a troupe\n\t5.Provide a detailed description of a troupe\n\t6.Calculate the cost of deploying the troupe for a number of hours\n\t7.Read a list of troupe names to be populated from a file\n\t8.Write a list of the detailed descriptions for all troupes to a given filename\n\t9.Exit');
      choice=prompt('Enter your choice [1,2,3,4,5,6,7,8,9]')
      
      if (choice==1) {
        // Create Musician
        Functions.createMusician();
      } else if (choice==2) {
        // Create Troupe
        choice = 0;
      } else if (choice==3) {
        // Add musician
        choice = 0;
      } else if (choice==4) {
        // Summary - troupe
        choice = 0;
      } else if (choice==5) {
        // Detailed description - troupe
        choice = 0;
      } else if (choice==6) {
        // Calc cost deploying troupe n hours
        choice = 0;
      } else if (choice==7) {
        // Read troupe names from file
        choice = 0;
      } else if (choice==8) {
        // Detailed description of all saved troupes
        choice = 0;
      } else if (choice==9) {
        // Quit Program
        break;
        // Uknown input error, passed validation checks somehow too
      }
    }




