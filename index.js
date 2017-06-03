require('dotenv').config({ silent: true }); // Load local environment

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('port', (process.env.PORT));

let isLooOccupied = false;

app.use(bodyParser.json());

app.post('/loo', (req, res) => {
  console.log(req.body);
  if (req.body.status === true) {
    isLooOccupied = true;
  } else if (req.body.status === false) {
    isLooOccupied = false;
  }
  res.send('Loo The Greatest is thankful for that!');
});

app.get('/status', (req, res) => {
  res.send({ isLooOccupied });
});
app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log('Loo The Greatest listening on port', app.get('port'));
});
