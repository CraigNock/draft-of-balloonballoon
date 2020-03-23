import React from 'react';


export const ConditionsContext = React.createContext(null);


const initialStateCond = {
  time: 1584832063,
  summary: "Clear",
  icon: "clear-night",
  // nearestStormDistance: 154,
  // nearestStormBearing: 162,
  precipIntensity: 0,
  precipProbability: 0,
  temperature: -4.01,
  apparentTemperature: -6.55,
  // dewPoint: -16.86,
  // humidity: 0.36,
  // pressure: 1034,
  windSpeed: 0,
  windGust: 0,
  windBearing: 90,
  cloudCover: 0.25,
  // uvIndex: 0,
  // visibility: 16.093,
  // ozone: 400.3,
}


const reducer = (stateCond, action) => {
  switch (action.type) {
    case 'CHANGE-CONDITIONS':
      return {
        ...stateCond,
        windSpeed: action.conditions.windSpeed,
        windGust: action.conditions.windGust,
        windBearing: action.conditions.windBearing,
      };
  
    default:
      return;
  }
};



export const ConditionsProvider = ({children}) => {
  const [stateCond, dispatch] = React.useReducer(reducer, initialStateCond);

  const changeConditions = (newConditions) => {
    dispatch({
      type: 'CHANGE-CONDITIONS',
      conditions: newConditions,
    })
    // console.log('newwcond ', newConditions)
  };

  // const changeConditions = (newElevation) => {
  //   dispatch({
  //     type: 'CHANGE-ELEVATION',
  //     elevation: newElevation,
  //   })
  // };


  return (
    <ConditionsContext.Provider
      value={{
        stateCond,
        actions:{
          changeConditions,
          
        },
      }}
    >
      {children}
    </ConditionsContext.Provider>
  )
};