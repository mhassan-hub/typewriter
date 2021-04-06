const sentence = "hello there from lighthouse labs";

const printChar = (sentence) => {
  let x = 1000
  for (const char of sentence) {
    
    setTimeout(() => {
    // print the char here
    process.stdout.write(char);
    }, x) 
    x += 50;
  }
  setTimeout(() => {
    // print the char here
    console.log('\n')
    }, x) 
};

printChar('hey mama, im so proud of you');
