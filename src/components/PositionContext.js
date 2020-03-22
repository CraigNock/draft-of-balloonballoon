import React from 'react';


export const PositionContext = React.createContext(null);


const initialState = {
  position: [45.5, -73.59],
  elevation: 850,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE-POSITION':
      return {
        ...state,
        position: action.position,
      };
    case 'CHANGE-ELEVATION':
      return {
        ...state,
        elevation: action.elevation,
      };
  
    default:
      return;
  }
};



export const PositionProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const changePosition = (newPosition) => {
    dispatch({
      type: 'CHANGE-POSITION',
      position: newPosition,
    })
  };

  const changeElevation = (newElevation) => {
    dispatch({
      type: 'CHANGE-ELEVATION',
      elevation: newElevation,
    })
  };


  return (
    <PositionContext.Provider
      value={{
        state,
        actions:{
          changePosition,
          changeElevation,
        },
      }}
    >
      {children}
    </PositionContext.Provider>
  )
};

