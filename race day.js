let raceNumber = Math.floor(Math.random()* 1000);

let registredEarly = false ;

registredEarly ? console.log('Early') : console.log('Late');

let runnerAge = 18;

if (runnerAge >=18 && registredEarly === true) {raceNumber = (raceNumber + 1000)};

if (runnerAge >=18 && registredEarly === true) {
  console.log('Race will start at 9.30 AM ' + raceNumber);
}
else if (runnerAge >=18 && registredEarly === false) {
  console.log('Race will start at 11.00 AM ' + raceNumber);
}

else if(runnerAge <=18) {
  console.log('Race will start at 12.30 PM ' + raceNumber);
}


  





