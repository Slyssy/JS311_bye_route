const { application } = require('express');
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/hello', (req, res) => {
  res.send('hello');
});

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello there ${name}.`);
});

// * Use request query to send messages like the ones below.
// $ by?name=bob -> 'see ya later bob'
// $ by?name=mke -> 'see ya later mike'
// $ by -> 'see ya later '
// % hint: request.query.name

app.get('/bye', (req, res) => {
  const name = req.query.name;
  if (req.query.name === undefined) {
    res.send('See ya later.');
  } else {
    res.send(`See ya later ${name}.`);
  }
});

app.listen(PORT, () => {
  console.log(`Application started and listening on port ${PORT}`);
});
