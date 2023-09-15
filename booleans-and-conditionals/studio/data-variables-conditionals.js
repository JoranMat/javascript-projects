// Initialize Variables below

let date = "Monday 2019-03-18",
time = "10:05:34 AM",
astronautCount = 7,
astronautStatus	="ready",
averageAstronautMassKg=80.7,
crewMassKg=astronautCount * averageAstronautMassKg,
fuelMassKg=760000,
shuttleMassKg=74842.31,
totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg,
maximumMassLimit = 850000,
fuelTempCelsius = -225,
minimumFuelTemp = -300,
maximumFuelTemp	= -150,
fuelLevel = "100%",
weatherStatus = "clear",
preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount > 7)
{
    preparedForLiftOff = false;
}

// add logic below to verify all astronauts are ready

else if(astronautStatus != "ready")
{
    preparedForLiftOff = false;
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

else if(totalMassKg > 850000)
{
    preparedForLiftOff = false;
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

else if(fuelTempCelsius > maximumFuelTemp || fuelTempCelsius < minimumFuelTemp)
{
    preparedForLiftOff = false;
}

// add logic below to verify the fuel level is at 100%

else if(fuelLevel != "100%")
{
    preparedForLiftOff = false;
}

// add logic below to verify the weather status is clear

else if(weatherStatus != "clear")
{
    preparedForLiftOff = false;
}

// Verify shuttle launch can proceed based on above conditions
if(preparedForLiftOff)
{
    console.log("-".repeat(30))
    console.log("Date:", date, "\nTime:", time, "\nAstronaut Count:", astronautCount, "\nCrew Mass:", crewMassKg,
    "\nFuel Mass:", fuelMassKg, "\nShuttle Mass:", shuttleMassKg, "\nTotal Mass:", totalMassKg,
    "\nFuel Temperature:", fuelTempCelsius, "\nWeather Status:", weatherStatus, "\n" + "-".repeat(30),
    "\nAll systems are fully functional. Have a safe flight." );
}
else
console.log("Mission aborted");
