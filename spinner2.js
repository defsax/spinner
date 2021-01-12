const frames = ['|','/', '-', '\\', '|', '/', '-', '\\', '|'];

let delay = 100;
for (const frame of frames) {
  setTimeout(() => {
    process.stdout.write('\r' + frame + '    ');
  }, delay);
  delay += 200;
}

//start prompt on new line
setTimeout(() => {
  console.log();
}, delay + 100);