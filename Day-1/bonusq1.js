let count = 0;

for (let i = 1; i <= 100; i++) {
  let num = i;
  while (num > 0) {
    if (num % 10 == 7) {
      count++;
      console.log(i);
      break;
    }
    num = Math.floor(num / 10);
  }
}

console.log("The digit 7 appears " + count + " times.");