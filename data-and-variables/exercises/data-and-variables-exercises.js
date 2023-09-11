// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleMph = 17500;
let marsKm = 225000000;
let moonKm = 384400;
let mileToKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(shuttleName));
console.log(typeof(shuttleMph));
console.log(typeof(marsKm));
console.log(typeof(moonKm));
console.log(typeof(mileToKm));

// Calculate a space mission below

let marsMiles = marsKm * mileToKm;
let etaH = marsMiles/shuttleMph;
let etaDays = etaH/24;

// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + etaDays + " days to reach Mars.");
// Calculate a trip to the moon below
let moonMiles = moonKm * mileToKm;
let hrsToMoon = moonMiles/shuttleMph;
let daysToMoon = hrsToMoon/24;
// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");