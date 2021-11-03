const times = process.argv.slice(2); // takes args from command line (w1d2 lesson)

if (times.length === 0) {
  return
}


const timer = function(times) {

  for (const time of times) { // loops over the times array
    
    if (time > 0 && !isNaN(time)) {

      setTimeout(() => {  // setTimeout that will beep at each valid time (in secs)
        process.stdout.write('\x07');
      }, 1000 * time);
    }
  };

    }

    

timer(times);
// console.log(times)