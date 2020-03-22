import React from 'react';


export const ConditionsContext = React.createContext(null);


const initialState = {
  time: 1584832063,
  summary: "Clear",
  icon: "clear-night",
  nearestStormDistance: 154,
  nearestStormBearing: 162,
  precipIntensity: 0,
  precipProbability: 0,
  temperature: -4.01,
  apparentTemperature: -6.55,
  // dewPoint: -16.86,
  // humidity: 0.36,
  // pressure: 1034,
  windSpeed: 5.86,
  windGust: 19.14,
  windBearing: 302,
  cloudCover: 0.25,
  uvIndex: 0,
  visibility: 16.093,
  // ozone: 400.3,
}



export const ConditionsProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // const changeConditions = (newPosition) => {
  //   dispatch({
  //     type: 'CHANGE-POSITION',
  //     position: newPosition,
  //   })
  // };

  // const changeConditions = (newElevation) => {
  //   dispatch({
  //     type: 'CHANGE-ELEVATION',
  //     elevation: newElevation,
  //   })
  // };


  return (
    <ConditionsContext.Provider
      value={{
        state,
        actions:{
          changeConditions,
          changeConditions,
        },
      }}
    >
      {children}
    </ConditionsContext.Provider>
  )
};