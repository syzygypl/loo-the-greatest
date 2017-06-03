const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let isLooOccupied = false;

app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('The Loo is ' + (isLooOccupied ? 'occupied' : 'free for use :)'));
});

app.post('/loo', function (req, res) {
  console.log(req.body);
  if (req.body.status === true) {
    isLooOccupied = true;
  } else if (req.body.status === false) {
    isLooOccupied = false;
  }
  res.send('Loo The Greatest is thankful for that!');
});

app.listen(3000, function () {
  console.log('Loo The Greatest listening on port 3000!')
});
