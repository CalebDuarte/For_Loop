for (let i = 2000; i <= 2050; i++) {
  if (i % 4 == 0 && (i % 100 != 0 || i % 400 == 0)) {
    console.log(i);
  }
}