const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use( bodyParser.json() );
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/loo', function (req, res) {
  console.log(req.body);
  res.send('POST request');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
