for (let i = 1; i <= 40; i++) {
  if (i % 6 === 0) console.log(i + ": Divisible by 6");
  else if (i % 2 === 0) console.log(i + ": Even number");
  else if (i % 3 === 0) console.log(i + ": Divisible by 3");
  else console.log(i + ": Other number");
}