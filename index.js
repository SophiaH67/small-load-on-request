const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const iterations = req.query.iterations;
  const timer = Math.random();
  console.time(`iterations-${iterations}-${timer}`);
  // Do some noop's x times
  for (let i = 0; i < iterations; i++) {
    Function.prototype();
  }
  console.timeEnd(`iterations-${iterations}-${timer}`);

  res.send("Hello World");
});

app.listen(8000, () => {
  console.log("starting...");
});
