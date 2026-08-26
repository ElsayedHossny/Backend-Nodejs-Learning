




console.log("1. Start");

// Timers Phase
setTimeout(() => {
  console.log("2. Timeout callback");
}, 0);

// Check Phase
setImmediate(() => {
  console.log("3. Immediate callback");
});

const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("fs callback");

  setTimeout(() => console.log("setTimeout Last  inside fs"), 0);
  setImmediate(() => console.log("setImmediate After Last inside fs"));
});

// Microtasks
Promise.resolve().then(() => {
  console.log("4. Promise callback");
});

// Next Tick Microtask
process.nextTick(() => {
  console.log("5. Next Tick callback");
});

console.log("6. End");
