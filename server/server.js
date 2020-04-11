const express = require('express');
const request = require('request-promise');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const app = express();

const PORT = 3001;

app.use(express.json());


const darkGet = async (lat, long) => {
  try{
    let darkData = await request(`https://api.darksky.net/forecast/**KEY**/${lat},${long}?units=si&exclude=minutely,daily,alerts,flags`);
    darkData = JSON.parse(darkData);
    // console.log('darkdata', darkData);
    return darkData;
  } catch(err) {console.log('error', err)}
}

const conditionsHandle = async (req, res) => {
  let position = req.body.currentPosition;
  // console.log('position ',position);
  let lat = position[0];
  let long = position[1];
  // let elevation = position.elevation;
  let conditions = await darkGet(lat, long);
  res.status(200).send({
    status:'200',
    conditions:conditions,
  })
}


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));


app.get('/', function (req, res) {
  res.redirect('public/index')
});

app.post('/conditions', conditionsHandle);

app.listen(PORT, ()=> console.log('Listening on port ', PORT));
