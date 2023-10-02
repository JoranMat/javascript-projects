let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {return Math.round(Math.random()*10)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {return Math.round(Math.random()*10)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {return Math.round(Math.random()*10)}
};

let spaceBud = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {return Math.round(Math.random()*10)}
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {return Math.round(Math.random()*10)}
};

// Create an array to hold the animal objects.

let crew = [superChimpOne,superChimpTwo,salamander,spaceBud,waterBear];

// After you have created the other object literals, add the astronautID property to each one.

// Print out the relevant information about each animal.
function crewReports(crewMember){
return `${crewMember.name} is a ${crewMember.species}. They are ${crewMember.age} years old and ${crewMember.mass} kg. Their ID is ${crewMember.astronautID}.`;
}

for(let i=0;i<crew.length;i++){
   console.log(crewReports(crew[i]));
}

// Start an animal race!


function fitnessTest(crew){
let numSteps;
let turns = 0;
let results = [];
   for(let i =0;i<crew.length;i++){
      numSteps = 0;
      turns = 0;
      while(numSteps<20){
         numSteps += crew[i].move();
        
         turns++;
         console.log("WE loop",numSteps,turns);
      }
      results.push(`${crew[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
}

console.log(fitnessTest(crew));