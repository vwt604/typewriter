//FUNCTION: typewriter animation effect using setTimeout()

const sentence = "hello there from lighthouse labs";

let delay = 1000;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  //delay between characters
  delay += 100;
}

//pushes command line prompt down one line
setTimeout(() => {
  process.stdout.write("\n");
}, delay);


