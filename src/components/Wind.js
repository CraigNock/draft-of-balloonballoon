import React from 'react';
// import styled from 'styled-components';

// import {PositionContext} from './PositionContext';
// const {position, elevation} = React.useContext(PositionContext);




const getWind = (pos) => {
  console.log(pos);
  let currentPosition = [...pos];
  console.log('wind', currentPosition);

  fetch('http://localhost:3000/conditions', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json"
    },
    body:JSON.stringify({currentPosition})
})
    .then(data => data.json())
    .then(data => {
      console.log('current conditions ', data.conditions.currently);
      console.log('windSpeed ', data.conditions.currently.windSpeed)
    });
}

export default getWind;



// "currently": {
//   "time": 1584816805, -->sort out a local time conversion
//   "summary": "Clear",
//   "icon": "clear-day", --> sort out icon display skycons
//   "nearestStormDistance": 375,
//   "nearestStormBearing": 147,
//   "precipIntensity": 0,
//   "precipProbability": 0,
//   "temperature": -3.41,
//   "apparentTemperature": -8.28, --> 'feels like'
//   "dewPoint": -15.53,
//   "humidity": 0.39,
//   "pressure": 1032.6,
//   "windSpeed": 13.53, kph
//   "windGust": 20.32, kph
//   "windBearing": 338,
//   "cloudCover": 0.05, -->ie 5%
//   "uvIndex": 3,
//   "visibility": 16.093, -->(km)
//   "ozone": 405.9
// }