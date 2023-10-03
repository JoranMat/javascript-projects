// Code your orbitCircumference function here:
function orbitCircumference(radius = 2000){
  return Math.round(Math.PI*2*radius)
}

// Code your missionDuration function here:

function missionDuration(numOrbits = 1,orbitRad = 2000,orbitSpd = 28000){
let timeHrs = (orbitCircumference(orbitRad) / orbitSpd)*numOrbits;
timeHrs = Math.round(timeHrs*100)/100; 
return timeHrs;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(crewMembers){
  return crewMembers[Math.floor(Math.random()*6)];
}


// Code your oxygenExpended function here:

function oxygenExpended(crewMember,orbitRad,orbitSpd){
let missionTime = missionDuration(3,orbitRad,orbitSpd);

  return `${crewMember.name} will perform the spacewalk, which will last ${missionTime} hours and require ${crewMember.o2Used(missionTime)}kg of oxygen`;
}


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
 

 console.log(`The mission will travel ${orbitCircumference()}km around the planet, and it will take ${missionDuration(5)} hours to complete.`)
 console.log(oxygenExpended(selectRandomEntry(crew),2300,30000));