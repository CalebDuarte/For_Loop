for (let hours = 1; hours <= 24; hours++){
  let total = 0;
  if (hours <= 2) total = hours * 3;
  else if (hours <= 6) total = 2 * 3 + hours - 2 * 5;
  else if (hours <= 12) total = 2 * 3 + 4 * 5 + hours - 6 * 4;
  else total = 2 * 3 + 4 * 5 + 6 * 4 + hours - 12 * 2;
  console.log(hours + " hours = " + total);
}