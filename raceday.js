let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly=true;
const runnerAge=19;

if(runnerAge>18 && registeredEarly){
  raceNumber+=1000;
}

if(runnerAge>18 && registeredEarly){
  console.log(`You will race at 9:30 am. Your race number is: ${raceNumber}`);
}else if(runnerAge>18 && !registeredEarly){
  console.log(`You will race at 11:00 am. Your race number is: ${raceNumber}`);
}else if(runnerAge<18){
  console.log(`You will race at 12:30 pm. Your race number is: ${raceNumber}`);
}else{
  console.log("See the registration desk.")
}