// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

function printForecast(tempArray) {
  let forecast = "";
  for (let i in tempArray) {
    // console.log(typeof i);
    let string = `... ${tempArray[i]}ºC in ${1 + Number(i)} days `;
    forecast += string;
  }
  forecast += `...`;

  console.log(forecast);
}

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

printForecast(temps1);
printForecast(temps2);
